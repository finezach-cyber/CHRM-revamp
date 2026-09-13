// Shared content data types for the 2nd Closer marketing site.

export type ProseItem = string | { h: string } | { html: string };
export type MetaPair = [string, string];
export type Bullet = [string, string];
export type Section = "product" | "platform" | "integrations";
export type QA = { q: string; a: string };
export type SourceLink = [string, string];
/** A question-form heading plus a self-contained 134–167 word passage that answers it. Rendered first, in the page's own words. */
export type Answer = { q: string; a: string };

export interface PageData {
  slug: string;
  section: Section;
  category: string;
  /** Optional search-intent <title>; falls back to category */
  seoTitle?: string;
  h: string;
  sub: string;
  meta?: MetaPair[];
  prose?: ProseItem[];
  bullets?: Bullet[];
  shotLabel?: string;
  shotHint?: string;
  related?: string[];
  answer?: Answer;
  faqs?: QA[];
  sources?: SourceLink[];
  /** ISO date of the last substantive revision */
  updated?: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  authorUrl?: string;
  title: string;
  /** Optional search-intent <title>; falls back to title */
  seoTitle?: string;
  deck: string;
  body: ProseItem[];
  related?: string[];
  /** ISO date of the last substantive revision, shown as "Updated" when it differs from date */
  updated?: string;
  /** 1200×630 cover, also used as the OG image */
  cover?: string;
  faqs?: QA[];
  sources?: SourceLink[];
}

export interface Author {
  name: string;
  role: string;
  url: string;
  avatar: string;
}

export interface Step {
  id: string;
  n: string;
  name: string;
  blurb: string;
}

export interface GroupedStep extends Step {
  pages: PageData[];
}
