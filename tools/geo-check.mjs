// Crawls the sitemap of the local build and measures the GEO signals the audit scored.
import { chromium } from "playwright-core";

const base = process.argv[2] || "http://localhost:3000";
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const page = await browser.newPage();

const sm = await (await fetch(base + "/sitemap.xml")).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/https?:\/\/[^/]+/, base));
const lastmods = [...sm.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
const today = new Date().toISOString().slice(0, 10);
const buildClock = lastmods.filter((d) => d.startsWith(today)).length;

const rows = [];
for (const url of urls) {
  const r = await page.goto(url, { waitUntil: "domcontentloaded" });
  const data = await page.evaluate(() => {
    const main = document.querySelector("main");
    const words = (main?.innerText || "").split(/\s+/).filter(Boolean).length;
    const hs = [...(main?.querySelectorAll("h2") || [])].map((h) => h.textContent.trim());
    const qs = hs.filter((h) => /\?$/.test(h)).length;
    const times = document.querySelectorAll("time[datetime]").length;
    const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap((s) => {
      try { const j = JSON.parse(s.textContent); return (Array.isArray(j) ? j : [j]).map((o) => o["@type"]); } catch { return ["INVALID"]; }
    });
    const title = document.title;
    const desc = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
    const og = document.querySelector('meta[property="og:image"]')?.getAttribute("content") || "";
    const placeholder = /placeholder/i.test(document.body.innerText);
    const caption = document.querySelectorAll("table caption").length;
    return { words, h2: hs.length, qs, times, ld, title, desc, og, placeholder, caption };
  });
  rows.push({ path: url.replace(base, "") || "/", status: r?.status(), ...data });
}
await browser.close();

// og image check
const ogOk = (await fetch(base + "/assets/og-cover.png")).status;

const pad = (s, n) => String(s).padEnd(n);
console.log(pad("path", 42), pad("words", 6), pad("h2", 4), pad("q?", 4), pad("time", 5), pad("title", 6), pad("desc", 5), pad("FAQ", 4), pad("types", 40));
for (const r of rows) {
  const faq = r.ld.includes("FAQPage") ? "yes" : "";
  const types = r.ld.filter((t) => t !== "FAQPage" && t !== "Organization" && t !== "WebSite" && t !== "SoftwareApplication").join(",");
  console.log(pad(r.path, 42), pad(r.words, 6), pad(r.h2, 4), pad(r.qs, 4), pad(r.times, 5), pad(r.title.length, 6), pad(r.desc.length, 5), pad(faq, 4), pad(types, 40));
}
const interior = rows.filter((r) => /^\/(product|integrations|compare)\/|^\/setup$/.test(r.path));
const thin = interior.filter((r) => r.words < 700);
const noQ = rows.filter((r) => r.qs === 0 && !/^\/(privacy|terms)$/.test(r.path));
const longTitle = rows.filter((r) => r.title.length > 60);
const longDesc = rows.filter((r) => r.desc.length > 160);
const noTime = rows.filter((r) => r.path.startsWith("/blog/") && r.times === 0);
const invalid = rows.filter((r) => r.ld.includes("INVALID"));
const ph = rows.filter((r) => r.placeholder);
const faqPages = rows.filter((r) => r.ld.includes("FAQPage")).length;
console.log("\nsummary");
console.log("  urls:", rows.length, "| non-200:", rows.filter((r) => r.status !== 200).map((r) => r.path));
console.log("  interior pages under 700 words:", thin.map((r) => `${r.path} (${r.words})`));
console.log("  pages with no question heading:", noQ.map((r) => r.path));
console.log("  titles > 60:", longTitle.map((r) => `${r.path} (${r.title.length})`));
console.log("  descriptions > 160:", longDesc.map((r) => `${r.path} (${r.desc.length})`));
console.log("  posts without <time>:", noTime.map((r) => r.path));
console.log("  invalid JSON-LD:", invalid.map((r) => r.path));
console.log("  'placeholder' in text:", ph.map((r) => r.path));
console.log("  FAQPage on", faqPages, "of", rows.length, "pages; median words", rows.map((r) => r.words).sort((a, b) => a - b)[Math.floor(rows.length / 2)]);
console.log("  og-cover.png:", ogOk, "| sitemap lastmod equal to today:", buildClock, "of", lastmods.length);
