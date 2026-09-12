// CHRM marketing — Comparison pages, written from search intent.
// Rule: CHRM is not a CRM. AI-native CRMs are an audience to capture ("keep your CRM, get the AI"),
// never a like-for-like opponent. Execution-layer peers get honest, capability-level comparisons.

export type CmpKind = "yes" | "no" | "partial" | "shaky";
export type CmpCell = { kind: CmpKind; note?: string };
export type CmpRow = { cap: string; them: CmpCell; chrm: CmpCell };

export interface ComparePageData {
  slug: string;
  /** Short name used in nav cards and the compare index */
  short: string;
  /** Search-intent title (used in <title>) */
  title: string;
  /** H1 with optional <em> */
  h: string;
  sub: string;
  eyebrow: string;
  /** Column label for the alternative */
  themLabel: string;
  themSub: string;
  /** Who this page is for */
  forWho: string[];
  /** Framing paragraphs (HTML allowed) */
  framing: string[];
  rows: CmpRow[];
  verdict: string;
  faqs: [string, string][];
  related: string[];
  sources?: [string, string][];
}

const Y = (note?: string): CmpCell => ({ kind: "yes", note });
const N = (note?: string): CmpCell => ({ kind: "no", note });
const P = (note: string): CmpCell => ({ kind: "partial", note });
const S = (note: string): CmpCell => ({ kind: "shaky", note });

export const COMPARE_PAGES: ComparePageData[] = [
  // ───────────────────────────────────────────────────────────────
  {
    slug: "ai-native-crms",
    short: "AI-native CRMs",
    title: "Attio alternative that works with HubSpot or Pipedrive",
    h: "Want what Attio promises, <em>without switching CRMs?</em>",
    sub: "AI-native CRMs like Attio, Day.ai and Clarify sell a clean vision: the CRM that fills itself and works the deal for you. Then you read the migration guide. CHRM gives you the AI part on the HubSpot or Pipedrive you already run.",
    eyebrow: "For teams evaluating Attio, Day.ai or Clarify",
    themLabel: "AI-native CRMs",
    themSub: "Attio · Day.ai · Clarify · Lightfield",
    forWho: [
      "You looked at Attio because you want AI in the CRM, not a smarter spreadsheet.",
      "You have 5–50 closers on HubSpot or Pipedrive and eighteen months of history you don’t want to lose.",
      "You do not have an engineer to spend a quarter on workflow nodes, agent configs and re-wiring integrations.",
    ],
    framing: [
      "CHRM is not a CRM. That is the whole point. Your CRM is a good record-keeping system, your team already knows it, and your integrations already point at it. Replacing it is a project measured in quarters.",
      "What the AI-native CRMs are actually selling is the layer on top: capture every conversation, fill the record, draft the next move. In Attio, that layer is something you assemble from Workflows, AI agents and credit pools. In CHRM it is the product, and it runs on day one against the schema you already have.",
      "Attio’s Pro tier is $79 a seat (after the July 2026 increase) plus metered credits for enrichment, automations and agent runs. Add the migration, the engineer, and the two months of nobody trusting the new pipeline, and “cheaper than HubSpot” stops being true.",
    ],
    rows: [
      { cap: "Keeps HubSpot or Pipedrive as the system of record", them: N("Requires migrating to their CRM"), chrm: Y("OAuth in 15 minutes. Your schema is read, not replaced.") },
      { cap: "Captures every call, email thread and LinkedIn DM automatically", them: P("Call intelligence and email sync on higher tiers; LinkedIn via extensions"), chrm: Y("Built-in notetaker, Gmail/Outlook two-way, LinkedIn DM/InMail, CRM history") },
      { cap: "Fills your existing custom fields, per pipeline, with citations", them: S("Possible with workflow nodes and agent prompts you build"), chrm: Y("22 fields per deal is typical. Every value links to its source line.") },
      { cap: "Writes and sends the follow-up from the rep’s inbox", them: S("Sequences exist; post-call drafting is an agent you configure"), chrm: Y("Drafted in the rep’s voice, sent in under five minutes") },
      { cap: "Works the buying committee on LinkedIn", them: N(), chrm: Y("Warm-up outreach to every stakeholder, rate-limited, mirrored to the CRM") },
      { cap: "Enriches every discovered contact", them: P("Credit-metered enrichment inside their CRM"), chrm: Y("Apollo enrichment on every person who comes up in a conversation") },
      { cap: "Real-time deal risk across the pipeline", them: S("Custom-built via workflows"), chrm: Y("Five categories, severity, source line, next action. No config.") },
      { cap: "Learns from wins and losses and proposes playbook changes", them: N(), chrm: Y("Multi-agent win/loss analysis, manager-approved") },
      { cap: "Setup without an engineer", them: N("Workflow canvas + migration"), chrm: Y("Four OAuth sign-ins and a 30-minute call") },
      { cap: "Time to value", them: P("Weeks to months"), chrm: Y("Under one business day") },
    ],
    verdict:
      "If your data model is genuinely the hard part (usage-based products, multi-object relationships that don’t fit contact/deal), an AI-native CRM may be the right call. If what you actually want is the AI doing the after-call work, keep your CRM and add CHRM.",
    faqs: [
      ["Is CHRM a CRM?", "No. CHRM works on top of HubSpot or Pipedrive. It reads your fields, stages and history, and writes back to them. Your CRM stays the system of record."],
      ["Can I use CHRM and later move to Attio?", "Yes. Everything CHRM writes lives in your CRM as normal fields and activities, so it moves with your data. Nothing is locked inside CHRM."],
      ["What if we are already on Attio?", "CHRM currently supports HubSpot and Pipedrive. Tell us on the intro call; we will be honest about timelines."],
    ],
    related: ["diy-gtm-stack", "hubspot-breeze", "momentum"],
    sources: [
      ["Attio pricing 2026", "https://marketbetter.ai/blog/attio-crm-pricing-breakdown-2026/"],
      ["Attio vs HubSpot, RevOps view", "https://ziellab.com/post/hubspot-vs-attio-the-honest-2026-comparison-for-revops-growth"],
    ],
  },

  // ───────────────────────────────────────────────────────────────
  {
    slug: "diy-gtm-stack",
    short: "DIY GTM stack",
    title: "GTM engineer or HubSpot implementation partner vs CHRM",
    h: "The $100k, six-month way. <em>And the other way.</em>",
    sub: "A GTM engineer with Clay, n8n and Zapier. Or a partner agency on a retainer. Both can get your CRM working. Both cost more than every AE seat on CHRM combined, and both leave you owning the wiring.",
    eyebrow: "For founders about to hire or sign a retainer",
    themLabel: "DIY GTM stack",
    themSub: "GTM engineer · Clay · n8n · Zapier · partner retainer",
    forWho: [
      "You just raised and a VP Sales starts in three weeks. The CRM is 31% complete.",
      "You have a quote from a HubSpot partner for onboarding and “RevOps as a service”.",
      "You are considering a GTM engineer hire to connect the stack your CRO keeps reading about.",
    ],
    framing: [
      "The modern GTM stack is a dozen tools with APIs that change every quarter. Somebody has to keep them talking. That somebody is a GTM engineer at $132k–$241k base, or a partner agency at $3.5k–$15k a month for 4–16 weeks and then a retainer. Twenty years ago the same job was called an Oracle implementation and cost ten times the licence.",
      "The output is a system your team owns and has to maintain. When Gong deprecates a webhook or HubSpot changes a property type, the wiring breaks and the person who built it is the only one who can fix it.",
      "CHRM is built so that job does not exist for our customers. You sign into four things. We read your schema. When an upstream API changes, we absorb it. You read about it in a changelog.",
    ],
    rows: [
      { cap: "Time to first call processed", them: P("3–6 months for an engineer build; 4–16 weeks for a partner"), chrm: Y("Under one business day") },
      { cap: "Cost in year one", them: N("$132k–$241k salary, or $42k–$180k of retainer, plus the tools"), chrm: Y("$12,000 per AE. Other seats free.") },
      { cap: "Who fixes it when an API changes", them: N("You do"), chrm: Y("We do") },
      { cap: "Fills your CRM fields from every conversation", them: S("If it was wired, and still works"), chrm: Y("By default, with citations") },
      { cap: "Sends follow-ups in the rep’s voice", them: S("Template-based sequences at best"), chrm: Y("Drafted from the actual conversation") },
      { cap: "LinkedIn warm-up to the buying committee", them: S("Cold-outreach tools bolted on; account-risk on you"), chrm: Y("Rate-limited, safe by construction, mirrored to the CRM") },
      { cap: "Risk detection across the pipeline", them: S("Dashboards someone has to build and watch"), chrm: Y("Real-time, with the next action") },
      { cap: "Learns and improves the playbook", them: N(), chrm: Y("Win/loss analysis with tested hypotheses") },
      { cap: "Requires a workflow builder", them: N("That is the job"), chrm: Y("There is no canvas") },
    ],
    verdict:
      "Hire the GTM engineer when your motion is genuinely bespoke and prospecting-heavy. For the after-call work on a HubSpot or Pipedrive team of 5–50 closers, CHRM does the job for less than the recruiter fee.",
    faqs: [
      ["We already have a partner. Can CHRM coexist?", "Yes. CHRM reads the schema your partner built and fills it. Most partners are relieved: the data-entry problem was never solvable with workflows."],
      ["Does CHRM replace Clay or Apollo?", "No. Prospecting is not our lane. We integrate with Apollo for enrichment and leave top-of-funnel to the tools built for it."],
    ],
    related: ["ai-native-crms", "hubspot-breeze", "rox"],
    sources: [
      ["GTM engineer salary 2026", "https://syncgtm.com/blog/gtm-engineer-salary"],
      ["HubSpot consulting cost 2026", "https://automationstrategists.com/blog/hubspot-consulting-cost/"],
      ["Fractional RevOps costs", "https://growintandem.com/fractional-revops-gtm-engineering-crm-guide/"],
    ],
  },

  // ───────────────────────────────────────────────────────────────
  {
    slug: "momentum",
    short: "Momentum.io",
    title: "Momentum.io alternative for HubSpot and Pipedrive teams",
    h: "Momentum is Salesforce now. <em>Here’s where HubSpot teams go.</em>",
    sub: "Salesforce closed its acquisition of Momentum.io on 2 March 2026 to feed Agentforce. If you ran Momentum on HubSpot, the execution layer you bought is heading somewhere you are not.",
    eyebrow: "For Momentum customers on HubSpot or Pipedrive",
    themLabel: "Momentum.io",
    themSub: "Acquired by Salesforce, March 2026",
    forWho: [
      "You used Momentum to turn calls into CRM fields and Slack tasks and you are not on Salesforce.",
      "You want the same zero-data-entry outcome without waiting to see what survives inside Agentforce.",
      "You would rather the tool did the follow-up too, not just the fields.",
    ],
    framing: [
      "Momentum was a good product for exactly one thing: capturing what was said on a call and writing it into structured CRM fields, with the odd Slack nudge. Salesforce bought it to make Agentforce less of a demo. That is a Salesforce story.",
      "CHRM does the field-writing part with citations, and then the rest of the AE’s work: sends the follow-up from the rep’s inbox, works the committee on LinkedIn, enriches the contacts, flags the risk, and learns from the outcome. On HubSpot and Pipedrive, which are the CRMs the mid-market actually runs.",
    ],
    rows: [
      { cap: "Supports HubSpot and Pipedrive going forward", them: N("Salesforce-owned; Agentforce roadmap"), chrm: Y("Both, natively, with per-pipeline field maps") },
      { cap: "Writes structured CRM fields from calls", them: Y("Its core strength"), chrm: Y("With a source-line citation on every value") },
      { cap: "Backfills historical calls and emails", them: Y("Autopilot Batch"), chrm: Y("CRM history and existing transcript libraries ingested on day one") },
      { cap: "Sends the follow-up email", them: N("Tasks and Slack nudges"), chrm: Y("Drafted and sent in under five minutes") },
      { cap: "LinkedIn outreach to the buying committee", them: N(), chrm: Y() },
      { cap: "Contact enrichment", them: N(), chrm: Y("Apollo, per discovered contact") },
      { cap: "Deal risk with next action", them: P("Signals to Slack"), chrm: Y("Five categories, severity, recommended action") },
      { cap: "Win/loss learning loop", them: N(), chrm: Y() },
      { cap: "Pricing", them: P("Was $69/user/mo; now bundled into Salesforce"), chrm: Y("$1,000 per AE per month; other seats free") },
    ],
    verdict: "If you are on Salesforce, wait and see what Agentforce ships. If you are on HubSpot or Pipedrive, the execution layer lives here.",
    faqs: [
      ["Can CHRM import what Momentum wrote?", "Momentum wrote to your CRM fields; those fields are still yours. CHRM reads them as history and keeps filling them."],
      ["How fast can we switch?", "Under a business day. OAuth into HubSpot or Pipedrive, connect the calendar, a 30-minute call to confirm the field map."],
    ],
    related: ["sybill", "hubspot-breeze", "ai-native-crms"],
    sources: [["Salesforce completes Momentum acquisition", "https://www.salesforce.com/news/stories/salesforce-signs-definitive-agreement-to-acquire-momentum/"]],
  },

  // ───────────────────────────────────────────────────────────────
  {
    slug: "hubspot-breeze",
    short: "HubSpot Breeze",
    title: "HubSpot Breeze and Smart Deal Progression vs CHRM",
    h: "Your CRM’s AI suggests. <em>CHRM executes.</em>",
    sub: "HubSpot’s Meeting Notetaker and Smart Deal Progression read a call and suggest stage, amount and close-date updates for a rep to approve. On Sales Hub Professional and above. In English. On Google Meet.",
    eyebrow: "For HubSpot teams weighing Breeze",
    themLabel: "HubSpot Breeze",
    themSub: "Meeting Notetaker · Smart Deal Progression · Breeze agents",
    forWho: [
      "You are on HubSpot Starter or Professional and wondering whether Breeze covers this.",
      "You tried the native notetaker and the notes still are not fields.",
      "You are on Pipedrive, where there is no native equivalent at all.",
    ],
    framing: [
      "Credit where due: HubSpot shipped a real notetaker and Smart Deal Progression is a sensible feature. It analyses a transcript and proposes updates to the standard deal properties, which the rep reviews and applies with a click. That is a suggestion engine, and a good one.",
      "CHRM is an execution engine. It writes your custom fields, not just stage and amount. It sends the follow-up rather than drafting it into a queue. It works LinkedIn, enriches contacts, flags risk and learns from outcomes. And it does all of that on Starter, on Pipedrive, on Zoom and Teams, and in any language your team sells in.",
    ],
    rows: [
      { cap: "Available on HubSpot Starter", them: N("Sales Hub Professional or Enterprise seats"), chrm: Y("Any HubSpot tier; also Pipedrive") },
      { cap: "Joins Zoom, Meet and Teams", them: P("Notetaker: Google Meet, English"), chrm: Y("Zoom, Meet, Teams, phone; plus Fireflies/Fathom/Otter ingestion") },
      { cap: "Writes custom fields, per pipeline", them: P("Suggests standard properties: stage, amount, close date, next steps"), chrm: Y("Any field on the record, with citations, 92–97% accuracy") },
      { cap: "Applies the update", them: N("Rep must review and click"), chrm: Y("Written in real time; stage advances proposed for manager approval") },
      { cap: "Sends the follow-up", them: P("Drafts for the rep to send"), chrm: Y("Sent from the rep’s inbox in under five minutes") },
      { cap: "LinkedIn outreach, contact enrichment", them: N("Prospecting agent is top-of-funnel and credit-metered"), chrm: Y("Warm-up to the committee; Apollo enrichment per contact") },
      { cap: "Deal risk with next action", them: P("Deal health signals"), chrm: Y("Five categories, severity, source line, recommended action") },
      { cap: "Pricing model", them: P("Included with Pro+, agents metered per outcome"), chrm: Y("Flat $1,000 per AE per month") },
    ],
    verdict: "Use Breeze if you are on Pro+, sell in English on Google Meet, and are happy for reps to approve every update. Use CHRM if you want the work done.",
    faqs: [
      ["Do Breeze and CHRM conflict?", "No. CHRM writes fields and activities through the normal API; Breeze can still read them. Most teams turn Smart Deal Progression suggestions off once CHRM is writing the fields."],
      ["Does CHRM use HubSpot credits?", "No. CHRM is priced per AE seat and does not consume Breeze credits."],
    ],
    related: ["momentum", "sybill", "fathom"],
    sources: [
      ["HubSpot Smart Deal Progression", "https://www.hubspot.com/products/sales/smart-deal-progression"],
      ["HubSpot AI pricing 2026", "https://resolve247.ai/blog/hubspot-ai-agent-pricing/"],
    ],
  },

  // ───────────────────────────────────────────────────────────────
  {
    slug: "sybill",
    short: "Sybill",
    title: "Sybill alternative: CRM autofill plus the rest of the job",
    h: "Sybill fills the fields. <em>CHRM does the job.</em>",
    sub: "Sybill is a strong AI sales assistant: notes, CRM autofill on its Business tier, follow-up drafts. CHRM starts where the draft ends.",
    eyebrow: "For teams comparing AI sales assistants",
    themLabel: "Sybill",
    themSub: "AI sales assistant · $19–90/user/mo",
    forWho: [
      "You want the CRM filled without reps typing, and you are on Pipedrive (Sybill: coming soon).",
      "You want the follow-up sent, not staged.",
      "You want the buying committee worked, not just noted.",
    ],
    framing: [
      "Sybill’s CRM Autofill extracts pain points, objections, budget, next steps and MEDDPICC/BANT criteria from a call and writes structured updates to HubSpot, Salesforce, Zoho or Dynamics. It is available on the Business plan and Pipedrive support is listed as coming soon.",
      "CHRM does that with citations, and then keeps going: the follow-up goes out from the rep’s inbox, the new stakeholder gets enriched and a LinkedIn warm-up, the risk gets a severity and a next action, and the playbook learns from the outcome. It is the difference between an assistant and a second AE.",
    ],
    rows: [
      { cap: "Pipedrive support today", them: N("Coming soon"), chrm: Y("Native, webhook-driven, half of early customers") },
      { cap: "CRM autofill", them: P("Business tier only"), chrm: Y("Every plan; per-pipeline maps; citations") },
      { cap: "Follow-up email", them: P("Drafted in the rep’s voice"), chrm: Y("Drafted and sent from the rep’s address") },
      { cap: "Sequences that respond to the deal", them: N(), chrm: Y("Pause on reply, stage or risk") },
      { cap: "LinkedIn warm-up to the committee", them: N(), chrm: Y() },
      { cap: "Apollo enrichment per contact", them: N(), chrm: Y() },
      { cap: "Deal risk with next action", them: P("Deal summaries and signals"), chrm: Y("Five categories, real-time") },
      { cap: "Win/loss playbook iteration", them: N(), chrm: Y() },
      { cap: "Pricing", them: Y("$19–90 per user per month"), chrm: P("$1,000 per AE per month; managers, RevOps, leadership free") },
    ],
    verdict: "If notes, autofill and a draft are the whole job for your team, Sybill is well priced. If the job is everything an AE does after the call, CHRM costs less than the hire it replaces.",
    faqs: [
      ["Can CHRM ingest Sybill’s transcripts?", "CHRM ingests Fireflies, Fathom, Otter and Gong today. If you want Sybill added, say so on the intro call."],
    ],
    related: ["momentum", "hubspot-breeze", "oliv"],
    sources: [
      ["Sybill CRM autofill", "https://www.sybill.ai/blogs/ai-tool-automatically-writes-crm-notes-sales-calls"],
      ["Sybill pricing", "https://sultanofsaas.com/sybill-pricing/"],
    ],
  },

  // ───────────────────────────────────────────────────────────────
  {
    slug: "rox",
    short: "Rox",
    title: "Rox alternative for HubSpot and Pipedrive teams",
    h: "Enterprise agent swarms want a quarter. <em>CHRM wants a Tuesday.</em>",
    sub: "Rox deploys AI agents for account executives on top of Salesforce and enterprise data. CHRM is the same idea for the teams that run HubSpot or Pipedrive and do not have an implementation budget.",
    eyebrow: "For teams who read about Rox and are not on Salesforce",
    themLabel: "Rox",
    themSub: "AI revenue agents · Salesforce, Zendesk, ERPs",
    forWho: [
      "You liked the “AI agents for AEs” idea and then saw the integration list.",
      "You have 5–50 closers, not 500.",
      "You want it running this week.",
    ],
    framing: [
      "Rox is the most-funded version of the idea CHRM is built on: the AE should not be doing research, signal-tracking and CRM updates by hand. Rox plugs into Salesforce, Zendesk and ERPs and deploys hundreds of agents against enterprise data.",
      "CHRM is the mid-market execution layer. Four OAuth sign-ins, a 30-minute call, and the after-call work is being done on your HubSpot or Pipedrive by the next morning: fields, follow-ups, LinkedIn, enrichment, risk.",
    ],
    rows: [
      { cap: "HubSpot and Pipedrive as the system of record", them: N("Salesforce-first"), chrm: Y() },
      { cap: "Time to value", them: P("Enterprise implementation"), chrm: Y("Under one business day") },
      { cap: "Captures calls, email and LinkedIn", them: P("Signals and research; call capture via integrations"), chrm: Y("Built-in notetaker, Gmail/Outlook, LinkedIn DMs") },
      { cap: "Sends follow-ups from the rep’s inbox", them: P("Agent-drafted outreach"), chrm: Y() },
      { cap: "LinkedIn warm-up to the committee", them: P("Cold outreach via integrations"), chrm: Y("Rate-limited, mirrored to the CRM") },
      { cap: "Risk detection with next action", them: Y("Account signals"), chrm: Y("Deal-level, five categories, source line") },
      { cap: "Pricing", them: P("Free tier, $50/mo core, enterprise custom"), chrm: Y("$1,000 per AE per month, flat") },
    ],
    verdict: "Rox for the enterprise on Salesforce. CHRM for the 5–50 closer team on HubSpot or Pipedrive that wants the same outcome tomorrow.",
    faqs: [["Does CHRM support Salesforce?", "Not today. HubSpot and Pipedrive. Tell us on the intro call if Salesforce is your system of record."]],
    related: ["diy-gtm-stack", "ai-native-crms", "oliv"],
    sources: [["Rox at $1.2B valuation", "https://techcrunch.com/2026/03/12/sales-automation-startup-rox-ai-hits-1-2b-valuation-sources-say/"]],
  },

  // ───────────────────────────────────────────────────────────────
  {
    slug: "oliv",
    short: "Oliv.ai",
    title: "Oliv.ai alternative: one second AE instead of a menu of agents",
    h: "Modular agents, <em>or one second AE.</em>",
    sub: "Oliv sells agents by the module: CRM manager, deal driver, re-activator, recaps. CHRM is one execution layer that does the whole after-call job by default, on your schema, without assembly.",
    eyebrow: "For teams comparing agent platforms on HubSpot or Pipedrive",
    themLabel: "Oliv.ai",
    themSub: "Modular AI agents · $19–120/user/mo",
    forWho: [
      "You want the outcome, not a shopping list of agents to configure.",
      "You want your own fields and stages respected rather than a MEDDIC template.",
      "You want LinkedIn, enrichment and playbook iteration included.",
    ],
    framing: [
      "Oliv is a credible peer: it works with HubSpot and Pipedrive, processes calls in minutes, and lets you buy the agents you want. The trade-off is that you are assembling the AE from parts, and the parts are organised around a MEDDIC-style framework.",
      "CHRM reads the process you already encoded in your CRM and runs all of it. Fields, follow-ups sent, sequences, committee mapping, LinkedIn warm-up, Apollo enrichment, risk, competitor handling, playbook learning. One price per AE, and every non-AE seat is free.",
    ],
    rows: [
      { cap: "HubSpot and Pipedrive", them: Y(), chrm: Y() },
      { cap: "Uses your existing fields and stages", them: P("MEDDIC-enriched insights synced to CRM"), chrm: Y("Your schema, per pipeline, no template") },
      { cap: "Sends the follow-up from the rep’s inbox", them: P("Follow-up agents"), chrm: Y("Default, under five minutes") },
      { cap: "LinkedIn warm-up to the committee", them: N(), chrm: Y() },
      { cap: "Apollo enrichment per contact", them: N(), chrm: Y() },
      { cap: "Competitor detection and counter-positioning", them: N(), chrm: Y() },
      { cap: "Win/loss playbook iteration", them: N(), chrm: Y() },
      { cap: "Pricing", them: Y("$19–120 per user per month, per agent"), chrm: P("$1,000 per AE per month; other seats free") },
    ],
    verdict: "If you want to pick two agents for $40 a seat, Oliv is a fair choice. If you want the second AE, it is CHRM.",
    faqs: [["Why is CHRM priced higher per seat?", "Because it replaces a hire, not a tool. A second AE costs $120k. CHRM is $12k a year per closer and every other seat is free."]],
    related: ["sybill", "rox", "hubspot-breeze"],
    sources: [["Oliv.ai agents", "https://www.oliv.ai/blog/ai-sales-assistant"]],
  },

  // ───────────────────────────────────────────────────────────────
  {
    slug: "fathom",
    short: "Fathom & notetakers",
    title: "Fathom, Fireflies or tl;dv plus CHRM",
    h: "Keep your notetaker. <em>CHRM does the rest.</em>",
    sub: "Fathom is HubSpot’s most-installed app for a reason. It records and summarises beautifully. It also stops there. CHRM takes the transcript and does the AE’s work with it.",
    eyebrow: "For teams already on Fathom, Fireflies, tl;dv or Otter",
    themLabel: "Notetakers",
    themSub: "Fathom · Fireflies · tl;dv · Otter",
    forWho: [
      "Your team already has a notetaker and the summaries still don’t become fields.",
      "You are on Pipedrive and the notetaker only logs a note.",
      "You do not want to install a fourth tool, or ask reps to change anything.",
    ],
    framing: [
      "This is not a versus page. CHRM has its own notetaker, and it also ingests Fireflies, Fathom, Otter and Gong transcripts as one source among several. If your team likes its notetaker, keep it.",
      "What notetakers push to the CRM is a summary and, on paid tiers, some property sync. What CHRM does with the same transcript is the job: your custom fields with citations, the follow-up sent from the rep’s inbox, the new stakeholder enriched and warmed up on LinkedIn, the risk flagged with a next action, and the playbook learning from the outcome.",
    ],
    rows: [
      { cap: "Records and transcribes", them: Y("Their job"), chrm: Y("Built-in, or theirs") },
      { cap: "Pushes a summary to the CRM", them: Y(), chrm: Y("With source-line citations per field") },
      { cap: "Writes your custom fields per pipeline", them: P("Fathom Business, Fireflies Business, tl;dv Business: partial property sync"), chrm: Y("Every field, every deal") },
      { cap: "Sends the follow-up", them: P("Drafts; tl;dv agents can send on higher tiers"), chrm: Y("From the rep’s inbox in under five minutes") },
      { cap: "LinkedIn, enrichment, sequences", them: N(), chrm: Y() },
      { cap: "Deal risk with next action", them: N("Call-level insights"), chrm: Y("Pipeline-wide, real-time") },
      { cap: "Learns from outcomes", them: N(), chrm: Y() },
      { cap: "Pricing", them: Y("$0–59 per user per month"), chrm: P("$1,000 per AE per month; other seats free") },
    ],
    verdict: "Notetakers are a $10–25 line item that records the conversation. CHRM is the second AE who acts on it. Most CHRM customers keep both.",
    faqs: [
      ["Do I need to remove Fathom?", "No. Connect it, or let CHRM’s notetaker join instead, or run both. Two sources, one structured record per deal."],
    ],
    related: ["hubspot-breeze", "sybill", "momentum"],
    sources: [["Fathom on the HubSpot marketplace", "https://ecosystem.hubspot.com/marketplace/listing/ai-notetaker-by-fathom"]],
  },
];

const BY_SLUG: Record<string, ComparePageData> = {};
COMPARE_PAGES.forEach((p) => (BY_SLUG[p.slug] = p));

export function getComparePage(slug: string): ComparePageData | undefined {
  return BY_SLUG[slug];
}
export function compareRouteSlugs(): string[] {
  return COMPARE_PAGES.map((p) => p.slug);
}
