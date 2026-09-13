// Central data access + routing helpers (clean URLs).
import type { PageData, BlogPost, ProseItem } from "./types";
import { PRODUCT_PAGES as RAW_PRODUCT } from "./product-pages";
import { PLATFORM_PAGES as RAW_PLATFORM } from "./platform-pages";
import { INTEGRATION_PAGES as RAW_INTEGRATIONS } from "./integration-pages";
import { SETUP_PAGE as RAW_SETUP } from "./setup-page";
import { BLOG_POSTS as RAW_POSTS } from "./blog-posts";
import { PAGE_EXTRAS, HEADING_REWRITES } from "./page-extras";
import { BLOG_EXTRAS } from "./blog-extras";
import { PAGE_DEPTH, PAGE_DEPTH_2 } from "./page-depth";
import { SITE_UPDATED } from "./dates";

export { AUTHORS } from "./blog-posts";

// The GEO layer (question headings, answer block, page FAQ, sources, depth) is merged here so the
// original page entries stay readable and the extras live in one file.
function withExtras(page: PageData): PageData {
  const extra = PAGE_EXTRAS[page.slug];
  const prose: ProseItem[] = (page.prose || []).map((item) =>
    typeof item === "object" && item && "h" in item && HEADING_REWRITES[item.h] ? { h: HEADING_REWRITES[item.h] } : item,
  );
  return {
    ...page,
    prose: [...prose, ...(extra?.more || []), ...(PAGE_DEPTH[page.slug] ? [PAGE_DEPTH[page.slug]] : []), ...(PAGE_DEPTH_2[page.slug] ? [PAGE_DEPTH_2[page.slug]] : [])],
    answer: extra?.answer,
    faqs: extra?.faqs,
    sources: extra?.sources,
    updated: page.updated || SITE_UPDATED,
  };
}

function withBlogExtras(post: BlogPost): BlogPost {
  const extra = BLOG_EXTRAS[post.slug];
  return {
    ...post,
    updated: post.updated || extra?.updated,
    cover: post.cover || `/assets/covers/${post.slug}.png`,
    faqs: post.faqs || extra?.faqs,
    sources: post.sources || extra?.sources,
  };
}

export const PRODUCT_PAGES: PageData[] = RAW_PRODUCT.map(withExtras);
export const PLATFORM_PAGES: PageData[] = RAW_PLATFORM.map(withExtras);
export const INTEGRATION_PAGES: PageData[] = RAW_INTEGRATIONS.map(withExtras);
export const SETUP_PAGE: PageData = withExtras(RAW_SETUP);
export const BLOG_POSTS: BlogPost[] = RAW_POSTS.map(withBlogExtras);

// Flat lookup of every feature/integration/platform/setup page by slug.
const ALL_PAGES: PageData[] = [
  ...PRODUCT_PAGES,
  ...PLATFORM_PAGES,
  ...INTEGRATION_PAGES,
  SETUP_PAGE,
];

const PAGE_BY_SLUG: Record<string, PageData> = {};
ALL_PAGES.forEach((p) => {
  PAGE_BY_SLUG[p.slug] = p;
});

export function getPage(slug: string): PageData | undefined {
  return PAGE_BY_SLUG[slug];
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// Slugs that live under /product/[slug] (features + platform pages, excluding setup).
export function productRouteSlugs(): string[] {
  return [
    ...PRODUCT_PAGES.map((p) => p.slug),
    ...PLATFORM_PAGES.filter((p) => p.slug !== "setup").map((p) => p.slug),
  ];
}

export function integrationRouteSlugs(): string[] {
  return INTEGRATION_PAGES.map((p) => p.slug);
}

export function blogRouteSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

// Clean-URL href for a content page slug.
export function hrefForPage(slug: string): string {
  if (slug === "setup") return "/setup";
  const p = PAGE_BY_SLUG[slug];
  if (!p) return "/" + slug;
  if (p.section === "integrations") return "/integrations/" + slug;
  return "/product/" + slug;
}

export function hrefForBlog(slug: string): string {
  return "/blog/" + slug;
}

// Strip HTML tags and decode the handful of named entities used in the copy,
// for use in plain-text contexts like <title> / meta description.
const ENTITIES: Record<string, string> = {
  "&mdash;": "—",
  "&ndash;": "–",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&ldquo;": "“",
  "&rdquo;": "”",
  "&amp;": "&",
  "&middot;": "·",
  "&rarr;": "→",
  "&nbsp;": " ",
};
/** Meta descriptions: whole sentences up to 160 characters, never a mid-word cut. */
export function clampDescription(text: string, max = 158): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const sentences = t.match(/[^.!?]+[.!?]+/g) || [t];
  let out = "";
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out = (out + s).trim() + " ";
  }
  out = out.trim();
  if (out.length >= 60) return out;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

export function plainText(html: string): string {
  let out = html.replace(/<[^>]*>/g, "");
  for (const [k, v] of Object.entries(ENTITIES)) out = out.split(k).join(v);
  return out.trim();
}

// Map a legacy "*.html[#hash]" path to its clean-URL equivalent.
export function toHref(html: string): string {
  if (!html) return "#";
  if (html.startsWith("#") || html.startsWith("http") || html.startsWith("mailto:")) {
    return html;
  }
  const [path, hash] = html.split("#");
  const frag = hash ? "#" + hash : "";
  let route: string;
  if (path === "index.html" || path === "" || path === "/") route = "/";
  else if (path === "product.html") route = "/product";
  else if (path === "features.html") route = "/features";
  else if (path === "setup.html") route = "/setup";
  else if (path === "about.html") route = "/about";
  else if (path === "compare.html") route = "/compare";
  else if (path === "blog.html") route = "/blog";
  else if (path === "integrations.html") route = "/integrations";
  else if (path.startsWith("blog-")) route = "/blog/" + path.slice(5).replace(/\.html$/, "");
  else if (path.startsWith("integrations-")) route = "/integrations/" + path.slice(13).replace(/\.html$/, "");
  else if (path.startsWith("product-")) route = "/product/" + path.slice(8).replace(/\.html$/, "");
  else route = "/" + path.replace(/\.html$/, "");
  // Collapse "/#x" home anchors so Next links work.
  if (route === "/" && frag) return "/" + frag;
  return route + frag;
}
