// GEO layer for the posts: the revision date (every post was revised in the September 2026 rename),
// the generated cover, three page-specific questions, and sources for posts that state numbers.
import type { QA, SourceLink } from "./types";
import { SITE_UPDATED } from "./dates";

export type BlogExtras = { updated?: string; faqs: QA[]; sources?: SourceLink[] };

const forum: SourceLink = ["Founder-led sales handoff failure rate, Forum Ventures", "https://www.forumvc.com/"];
const bridge: SourceLink = ["AE ramp time and quota attainment, Bridge Group 2026", "https://blog.bridgegroupinc.com/"];
const bcv: SourceLink = ["Fully loaded cost of a first AE, Bain Capital Ventures", "https://baincapitalventures.com/insights/"];
const decay: SourceLink = ["CRM data decay, Sopro citing Gartner", "https://sopro.io/resources/blog/crm-data-decay/"];
const syncgtm: SourceLink = ["GTM engineer salary ranges, SyncGTM 2026", "https://syncgtm.com/blog/gtm-engineer-salary"];
const meddicc: SourceLink = ["MEDDPICC definitions, MEDDICC", "https://meddicc.com/meddpicc"];
const hubspotProps: SourceLink = ["HubSpot custom properties documentation", "https://knowledge.hubspot.com/properties/create-and-edit-properties"];

export const BLOG_EXTRAS: Record<string, BlogExtras> = {
  "leading-vs-lagging": {
    updated: SITE_UPDATED,
    faqs: [
      { q: "What is a leading indicator in a sales pipeline?", a: "A signal that predicts an outcome before it happens: an economic buyer joining a call, a security review being booked, a champion replying within a day. Closed-won and pipeline value are lagging; they describe what already happened." },
      { q: "Which leading indicators does 2nd Closer track?", a: "The ones your field map defines, filled from every conversation: stakeholder coverage, budget signal, timeline with a reason, next step agreed, competitor presence, and days since the champion last replied." },
      { q: "Why does the CRM usually contain only lagging data?", a: "Because leading signals live in conversations and reps log them late or not at all. Field completion sits around 31 percent on a typical pipeline, so the forecast is built from stage and amount alone." },
    ],
    sources: [decay],
  },
  "why-no-workflow-nodes": {
    updated: SITE_UPDATED,
    faqs: [
      { q: "Does 2nd Closer have a workflow builder?", a: "No. It reads your CRM schema and your stages and runs the after-call job against them. There is no canvas, no trigger nodes and nothing for an engineer to maintain." },
      { q: "How do I customise what it does, then?", a: "Through the field map and the stage criteria, set on the configuration call and editable by RevOps. What to capture, when it is expected, and what happens next are configuration, not construction." },
      { q: "What if we already built HubSpot workflows?", a: "Keep them. 2nd Closer writes to the same properties your workflows read, so existing automations keep firing; most teams retire the ones that only existed to nag reps for missing fields." },
    ],
  },
  "gtm-engineer-anti-pattern": {
    updated: SITE_UPDATED,
    faqs: [
      { q: "What does a GTM engineer cost?", a: "In the 2026 US market a base salary of roughly $132k to $241k, before the tools they wire together and before the three to six months it takes for the stack to run reliably." },
      { q: "When does a GTM engineer make sense?", a: "When the work is genuinely bespoke: unusual data sources, a product-led motion with custom scoring, or a scale where a full-time owner of the stack pays for itself. Most teams under fifty reps are wiring the same after-call job everyone else is." },
      { q: "What does 2nd Closer replace in the GTM stack?", a: "The after-call layer: CRM updates, follow-ups, committee mapping, enrichment of people on deals, risk flags and process iteration. It does not replace prospecting tools, and it is not a CRM." },
    ],
    sources: [syncgtm],
  },
  "six-week-feedback-loop": {
    updated: SITE_UPDATED,
    faqs: [
      { q: "What is the six-week feedback loop?", a: "The time between a deal being lost for a reason and the process changing in response: the loss, the pipeline review where it comes up, the anecdote, the rule someone adds, and the next quarter where nobody checks whether the rule helped." },
      { q: "How does 2nd Closer shorten it?", a: "Win/loss analysis runs continuously on cited fields, proposes a specific change, tests it on a share of live deals, and presents the result to a revenue leader for approval. Weeks, not quarters, and with numbers." },
      { q: "Does anything change without approval?", a: "No. Every process change is a proposal with evidence; a person approves it, and the change is logged with the version of the field map it created." },
    ],
  },
  "live-in-a-day": {
    updated: SITE_UPDATED,
    faqs: [
      { q: "What does live in under a day include?", a: "Four OAuth sign-ins (CRM, calendar, LinkedIn, Apollo), a 20- to 30-minute configuration call, and by the next morning every booked call captured, every mapped field populating, and every follow-up staged." },
      { q: "Is there an implementation project?", a: "No. There is no schema to build, no workflow to design and no engineer to involve. Existing open deals are backfilled overnight from the history already in the CRM." },
      { q: "What if we want to change the configuration later?", a: "The field map and stage criteria are edited by RevOps at any time, and 2nd Closer proposes its own changes from win/loss analysis for a person to approve." },
    ],
  },
  "series-a-cro-playbook": {
    updated: SITE_UPDATED,
    faqs: [
      { q: "What should a Series A revenue leader fix first?", a: "The data layer. Dashboards built on a CRM with a third of its fields filled report noise. Get every deal&rsquo;s fields filled the same way, with citations, then build the forecast on them." },
      { q: "How does a first VP Sales inherit the founder&rsquo;s process?", a: "By having it written down by being run: the fields the founder cared about become the field map, filled from every call, so the process survives the handoff instead of living in one person&rsquo;s head." },
      { q: "Does 2nd Closer replace RevOps?", a: "It does the execution a RevOps hire would otherwise spend their first year wiring. A RevOps leader still owns the field map, the experiments and the reporting; they start with clean data instead of a cleanup project." },
    ],
    sources: [bridge, decay],
  },
  "first-ae-handoff-kit": {
    updated: SITE_UPDATED,
    faqs: [
      { q: "Why do most founder-to-AE handoffs fail?", a: "Because the process lives in the founder&rsquo;s head and the CRM holds the deals the founder remembered to log. About 68 percent of founders fail the handoff the first time, and 40 to 60 percent of first AEs miss year-one quota." },
      { q: "What is in the field-map template?", a: "Sixteen fields with definitions and examples, for HubSpot or Pipedrive: the stakeholders, the qualification signals, the timeline and the next step a first AE needs to see on every deal. It downloads as a CSV." },
      { q: "How does 2nd Closer help the handoff?", a: "It fills the field map from every call the founder has already run, so the first AE inherits deals with the reasoning attached, and it keeps filling it for the AE from day one." },
    ],
    sources: [forum, bridge, bcv],
  },
  "follow-up-email-after-sales-call": {
    updated: SITE_UPDATED,
    faqs: [
      { q: "How soon should a follow-up email go out after a sales call?", a: "Within the hour, and ideally within minutes, while the conversation is still fresh for the buyer. A follow-up two days later reads as a queue. 2nd Closer drafts it in under five minutes." },
      { q: "What should a follow-up email after a sales call contain?", a: "What the buyer said they need, in their words; what you agreed to do and by when; the one thing you need from them; and the next step with a date. One screen, no attachments the buyer did not ask for." },
      { q: "Can a follow-up email be automated without sounding automated?", a: "Yes, if it is written from the call itself rather than a template and sent from the rep&rsquo;s own address in their voice. That is the difference between a sequence tool and a second AE." },
    ],
  },
  "meddpicc-in-hubspot-auto-filled": {
    updated: SITE_UPDATED,
    faqs: [
      { q: "What is MEDDPICC?", a: "A qualification framework: Metrics, Economic buyer, Decision criteria, Decision process, Paper process, Identify pain, Champion, Competition. Each is a field a deal should have filled before it is forecast." },
      { q: "How do I add MEDDPICC fields to HubSpot?", a: "Create one custom deal property per letter (eight properties), make the ones your process requires visible on the deal record, and set which stage each is expected by. The post gives the property names and types." },
      { q: "How does 2nd Closer fill MEDDPICC automatically?", a: "It maps each MEDDPICC property to what it extracts from calls and email, writes the value with a citation to the source line after every conversation, and flags the deal when a required field is still empty at its stage." },
    ],
    sources: [meddicc, hubspotProps],
  },
};
