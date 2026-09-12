// Central data access + routing helpers (clean URLs).
import type { PageData, BlogPost } from "./types";
import { PRODUCT_PAGES } from "./product-pages";
import { PLATFORM_PAGES } from "./platform-pages";
import { INTEGRATION_PAGES } from "./integration-pages";
import { SETUP_PAGE } from "./setup-page";
import { BLOG_POSTS } from "./blog-posts";

export { PRODUCT_PAGES, PLATFORM_PAGES, INTEGRATION_PAGES, SETUP_PAGE, BLOG_POSTS };
export { AUTHORS } from "./blog-posts";

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
