// Structured-data builders. One Organization node (by @id) that everything else references.
import { SITE_URL, DESCRIPTION, TAGLINE, BRAND, FORMER_BRAND } from "./site";
import { AUTHORS } from "./blog-posts";
import type { BlogPost, QA } from "./types";
import { SITE_UPDATED } from "./dates";

export const ORG_ID = SITE_URL + "/#org";
export const WEBSITE_ID = SITE_URL + "/#website";

export type Crumb = { name: string; href: string };

export function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND,
    alternateName: FORMER_BRAND,
    url: SITE_URL + "/",
    logo: { "@type": "ImageObject", url: SITE_URL + "/assets/2nd-closer-lockup-day.svg" },
    slogan: TAGLINE,
    description: DESCRIPTION,
    founder: person(),
    sameAs: ["https://www.linkedin.com/company/chrm-app"],
  };
}

export function person() {
  const a = AUTHORS.zach;
  return {
    "@type": "Person",
    "@id": SITE_URL + "/#zach",
    name: a.name,
    jobTitle: a.role,
    url: a.url,
    image: SITE_URL + a.avatar,
    sameAs: [a.url],
    worksFor: { "@id": ORG_ID },
  };
}

export function website() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BRAND,
    url: SITE_URL + "/",
    description: "The execution layer for CRM. An AI account executive that does the after-call work on HubSpot or Pipedrive. Live in under a day.",
    publisher: { "@id": ORG_ID },
  };
}

export function softwareApplication() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL + "/",
    description: DESCRIPTION,
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumb(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: SITE_URL + c.href,
    })),
  };
}

export function webPage(opts: {
  path: string;
  name: string;
  description: string;
  dateModified?: string;
  image?: { url: string; caption?: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": SITE_URL + opts.path + "#webpage",
    url: SITE_URL + opts.path,
    name: opts.name,
    description: opts.description,
    dateModified: opts.dateModified || SITE_UPDATED,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
    ...(opts.image
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: SITE_URL + opts.image.url,
            caption: opts.image.caption,
          },
        }
      : {}),
  };
}

export function faqPage(faqs: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function blogPosting(post: BlogPost, opts: { path: string; headline: string; description: string; wordCount: number }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": SITE_URL + opts.path + "#article",
    mainEntityOfPage: SITE_URL + opts.path,
    headline: opts.headline,
    description: opts.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: person(),
    publisher: { "@id": ORG_ID },
    image: SITE_URL + (post.cover || "/assets/og-cover.png"),
    wordCount: opts.wordCount,
    articleSection: post.category,
    inLanguage: "en",
  };
}

export function howTo(opts: { name: string; description: string; totalTime?: string; steps: { name: string; text: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function itemList(name: string, items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: SITE_URL + it.href,
    })),
  };
}

/** Serialise for a <script type="application/ld+json"> without ever closing the tag early. */
export function serialize(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
