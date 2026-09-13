import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// Every crawler is allowed, search and training alike. Blocking training-only crawlers (GPTBot, ClaudeBot,
// Google-Extended, CCBot) is a licensing decision, not a visibility one; see docs/07-geo.md before changing this.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: SITE_URL + "/sitemap.xml",
  };
}
