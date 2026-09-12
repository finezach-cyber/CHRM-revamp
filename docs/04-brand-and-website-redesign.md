# 4. Brand and website redesign, optimised for demo bookings

## 4.1 What changed and why

The live site (finezach-cyber/chrm-website) already had the right bones: an editorial voice, a complete product surface, a four-step framework and an honest compare matrix. What it lacked was a promise a VP Sales could repeat, a visual that showed the whole job, an anchor for what the alternatives cost, and a working path for someone not ready to book. The redesign keeps the stack (Next.js 16, the fonts, the screenshots, every existing page) and changes the argument.

| Leak on the old site | Fix in the redesign | Where |
|---|---|---|
| H1 was the brand line ("Stay human. Let AI do the rest.") | H1 is the promise: **Every closer gets a second AE.** Brand line moves to sign-off, About and footer. | `components/Hero.tsx` |
| Blurb led with field-filling, inviting the "notetaker" misread | Blurb lists the after-call job in one breath and states "not a CRM, works on the one you have" | Hero, `WhoDoesWhat.tsx`, FAQ #1 |
| No visual of the breadth | **The five minutes after the call**: an animated execution feed (fields written, contact enriched, follow-up sent, LinkedIn queued, risk flagged, competitor handled, stage proposed) | `components/AfterTheCall.tsx` |
| Price hidden in FAQ | **Decision (12 Sep): pricing is not published on the site.** No `/pricing` page, no dollar figures anywhere, no Offer in structured data. The FAQ says pricing is per AE seat, shared on the 20-minute call, with manager/RevOps/leadership seats free and the first 30 days free for up to five AE seats. The alternatives table still anchors against what a GTM engineer, a partner retainer and an AI-native CRM cost, so the buyer understands the shape of the price before the call. | `lib/faqs.ts`, `Alternatives.tsx`, `lib/compare-pages.ts` |
| Compare page argued by category ("notetaker-plus") | Eight search-intent comparison pages, each with "this page is for you if", a capability table, an honest verdict and FAQs. AI-native CRMs handled as an audience page ("Want what Attio promises, without switching CRMs?"), never "CHRM vs Attio" | `lib/compare-pages.ts`, `/compare/[slug]` |
| Dead CTAs (`#`) for booking and the free audit | Working lead form (posts to a configurable endpoint, falls back to a pre-filled email) plus optional calendar link | `LeadForm.tsx`, `lib/site.ts` |
| Oxblood accent unrelated to the blue product UI | CHRM blue (#2B4BE8) as the single accent, matching the app; green and amber reserved for "done" and "risk" | `styles/colors_and_type.css`, `brand/` |
| Wordmark monochrome | The H is the only coloured letter: CRM with the human put back in | `brand/logo-*.svg` |
| No sitemap, no FAQ schema | `app/sitemap.ts`, `app/robots.ts`, FAQPage JSON-LD on every page, SoftwareApplication schema (no Offer, since pricing is withheld) | `app/`, `PageShell.tsx` |

## 4.2 Homepage argument, top to bottom

1. **Hero**: promise, one-breath job description, "Book a 20-min call" + "See how it works", fine print "no migration, no engineer, first 30 days free". Right column: the live after-the-call feed.
2. **Proof strip**: 31% → ~100%, < 5 min, 92–97%, < 1 day, 0 workflow nodes.
3. **Your closer talks. CHRM does the rest.** Two columns: what the human keeps (run the call, build trust, handle the live objection, negotiate, decide) vs the eleven jobs CHRM takes, each linking to its product page.
4. **Four steps. One system.** Existing Capture/Structure/Activate/Iterate teaser.
5. **Three ways teams try to fix this.** AI-native CRM vs GTM engineer vs partner implementation vs CHRM on time, cost, maintenance, what happens after the call, and what happens to your CRM. Links to the comparison pages.
6. **Connect four things. You're done.** Existing setup section.
7. **A day on CHRM, by role.** Existing stories, still labelled illustrative.
8. **What CHRM is, and isn't.** Existing category matrix.
9. **FAQ** (14, starting with "Is CHRM a CRM?"), then **the lead form**.

## 4.3 Conversion mechanics

- **Primary CTA everywhere**: Book a 20-min call. Points at `NEXT_PUBLIC_BOOKING_URL` when set (Cal.com, HubSpot Meetings, Calendly), otherwise scrolls to the form.
- **Secondary CTA**: See how it works (`/features`). With pricing withheld, the mid-funnel offer is the after-the-call feed, the alternatives table and the setup page; the FAQ answers "how much" with the per-AE model and the free 30 days so the question doesn't block the booking.
- **Tertiary paths**: comparison pages (for people who arrived with a competitor in mind), How it works, Setup.
- **Lead form** asks only what qualifies the call: name, work email, CRM, number of AEs, optional notes. Honeypot field; success state; error state falls back to email.
- **Objection handling on the page**: "Is CHRM a CRM?", "Do I need an engineer?", "Does it send emails without a human looking?", "SOC 2?" are answered before the form.

## 4.4 Configuration

Set these in the deployment environment (Vercel project settings):

```
NEXT_PUBLIC_BOOKING_URL=https://cal.com/…        # optional; enables direct calendar CTAs
NEXT_PUBLIC_FORM_ENDPOINT=https://…               # optional; Formspree/Basin/own route. Falls back to mailto.
NEXT_PUBLIC_CONTACT_EMAIL=hello@chrm.app          # shown in footer, used by the mailto fallback
```

Free-trial terms and the alternatives' cost anchors live in `site/lib/site.ts`. There is deliberately no price constant.

## 4.5 Before launch

- Replace `/assets/og-cover.png` with a 1200×630 export of the new hero (the file is referenced but was not in the source repo).
- Add real logos and one real quote above the stories as soon as a customer agrees; the illustrative label then moves to the stories only.
- List on the HubSpot App Marketplace and Pipedrive Marketplace; add the badges to the hero connectors row.
- Publish the full privacy policy and terms; the placeholder pages state current practice and are `noindex`.
- Wire analytics (Plausible or GA4) with events on: form submit, booking click, FAQ pricing-question open, compare-page CTA click.

## 4.6 Measurement

| Metric | Baseline to capture | Target after 60 days |
|---|---|---|
| Homepage → form submit or booking click | unknown (no analytics on old site) | 3–5% of organic visitors |
| FAQ "How much does CHRM cost?" opens → booking | n/a | track; if it is the last thing opened before abandonment, revisit publishing a price |
| /compare/* → booking | n/a | 5–8% |
| Organic landing sessions on compare + pillar pages | ~0 | 40% of organic sessions |
| Demo-to-configured-trial | founder's current rate | +20% (form pre-qualifies CRM and team size) |
