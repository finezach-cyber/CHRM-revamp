// 2nd Closer — Four-step taxonomy for product pages.
// Each product slug maps to one step: Capture / Structure / Activate / Iterate.
import type { Step, GroupedStep } from "./types";
import { PRODUCT_PAGES } from "./product-pages";

export const STEPS: Step[] = [
  { id: "capture", n: "01", name: "Capture", blurb: "Conversation in. Every channel. Automatically." },
  { id: "structure", n: "02", name: "Structure", blurb: "Calls become structured deal data. Your fields. Your rules." },
  { id: "activate", n: "03", name: "Activate", blurb: "The next action happens. Follow-ups, risks, outreach." },
  { id: "iterate", n: "04", name: "Iterate", blurb: "2nd Closer learns. Your playbook gets sharper." },
];

// Slug → step id
export const SLUG_STEP: Record<string, string> = {
  "conversation-capture": "capture",
  "engagement-summaries": "structure",
  "crm-hygiene": "structure",
  "stakeholder-mapping": "structure",
  "industry-classification": "structure",
  "product-recommendations": "structure",
  "risk-detection": "activate",
  "follow-up-emails": "activate",
  "email-sequences": "activate",
  "linkedin-outreach": "activate",
  "competitor-intelligence": "activate",
  "process-iteration": "iterate",
};

// Deliberate render order within each step.
export const STEP_ORDER: string[] = [
  "conversation-capture",
  "engagement-summaries",
  "crm-hygiene",
  "stakeholder-mapping",
  "industry-classification",
  "product-recommendations",
  "risk-detection",
  "follow-up-emails",
  "email-sequences",
  "linkedin-outreach",
  "competitor-intelligence",
  "process-iteration",
];

export function groupedProduct(): GroupedStep[] {
  const bySlug: Record<string, (typeof PRODUCT_PAGES)[number]> = {};
  PRODUCT_PAGES.forEach((p) => {
    bySlug[p.slug] = p;
  });
  return STEPS.map((step) => ({
    ...step,
    pages: STEP_ORDER.filter((slug) => SLUG_STEP[slug] === step.id)
      .map((slug) => bySlug[slug])
      .filter(Boolean),
  }));
}
