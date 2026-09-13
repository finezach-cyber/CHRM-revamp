import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SITE_UPDATED } from "@/lib/dates";
import { productRouteSlugs, integrationRouteSlugs, blogRouteSlugs, BLOG_POSTS, getPage } from "@/lib/data";
import { compareRouteSlugs, getComparePage } from "@/lib/compare-pages";

export const dynamic = "force-static";

// lastModified is the date the copy last changed, never the build clock: every page was revised in the
// September 2026 rename, so that date is the floor; pages and posts carry their own `updated` when later.
const d = (iso?: string) => new Date((iso && iso > SITE_UPDATED ? iso : SITE_UPDATED) + "T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (p: string) => SITE_URL + p;

  const top: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: d(), changeFrequency: "weekly", priority: 1 },
    { url: url("/beta"), lastModified: d(), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/startups"), lastModified: d(), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/features"), lastModified: d(), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/product"), lastModified: d(), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/integrations"), lastModified: d(), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/compare"), lastModified: d(), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/calculator"), lastModified: d(), changeFrequency: "yearly", priority: 0.7 },
    { url: url("/setup"), lastModified: d(), changeFrequency: "monthly", priority: 0.6 },
    { url: url("/faq"), lastModified: d(), changeFrequency: "monthly", priority: 0.6 },
    { url: url("/about"), lastModified: d(), changeFrequency: "yearly", priority: 0.4 },
    { url: url("/blog"), lastModified: d(), changeFrequency: "weekly", priority: 0.6 },
    { url: url("/privacy"), lastModified: d(), changeFrequency: "yearly", priority: 0.2 },
    { url: url("/terms"), lastModified: d(), changeFrequency: "yearly", priority: 0.2 },
  ];

  const product = productRouteSlugs().map((s) => ({
    url: url("/product/" + s), lastModified: d(getPage(s)?.updated), changeFrequency: "monthly" as const, priority: 0.6,
  }));
  const integrations = integrationRouteSlugs().map((s) => ({
    url: url("/integrations/" + s), lastModified: d(getPage(s)?.updated), changeFrequency: "monthly" as const,
    priority: s === "hubspot" || s === "pipedrive" ? 0.9 : 0.6,
  }));
  const compare = compareRouteSlugs().map((s) => ({
    url: url("/compare/" + s), lastModified: d(getComparePage(s)?.updated), changeFrequency: "monthly" as const, priority: 0.8,
  }));
  const blog = blogRouteSlugs().map((s) => {
    const post = BLOG_POSTS.find((p) => p.slug === s);
    return {
      url: url("/blog/" + s),
      lastModified: new Date((post?.updated || post?.date || SITE_UPDATED) + "T00:00:00Z"),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    };
  });

  return [...top, ...product, ...integrations, ...compare, ...blog];
}
