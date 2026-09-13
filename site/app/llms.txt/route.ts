// /llms.txt — a plain-text map of the site for systems that read one. Not a Google Search signal
// (Google has said so); some non-Google agents and crawlers use it. Costs nothing to keep accurate.
import { SITE_URL, BRAND, META_DESCRIPTION, BETA } from "@/lib/site";
import { PRODUCT_PAGES, PLATFORM_PAGES, INTEGRATION_PAGES, BLOG_POSTS, hrefForPage, hrefForBlog, plainText } from "@/lib/data";
import { COMPARE_PAGES } from "@/lib/compare-pages";

export const dynamic = "force-static";

export function GET() {
  const u = (p: string) => SITE_URL + p;
  const line = (name: string, href: string, desc: string) => `- [${name}](${u(href)}): ${plainText(desc)}`;
  const body = [
    `# ${BRAND}`,
    "",
    `> ${META_DESCRIPTION}`,
    "",
    `${BRAND} (formerly CHRM) is not a CRM and not a notetaker. It is the AI account executive that does the after-call work inside the HubSpot or Pipedrive a sales team already runs: updates the CRM fields with source-line citations, writes and sends the follow-up from the rep's address, maps the buying committee, runs LinkedIn warm-up, enriches contacts via Apollo, flags deal risk, and proposes process changes from win/loss analysis. It never speaks on a call and never negotiates. ${BETA.line}`,
    "",
    "## Start here",
    line("Homepage", "/", META_DESCRIPTION),
    line("Free public beta", "/beta", "What you get, what you bring (any LLM API key), why bring-your-own-key, and how the 20-minute configuration call works."),
    line("Setup", "/setup", "Four OAuth sign-ins and one 30-minute call; live by the next morning."),
    line("For startups", "/startups", "Seed and Series A teams: founder-led sales and the first-AE handoff on HubSpot or Pipedrive."),
    line("FAQ", "/faq", "Every question we get, answered."),
    line("Cost calculator", "/calculator", "What the after-call work costs a team in hours, and what the alternatives cost in dollars."),
    "",
    "## Product",
    ...[...PRODUCT_PAGES, ...PLATFORM_PAGES].map((p) => line(p.category, hrefForPage(p.slug), p.sub)),
    "",
    "## Integrations",
    ...INTEGRATION_PAGES.map((p) => line(p.category, hrefForPage(p.slug), p.sub)),
    "",
    "## Comparisons",
    ...COMPARE_PAGES.map((p) => line(p.title, "/compare/" + p.slug, p.sub)),
    "",
    "## Writing",
    ...BLOG_POSTS.map((p) => line(plainText(p.title), hrefForBlog(p.slug), p.deck)),
    "",
    "## Optional",
    line("About", "/about", "The design philosophy: humans build trust and provide direction; the machine does the execution."),
    line("Privacy", "/privacy", "Privacy policy."),
    line("Terms", "/terms", "Terms of service."),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
