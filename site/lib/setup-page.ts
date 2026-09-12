import type { PageData } from "./types";

// CHRM marketing — Setup page
// "Live in a day" — four sign-ins onboarding walk-through.

export const SETUP_PAGE: PageData = {
  slug: 'setup',
  section: 'platform',
  category: 'Setup & onboarding',
  h: 'Live <em>in a day.</em>',
  sub: 'Four sign-ins. One 30-minute configuration call. Zero engineers. Zero workflow nodes. Zero quarter-long rollout plans.',
  meta: [
    ['Total time', '< 1 business day'],
    ['Sign-ins', '4 OAuth flows'],
    ['Workflow nodes', 'None'],
    ['Engineers needed', 'Zero'],
  ],
  prose: [
    'Every other category of sales tool asks you to build a workflow. Drag the trigger node. Connect it to the action node. Define the conditions. Test it. Document it. Maintain it as your process changes. Hire a GTM engineer to own it.',
    'CHRM doesn&rsquo;t. You sign into four things. We read your CRM schema and your calendar. The execution layer turns on. From OAuth click to first call processed is less than a business day.',
    { h: 'Step 01 — your CRM.' },
    'OAuth into HubSpot or Pipedrive. CHRM reads every pipeline, every stage, every custom field. You don&rsquo;t configure a schema; we read the one you already have. Fifteen minutes.',
    { h: 'Step 02 — your calendar.' },
    'Connect Google or Microsoft. CHRM&rsquo;s built-in notetaker now joins every booked call on your team&rsquo;s calendar. No third-party notetaker required. If you use Fireflies, Fathom, or Otter, we ingest their output too. Five minutes.',
    { h: 'Step 03 — LinkedIn.' },
    'Authenticate your LinkedIn for the team&rsquo;s outreach activity. Capture, warm-up sequences, and CRM mirroring all turn on. Default safety posture is on; nothing risky runs without your explicit approval. Five minutes.',
    { h: 'Step 04 — Apollo.' },
    'Connect your Apollo account. Every contact discovered in a conversation gets enriched automatically. Existing pipeline records are backfilled overnight. Five minutes.',
    { h: 'Then a 30-minute call.' },
    'That&rsquo;s the configuration session. With you, we walk through the field map: which CRM fields you want CHRM to populate, what a populated one looks like for your team, which fields to leave alone. You don&rsquo;t need to write a brief. You don&rsquo;t need an engineer. You don&rsquo;t need to teach us your process; we read it from your CRM.',
    { h: 'Day one is when work starts being done.' },
    'By the morning after the configuration call, every booked meeting is being captured, every CRM field is populating, every drafted follow-up is staged. The "implementation timeline" most enterprise software ships with is replaced by a calendar invite and a 9am the next day.',
  ],
  bullets: [
    ['Step 01 · Your CRM', 'OAuth into HubSpot or Pipedrive. 15 minutes. Schema discovered automatically.'],
    ['Step 02 · Your calendar', 'Google or Microsoft. CHRM\u2019s notetaker joins every booked call. 5 minutes.'],
    ['Step 03 · LinkedIn', 'Authenticated. Capture + outreach + CRM mirror on. Safety defaults on. 5 minutes.'],
    ['Step 04 · Apollo', 'Connected. Enrichment + ICP scoring active. 5 minutes.'],
    ['Configuration call · 30 minutes', 'We walk through field mapping with you. No brief required.'],
    ['Day one', 'Every booked call captured. Every CRM field populating. Every follow-up staged.'],
  ],
  shotLabel: 'Onboarding · 4 of 4 connected',
  shotHint: 'Four OAuth sign-ins. Zero workflow design. CHRM is now running.',
  related: ['hubspot', 'pipedrive', 'team'],
};
