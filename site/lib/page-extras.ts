// GEO layer for the product, platform, integration and setup pages: one question-form heading with a
// self-contained answer (134–167 words, first sentence "2nd Closer …", at least one number), three
// page-specific questions for the FAQ block and its schema, sources where a number is stated, and one more
// section of depth. Merged into the page data in lib/data.ts so the original entries stay readable.
import type { Answer, QA, SourceLink, ProseItem } from "./types";

export type PageExtras = { answer: Answer; faqs: QA[]; sources?: SourceLink[]; more?: ProseItem[] };

/** Existing section headings, rewritten as the question a buyer would type. Applied by exact match. */
export const HEADING_REWRITES: Record<string, string> = {
  // product
  "Severity, source, and the next action.": "What does a risk flag contain?",
  "Risk dies when it&rsquo;s seen, not when it&rsquo;s reported.": "Why surface risk on Monday morning instead of at the pipeline review?",
  "Citations make the difference.": "How do you know a summary is right?",
  "92–97% field accuracy on well-structured calls.": "How accurate are the AI engagement summaries?",
  "Your schema. Not ours.": "Does 2nd Closer change my CRM schema?",
  "Real-time, not nightly.": "How quickly are CRM fields updated after a call?",
  "Steerable, not autopilot.": "Can a rep edit the follow-up before it goes out?",
  "Your voice. Not the AI&rsquo;s.": "Whose voice does the follow-up email use?",
  "Two scopes.": "Are sequences configured per deal or per organisation?",
  "Variables that pull live deal context.": "What can a sequence step reference?",
  'No more "ghost" stakeholders.': "How does 2nd Closer find stakeholders a rep never logged?",
  "Tied to risk detection.": "How does the stakeholder map feed risk detection?",
  "Safe by construction.": "Is LinkedIn automation safe for the rep&rsquo;s account?",
  "Mirrored into the CRM.": "Does LinkedIn activity show up in the CRM?",
  "Per-deal threat, not per-vendor.": "How is competitor threat scored?",
  "Counter-positioning, drafted.": "What happens when a competitor is mentioned on a call?",
  "Definitions are yours.": "Who defines the industry segments?",
  "Bridges sales and marketing.": "What is industry classification used for?",
  "Catalogue, your way.": "How is the product catalogue set up?",
  "Configurable products supported.": "Does it handle configurable products and tiers?",
  "Hypotheses, A/B tested.": "How are process changes tested before they ship?",
  "Nothing auto-promotes.": "Can 2nd Closer change our sales process on its own?",
  "Email is two-way.": "Is email capture two-way?",
  "LinkedIn is first-class context.": "Are LinkedIn messages part of the deal record?",
  "And the CRM&rsquo;s history comes too.": "Does 2nd Closer read the CRM history that existed before it?",
  // integrations
  "Custom fields fully supported.": "Does 2nd Closer support custom HubSpot fields?",
  "Two-way, real-time.": "How does the HubSpot sync work?",
  "Activities and notes go both ways.": "Do activities and notes sync both ways in HubSpot?",
  "Custom fields are first-class.": "Does 2nd Closer support custom Pipedrive fields?",
  "Pipelines and stages.": "How does 2nd Closer handle Pipedrive pipelines and stages?",
  "Activities both directions.": "Do Pipedrive activities sync both ways?",
  "Workspace-admin friendly.": "How is Gmail connected for a whole team?",
  "Drafts, not auto-sends.": "Does 2nd Closer send email from Gmail automatically?",
  "Privacy by design.": "Which emails does 2nd Closer read?",
  "Designed for regulated environments.": "Does the Outlook integration work in regulated environments?",
  "Identical feature parity.": "Is Outlook at parity with the Gmail integration?",
  "Side-by-side with the built-in notetaker.": "Do I need Fireflies if 2nd Closer has its own notetaker?",
  "No re-listening.": "Does 2nd Closer re-process a recording Fireflies already transcribed?",
  "ICP scoring built on it.": "How does Apollo data feed ICP scoring?",
  "Apollo customers, this is your page.": "What changes for an existing Apollo customer?",
  "Configurable safety per account.": "How are LinkedIn safety limits configured?",
  "CRM is canonical.": "Where is LinkedIn activity stored?",
  // platform
  "Deal detail is the focus.": "What is on the deal detail screen?",
  "Bulk actions where they matter.": "Which bulk actions does the workspace support?",
  "Saved views per user.": "Can each user save their own pipeline views?",
  "Auto-detects which CRM.": "How does the Chrome extension know which CRM it is in?",
  "Sent emails close the loop.": "What happens after an email is sent from the extension?",
  "Authentication is per user.": "How does the extension authenticate?",
  "Roles, with real boundaries.": "Which roles does 2nd Closer have?",
  "Invitations are tokenised.": "How are team members invited?",
  "Plan-aware seat management.": "Who counts as a seat?",
  // setup
  "Step 01 — your CRM.": "Step 1: how do I connect HubSpot or Pipedrive?",
  "Step 02 — your calendar.": "Step 2: why connect the calendar?",
  "Step 03 — LinkedIn.": "Step 3: what does connecting LinkedIn turn on?",
  "Step 04 — Apollo.": "Step 4: what does Apollo add?",
  "Then a 30-minute call.": "What happens on the configuration call?",
  "Day one is when work starts being done.": "What is running by the next morning?",
};

const S = {
  bridge: ["AE ramp and quota attainment, Bridge Group 2026", "https://blog.bridgegroupinc.com/"] as SourceLink,
  decay: ["CRM data decay rates, Sopro citing Gartner", "https://sopro.io/resources/blog/crm-data-decay/"] as SourceLink,
  forum: ["Founder-led sales handoff failure rate, Forum Ventures", "https://www.forumvc.com/"] as SourceLink,
  hubspotApi: ["HubSpot CRM API: properties and associations", "https://developers.hubspot.com/docs/api/crm/properties"] as SourceLink,
  pipedriveApi: ["Pipedrive API and webhooks", "https://developers.pipedrive.com/docs/api/v1"] as SourceLink,
  linkedinLimits: ["LinkedIn commercial use and invitation limits", "https://www.linkedin.com/help/linkedin/answer/a1339724"] as SourceLink,
  apollo: ["Apollo enrichment API", "https://docs.apollo.io/"] as SourceLink,
  meddic: ["MEDDPICC field definitions", "https://meddicc.com/meddpicc"] as SourceLink,
};

export const PAGE_EXTRAS: Record<string, PageExtras> = {
  // ─── product ────────────────────────────────────────────────────────────
  "risk-detection": {
    answer: {
      q: "What is live deal risk detection?",
      a: "2nd Closer flags a deal as at risk the moment a conversation shows one of five conditions: no economic buyer in any conversation, budget unconfirmed past a stage where it should be, a champion who has gone quiet, a competitor gaining ground, or a timeline that slipped without a reason on record. Each flag carries a severity, the transcript line that triggered it, and a recommended next action, and it lands in the risk feed within minutes of the call ending rather than at the Friday pipeline review. The signals come from the same structured fields 2nd Closer writes to HubSpot or Pipedrive, so a flag can be checked against its source in one click. Managers see the whole pipeline ranked by severity; reps see their own deals. Nothing is hidden from the rep and nothing is escalated without the line that justifies it.",
    },
    faqs: [
      { q: "Which risk categories does 2nd Closer detect?", a: "Five: missing economic buyer, budget unconfirmed, champion gone quiet, competitor gaining ground, and timeline slipped. Each has a severity and a source line." },
      { q: "How soon after a call does a risk flag appear?", a: "Within the same five-minute window in which the CRM fields are written and the follow-up is drafted. The flag appears in the risk feed and on the deal record." },
      { q: "Can a manager turn a risk category off?", a: "Yes. Categories, severities and the stage at which each condition counts as risk are set on the configuration call and can be changed by an admin at any time." },
    ],
    more: [
      { h: "How does risk detection avoid false alarms?" },
      "A flag is only raised when the underlying field is empty or contradicted by a specific line in a conversation. If the economic buyer has not been mentioned in any call, email or LinkedIn thread on the deal, the flag says so and cites the absence; if a champion&rsquo;s last reply is older than the stage allows, the flag cites the date. The rule the whole product follows applies here too: empty over wrong. 2nd Closer never invents a risk to look busy.",
      "Severity is relative to stage. A missing economic buyer in discovery is a low flag with a suggested question for the next call; the same gap at proposal is high and comes with a recommended action, usually a short meeting request the rep can send in one click. Reps can dismiss a flag with a reason, and that reason becomes part of the deal record and of the win/loss analysis.",
    ],
  },
  "engagement-summaries": {
    answer: {
      q: "What are AI engagement summaries in 2nd Closer?",
      a: "2nd Closer writes a structured summary of every call, email thread and LinkedIn exchange in the fields your team defined, not in a fixed template. You choose the structure (for example champion, budget signal, timeline, next step, top objection), the tone, and which fields go to which CRM property. After a conversation the summary is filled with one citation per value: the transcript line or email sentence it came from, so a manager can verify any claim in seconds. On well-structured calls the field accuracy is 92 to 97 percent, and when a value cannot be found the field is left empty rather than guessed. Summaries are written within about five minutes of the call ending and pushed to HubSpot or Pipedrive as field updates and a timeline note, so the CRM stays the system of record and nobody types anything.",
    },
    faqs: [
      { q: "Can we use our own summary structure?", a: "Yes. The fields, their order, their tone and the CRM property each maps to are yours. Most teams start from the fields they already have in HubSpot or Pipedrive and add two or three they always wanted filled." },
      { q: "What does a citation look like?", a: "Each value links to the exact transcript timestamp or email sentence it was drawn from. Click the value in the CRM note or the 2nd Closer workspace and the source line opens." },
      { q: "What if the call was messy or off-topic?", a: "Accuracy falls on unstructured calls, which is why every value is cited and why an unfound value is left empty. Empty over wrong is the rule; a manager can fill or correct any field and the correction is kept." },
    ],
    more: [
      { h: "Where do the summaries go?" },
      "Three places, at once. The mapped fields on the deal, contact and company records in HubSpot or Pipedrive; a timeline note on the deal with the full summary and its citations; and the 2nd Closer workspace, where the same summary sits next to the transcript. If your team reads deals in the CRM, nothing changes about where they look.",
      "Summaries also feed everything downstream. The follow-up email is drafted from the summary, the stakeholder map is updated from the people it names, and risk detection reads its fields. That is the reason accuracy and citations matter more here than anywhere else: an error in the summary would propagate, so the summary is the one place 2nd Closer prefers to say nothing over saying something wrong.",
    ],
  },
  "crm-hygiene": {
    answer: {
      q: "How does 2nd Closer keep HubSpot or Pipedrive fields complete?",
      a: "2nd Closer reads your CRM schema on the first OAuth sign-in and then populates the fields you chose after every conversation, so a pipeline that typically has 31 percent of its fields filled moves to close to 100 percent without a rep logging anything. Every written value carries a citation to the line it came from, and a value that cannot be found is left empty rather than guessed. Writes happen in real time through the HubSpot and Pipedrive APIs, not in a nightly batch, and they respect your pipelines, stages and custom properties as they already exist; nothing is renamed and no new schema is imposed. Existing records are backfilled from the conversation history you already have. The result is a CRM the forecast can be read from, because the fields the forecast depends on are filled the same way for every deal.",
    },
    faqs: [
      { q: "Does 2nd Closer overwrite values a rep typed?", a: "Not by default. A field a person filled is kept unless the team configures that field to accept updates from conversations, in which case the change is cited and visible on the timeline." },
      { q: "Which objects does it write to?", a: "Deals, contacts and companies in HubSpot; deals, persons and organisations in Pipedrive. Activities and notes are written to the deal timeline." },
      { q: "How is the 31 percent baseline measured?", a: "It is the typical field-completion rate we see on a HubSpot or Pipedrive pipeline before 2nd Closer connects, measured as filled required fields over total required fields across open deals. Your own baseline is shown on the configuration call." },
    ],
    sources: [S.decay],
    more: [
      { h: "What about the records that existed before 2nd Closer?" },
      "On the first night after setup, 2nd Closer reads the existing pipeline: prior notes, email threads it can see through the mailbox connection, and any call recordings your notetaker already stored. Fields that can be filled from that history are filled and cited; the rest stay empty and are flagged as such so the team knows what the CRM never captured.",
      "Decay does not stop after the backfill. Contact data goes stale at roughly a third of records per year as people change roles, which is why enrichment runs on every person who comes up in a conversation and why a stakeholder who has gone quiet is a risk signal rather than a forgotten row.",
    ],
  },
  "follow-up-emails": {
    answer: {
      q: "How does 2nd Closer write the follow-up email after a sales call?",
      a: "2nd Closer drafts the follow-up from the deal itself, not from a template: the transcript of the call that just ended, the prior email threads, the open risks and the stakeholders on the record. The draft is written in the rep&rsquo;s voice, learned from the emails the rep has already sent, and is ready in under five minutes, before the rep opens their next tab. It references what the buyer actually said, attaches what was promised, and goes out from the rep&rsquo;s own Gmail or Outlook address, so the thread stays theirs. Teams choose the posture per rep or per stage: review before send, or send automatically with a short window to pull it back. Every sent follow-up is logged to HubSpot or Pipedrive as an activity, and the reply, when it comes, is captured into the same deal timeline.",
    },
    faqs: [
      { q: "Does the follow-up go out without a rep seeing it?", a: "Only if the team configures it that way. The default is a draft in the rep&rsquo;s outbox for review; a stage-by-stage auto-send option exists with a pull-back window." },
      { q: "How does it learn a rep&rsquo;s voice?", a: "From the rep&rsquo;s own sent mail on the connected mailbox: sentence length, greetings, sign-offs, how formal they are with a given account. There is no house style imposed." },
      { q: "What if the call promised a document?", a: "The draft names it and, where the document lives in a connected place, attaches it. If it cannot find the document it says so in the draft rather than promising it again." },
    ],
    more: [
      { h: "Why does speed matter for a follow-up?" },
      "The follow-up is the one artefact every buyer sees. When it arrives while the conversation is still fresh, it reads as attentiveness; when it arrives two days later it reads as a queue. Most teams that lose a deal they had earned lose it in that gap, not on the call. 2nd Closer removes the gap by drafting while the rep is walking to the next meeting.",
      "Speed without accuracy would be worse than slow, which is why the draft is built from cited fields rather than from a summary the model wrote freely. Every claim in the email (the pricing tier discussed, the date agreed, the name of the person to be introduced) traces to a line in the transcript or a sentence in a prior thread.",
    ],
  },
  "email-sequences": {
    answer: {
      q: "What are email sequences in 2nd Closer?",
      a: "2nd Closer runs multi-step email cadences that are configured per deal or per organisation and that respond to what is actually happening in the conversation. A step can be a fixed interval (three days after the last touch) or a condition (only if no reply, only if the champion opened the proposal, only after the security review is booked). Every step is drafted from live deal context, so a third touch references what changed since the first rather than repeating it. Sequences pause automatically the moment a real reply arrives or a meeting is booked, and they stop when a deal moves to a stage where outreach would be wrong. Each send comes from the rep&rsquo;s own address, is logged as an activity in HubSpot or Pipedrive, and can be reviewed before it goes out. The point is not volume; it is that no deal goes quiet because a rep forgot.",
    },
    faqs: [
      { q: "Will a sequence keep emailing someone who replied?", a: "No. Any reply, meeting booking or stage change pauses the sequence for that person, and the pause is logged on the deal." },
      { q: "Can steps use our own copy?", a: "Yes. A step can be fully drafted by 2nd Closer, a fixed template with live variables, or a hybrid the team writes once and lets 2nd Closer personalise per deal." },
      { q: "How is this different from a HubSpot sequence?", a: "HubSpot sequences send fixed copy on a fixed clock. 2nd Closer sequences draft each step from the current state of the deal and pause on real conversation, and they run the same way on Pipedrive." },
    ],
    more: [
      { h: "When should a sequence run at all?" },
      "Sequences are for the stretches when a deal is waiting on the buyer: between a first call and a scheduled demo, after a proposal, during a procurement review. They are not a substitute for the follow-up after a call, which is written once and sent from the rep, and they are not for prospecting, which 2nd Closer does not do.",
      "Because every step is drafted from the deal record, a sequence is also a good test of that record. If a third touch has nothing new to say, that is a signal the deal is stalled, and the same signal feeds risk detection.",
    ],
  },
  "stakeholder-mapping": {
    answer: {
      q: "What is stakeholder mapping in 2nd Closer?",
      a: "2nd Closer builds and maintains a map of the buying committee for every deal from what is said in conversations, not from what a rep remembers to log. Every person named in a call, email thread or LinkedIn exchange is added to the deal with a role (champion, economic buyer, technical evaluator, blocker, user), an influence score based on how often and in what context they appear, and a last-contact date. Each new person is enriched through Apollo with title, company and contact details, and written back to HubSpot or Pipedrive as an associated contact. On a typical deal, three to five stakeholders appear in conversations who were never in the CRM. The map is the input to two other things: LinkedIn warm-up to the people the rep has not yet reached, and risk detection, which flags a deal with no economic buyer in any conversation.",
    },
    faqs: [
      { q: "How is a stakeholder&rsquo;s role decided?", a: "From context: who asks about price, who signs, who runs the technical review, who is described as needing to be convinced. Roles are proposed with a citation and can be corrected by the rep; corrections are kept." },
      { q: "What does the influence score mean?", a: "A relative rank within the deal, from how often a person appears, whether they speak or are spoken about, and their role. It is a prompt for attention, not a verdict." },
      { q: "Does it work with an existing HubSpot buying-role property?", a: "Yes. If your CRM already has a buying-role or contact-role field, 2nd Closer maps to it instead of creating a parallel one." },
    ],
    more: [
      { h: "Why do committees go unmapped without this?" },
      "Because logging a contact is a chore that happens after the call, and after the call the rep has another call. The committee grows in the transcript (&ldquo;let me loop in our head of security&rdquo;) and never grows in the CRM. Six weeks later the deal stalls with a person nobody has met.",
      "Mapping from conversations fixes the input, not the discipline. The rep still decides who to meet; 2nd Closer makes sure the list of people to decide about is complete, current, and one click from a warm introduction.",
    ],
  },
  "linkedin-outreach": {
    answer: {
      q: "How does 2nd Closer use LinkedIn for a deal?",
      a: "2nd Closer opens LinkedIn connections and runs warm-up sequences to the members of a deal&rsquo;s buying committee that the rep has not yet reached, from the rep&rsquo;s own authenticated account, alongside the rep&rsquo;s active outreach. A warm-up is a short series of touches (a connection request with context from the deal, a message that references the conversation the rep is already in with a colleague) spaced across days and capped by daily limits set per account. Every action is mirrored to HubSpot or Pipedrive as an activity on the deal and on the contact, and every reply is captured into the deal timeline. The safety posture is on by default: rate limits, no bulk sends, nothing risky without explicit approval. This is deal execution, not prospecting: the people reached are the ones who already appear on a deal in progress.",
    },
    faqs: [
      { q: "Will this get a rep&rsquo;s LinkedIn account restricted?", a: "The limits are set below LinkedIn&rsquo;s published thresholds and are configurable per account; touches are spaced and never bulk. Any account can be paused instantly by the rep or an admin." },
      { q: "Does 2nd Closer prospect on LinkedIn?", a: "No. It reaches people who already appear on a deal in progress. Top-of-funnel prospecting is not something 2nd Closer does." },
      { q: "Can a rep review the message before it is sent?", a: "Yes. The default posture is review; auto-send is available per rep and per step, with a pull-back window." },
    ],
    sources: [S.linkedinLimits],
    more: [
      { h: "What makes a warm-up different from a sales sequence?" },
      "Context. A warm-up message to a head of security says that the rep is already working with their colleague on a security review and asks for twenty minutes; it does not pitch. Because it is drafted from the deal record it is specific, and because it goes from the rep&rsquo;s own account it is a person asking, not a tool.",
      "The result the rep wants is a reply that moves the committee, not a connection count. Warm-ups stop as soon as the person replies or joins a call, and the outcome is written to the stakeholder map so the next step is obvious.",
    ],
  },
  "competitor-intelligence": {
    answer: {
      q: "What does 2nd Closer do when a competitor comes up on a call?",
      a: "2nd Closer detects every mention of a registered competitor in every conversation, scores the threat per deal (low, medium or high, based on what was said and at which stage), and drafts counter-positioning grounded in the exact objection the buyer raised. The competitor field on the deal is written to HubSpot or Pipedrive with the citation, the threat score feeds risk detection, and the counter-positioning is folded into the next follow-up or touch rather than left in a battle card nobody opens. You register competitors once, with the positioning your team already uses; 2nd Closer learns which arguments land from the win/loss analysis over time. On a typical pipeline the first week of detection surfaces competitor mentions on a third more deals than the CRM had recorded, because reps mention them on calls and forget to log them.",
    },
    faqs: [
      { q: "Do we have to write battle cards?", a: "You register each competitor with a few lines of positioning; 2nd Closer drafts the counter-positioning per deal from that plus what the buyer said. Battle cards are linked if you have them, not required." },
      { q: "How is threat scored?", a: "Per deal, from the context of the mention: a passing reference in discovery is low; a named evaluation or a price comparison at proposal is high. The score is cited to the line that produced it." },
      { q: "Where does the competitor information go?", a: "To the competitor field on the deal record, to the deal timeline as a note with the citation, and into the win/loss analysis when the deal closes." },
    ],
    more: [
      { h: "Why per deal rather than per vendor?" },
      "The same competitor is a different threat in different deals. A rival with a strong integration story is dangerous in a technical evaluation and irrelevant to a buyer choosing on price. Scoring per deal keeps the counter-positioning about this buyer&rsquo;s objection rather than a generic comparison.",
      "Over time the pattern across deals is the intelligence: which competitor wins which segment, which counter-argument actually changes an outcome. That pattern is one of the inputs to process iteration, so the positioning your team uses improves from evidence instead of from the loudest anecdote.",
    ],
  },
  "industry-classification": {
    answer: {
      q: "How does 2nd Closer classify deals by industry?",
      a: "2nd Closer classifies every deal into the industry segments your team defines, using what the buyer says about their business in conversations plus the firmographic data Apollo returns for the company, and writes the segment to HubSpot or Pipedrive with a confidence score and the signals it used. The segments are yours: a marketing team with eight named verticals gets those eight, not a generic taxonomy. Classification runs on every new deal and re-runs when a conversation adds evidence, so a deal first tagged &ldquo;fintech&rdquo; at 60 percent confidence can be re-tagged &ldquo;payments infrastructure&rdquo; at 90 percent after the discovery call. The output feeds ICP scoring, nurture segmentation and segment-level reporting, and because every classification cites its signals, marketing and sales can argue about the definition rather than about the data.",
    },
    faqs: [
      { q: "Can we change the segment definitions later?", a: "Yes. Definitions are edited by an admin; existing deals are re-classified against the new definitions overnight, with the change logged." },
      { q: "What if a deal fits two segments?", a: "The primary segment is written with its confidence, and the runner-up is kept on the record. Low-confidence classifications are flagged for a human to confirm." },
      { q: "Does this replace the industry field we already have?", a: "It maps to it. If your CRM already has an industry property, 2nd Closer writes to that property rather than creating another." },
    ],
    more: [
      { h: "Why classify from conversations rather than from a database alone?" },
      "Firmographic databases know what a company files and what its website says. Buyers on a call describe what they actually do, which segment they think they are in, and which of your customers they compare themselves to. The conversation is the better signal, and the database is the tiebreaker.",
      "The confidence score is there so that reporting can be honest. A segment report that includes only classifications above a threshold is one a board can be shown; a report built from a free-text field a rep filled at the end of the quarter is not.",
    ],
  },
  "product-recommendations": {
    answer: {
      q: "How does 2nd Closer recommend products for a deal?",
      a: "2nd Closer recommends the right items from your catalogue for each deal, with a match score and suggested pricing, based on what the buyer said they need in conversations rather than on a rep&rsquo;s recollection. You build the catalogue with the columns you choose (SKU, tier, prerequisites, typical use, list price), including configurable products with options and dependencies. After a call, the recommendation shows which requirements each item satisfies and cites the lines that expressed them, so a rep can see that the &ldquo;Enterprise&rdquo; tier is suggested because the buyer asked for SSO and audit logs at minute 23. Recommendations are written to the deal in HubSpot or Pipedrive as line items or a note, depending on how your team quotes, and the rep decides what goes in the proposal. On multi-product deals this typically surfaces one or two relevant items the rep would not have thought to include.",
    },
    faqs: [
      { q: "Does it set the price?", a: "It suggests one from the catalogue rules you give it (list price, discount bands, volume tiers). A person decides what goes in the proposal; 2nd Closer never negotiates." },
      { q: "How is the catalogue kept current?", a: "It is a table you own; edit it in 2nd Closer or sync it from the products object in your CRM. Changes apply to new recommendations immediately." },
      { q: "Does it work with usage-based pricing?", a: "Yes, if the catalogue expresses the unit and the buyer&rsquo;s expected volume comes up in conversation; otherwise the recommendation names the unit and leaves the quantity for the rep." },
    ],
    more: [
      { h: "What is the recommendation grounded in?" },
      "Requirements the buyer stated, in their words. Each recommended item lists the requirements it meets and links each one to the transcript or email line where it was said. If a requirement was never stated, the recommendation does not assume it, which keeps proposals from being padded.",
      "Because the same requirements feed the follow-up email and the stakeholder map, the recommendation is consistent with everything else the buyer receives. The buyer reads a proposal that reflects their call, and the rep does not have to reconstruct it from memory.",
    ],
  },
  "process-iteration": {
    answer: {
      q: "How does 2nd Closer improve a sales process over time?",
      a: "2nd Closer runs a continuous win/loss analysis across every closed deal, proposes specific changes to the process (a field to add, a question to ask earlier, a stage criterion to tighten), and tests each proposal as an A/B experiment on live deals before anyone adopts it. A proposal is a hypothesis with evidence: for example, deals where the economic buyer joined a call before proposal closed at twice the rate, so the process should require that meeting before the proposal stage. The experiment runs on a share of new deals, the outcome is measured, and the result is presented to a revenue leader with the numbers. Nothing promotes itself; a person approves every change, and approved changes update the field map and playbook that 2nd Closer runs. Over a quarter this replaces the six-week feedback loop of a pipeline review with a process that learns from every deal.",
    },
    faqs: [
      { q: "What kinds of changes does it propose?", a: "Changes to what gets captured (a new field), when (a stage criterion), and what the rep does next (a recommended action). It does not change pricing, territories or quotas." },
      { q: "How long does an experiment run?", a: "Until it has enough closed deals to say something, which on a mid-sized pipeline is usually four to eight weeks. The dashboard shows the current confidence." },
      { q: "Who approves a change?", a: "Whoever the team designates: usually a VP Sales or RevOps lead. Approval is a one-click action with the evidence attached, and every change is logged." },
    ],
    more: [
      { h: "Why test before adopting?" },
      "Because most process changes in sales are adopted on anecdote. A deal was lost, a reason was given, a rule was added, and nobody measured whether the rule helped. Testing a change on a share of deals first means the rule that reaches the playbook is the one that moved an outcome.",
      "The analysis is only as good as the data, which is the reason the rest of 2nd Closer exists: fields filled the same way on every deal, with citations, are the first sales dataset most teams have that is clean enough to learn from.",
    ],
  },
  "conversation-capture": {
    answer: {
      q: "What does 2nd Closer capture from a deal?",
      a: "2nd Closer captures every interaction with the buyer (calls, email threads, LinkedIn messages and the CRM&rsquo;s own notes and history) into one structured timeline per deal, so that everything downstream works from the whole conversation rather than from the last call. Calls are captured by the built-in notetaker, which joins every booked meeting on Zoom, Google Meet and Microsoft Teams, or ingested from Fireflies, Fathom or Otter if the team already uses one. Email is two-way through Gmail or Outlook, so replies are captured as well as sends. LinkedIn DMs and InMail are first-class context, not an afterthought. And the history that existed in HubSpot or Pipedrive before 2nd Closer connected is read on the first night, so a deal that is six weeks old starts with six weeks of context. Capture is solved before structure begins, which is why the fields, follow-ups and risk flags can be trusted.",
    },
    faqs: [
      { q: "Do reps have to invite the notetaker?", a: "No. Once the calendar is connected, the notetaker joins every booked external call automatically. Reps can exclude a meeting in one click." },
      { q: "Does it record internal meetings?", a: "Not by default. Only meetings with external participants on a connected calendar are captured, and the rule is configurable." },
      { q: "What if we already pay for Fireflies or Fathom?", a: "Keep it. 2nd Closer ingests their transcripts and summaries, so nothing is re-recorded or re-transcribed." },
    ],
    more: [
      { h: "Why capture everything rather than just calls?" },
      "Because deals move in the gaps between calls. The buyer&rsquo;s reply that changes the timeline, the LinkedIn message that names a new stakeholder, the note a colleague left in the CRM last quarter: a summary built from the call alone misses all three, and the follow-up written from it reads as if the rep was not paying attention.",
      "One timeline per deal also makes the citations meaningful. A field that says the budget is confirmed can point to the exact email sentence, and a manager can read the sentence in context instead of trusting a summary of a summary.",
    ],
  },

  // ─── integrations ───────────────────────────────────────────────────────
  hubspot: {
    answer: {
      q: "What does 2nd Closer do in HubSpot?",
      a: "2nd Closer connects to HubSpot over OAuth in about fifteen minutes and writes back to the properties you already use. It reads every pipeline, stage and custom property on connection, so there is no schema to build and no workflow to design. After every call it updates the mapped properties on the deal, contact and company records (typically ten to twenty-two per deal: champion, budget, timeline, next step, competitor, and your own custom fields), each value linked to the transcript line that produced it, and leaves a value empty rather than guessing. It logs calls, emails and LinkedIn touches as activities on the timeline, associates newly discovered stakeholders as contacts with Apollo enrichment, and proposes stage advances for a manager to approve. The sync is two-way and real-time through the HubSpot API rather than a nightly batch, and HubSpot stays the system of record throughout.",
    },
    faqs: [
      { q: "Which HubSpot tier do I need?", a: "Any tier with API access, which includes Starter. 2nd Closer does not depend on Breeze, Sales Hub Professional workflows or Smart Deal Progression." },
      { q: "Does it create new properties in HubSpot?", a: "Only if you ask it to on the configuration call. The default is to write to properties that already exist." },
      { q: "Can we scope it to one pipeline?", a: "Yes. The field map is set per pipeline, and pipelines you leave out are read for context but never written to." },
    ],
    sources: [S.hubspotApi],
    more: [
      { h: "How does setup with HubSpot go, step by step?" },
      "A HubSpot super admin authorises 2nd Closer through the standard OAuth screen; no API key is pasted and no credentials are stored. 2nd Closer then reads the object schema and shows the field map: every deal, contact and company property, grouped by pipeline. On the configuration call you mark the properties to populate, the ones to leave alone, and the stage at which each one is expected to be filled. That is the whole configuration.",
      "From the next morning, every booked call on a connected calendar is captured, the mapped properties are written after each one with citations, and activities appear on the timeline exactly where a rep would have logged them. Existing open deals are backfilled overnight from the history HubSpot already holds.",
      { html: `<table class="fm-table"><caption>A typical HubSpot field map for a discovery-to-proposal pipeline</caption><thead><tr><th scope="col">HubSpot property</th><th scope="col">Filled from</th><th scope="col">Expected by stage</th></tr></thead><tbody><tr><th scope="row">Champion</th><td>Who advocates internally, from calls and email</td><td>Discovery</td></tr><tr><th scope="row">Economic buyer</th><td>Who owns the budget, named or inferred with a citation</td><td>Evaluation</td></tr><tr><th scope="row">Budget signal</th><td>Stated range, approval status, fiscal timing</td><td>Evaluation</td></tr><tr><th scope="row">Decision criteria</th><td>Requirements the buyer stated, in their words</td><td>Evaluation</td></tr><tr><th scope="row">Timeline</th><td>Target date and the reason behind it</td><td>Evaluation</td></tr><tr><th scope="row">Next step</th><td>The concrete action agreed on the last touch</td><td>Every stage</td></tr><tr><th scope="row">Competitor</th><td>Any registered competitor mentioned, with threat</td><td>Every stage</td></tr><tr><th scope="row">Top objection</th><td>The strongest concern raised, with the line</td><td>Proposal</td></tr></tbody></table>` },
    ],
  },
  pipedrive: {
    answer: {
      q: "What does 2nd Closer do in Pipedrive?",
      a: "2nd Closer connects to Pipedrive over OAuth, reads every pipeline, stage and custom field on connection, and then operates inside your Pipedrive without rewriting it. After every call it updates the mapped custom fields on the deal, person and organisation (typically ten to twenty per deal), each value linked to the line it came from and left empty when the conversation did not contain it. It logs calls, emails and LinkedIn touches as activities, adds newly discovered stakeholders as persons with Apollo enrichment, and proposes stage moves for a manager to approve. The sync is webhook-driven, so a change made in Pipedrive by a rep is visible to 2nd Closer within seconds and a value written by 2nd Closer appears in Pipedrive the same way. Pipedrive has no native equivalent of this after-call layer, which is why outbound-heavy teams that run it choose 2nd Closer over switching CRMs.",
    },
    faqs: [
      { q: "Which Pipedrive plan is required?", a: "Any plan with API access, which is all of them. Custom fields and webhooks are used; no add-ons are required." },
      { q: "Does it work with multiple pipelines?", a: "Yes. The field map is set per pipeline, and stage expectations differ per pipeline if you want them to." },
      { q: "Are Pipedrive activities created for every touch?", a: "Calls, sent emails and LinkedIn touches are logged as activities on the deal with their outcome; the type mapping is chosen on the configuration call." },
    ],
    sources: [S.pipedriveApi],
    more: [
      { h: "How does setup with Pipedrive go, step by step?" },
      "A Pipedrive admin authorises 2nd Closer through OAuth. 2nd Closer registers webhooks for deals, persons, organisations and activities, reads the custom-field definitions, and shows the field map per pipeline. On the configuration call you choose the fields to populate and the stage each is expected by. Nothing is renamed and no field is created unless you ask.",
      "The next morning, every booked call is captured, mapped fields are written with citations, and activities appear on each deal. Open deals are backfilled overnight from the notes, emails and activities already in Pipedrive.",
      { html: `<table class="fm-table"><caption>A typical Pipedrive field map for an outbound pipeline</caption><thead><tr><th scope="col">Pipedrive custom field</th><th scope="col">Filled from</th><th scope="col">Expected by stage</th></tr></thead><tbody><tr><th scope="row">Champion (person)</th><td>Who advocates internally, from calls and email</td><td>Qualified</td></tr><tr><th scope="row">Decision maker (person)</th><td>Who signs, named or inferred with a citation</td><td>Demo scheduled</td></tr><tr><th scope="row">Budget status</th><td>Stated range and approval status</td><td>Demo scheduled</td></tr><tr><th scope="row">Use case</th><td>The problem the buyer described, in their words</td><td>Qualified</td></tr><tr><th scope="row">Timeline</th><td>Target date and the reason behind it</td><td>Proposal</td></tr><tr><th scope="row">Next activity</th><td>The concrete action agreed on the last touch</td><td>Every stage</td></tr><tr><th scope="row">Competitor</th><td>Any registered competitor mentioned, with threat</td><td>Every stage</td></tr><tr><th scope="row">Lost reason (on close)</th><td>The stated reason, cited, for win/loss analysis</td><td>Closed</td></tr></tbody></table>` },
    ],
  },
  gmail: {
    answer: {
      q: "How does 2nd Closer work with Gmail?",
      a: "2nd Closer connects to Gmail or Google Workspace with a per-user OAuth grant, or a Workspace-admin grant for the whole team, and syncs email two-way: threads with external contacts are captured into the deal timeline, and follow-ups 2nd Closer drafts are sent from the rep&rsquo;s own authenticated address so the thread stays theirs. Only mail with people who appear on a deal is read; internal mail, personal mail and newsletters are excluded by rule. Sent follow-ups and the replies they receive are logged to HubSpot or Pipedrive as activities within minutes, which is how the CRM ends up with the complete thread rather than the one message a rep remembered to log. The default posture is drafts for review, not auto-send. Connecting takes about five minutes per user and is part of the four sign-ins that make up setup.",
    },
    faqs: [
      { q: "Does 2nd Closer read all of my email?", a: "No. Only threads with external contacts who appear on a deal in the CRM. Everything else is never fetched, and the rule is visible to the user." },
      { q: "Can an admin connect the whole team at once?", a: "Yes. A Google Workspace admin can grant domain-wide access so reps do not each go through OAuth; individual reps can still connect themselves." },
      { q: "Where do sent emails appear?", a: "In the rep&rsquo;s Gmail sent folder like any other message, and on the deal timeline in HubSpot or Pipedrive as a logged email." },
    ],
    more: [
      { h: "Why send from the rep&rsquo;s address rather than a tool address?" },
      "Because a buyer replies to a person. Mail from a sequencing tool&rsquo;s domain reads as automation, gets filtered, and breaks the thread the rep has been building. Sending through Gmail with the rep&rsquo;s own identity keeps deliverability, keeps the history in one place, and means the rep can pick up the thread on their phone.",
      "It also keeps control where it belongs. The rep sees every draft in their own outbox, can edit or discard it, and can pause 2nd Closer for a thread with one click.",
    ],
  },
  outlook: {
    answer: {
      q: "How does 2nd Closer work with Outlook and Microsoft 365?",
      a: "2nd Closer connects to Outlook through Microsoft 365 with the same depth as Gmail: two-way thread capture for external contacts on a deal, follow-ups sent from the rep&rsquo;s authenticated address, and every send and reply logged to HubSpot or Pipedrive within minutes. A Microsoft 365 admin can consent for the tenant so reps do not each sign in, and the permissions requested are the minimum for reading deal-related mail and sending as the user. Mail that is not with a contact on a deal is never fetched, which matters in regulated environments where the mailbox holds material no vendor should see. Feature parity with Gmail is complete: the same review-before-send default, the same activity logging, the same exclusions. Connecting takes about five minutes per user or one admin consent for everyone.",
    },
    faqs: [
      { q: "Which Microsoft permissions are requested?", a: "Read access to mail with contacts on a deal and send-as for the user, granted through the standard Microsoft consent screen, which lists every scope." },
      { q: "Does it work with shared mailboxes?", a: "Sending is always from the individual rep. Shared mailboxes can be read for capture if an admin includes them." },
      { q: "Is anything different from Gmail?", a: "No. The two integrations have the same features; only the sign-in differs." },
    ],
    more: [
      { h: "What does a security review of the Outlook integration cover?" },
      "The scopes requested, the rule that limits reading to deal-related threads, and the fact that credentials are never stored because access is by OAuth token that the admin can revoke in the Microsoft 365 console at any time. Mail and transcripts are processed to extract structured fields and then discarded; only the structured output is written to the CRM. A formal SOC 2 audit is ahead of 2nd Closer, not behind it, and the intro call is the place to bring a security team&rsquo;s questions.",
      "For teams that need it, capture can be limited to specific domains or to deals in specific pipelines, so a regulated business unit can run 2nd Closer without exposing mailboxes outside it.",
    ],
  },
  fireflies: {
    answer: {
      q: "Does 2nd Closer work with Fireflies?",
      a: "2nd Closer has a first-class Fireflies integration: recordings, transcripts and meeting summaries flow from Fireflies into the deal timeline and feed every downstream step (the CRM fields, the follow-up, the stakeholder map, risk detection) exactly as if 2nd Closer&rsquo;s own notetaker had captured the call. Nothing is re-recorded or re-transcribed. The integration exists because many teams already pay for Fireflies and have a year of transcripts in it; on connection, that history is read so existing deals start with context. Teams can run both: the built-in notetaker joins calls Fireflies does not cover, and Fireflies remains the tool reps open to re-listen. Connecting takes a Fireflies API key and about five minutes. Fathom and Otter are supported the same way, and Gong recordings can be ingested on request.",
    },
    faqs: [
      { q: "Do we still need the built-in notetaker?", a: "Not for calls Fireflies already joins. Many teams keep both so that no booked call is missed; the notetaker can also be turned off entirely." },
      { q: "Is the Fireflies summary used, or the transcript?", a: "Both are captured. The structured fields are drawn from the transcript, with citations to its timestamps; the Fireflies summary is kept on the timeline for reference." },
      { q: "What about historical Fireflies meetings?", a: "They are imported on connection and matched to deals by participant email, so open deals gain their past calls as context." },
    ],
    more: [
      { h: "What does Fireflies do that 2nd Closer does not, and the reverse?" },
      "Fireflies records, transcribes and summarises a meeting and lets a team search across meetings. It stops at the meeting. 2nd Closer starts where the meeting ends: the fields are written to the CRM with citations, the follow-up is drafted and sent, the committee is mapped, the risk is flagged, and the process learns from the outcome.",
      "That is the reason the two are complements rather than alternatives. A team that likes Fireflies keeps it and adds the after-call work; a team without a notetaker gets one built in.",
    ],
  },
  apollo: {
    answer: {
      q: "How does 2nd Closer use Apollo?",
      a: "2nd Closer enriches every new contact discovered in a conversation through Apollo (company, role, title, email, phone and firmographics) automatically, the moment the person is named on a call or in an email, and writes the result to the contact record in HubSpot or Pipedrive. There is no manual lookup and no separate tab; a rep who hears &ldquo;let me loop in Maria from security&rdquo; finds Maria on the deal, enriched, before the call has ended. Existing pipeline records are backfilled overnight after connection. The same firmographic data feeds ICP scoring and industry classification, so a deal&rsquo;s fit is assessed from what Apollo knows about the company plus what the buyer said. Connecting takes an Apollo API key and about five minutes, and enrichment credits are consumed only for people who actually appear in a deal, not for lists.",
    },
    faqs: [
      { q: "Do we need an Apollo subscription?", a: "Yes, an Apollo plan with API access; enrichment draws on your credits. Teams without Apollo can run 2nd Closer without enrichment and add it later." },
      { q: "Which fields are written back?", a: "Title, role, company, work email, phone where available, and company firmographics, mapped to the contact and company properties you choose." },
      { q: "Does it enrich people who are not on a deal?", a: "No. Only people who appear in a conversation on a deal, which keeps credit use proportional to real pipeline." },
    ],
    sources: [S.apollo],
    more: [
      { h: "Why enrich from conversations rather than from lists?" },
      "Because the people who matter to a deal are the ones who appear in it, and most of them are never on a list. The committee grows in transcripts and email CCs; enriching at that moment is what makes the stakeholder map and the LinkedIn warm-up possible without a rep doing research between calls.",
      "For teams already using Apollo for prospecting nothing changes upstream. 2nd Closer does not prospect; it makes sure that once a deal exists, every person in it is known.",
    ],
  },
  linkedin: {
    answer: {
      q: "What does the LinkedIn integration do?",
      a: "2nd Closer connects to a rep&rsquo;s LinkedIn account with their authentication and uses it for four things: capturing DMs and InMail with people on a deal into the deal timeline, running warm-up outreach to buying-committee members the rep has not yet reached, enrolling stakeholders into sequences, and mirroring every LinkedIn activity into HubSpot or Pipedrive as an activity on the deal and the contact. Safety controls are on by default and configured per account: daily limits below LinkedIn&rsquo;s published thresholds, spacing between touches, no bulk actions, and nothing that carries risk without explicit approval. The CRM is canonical, so a LinkedIn conversation is as visible to a manager as an email thread. Connecting takes about five minutes and is optional; a team can run 2nd Closer without LinkedIn and add it when it wants the committee worked.",
    },
    faqs: [
      { q: "Is this against LinkedIn&rsquo;s terms?", a: "2nd Closer acts as the rep, with the rep&rsquo;s authentication, at human pace and within published limits, and only towards people already on a deal. Reps and admins can pause it instantly. We publish the limits we use." },
      { q: "Does 2nd Closer send connection requests on its own?", a: "Only within a warm-up the rep has approved, and every message can be reviewed before it goes. Auto-send is opt-in per rep." },
      { q: "Can a manager see LinkedIn conversations?", a: "Yes, through the CRM, where they are logged as activities on the deal. The rep&rsquo;s LinkedIn inbox itself is not shared." },
    ],
    sources: [S.linkedinLimits],
    more: [
      { h: "What does mirroring into the CRM change?" },
      "It ends the split where half a deal happens in LinkedIn and the CRM shows none of it. A message from a champion saying the security review is booked becomes an activity on the deal within minutes, the next-step field is updated with a citation, and the follow-up email reflects it.",
      "For the rep it means one less place to update. For the manager it means the pipeline review can be run from the CRM alone, because the CRM finally contains the conversation.",
    ],
  },

  // ─── platform ───────────────────────────────────────────────────────────
  workspace: {
    answer: {
      q: "What is the 2nd Closer workspace?",
      a: "2nd Closer&rsquo;s workspace is the screen a sales team opens in the morning: a pipeline view with every deal&rsquo;s fields filled and cited, a deal detail page that puts the timeline, the stakeholder map, the open risks and the drafted follow-up on one screen, and a risk feed ranked by severity across the pipeline. It is not a CRM; HubSpot or Pipedrive remains the system of record and every value shown here is the one written there. The workspace exists for the work the CRM is bad at: reading a whole deal in one place, approving a stage advance with the evidence attached, reviewing a follow-up before it goes, and seeing which of forty deals needs attention today. Managers, RevOps and leadership read it free; only closers are seats. Saved views are per user, and bulk actions cover the few things worth doing across many deals, such as approving a batch of drafts.",
    },
    faqs: [
      { q: "Do reps have to use the workspace?", a: "No. Everything 2nd Closer does lands in the CRM and the rep&rsquo;s inbox. The workspace is where a manager reads the pipeline and where a rep goes to see the evidence behind a field." },
      { q: "Does the workspace duplicate the CRM?", a: "No. It shows the same values the CRM holds, with the evidence behind each one. Corrections made in the workspace are written to the CRM and logged as human corrections." },
      { q: "Can leadership see everything?", a: "Roles decide. A leadership role sees every pipeline; a rep sees their own deals; RevOps sees the field map and the process experiments." },
    ],
    more: [
      { h: "How does the workspace relate to the CRM?" },
      "The CRM stores the record; the workspace shows the reasoning. A field in HubSpot says the budget is confirmed. The same field in the workspace says it is confirmed because the buyer said so at minute 31 of the second call, and shows the sentence. A stage in Pipedrive says Proposal. The workspace shows the proposal was proposed by 2nd Closer and approved by a manager on a given date, with the criteria met.",
      "That is why the workspace is read-mostly. Corrections made here are written to the CRM and cited as human corrections; nothing lives here that the CRM does not also hold.",
    ],
  },
  "chrome-extension": {
    answer: {
      q: "What does the 2nd Closer Chrome extension do?",
      a: "2nd Closer&rsquo;s Chrome extension adds a &ldquo;Write with 2nd Closer&rdquo; button to the email composer inside HubSpot and Pipedrive, so a rep who lives in the CRM can draft a follow-up or a reply from the full deal context without leaving the page. It detects which CRM it is in and which deal the composer belongs to, pulls the transcript, prior threads and open risks for that deal, and drafts in the rep&rsquo;s voice in a few seconds. The rep edits and sends from the CRM as usual; the sent email is captured, logged as an activity, and closes the loop on the deal timeline so the next draft knows about it. Authentication is per user, with a personal API key stored locally on the rep&rsquo;s machine that can be revoked from their profile if a device is lost. Installation takes a minute from the Chrome Web Store.",
    },
    faqs: [
      { q: "Does the extension read other websites?", a: "No. It activates only on HubSpot and Pipedrive pages, and only on the email composer within them." },
      { q: "Is it required to use 2nd Closer?", a: "No. Follow-ups are drafted and sent without it. The extension is for reps who prefer to write and send from inside the CRM." },
      { q: "How does the extension authenticate?", a: "With a per-user API key from the rep&rsquo;s 2nd Closer profile, stored locally in the browser. Revoke the key from the profile and the extension stops working on that device." },
    ],
    more: [
      { h: "When is the extension the better path?" },
      "When a reply needs a person&rsquo;s judgment before it goes: a pricing question, a sensitive thread, a buyer who has escalated. The rep opens the composer in the CRM, asks 2nd Closer for a draft that knows the whole deal, and edits it in place. The draft is a starting point with the facts right; the tone and the decision stay with the rep.",
      "For routine follow-ups after calls the rep does not need to be involved at all, which is the default path. The extension is the manual gear for the moments that need it.",
    ],
  },
  team: {
    answer: {
      q: "How are roles and permissions handled in 2nd Closer?",
      a: "2nd Closer has four roles with real boundaries: Owner, Admin, Manager and Closer. Owners control billing and can delete the organisation. Admins manage integrations, the field map and team settings. Managers see every deal on their team, approve stage advances and review drafts. Closers see and act on their own deals. Each organisation is a separate tenant with its own CRM connection, users, settings and data; there is no cross-organisation leakage by construction. Only closers count as seats: manager, RevOps and leadership users are free and unlimited, so nobody who needs to read the pipeline is kept out to save money. Members are invited by email with a tokenised link and land in the organisation with the right role in one click. Sensitive operations (connecting a CRM, changing the field map) are scoped to admins and above, and every change is logged.",
    },
    faqs: [
      { q: "Can a closer see another closer&rsquo;s deals?", a: "Not by default. Closers see and act on their own deals; managers see the whole team." },
      { q: "Who can change the field map?", a: "Admins and owners. Changes are versioned, and the win/loss analysis records which version a deal ran on." },
      { q: "What happens when someone leaves?", a: "An admin removes the seat from the team page; billing reflects it immediately and the user&rsquo;s per-user connections (email, calendar, LinkedIn) are revoked." },
    ],
    more: [
      { h: "Why are non-closer seats free?" },
      "Because the value of a complete CRM is in who reads it. Charging per reader is how pipeline reviews end up run from screenshots. Managers, RevOps and leadership need the workspace open all day, and the pricing model should not argue with that.",
      "It also fits how the product works: closers are the people 2nd Closer does work for, one second AE per closer, so closers are the unit that counts.",
    ],
  },
  setup: {
    answer: {
      q: "How long does it take to set up 2nd Closer?",
      a: "2nd Closer is live by the morning after a configuration call, with under an hour of your team&rsquo;s time in total. Setup is four OAuth sign-ins and one call. The CRM first: HubSpot or Pipedrive, about fifteen minutes, and 2nd Closer reads every pipeline, stage and custom field so there is no schema to build. Then the calendar (Google or Microsoft, five minutes) so the notetaker joins every booked call; LinkedIn (five minutes) for capture and warm-up; and Apollo (five minutes) for enrichment. The configuration call is 20 to 30 minutes with us, walking through the field map: which fields to populate, what a good value looks like, which to leave alone. No brief, no engineer, no workflow nodes. By 9am the next day every booked call is captured, every mapped field is populating, and every follow-up is staged for the rep.",
    },
    faqs: [
      { q: "Do we need an engineer or a workflow builder?", a: "No. There is nothing to build. The configuration is a conversation about your field map, and 2nd Closer reads your CRM schema itself." },
      { q: "Can we start with only the CRM and calendar?", a: "Yes. LinkedIn and Apollo are optional and can be added later in five minutes each." },
      { q: "What if our process changes after setup?", a: "The field map is edited by RevOps at any time, and 2nd Closer proposes changes itself from win/loss analysis, which a person approves." },
    ],
  },
};
