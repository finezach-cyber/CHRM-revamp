import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { productRouteSlugs, integrationRouteSlugs, blogRouteSlugs, BLOG_POSTS } from "@/lib/data";
import { compareRouteSlugs } from "@/lib/compare-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (p: string) => SITE_URL + p;

  const top: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/pricing"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/features"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/product"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/integrations"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/compare"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/setup"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: url("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  const product = productRouteSlugs().map((s) => ({
    url: url("/product/" + s), lastModified: now, changeFrequency: "monthly" as const, priority: 0.6,
  }));
  const integrations = integrationRouteSlugs().map((s) => ({
    url: url("/integrations/" + s), lastModified: now, changeFrequency: "monthly" as const,
    priority: s === "hubspot" || s === "pipedrive" ? 0.9 : 0.6,
  }));
  const compare = compareRouteSlugs().map((s) => ({
    url: url("/compare/" + s), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
  }));
  const blog = blogRouteSlugs().map((s) => {
    const post = BLOG_POSTS.find((p) => p.slug === s);
    return {
      url: url("/blog/" + s),
      lastModified: post?.date ? new Date(post.date) : now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    };
  });

  return [...top, ...product, ...integrations, ...compare, ...blog];
}
