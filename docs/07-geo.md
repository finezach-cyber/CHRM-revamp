# 07 · Generative engine optimization: the audit, the fixes, the measurements

_September 2026. The audit ("2nd Closer GEO Audit") scored the pre-launch site 54/100 against five weighted criteria: citability 25, structure 20, authority 20, technical 20, multi-modal 15. This document records what changed in `site/` for each finding, what the same crawl measures now, and what can only be done off the website._

## What changed, finding by finding

| Audit finding | What the site does now |
|---|---|
| Interior pages had no headings of their own; section labels were `<p>` | `Subpage`, `CompareDetail`, `BlogPost` and `BlogIndex` emit real `<h2>` sections. Every product, integration, platform, setup and compare page opens with a question-form `<h2>` and a self-contained answer (134–167 words, first sentence "2nd Closer …", at least one number). The existing section headings were rewritten as questions (66 of them, in `lib/page-extras.ts`). The shared CTA heading is a paragraph, so page content outranks chrome. |
| Pages too thin to cite (median 385 words, 40 of 49 under 700) | Each product, integration and platform page gained the answer block, one more question section with two paragraphs, a closing paragraph on what the feature is not, and a "what to settle on the configuration call" paragraph (`lib/page-depth.ts`). HubSpot and Pipedrive pages carry a field-map table. Compare pages gained a "when is X the better choice" section. Index pages gained a 150-word intro. Median is now 730 words of `<main>` text; seven pages sit at 637–698 with their page-specific FAQ (about 150 words) rendering just outside `<main>`. |
| Nothing dated in machine-readable form | Every post renders `<time datetime>` for its publish date and a visible "Updated" date when it differs; every post carries `updated: 2026-09-12` because the rename revised its copy. `BlogPosting` carries `datePublished` and `dateModified`; every subpage carries a `WebPage` node with `dateModified`. Sitemap `lastmod` is the revision date, never the build clock (0 of 53 URLs equal to today). |
| Two question-form headings across the site | 21 questions on the homepage FAQ, 4–7 question headings on every product, integration, compare and setup page (measured), one on every index page. Posts keep their essay headings; their questions live in the page FAQ. |
| Claims unsourced on the page | `components/Sources.tsx` renders a sources line wherever a number appears: the proof strip, the alternatives table, the startups page, the calculator, product and integration pages that state a number, and posts that cite research. Primary sources where they exist (HubSpot and Pipedrive developer docs, Apollo docs, LinkedIn help, Attio pricing). |
| Schema stopped at the company level; FAQPage repeated 49× | `lib/jsonld.ts` builds one `Organization` with an `@id` that everything references; `WebSite`; `SoftwareApplication`; `WebPage` with `primaryImageOfPage` on every subpage; `BreadcrumbList` from a real `<nav><ol>` on every subpage; `BlogPosting` with a `Person` author on every post; `HowTo` on `/setup`; `ItemList` on `/product`, `/compare` and `/blog`. `FAQPage` is page-specific: each page emits only its own questions (43 pages), and the 21-question FAQ renders only on `/` and the new `/faq`. |
| `og:image` 404 on every page | `public/assets/og-cover.png` (1200×630), one OG image per compare page under `public/assets/og/`, one cover per post under `public/assets/covers/` used as both the on-page cover and the OG image. Generated from the brand fonts with the OG build script in the session scratchpad (Playwright). Posts also set `publishedTime`, `modifiedTime` and `authors` in Open Graph. |
| Hero feed rows `aria-hidden` in the server HTML | `AfterTheCall` renders all eight rows in the HTML; the reveal animation runs only on the client when motion is allowed. No `aria-hidden`, no looping live region. |
| Comparison cells extract as glyphs; no `<caption>` | Every cell carries a visually hidden "Yes." / "No." / "Partial." / "Caveat." before the glyph, a space before the note, and every table has a `<caption>` (compare pages, the homepage matrix, the alternatives table, the calculator). |
| Six titles over 60 characters; 324-character home description; `/features` and `/product` shared an H1 | Every title is 60 characters or fewer (measured across 53 URLs); every description is 160 or fewer, with `clampDescription` cutting at sentence boundaries; `/product` is now "Every feature, by stage." |
| Blog covers were placeholders; no diagram, no calculator, no video | Real covers on every post. An inline-SVG architecture diagram with real `<text>` on `/` and `/compare` answering "Is 2nd Closer a CRM?". A calculator at `/calculator` (hours of after-call work, and the first-year cost of each alternative from `ANCHORS`; 2nd Closer's own price stays unpublished). Video is off-site work, below. |
| `llms.txt`, robots `Host:` line | `/llms.txt` lists every page with a one-line description. The non-standard `Host:` directive is gone. Every crawler stays allowed; blocking training-only crawlers is a licensing decision recorded below, not made here. |
| `sameAs` had two links, one on the old slug | Unchanged on purpose: only profiles that exist are listed. The LinkedIn company page still lives at the `chrm-app` slug; rename it, then add it and any new profiles to `organization()` in `lib/jsonld.ts`. |

## Measured on the local production build (`tools/geo-check.mjs`, 53 sitemap URLs)

| Signal | Before (audit) | After |
|---|---|---|
| Median words of unique `<main>` text | 385 | 730 |
| Interior pages under 700 words | 40 of 49 | 7 of 53 (637–698, each with a 150-word page FAQ just outside `<main>`) |
| Pages with an `<h2>` of their own | 1 (home) | every page except `/privacy`, `/terms` and `/faq` (whose questions are the FAQ block) |
| Question-form headings | 2 site-wide | 4–7 per product, integration, compare and setup page; 1 per index page; 21 on `/` and `/faq` |
| `<time datetime>` | 0 | every post, publish and update dates |
| `FAQPage` | identical 21 questions on 49 pages | page-specific on 43 pages, global on 2 |
| Schema types beyond Organization/WebSite/SoftwareApplication | FAQPage only | WebPage, BreadcrumbList, BlogPosting + Person, HowTo, ItemList, ImageObject |
| Titles over 60 chars / descriptions over 160 | 6 / 1 (324) | 0 / 0 |
| `og:image` | 404 | 200, per-page images for posts and compare pages |
| Sitemap `lastmod` equal to the build date | 40 of 49 | 0 of 53 |
| "placeholder" in rendered text | 9 posts | 0 |
| Internal links | | 55 checked, 0 broken; no horizontal scroll at 400px on 11 sampled pages |

The audit's five platform scores were judgments, not measurements, and this document does not re-score them. What can be said: every tier 1 and tier 2 item is done, and the tier 3 items that can be built inside a repository (calculator, diagram, covers, llms.txt) are done. The score now depends on what happens off the site.

## Off the website (in the order the audit gave)

1. **Entity graph.** Rename the LinkedIn company slug from `chrm-app`; then add the company page, the founder page, and any X, YouTube, GitHub, Crunchbase, G2 or Product Hunt profiles that exist to `sameAs` in `site/lib/jsonld.ts`. Two edges is too few for an entity resolver to connect the old name to the new one.
2. **Presence where ChatGPT and Perplexity look.** Listings on G2, Capterra and the HubSpot App Marketplace; honest participation in r/sales, r/hubspot and r/SaaS; a YouTube channel with the two-minute "five minutes after a call" recording (the hero feed, but real). Mentions correlate with AI visibility roughly three times more strongly than backlinks.
3. **Real stories.** The four stories on the site stay labelled illustrative until beta customers can be named. Do not add `Review` schema before there are reviews.
4. **Original data.** From beta pipelines: required-field completion before and after, minutes from call end to follow-up sent, which MEDDPICC fields are empty most often, how often a committee gains a stakeholder mid-cycle. One short annual benchmark with a methodology note is the asset other pages cite.
5. **Refresh cadence.** Quarterly: revise at least one thing on each post and bump `updated` in `lib/blog-extras.ts`; bump `SITE_UPDATED` in `lib/dates.ts` when a site-wide copy change ships. Content under three months old is cited roughly three times as often; six months stale drops out.
6. **Measurement once live.** Log crawler hits by user agent (GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended); separate AI referrals in analytics; spot-check monthly what ChatGPT, Perplexity and AI Mode say when asked "what is 2nd Closer" and "AI account executive for HubSpot".
7. **Training crawlers (open decision).** `robots.txt` allows everything. GPTBot, ClaudeBot, Google-Extended and CCBot govern model training, not search citability; blocking them changes licensing exposure, not visibility. Decide on purpose, then edit `site/app/robots.ts`.

## Where the content lives
- `site/lib/page-extras.ts`: heading rewrites, answer blocks, page FAQs, sources and the extra section for every product, integration, platform and setup page.
- `site/lib/page-depth.ts`: the closing paragraphs per page and per compare page.
- `site/lib/compare-extras.ts`, `site/lib/blog-extras.ts`: answers and dates for compare pages; dates, FAQs and sources for posts.
- `site/lib/data.ts` merges all of it; the original page entries are untouched.
- `site/lib/jsonld.ts` and `site/components/JsonLd.tsx`: every schema builder.
- `tools/geo-check.mjs`: the crawl that produced the table above; run it against any build with `node tools/geo-check.mjs http://localhost:3000` (needs playwright-core and the Chromium in this environment).
