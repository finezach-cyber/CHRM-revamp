// Shared content data types for the CHRM marketing site.

export type ProseItem = string | { h: string } | { html: string };
export type MetaPair = [string, string];
export type Bullet = [string, string];
export type Section = "product" | "platform" | "integrations";

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
