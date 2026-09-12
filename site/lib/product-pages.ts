import type { PageData } from "./types";

// 2nd Closer marketing — Product feature page data
// Each entry renders via <Subpage slug="..." />.

export const PRODUCT_PAGES: PageData[] = [

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'risk-detection',
    section: 'product',
    category: 'Live risk detection',
    h: 'See deals slip <em>before they do.</em>',
    sub: 'A live feed of every deal at risk, scored across five categories and surfaced with severity, source line, and the next action.',
    meta: [
      ['Surface', 'Live risks feed'],
      ['Categories', 'Five core'],
      ['Latency', 'Real-time'],
      ['Owner', 'Manager + AE'],
    ],
    prose: [
      'Every CRM tells you a deal lost. 2nd Closer tells you a deal is losing. The live risks feed is the screen managers open on Monday morning instead of the pipeline report — because by the time the pipeline report is wrong, the deal is gone.',
      '2nd Closer continuously scans every conversation across five risk categories. Missing decision-maker. Budget unconfirmed past stage three. Competitive threat introduced and left unanswered. Timeline slipping a quarter at a time. Champion gone quiet for fourteen days. The thresholds are yours; these are the defaults.',
      { h: 'Severity, source, and the next action.' },
      'Every risk lands with three things attached: a severity score, the exact line in the transcript that triggered it, and the recommended action. Reps get a flag they can act on. Managers get a feed they can coach from. Nobody has to re-watch a sixty-minute call to figure out where the deal turned.',
      { h: 'Risk dies when it&rsquo;s seen, not when it&rsquo;s reported.' },
      '2nd Closer&rsquo;s risk surface is real-time, not weekly. The moment a transcript is processed, the risks against that deal are updated. The forecast call stops being an archaeology dig and starts being a strategy meeting.',
    ],
    bullets: [
      ['Five risk categories', 'Missing decision-maker, budget uncertainty, competitive threat, timeline drift, and champion disengagement.'],
      ['Source-line citations', 'Every risk links to the exact line in the call or email that produced it. No re-listening.'],
      ['Severity + recommended action', 'Critical, medium, or low, each paired with a specific next step you can ship.'],
      ['Real-time, not weekly', 'Risks update the moment a conversation is processed. Forecasting variance drops accordingly.'],
    ],
    shotLabel: 'Live risks feed · 8 active deals',
    shotHint: 'Severity, the source line, and the recommended action, for every deal at risk, right now.',
    related: ['engagement-summaries', 'stakeholder-mapping', 'process-iteration'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'engagement-summaries',
    section: 'product',
    category: 'AI engagement summaries',
    h: 'Deal summaries that <em>cite their sources.</em>',
    sub: 'Configure the structure, define the fields, set the tone. 2nd Closer fills them in and shows you the exact line every value came from.',
    meta: [
      ['Configurability', 'Per pipeline'],
      ['Field accuracy', '92–97%'],
      ['Citations', 'Per-field, to source line'],
      ['Surface', 'Deal detail view'],
    ],
    prose: [
      'Most AI summaries collapse a sixty-minute call into a paragraph nobody trusts. 2nd Closer&rsquo;s engagement summaries are built differently: you decide the structure, you decide the fields, you decide the tone. 2nd Closer does the writing — and shows you the source for every value.',
      'A summary in 2nd Closer is not free-form text. It is a structured record with the fields your team needs in the order your team needs them. Champion. Budget signal. Timeline. Decision criteria. Top objection. Next step. Whatever your playbook actually depends on.',
      { h: 'Citations make the difference.' },
      'Every populated field is paired with the exact line in the transcript that produced it. Click the value, see the source. No black-box paragraph. No "trust me" generation. The summary is auditable — by the rep, by the manager, by procurement.',
      { h: '92–97% field accuracy on well-structured calls.' },
      'When information is discussed clearly, 2nd Closer produces near-perfect outputs. When information is ambiguous or wasn&rsquo;t covered, 2nd Closer leaves the field empty rather than guess. Empty over wrong is a rule, not a polite afterthought.',
    ],
    bullets: [
      ['Custom summary structure', 'Fields, sections, rich-text blocks, built to match your team\u2019s playbook, not a generic template.'],
      ['Field-level citations', 'Every value links to the line in the transcript that produced it. Click to verify.'],
      ['Empty over wrong', 'When information is ambiguous or undiscussed, 2nd Closer leaves the field empty.'],
      ['Versioned configuration', 'Summary structure changes are versioned, audit-trailed, and pipeline-scoped.'],
    ],
    shotLabel: 'Deal summary · cited',
    shotHint: 'Every field paired with the source line. Verifiable in one click.',
    related: ['risk-detection', 'crm-hygiene', 'conversation-capture'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'crm-hygiene',
    section: 'product',
    category: 'CRM data hygiene & auto-population',
    h: 'CRM field completion goes <em>from 31% to 100%.</em>',
    sub: 'Your fields, populated from every conversation, written back to HubSpot or Pipedrive, without anyone on your team logging a thing.',
    meta: [
      ['Target completion', '~100%'],
      ['Industry baseline', '<35%'],
      ['Sync', 'Real-time, two-way'],
      ['Owner', 'RevOps'],
    ],
    prose: [
      'The CRM problem nobody fixes is field completion. Closers don&rsquo;t log calls. Fields are empty. Pipeline reviews run on guesswork. The category has spent fifteen years building reminders and validation rules, and the average company still hovers around thirty-five percent completion.',
      '2nd Closer solves it by removing the human from the loop entirely. Every conversation — call, email, LinkedIn touch — is structured against your CRM schema and written back to HubSpot or Pipedrive in real time. The fields fill themselves.',
      { h: 'Your schema. Not ours.' },
      '2nd Closer reads your existing CRM fields, including every custom field you&rsquo;ve built. Champion strength. Budget signal. Renewal lever. Whatever&rsquo;s already in your HubSpot or Pipedrive setup, 2nd Closer populates. No template imposed. No re-architecture asked for.',
      { h: 'Real-time, not nightly.' },
      'CRM updates happen as conversations are processed, not on a nightly batch. Your Friday pipeline review is reading data captured in this week&rsquo;s calls, not last quarter&rsquo;s.',
    ],
    bullets: [
      ['Your custom fields', 'Every field you\u2019ve built in HubSpot or Pipedrive. 2nd Closer reads your schema, doesn\u2019t impose one.'],
      ['Two-way real-time sync', 'Updates flow continuously. No overnight batch jobs.'],
      ['Per-pipeline mapping', 'Different pipelines, different field maps. Configured once, kept current.'],
      ['Schema versioning', 'Every change to the field map is versioned and audit-trailed.'],
    ],
    shotLabel: 'Field-map view · pipeline-scoped',
    shotHint: 'Every CRM field, mapped to an AI-extractable structure. One screen.',
    related: ['engagement-summaries', 'hubspot', 'pipedrive'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'follow-up-emails',
    section: 'product',
    category: 'AI-drafted follow-up emails',
    seoTitle: 'Follow-up email after every sales call, written and sent in five minutes',
    h: 'The follow-up writes itself. <em>In your voice.</em>',
    sub: 'Drafted from the actual deal — transcripts, prior threads, open risks — and ready before your rep opens their next tab.',
    meta: [
      ['Latency', '< 5 min after call'],
      ['Grounded in', 'Transcript + threads + risks'],
      ['Voice', 'Per-rep tone match'],
      ['Steering', 'Free-text regeneration'],
    ],
    prose: [
      'Follow-ups are the moment where deals quietly die. The call ends, the rep gets pulled into the next thing, and by the time the email goes out it&rsquo;s two days late and generic. 2nd Closer closes that gap.',
      'Within minutes of a call ending, 2nd Closer drafts the follow-up using the actual conversation — the things the buyer said, the next step they agreed to, the document Maria asked for. Not a template with a name swapped in. The specific reply this specific deal needs.',
      { h: 'Steerable, not autopilot.' },
      'Drafts land where the rep can review and edit. If something isn&rsquo;t right, regenerate with free-text steering: "make it more formal," "lead with urgency," "shorten it to three lines." No prompt engineering, no rewrite from scratch.',
      { h: 'Your voice. Not the AI&rsquo;s.' },
      '2nd Closer matches the tone of follow-ups your team has sent before. Reps recognise their own writing in the draft and edit one paragraph instead of writing it cold at 6pm.',
    ],
    bullets: [
      ['Grounded in the deal', 'Built from transcripts, prior emails, and open risks, not a template substitution.'],
      ['Sent in under 5 minutes', 'Drafted before the rep\u2019s next call starts. Sent from your CRM, in your voice.'],
      ['Free-text steering', '\u201CMore formal,\u201D \u201Clead with urgency,\u201D \u201Cshorter\u201D. Regenerate without rewriting.'],
      ['Multi-step sequences', 'For deals that need a sequence, 2nd Closer builds one across the next two weeks.'],
    ],
    shotLabel: 'Drafted follow-up · staged from call',
    shotHint: 'Personalised to the actual conversation. Ready to send four minutes after the call ended.',
    related: ['email-sequences', 'chrome-extension', 'conversation-capture'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'email-sequences',
    section: 'product',
    category: 'Email sequences',
    h: 'Sequences that <em>know the deal.</em>',
    sub: 'Multi-step cadences, configured per deal or per organisation, with timing and conditions that respond to what&rsquo;s actually happening in the conversation.',
    meta: [
      ['Scope', 'Per-deal + org-wide'],
      ['Steps', 'Unlimited'],
      ['Conditioning', 'On reply, stage, risk'],
      ['Templates', 'Versioned, variable-substituted'],
    ],
    prose: [
      'Most sequence tools run a fixed playbook regardless of what happens in the deal. They send step three on day five whether or not the prospect replied to step two with a critical objection. 2nd Closer&rsquo;s sequences are aware of the deal.',
      'Every step can condition on what 2nd Closer knows: did the prospect reply, was a risk introduced, did the stage advance. Sequences pause when a real conversation is in flight and resume when it isn&rsquo;t.',
      { h: 'Two scopes.' },
      'Build org-wide sequences for SDR-style cadences your whole team uses. Build deal-level sequences for active opportunities where the cadence is specific to that customer&rsquo;s journey. Both share the same template library and the same variable substitution.',
      { h: 'Variables that pull live deal context.' },
      'Template variables substitute from live deal data: deal name, company, named stakeholders, the next agreed step, the last meeting&rsquo;s summary. Templates are versioned and can be drafted, reviewed, and published like any other content.',
    ],
    bullets: [
      ['Per-deal sequences', 'Build a cadence specific to an active opportunity. Adjust it as the deal evolves.'],
      ['Organisation-wide sequences', 'Shared SDR/AE cadences across the team, with pause settings centrally managed.'],
      ['Conditional steps', 'Step timing and content can respond to reply, stage change, or new risk.'],
      ['Versioned templates', 'Draft, review, publish. Variables substitute from live deal data.'],
    ],
    shotLabel: 'Sequence editor · 6 steps · 12 active deals',
    shotHint: 'Conditional steps that respond to what the deal does.',
    related: ['follow-up-emails', 'linkedin-outreach', 'workspace'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'stakeholder-mapping',
    section: 'product',
    category: 'Stakeholder mapping & buying-committee discovery',
    seoTitle: 'Stakeholder mapping for sales, kept current automatically',
    h: 'Stakeholder mapping, <em>kept current automatically.</em>',
    sub: 'Every name mentioned in every conversation, mapped to a role and an influence score, and written back to the deal record.',
    meta: [
      ['Discovery', 'From transcripts + threads'],
      ['Roles inferred', 'Champion, blocker, EB, more'],
      ['Sync', 'Continuous → CRM'],
      ['Best fit', 'Complex / enterprise deals'],
    ],
    prose: [
      'Enterprise deals are won and lost on stakeholder mapping. The team that knows the committee — champion, blocker, economic buyer, technical evaluator, procurement — wins more often than the team relying on a chart drawn once at discovery and never updated.',
      '2nd Closer identifies every stakeholder mentioned across every conversation tied to a deal. It infers role and influence from context: who is signing, who is blocking, who is championing. The map is written into the deal record and stays current as the conversation continues.',
      { h: 'No more "ghost" stakeholders.' },
      'When a name surfaces mid-call — "we&rsquo;ll need to loop in Maria from security" — 2nd Closer picks it up, proposes the role, and adds them to the map. The first time you hear about Maria isn&rsquo;t the email three weeks later when she vetoes the deal.',
      { h: 'Tied to risk detection.' },
      'Missing decision-makers and stakeholder-ratio collapse are among the risk signals 2nd Closer watches for. The stakeholder map and the risk feed share the same source of truth.',
    ],
    bullets: [
      ['Discovered automatically', 'From every transcript, every email, every LinkedIn touch, not a rep\u2019s memory.'],
      ['Role + influence inference', 'Champion, economic buyer, blocker, technical evaluator, end user, with confidence scores.'],
      ['Written to CRM', 'Contacts are upserted to your CRM with role tags. No manual data entry.'],
      ['Feeds risk detection', 'Missing decision-makers and committee imbalance are first-class risk signals.'],
    ],
    shotLabel: 'Stakeholder map · Vertex Financial',
    shotHint: 'Champion, blockers, EB, security review. Current, inferred, written back.',
    related: ['risk-detection', 'linkedin-outreach', 'engagement-summaries'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'linkedin-outreach',
    section: 'product',
    category: 'LinkedIn warm-up outreach',
    seoTitle: 'LinkedIn automation for the buying committee, safe by construction',
    h: 'Relationships built <em>in parallel to the deal.</em>',
    sub: '2nd Closer identifies every stakeholder, opens LinkedIn connections, and runs warm-up sequences alongside your closer&rsquo;s active outreach. The moat feature.',
    meta: [
      ['Identification', 'From stakeholder map'],
      ['Channels', 'Connection, DM, InMail'],
      ['Safety', 'Daily limits, warm-up cadence'],
      ['CRM mirror', 'Activity logged on the deal'],
    ],
    prose: [
      'Most outreach tools stop at the rep&rsquo;s outbound. 2nd Closer goes further. The moment a buying committee member is identified in any conversation, 2nd Closer opens a LinkedIn connection and runs a warm-up sequence with them.',
      'The closer isn&rsquo;t doing the work. 2nd Closer is. By the time the deal needs Maria from security to weigh in, Maria already has a relationship with someone on your team via LinkedIn. Relationships compound; this is the layer that builds them while you&rsquo;re sleeping.',
      { h: 'Safe by construction.' },
      'LinkedIn outreach is rule-bound. 2nd Closer enforces daily action limits per account, slow warm-up cadences for new accounts, and platform-safe behaviour patterns. The whole framework is built so you scale outreach without burning the account.',
      { h: 'Mirrored into the CRM.' },
      'Every LinkedIn touch — connection sent, accepted, message delivered, reply received — mirrors into the connected CRM as an activity on the deal. Your CRM stays the system of record. Nothing happens off-platform.',
    ],
    bullets: [
      ['Auto-enrollment from stakeholder map', 'Identified stakeholders are enrolled into warm-up sequences automatically.'],
      ['Step-level safety controls', 'Daily action limits, warm-up cadence, platform-safe usage patterns.'],
      ['Connection + DM + InMail', 'All three channels supported, with sequencing across them.'],
      ['Activity mirrored to CRM', 'Every touch logged on the deal. Your CRM stays canonical.'],
    ],
    shotLabel: 'LinkedIn enrollments · 23 stakeholders active',
    shotHint: 'Connection status, message delivery, engagement per step, across the buying committee.',
    related: ['stakeholder-mapping', 'linkedin', 'follow-up-emails'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'competitor-intelligence',
    section: 'product',
    category: 'Competitor intelligence',
    h: 'Counter-position from <em>what the prospect actually said.</em>',
    sub: 'Register your competitors. 2nd Closer detects every mention in every conversation, scores threat per deal, and proposes counter-positioning grounded in the call.',
    meta: [
      ['Detection', 'From transcripts + emails'],
      ['Threat scoring', 'Per deal'],
      ['Output', 'Counter-positioning + battle card'],
      ['Best fit', 'Crowded categories'],
    ],
    prose: [
      'If you sell against the same two or three competitors every week, you already have the battle cards. The problem is connecting the right battle card to the right deal at the right moment — without your reps having to remember which page of the Notion to open mid-call.',
      '2nd Closer detects competitor mentions in every conversation. When a name shows up — "we&rsquo;re also looking at Clari" — 2nd Closer tags the deal with a threat level and surfaces the specific positioning that addresses what the prospect actually said about the competitor, not a generic comparison sheet.',
      { h: 'Per-deal threat, not per-vendor.' },
      'Threat is scored at the deal level. A vendor mentioned in passing on a discovery call is a low-threat tag. A vendor that&rsquo;s already running a trial in the prospect&rsquo;s environment is a critical-threat tag, and surfaces in the live risks feed accordingly.',
      { h: 'Counter-positioning, drafted.' },
      'When threat is high, 2nd Closer proposes counter-positioning the rep can ship in the next follow-up. Grounded in what the prospect said, not in a script.',
    ],
    bullets: [
      ['Register competitors + attributes', 'You define who they are, what they offer, where you win, where you lose.'],
      ['Per-deal threat scoring', 'Tagged as detected. Surfaced in the risk feed when threat is critical.'],
      ['Proposed counter-positioning', 'Drafted in the rep\u2019s follow-up, grounded in what the prospect actually said.'],
      ['Battle-card linkage', 'Right battle card surfaced at the moment the competitor is mentioned.'],
    ],
    shotLabel: 'Competitor view · Clari mentioned · 7 deals',
    shotHint: 'Threat level per deal, counter-positioning per occurrence.',
    related: ['risk-detection', 'engagement-summaries', 'process-iteration'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'industry-classification',
    section: 'product',
    category: 'Industry classification',
    h: 'Industry tags <em>that come with the receipts.</em>',
    sub: 'Classify every deal into your industry segments, with confidence scores and the signals 2nd Closer used, for nurturing, ICP scoring, and segment reporting.',
    meta: [
      ['Classification', 'Per deal'],
      ['Signals shown', 'Inline citations'],
      ['Confidence', 'Scored per classification'],
      ['Downstream', 'Nurturing, ICP, segments'],
    ],
    prose: [
      'Industry is the field nobody fills correctly. Reps pick the first option in the dropdown. RevOps inherits a column where forty percent of records are "Other." Segment reports become noise. ABM campaigns target the wrong companies.',
      '2nd Closer classifies every deal into the industry segments you define, with a confidence score and the signals it used. Click the classification, see the source: the company description from Apollo, the way the prospect referred to their business on the call, the named competitors.',
      { h: 'Definitions are yours.' },
      'Industry categories are not pulled from a generic taxonomy. You define them, in the language your team uses. "Healthcare payer" and "healthcare provider" can be separate categories if that&rsquo;s how your sales motion works.',
      { h: 'Bridges sales and marketing.' },
      'Industry tags feed downstream into ICP scoring, segment-specific nurture flows, and ABM targeting. The bridge between sales-execution and marketing/RevOps that usually requires a contractor to build.',
    ],
    bullets: [
      ['Your taxonomy', 'Define industries in the language your team uses, not a generic NAICS code.'],
      ['Signal-cited classifications', 'Every tag links to the data and conversation lines that produced it.'],
      ['Confidence scoring', 'Low-confidence classifications surface for human review instead of silently writing.'],
      ['Downstream-ready', 'Tags feed ICP scoring, nurturing flows, and segment reporting.'],
    ],
    shotLabel: 'Industry tag · Healthcare payer · 0.94 confidence',
    shotHint: 'Tag, confidence score, and the signals that produced it, on every deal.',
    related: ['engagement-summaries', 'crm-hygiene', 'apollo'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'product-recommendations',
    section: 'product',
    category: 'Product / catalogue recommendations',
    h: 'The right SKU, <em>recommended by the conversation.</em>',
    sub: 'Build your catalogue with the columns you choose. 2nd Closer recommends the right items per deal, with match scores and suggested pricing, grounded in what the prospect actually said.',
    meta: [
      ['Catalogue', 'Custom columns'],
      ['Recommendations', 'Per deal'],
      ['Match scoring', 'Inline confidence'],
      ['Best fit', 'Multi-SKU + configurable products'],
    ],
    prose: [
      'If your product is one thing with one price, this page isn&rsquo;t for you. If your product is a catalogue — SKUs, tiers, configurations, packages — recommending the right configuration to each prospect is a real problem, and reps usually get it wrong by defaulting to the package they remember best.',
      '2nd Closer solves it by reading the conversation. Buyer says they need single sign-on, three-region deployment, and SOC 2 reporting? 2nd Closer recommends the tier that includes them, scores the match, and proposes pricing before the rep has to flip to the price book.',
      { h: 'Catalogue, your way.' },
      'Build the catalogue with the columns that matter to you. Name, SKU, tier, pricing, included modules, eligibility rules, anything. 2nd Closer reads the table and uses it as ground truth.',
      { h: 'Configurable products supported.' },
      'For multi-component or configurable products, 2nd Closer recommends the configuration, not just the package. Each component recommendation comes with the buyer signal that motivated it.',
    ],
    bullets: [
      ['Custom catalogue columns', 'Build the table with the fields that matter: SKU, tier, modules, pricing, eligibility.'],
      ['Per-deal recommendations', 'The right configuration, scored against the actual conversation.'],
      ['Signal-cited matches', 'Every recommended item links to the buyer signal that produced it.'],
      ['Suggested pricing', 'Pricing proposed inline, ready for the rep to confirm.'],
    ],
    shotLabel: 'Catalogue · 47 SKUs · recommended for this deal',
    shotHint: 'The right items, scored against the conversation. Pricing proposed inline.',
    related: ['engagement-summaries', 'follow-up-emails', 'workspace'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'process-iteration',
    section: 'product',
    category: 'Win / loss analysis & process iteration',
    h: 'Your playbook <em>learns from every deal.</em>',
    sub: 'A multi-agent workflow that continuously analyses wins and losses, proposes process changes, and A/B tests them on live deals, promoting only after your review.',
    meta: [
      ['Analysis', 'Continuous, multi-agent'],
      ['Output', 'Hypotheses + experiments'],
      ['Promotion', 'Manager-reviewed only'],
      ['Buyer', 'CRO / VP Sales'],
    ],
    prose: [
      'Sales playbooks are written once and revised never. The reason is simple: the data needed to revise them lives in conversations nobody logged. With 2nd Closer, every conversation is structured. So is the outcome. The playbook stops being a Notion doc and becomes a system.',
      'A multi-agent workflow continuously analyses every closed-won and closed-lost deal in your pipeline. It forms hypotheses about what&rsquo;s working — which objections appear earlier in winning deals, which stakeholder mixes correlate with longer cycles, which follow-up phrasing produces replies — and proposes process changes.',
      { h: 'Hypotheses, A/B tested.' },
      'When a hypothesis is strong enough to test, 2nd Closer proposes a controlled experiment: a fraction of new deals get the proposed change, the rest run the existing playbook. Real impact is measured on real deals.',
      { h: 'Nothing auto-promotes.' },
      'No process change auto-applies to your team&rsquo;s workflow. 2nd Closer proposes; a manager approves. The output is a clean recommendation with the evidence trail attached. Not a black-box optimiser.',
    ],
    bullets: [
      ['Continuous win/loss analysis', 'Every closed deal scored against patterns. Multi-agent, not single-model.'],
      ['Hypothesis A/B testing', 'Proposed changes tested on live deals, measured on real outcomes.'],
      ['Manager-reviewed promotion', 'Nothing auto-applies. Recommendations come with full evidence.'],
      ['CRO-level surface', 'A page the revenue leader opens monthly to decide what to ship in the playbook.'],
    ],
    shotLabel: 'Hypothesis · Stage 2 → 3 advance rate',
    shotHint: 'A proposed playbook change. Experiment running on 24 deals.',
    related: ['risk-detection', 'engagement-summaries', 'team'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'conversation-capture',
    section: 'product',
    category: 'Conversation capture',
    h: 'Where 2nd Closer <em>gets its data.</em>',
    sub: 'Every interaction with the buyer — email, meeting, LinkedIn DM, CRM note — feeds the same structured graph. Capture is solved before structure begins.',
    meta: [
      ['Email', 'Gmail + Outlook, two-way'],
      ['Meetings', 'Built-in notetaker + Fireflies'],
      ['LinkedIn', 'DM + InMail capture'],
      ['CRM', 'Notes + activities ingested'],
    ],
    prose: [
      '"Where does 2nd Closer get its data?" is the second question every evaluator asks. The answer: everywhere a conversation happens. Email threads, meeting transcripts, LinkedIn DMs, the historical CRM notes that have been sitting in your HubSpot or Pipedrive for years.',
      '2nd Closer has its own notetaker built in. It auto-joins every booked call on your team&rsquo;s calendar — Zoom, Meet, Teams, phone — and produces a transcript without anyone installing a fourth tool. If your team already uses Fireflies, Fathom, or Otter, 2nd Closer ingests their output alongside its own. They&rsquo;re one source among several, not a dependency.',
      { h: 'Email is two-way.' },
      'Gmail and Outlook are both first-class. Threads in both directions are captured into the deal timeline, and 2nd Closer-drafted replies send via the rep&rsquo;s authenticated address, so prospects see the rep&rsquo;s name, not a robot&rsquo;s.',
      { h: 'LinkedIn is first-class context.' },
      'LinkedIn DMs and InMails are not a black hole. They&rsquo;re captured into the deal timeline alongside everything else, so the touch your AE had with the procurement lead on LinkedIn isn&rsquo;t lost when the deal cycle moves to email.',
      { h: 'And the CRM&rsquo;s history comes too.' },
      'Every existing note and activity in the connected CRM is ingested on day one. Your legacy context isn&rsquo;t stranded outside 2nd Closer.',
    ],
    bullets: [
      ['Built-in notetaker', '2nd Closer auto-joins every booked call. No third-party tool to install.'],
      ['Gmail + Outlook', 'Two-way email sync across the team. Drafts sent from the rep\u2019s authenticated address.'],
      ['LinkedIn DM + InMail', 'Captured into the deal timeline. First-class context, not a black hole.'],
      ['CRM history ingested', 'Every legacy note and activity loaded on day one.'],
    ],
    shotLabel: 'Source inbox · 47 conversations today',
    shotHint: 'Every channel, every conversation, in one continuous stream.',
    related: ['fireflies', 'gmail', 'hubspot'],
  },

];
