// 2nd Closer — site-wide constants. One place to change the offer, the price and the CTAs.

export const BRAND = "2nd Closer";
export const FORMER_BRAND = "CHRM";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.2ndcloser.ai";

// Where "Book a 20-min call" goes. Set to a Cal.com / HubSpot Meetings / Calendly link.
// Until then it scrolls to the lead form at the bottom of every page.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "#demo";

// Optional form endpoint (Formspree, Basin, a HubSpot form API, or your own route).
// When unset, the lead form falls back to a pre-filled mailto: so nothing is ever lost.
export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@2ndcloser.ai";

// Pricing is deliberately not published on the site; it is shared on the intro call.
// 2nd Closer is in a free public beta: bring your own LLM API key (any provider), configured with us on a 20-minute call.
export const BETA = {
  name: "Free public beta",
  short: "Free public beta · bring any LLM key",
  cta: "Join the free beta",
  ctaSub: "A 20-minute call, then live the next morning",
  line: "2nd Closer is free during the public beta. You bring an API key from any LLM provider; that usage is the only cost.",
};

// Cost anchors used in the alternatives section. Sources in docs/02.
export const ANCHORS = {
  secondAeOte: 120_000, // typical mid-market AE on-target earnings, USD
  gtmEngineerBase: 185_000, // midpoint of $132k–$241k (SyncGTM, DevCommX 2026)
  partnerRetainerMonth: 8_000, // midpoint of $3.5k–$15k/mo HubSpot partner retainers
  partnerMonths: 4, // 4–16 week implementations, plus ongoing
  aiNativeSeatMonth: 79, // Attio Pro after July 2026 increase
  aiNativeMigrationWeeks: 10,
};

export const TAGLINE = "Stay human. Let AI do the rest.";
export const CATEGORY_LINE = "The execution layer for CRM.";
export const PROMISE = "Silent on the call. Everything after it, done.";
/** ≤155 characters, for <meta name="description">, Open Graph and Twitter. DESCRIPTION below is the longer schema.org text. */
export const META_DESCRIPTION =
  "2nd Closer is an AI account executive for HubSpot and Pipedrive teams. Silent on the call, then it updates the CRM, sends the follow-up and flags risk.";
export const DESCRIPTION =
  "2nd Closer is an AI account executive for sales teams on HubSpot or Pipedrive. It sits silently on every call, then does the after-call work: updates the CRM, sends the follow-up, works the buying committee on LinkedIn, enriches every contact, and flags the deals that are slipping. No migration, no engineer. Live in a day.";
