// CHRM — site-wide constants. One place to change the offer, the price and the CTAs.

export const SITE_URL = "https://www.chrm.app";

// Where "Book a 20-min call" goes. Set to a Cal.com / HubSpot Meetings / Calendly link.
// Until then it scrolls to the lead form at the bottom of every page.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "#demo";

// Optional form endpoint (Formspree, Basin, a HubSpot form API, or your own route).
// When unset, the lead form falls back to a pre-filled mailto: so nothing is ever lost.
export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@chrm.app";

// Pricing is deliberately not published on the site; it is shared on the intro call.
export const FREE_DAYS = 30;
export const FREE_TRIAL_SEATS = 5;

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
export const PROMISE = "Every closer gets a second AE.";
export const DESCRIPTION =
  "CHRM is a second AE for every closer. It sits silently on every call, then does the work after it: updates HubSpot or Pipedrive, sends the follow-up, works the buying committee on LinkedIn, enriches every contact, and flags the deals that are slipping. Works with the CRM you already have. Live in a day.";
