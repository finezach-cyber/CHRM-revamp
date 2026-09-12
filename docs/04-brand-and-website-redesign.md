# 4. Brand and website redesign, optimised for demo bookings

## 4.1 What changed and why

The live site (finezach-cyber/chrm-website) already had the right bones: an editorial voice, a complete product surface, a four-step framework and an honest compare matrix. What it lacked was a promise a VP Sales could repeat, a visual that showed the whole job, a visible price with an anchor, and a working path for someone not ready to book. The redesign keeps the stack (Next.js 16, the fonts, the screenshots, every existing page) and changes the argument.

| Leak on the old site | Fix in the redesign | Where |
|---|---|---|
| H1 was the brand line ("Stay human. Let AI do the rest.") | H1 is the promise: **Every closer gets a second AE.** Brand line moves to sign-off, About and footer. | `components/Hero.tsx` |
| Blurb led with field-filling, inviting the "notetaker" misread | Blurb lists the after-call job in one breath and states "not a CRM, works on the one you have" | Hero, `WhoDoesWhat.tsx`, FAQ #1 |
| No visual of the breadth | **The five minutes after the call**: an animated execution feed (fields written, contact enriched, follow-up sent, LinkedIn queued, risk flagged, competitor handled, stage proposed) | `components/AfterTheCall.tsx` |
| Price hidden in FAQ | Price in nav, hero fine print, proof strip, homepage pricing block, and a `/pricing` page with a calculator that anchors $1,000/AE against a second AE hire, a GTM engineer and a partner retainer | `Pricing.tsx`, `PricingTeaser.tsx`, `Nav.tsx` |
| Compare page argued by category ("notetaker-plus") | Eight search-intent comparison pages, each with "this page is for you if", a capability table, an honest verdict and FAQs. AI-native CRMs handled as an audience page ("Want what Attio promises, without switching CRMs?"), never "CHRM vs Attio" | `lib/compare-pages.ts`, `/compare/[slug]` |
| Dead CTAs (`#`) for booking and the free audit | Working lead form (posts to a configurable endpoint, falls back to a pre-filled email) plus optional calendar link | `LeadForm.tsx`, `lib/site.ts` |
| Oxblood accent unrelated to the blue product UI | CHRM blue (#2B4BE8) as the single accent, matching the app; green and amber reserved for "done" and "risk" | `styles/colors_and_type.css`, `brand/` |
| Wordmark monochrome | The H is the only coloured letter: CRM with the human put back in | `brand/logo-*.svg` |
| No sitemap, no FAQ schema | `app/sitemap.ts`, `app/robots.ts`, FAQPage JSON-LD on every page, SoftwareApplication offer with price | `app/`, `PageShell.tsx` |

## 4.2 Homepage argument, top to bottom

1. **Hero**: promise, one-breath job description, "Book a 20-min call" + "See pricing", fine print with price and "no migration, no engineer". Right column: the live after-the-call feed.
2. **Proof strip**: 31% → ~100%, < 5 min, 92–97%, < 1 day, $1,000/AE.
3. **Your closer talks. CHRM does the rest.** Two columns: what the human keeps (run the call, build trust, handle the live objection, negotiate, decide) vs the eleven jobs CHRM takes, each linking to its product page.
4. **Four steps. One system.** Existing Capture/Structure/Activate/Iterate teaser.
5. **Three ways teams try to fix this.** AI-native CRM vs GTM engineer vs partner implementation vs CHRM on time, cost, maintenance, what happens after the call, and what happens to your CRM. Links to the comparison pages.
6. **Connect four things. You're done.** Existing setup section.
7. **A day on CHRM, by role.** Existing stories, still labelled illustrative.
8. **$1,000 per AE per month. Everyone else is free.** With the three anchors.
9. **What CHRM is, and isn't.** Existing category matrix.
10. **FAQ** (14, starting with "Is CHRM a CRM?"), then **the lead form**.

## 4.3 Conversion mechanics

- **Primary CTA everywhere**: Book a 20-min call. Points at `NEXT_PUBLIC_BOOKING_URL` when set (Cal.com, HubSpot Meetings, Calendly), otherwise scrolls to the form.
- **Secondary CTA**: See pricing. Price transparency is the mid-funnel offer for this segment; the calculator lets a founder justify the number before talking to anyone.
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

Price, free-trial terms and cost anchors live in `site/lib/site.ts`.

## 4.5 Before launch

- Replace `/assets/og-cover.png` with a 1200×630 export of the new hero (the file is referenced but was not in the source repo).
- Add real logos and one real quote above the stories as soon as a customer agrees; the illustrative label then moves to the stories only.
- List on the HubSpot App Marketplace and Pipedrive Marketplace; add the badges to the hero connectors row.
- Publish the full privacy policy and terms; the placeholder pages state current practice and are `noindex`.
- Wire analytics (Plausible or GA4) with events on: form submit, booking click, pricing calculator interaction, compare-page CTA click.

## 4.6 Measurement

| Metric | Baseline to capture | Target after 60 days |
|---|---|---|
| Homepage → form submit or booking click | unknown (no analytics on old site) | 3–5% of organic visitors |
| /pricing → booking | n/a | 8–12% |
| /compare/* → booking | n/a | 5–8% |
| Organic landing sessions on compare + pricing pages | ~0 | 40% of organic sessions |
| Demo-to-configured-trial | founder's current rate | +20% (form pre-qualifies CRM and team size) |
