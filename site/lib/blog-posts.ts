import type { Author, BlogPost } from "./types";

// 2nd Closer marketing — Blog post data
// Editorial long-form, in 2nd Closer's voice. Each post renders via BlogPost.jsx.

// Default author metadata, used by every post in this file.
export const AUTHORS: Record<string, Author> = {
  zach: {
    name: 'Zach Fine',
    role: 'Founder, 2nd Closer',
    url: 'https://www.linkedin.com/in/finezach',
    avatar: '/photos/zach-fine.png',
  },
};


export const BLOG_POSTS: BlogPost[] = [

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'leading-vs-lagging',
    category: 'Field notes',
    date: '2026-05-12',
    readTime: '7 min',
    author: 'Zach Fine, Founder',
    authorUrl: 'https://www.linkedin.com/in/finezach',
    title: 'Stop running your pipeline on lagging data.',
    deck: 'Closed-won is a story about something that already happened. If you&rsquo;re forecasting on it, you&rsquo;re flying with a six-week instrument lag.',
    body: [
      "Most go-to-market organisations operate on lagging indicators. Closed-won rate. Pipeline coverage. Quarter-over-quarter ARR. These are not signals — they are receipts.",
      "Receipts are useful for reconciliation. They are useless for steering. When your only instruments are six to eight weeks behind reality, the cone of unrecoverable error around your next decision is the size of a full quarter.",
      { h: 'What leading data looks like.' },
      "Leading data is captured the day the conversation happens. It is the persona of the buyer on the first call. It is the trigger they named. It is the competitor they brought up. It is whether your champion was the economic buyer or two organisational layers away. None of these wait for the deal to close.",
      "When that data is structured into your CRM in real time, your QBR shifts from autopsy to surgery. You catch the persona mismatch the same week the campaign ships, not the same quarter the cohort closes.",
      { h: 'Why nobody captures it today.' },
      "Because capturing leading data requires the closer to log it during the conversation that produced it. The closer doesn&rsquo;t. The closer never has. The category has spent fifteen years building reminders and validation rules to convince the most expensive person in the room to do data entry. The closer still doesn&rsquo;t.",
      "2nd Closer&rsquo;s position is that the data capture problem is solved by removing the closer from the loop, not by motivating them harder. The conversation already exists. The notetaker is already running. 2nd Closer reads the transcript, populates the leading fields, and writes them to your CRM before the closer&rsquo;s next call begins.",
      { h: 'The collapse from six weeks to one day.' },
      "Once leading data is captured automatically, the lag between a pipeline problem starting and you seeing it collapses from six weeks to one day. The cohort that is going to close-lost in eight weeks because of a champion-altitude mismatch — you can see that pattern in the persona field tomorrow morning. You fix it in week two of the campaign, not in week ten.",
      "This is the largest unmeasured cost of CRM hygiene in B2B sales. Not the data entry hours. The decisions made on stale signal.",
    ],
    related: ['why-no-workflow-nodes', 'six-week-feedback-loop'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'why-no-workflow-nodes',
    category: 'Design philosophy',
    date: '2026-04-28',
    readTime: '6 min',
    author: 'Zach Fine, Founder',
    authorUrl: 'https://www.linkedin.com/in/finezach',
    title: 'Why 2nd Closer has no workflow builder.',
    deck: 'Every other category of sales tool ships with a drag-and-drop workflow canvas. We don&rsquo;t. Here&rsquo;s why we never will.',
    body: [
      "A workflow canvas — the kind of node-based editor where you drag a trigger, connect it to an action, define the conditions, and test it — is the standard interface for sales automation. Outreach has one. HubSpot has one. Zapier is one.",
      "It is also, on inspection, the interface that quietly created the GTM engineering job.",
      { h: 'What workflow builders ask of you.' },
      "Every workflow node looks small in isolation. Drag a trigger. Drag an action. Connect them. The problem is that real go-to-market processes are not three nodes. They are forty nodes. They branch. They condition on external systems. They have edge cases. They have to be maintained as your product, your team, and your pricing change every quarter.",
      "Forty nodes that all need to keep working is a system. Systems need owners. Owners need to be paid. The job is the GTM engineer, and the math is roughly two senior engineering salaries to keep the duct tape stuck to a stack that was supposed to be off-the-shelf software.",
      { h: 'What 2nd Closer does instead.' },
      "2nd Closer does not ask you to design the workflow. You sign into your CRM, your calendar, LinkedIn, and Apollo. We read your CRM schema. We know what fields to populate because they&rsquo;re already in your HubSpot or Pipedrive. We know what conversations matter because they&rsquo;re on your calendar.",
      "There is no canvas. There is no node. There is no trigger to wire to an action. The execution layer is the product. It runs without an integration architect.",
      { h: 'The bet.' },
      "Our bet is that the workflow-canvas era ends inside the next three years, the same way custom CRM implementations ended inside the SaaS era twenty years ago. The companies that win will not be the ones with the best canvas. They will be the ones whose customers never had to open one.",
    ],
    related: ['gtm-engineer-anti-pattern', 'leading-vs-lagging'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'gtm-engineer-anti-pattern',
    seoTitle: 'GTM engineer cost, and whether you need one',
    category: 'Design philosophy',
    date: '2026-04-14',
    readTime: '8 min',
    author: 'Zach Fine, Founder',
    authorUrl: 'https://www.linkedin.com/in/finezach',
    title: 'GTM engineering is the Implementation Industrial Complex, again.',
    deck: 'Twenty years ago Oracle implementations cost ten times the licence. Today GTM engineering costs twice the SDR. The pattern is the same.',
    body: [
      "Mid-stage B2B companies are now spending the equivalent of two senior engineering salaries to keep their go-to-market stack stitched together. The work is called GTM engineering. The job is to connect your CRM to your outreach tool to your conversation intelligence to your enrichment provider to the next thing your CRO read about on LinkedIn — and to maintain those connections as each of those vendors changes its API every quarter.",
      "This is the same job, with a different title, that built every consulting empire of the early 2000s. The licence was a million dollars. The implementation was ten. A whole industry grew around the gap.",
      { h: 'Why the modern stack made it worse.' },
      "The SaaS era was supposed to fix this. Off-the-shelf, configurable, self-service. What actually happened is that every vendor shipped an API and an MCP server and called it done. Your CRM has an API. Your outreach tool has an API. Your enrichment provider has an API. The fact that they don&rsquo;t actually talk to each other in a way your team can rely on is somebody else&rsquo;s problem.",
      "Somebody else, in this case, is the GTM engineer you hired or the contractor you&rsquo;re paying. The stack has been re-fragmented by the abundance of APIs. Each integration is a maintenance liability with a six-month half-life.",
      { h: 'When integrations are the product&rsquo;s job.' },
      "The alternative is software where the integrations are the product&rsquo;s job, not yours. When the upstream API changes, the vendor absorbs it. When the workflow needs to change, the vendor ships it. The customer&rsquo;s job is to use the software, not to engineer it.",
      "This is the bet 2nd Closer is making. Not better AI. Not more workflow nodes. Software that does not require an Industrial Complex to make it run.",
    ],
    related: ['why-no-workflow-nodes', 'live-in-a-day'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'six-week-feedback-loop',
    seoTitle: 'The six-week feedback loop killing your deals',
    category: 'For revenue leaders',
    date: '2026-03-31',
    readTime: '5 min',
    author: 'Zach Fine, Founder',
    authorUrl: 'https://www.linkedin.com/in/finezach',
    title: 'The six-week feedback loop is killing your pipeline.',
    deck: 'You don&rsquo;t lose deals to better competitors. You lose them to a feedback loop that&rsquo;s slower than your sales cycle.',
    body: [
      "When you ask a revenue leader about their forecast variance, the answer is rarely about prospects or products. It is almost always about timing. We didn&rsquo;t see the slippage. We caught the procurement issue too late. The competitor surfaced earlier than we knew.",
      "The common factor is the feedback loop. The time between a problem starting in a deal and the team responsible for fixing it actually seeing the problem.",
      { h: 'Most companies are running on a 42-day loop.' },
      "Pipeline reviews happen weekly. Forecast calibration happens monthly. Closed-won analysis happens quarterly. Each layer adds latency. By the time a pattern is visible at the leadership level, the cohort that produced it is already through your funnel and the next cohort is well underway.",
      "The pattern doesn&rsquo;t care that you didn&rsquo;t see it. The pipeline still leaks.",
      { h: 'What a one-day loop looks like.' },
      "A one-day feedback loop means the structured signal from yesterday&rsquo;s calls is in your CRM this morning. The leading indicators — persona, intent, competitor, champion altitude — are visible the same day they were generated. The pattern is detectable before it becomes a cohort.",
      "You don&rsquo;t need a faster team to operate a one-day loop. You need data that doesn&rsquo;t require humans to log it. That&rsquo;s what 2nd Closer does.",
    ],
    related: ['leading-vs-lagging', 'series-a-cro-playbook'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'live-in-a-day',
    seoTitle: 'What live in under a day actually means',
    category: 'How 2nd Closer works',
    date: '2026-03-17',
    readTime: '4 min',
    author: 'Zach Fine, Founder',
    authorUrl: 'https://www.linkedin.com/in/finezach',
    title: 'A note on what &ldquo;live in under a day&rdquo; actually means.',
    deck: 'No implementation. No engineer. No quarter-long rollout. Here&rsquo;s the literal sequence.',
    body: [
      "Most enterprise software ships with an implementation timeline. A statement of work. A kickoff. A discovery phase. A test environment. A user acceptance period. A production rollout. The line on the contract is the licence. The line on the budget is the implementation. The implementation always costs more.",
      "2nd Closer doesn&rsquo;t do that. The sequence is short enough to print on a postcard.",
      { h: 'The actual sequence.' },
      "OAuth into your CRM. 2nd Closer reads every pipeline, every stage, every custom field. Fifteen minutes.",
      "Connect Google or Microsoft Calendar. 2nd Closer&rsquo;s built-in notetaker now joins every booked call. Five minutes.",
      "Authenticate LinkedIn. Capture and warm-up outreach turn on. Five minutes.",
      "Connect Apollo. Enrichment activates. Five minutes.",
      "Then a 30-minute configuration call with us. We walk through your field map together. You don&rsquo;t need to write a brief. You don&rsquo;t need to teach us your process — we read it from your CRM.",
      "The morning after that call, every booked meeting is being captured, every CRM field is populating, every drafted follow-up is staged. Total elapsed time from first signature to first call processed: under one business day.",
      { h: 'Why this is possible.' },
      "Because we don&rsquo;t ask you to build a workflow. We don&rsquo;t ask you to model your process for us. We read your CRM schema and treat it as ground truth. The configuration is in the act of connecting, not in a six-week onboarding sprint.",
    ],
    related: ['why-no-workflow-nodes', 'series-a-cro-playbook'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'series-a-cro-playbook',
    seoTitle: 'The Series A CRO playbook is broken. A fix.',
    category: 'For revenue leaders',
    date: '2026-03-03',
    readTime: '9 min',
    author: 'Zach Fine, Founder',
    authorUrl: 'https://www.linkedin.com/in/finezach',
    title: 'The Series A CRO playbook is broken. Here&rsquo;s a fix.',
    deck: 'You raised. You hired the VP of Sales. You inherited a CRM that nobody fills in. This is the order of operations that actually works.',
    body: [
      "There is a moment in the life of a Series A B2B company that produces more revenue regret than any other. It is the four-week stretch between closing the round and the new VP of Sales walking in the door.",
      "The CRO inherits a CRM that was built by the founder, in HubSpot, in a hurry, eighteen months ago. Field completion is around thirty percent. The stages are vibes. There are six closers, four notetakers, and a pipeline number that nobody trusts enough to put behind a board commitment.",
      { h: 'The traditional playbook.' },
      "Hire a RevOps lead at $140K base. Have them rebuild the CRM. Have them roll out a sequence tool. Have them implement Gong. Have them implement Clari. Have them build the dashboards. Have them define the playbook. Six months later, you are spending $400K a year on tooling, $140K on the RevOps lead, and your closers still aren&rsquo;t logging fields.",
      "You also haven&rsquo;t fixed the underlying problem. You&rsquo;ve added six tools and one role to a stack that produces incomplete data.",
      { h: 'The alternative.' },
      "Don&rsquo;t hire the RevOps lead first. Don&rsquo;t roll out six tools. Solve the data problem before you build the dashboards.",
      "CRM hygiene is the foundation of every downstream sales operations function. If the underlying data is thirty percent complete, the dashboards on top of it are storytelling. Get the CRM to ninety-five percent first. Then decide what dashboards you actually need.",
      { h: 'What this looks like in practice.' },
      "2nd Closer is one option. The point isn&rsquo;t the vendor — the point is the sequence. Fix the data layer before you build the analytics layer. Fix the analytics layer before you build the playbook automation layer. Most Series A go-to-market teams do this in reverse, and the receipts are everywhere.",
    ],
    related: ['leading-vs-lagging', 'six-week-feedback-loop'],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'first-ae-handoff-kit',
    seoTitle: 'The first-AE handoff kit for founder-led sales',
    category: 'For founders',
    date: '2026-09-12',
    readTime: '9 min',
    author: 'Zach Fine, Founder',
    authorUrl: 'https://www.linkedin.com/in/finezach',
    title: 'The first-AE handoff kit.',
    deck: 'Sixty-eight percent of founders fail the handoff from founder-led sales to a hire the first time. Most of the failure is not the hire. It is that the process only existed in the founder&rsquo;s head. Here is how to get it out.',
    body: [
      "You closed the first twenty customers yourself. You know the objection that comes at minute twelve, the title that always says yes and the title that always stalls, the two sentences that turn a demo into a pilot. None of it is written down, because you never needed it written down. Then you raise, you hire an account executive at $120&ndash;180k OTE, and you hand them a HubSpot with thirty-one percent of the fields filled and a Notion doc you wrote on a plane.",
      "Five months later the AE has not closed an independent deal, the board wants to know why the pipeline looks the same as last quarter, and you are back on every call. The industry number is that 68% of founders fail this transition at the first attempt. Ramp is 5.7 months on average and 40&ndash;60% of first AEs miss year-one quota. A mis-hire costs roughly $484k over twenty-four months. The hire is rarely the problem. The handoff is.",
      { h: 'The handoff is a data problem before it is a people problem.' },
      "What a first AE actually needs from you is not a pep talk and a territory. It is the process, in a form they can run without you in the room: who you sell to, what a qualified deal looks like, which questions you ask in which order, what the buyer needs to see before they sign, and what you do in the five minutes after every call. If that lives in your head, the AE copies your demo structure and misses the discovery logic that made it land. Activity looks fine. Deals don&rsquo;t close.",
      "The fastest way to get it out of your head is to make your CRM hold it. Not as a document, as fields. A field is a question your process asks on every deal. If your HubSpot or Pipedrive has a field for economic buyer, budget signal, decision criteria and next step, and those fields are filled on every deal, then the process exists outside you. Your AE can read it. Your board can read it. You can stop being the database.",
      { html: `
<h3>The kit</h3>
<p>Four parts. Do them in order. The first three take an afternoon; the fourth takes a call.</p>
<h3>1. Before you post the job: prove the pattern exists</h3>
<ul>
<li><strong>Ten or more closed deals you sold yourself</strong>, ideally to the same title at the same kind of company. Fewer than that and you are asking the AE to find product-market fit, which is not their job.</li>
<li><strong>A named ICP</strong> in one sentence: company shape, buyer title, the trigger that makes them look. If you cannot say it in one sentence, the AE cannot prospect it.</li>
<li><strong>Your closing-capacity test.</strong> If you have more qualified conversations than hours, hire an AE. If you have hours but no conversations, hire an SDR or fix marketing first. Most founders hit closing capacity first.</li>
<li><strong>A warm pipeline to hand over.</strong> At least a handful of live deals the AE can work from day one, so the first sixty days are not pure prospecting.</li>
</ul>
<h3>2. Write the process down as fields, not prose</h3>
<p>Open your CRM and add a property for each question your process asks. The template below is the set most seed and Series A teams end up with. Rename them in your own language; the point is that every deal record answers the same questions.</p>
<div class="tw"><table>
<thead><tr><th>Field</th><th>What it means for your team</th><th>Filled from</th><th>Needed by</th></tr></thead>
<tbody>
<tr><td>Champion</td><td>Who inside the account wants this and will spend political capital on it. Not the main contact.</td><td>Calls, email threads</td><td>Discovery</td></tr>
<tr><td>Economic buyer</td><td>Who signs or kills the budget. Empty until they have been in a conversation.</td><td>Calls</td><td>Evaluation</td></tr>
<tr><td>Budget signal</td><td>Unconfirmed / discussed / confirmed / blocked. Confirmed means a number or an approved line.</td><td>Calls</td><td>Evaluation</td></tr>
<tr><td>Timeline</td><td>The buyer&rsquo;s stated decision or go-live date, in their words.</td><td>Calls, email</td><td>Discovery</td></tr>
<tr><td>Decision criteria</td><td>What they said they will judge on. Verbatim where possible.</td><td>Calls</td><td>Evaluation</td></tr>
<tr><td>Decision process</td><td>Who signs, in what order, with which security or procurement steps.</td><td>Calls</td><td>Evaluation</td></tr>
<tr><td>Top objection</td><td>The strongest reason they gave for not buying, and whether it was answered.</td><td>Calls</td><td>Discovery</td></tr>
<tr><td>Competitor mentioned</td><td>Any named alternative, including &ldquo;do nothing&rdquo; and &ldquo;hire someone&rdquo;.</td><td>Calls, email</td><td>Discovery</td></tr>
<tr><td>Next step</td><td>The specific action both sides agreed, with a date. Not &ldquo;follow up&rdquo;.</td><td>Calls</td><td>Every stage</td></tr>
<tr><td>Stakeholders discovered</td><td>Every person named in any conversation, with an inferred role.</td><td>Calls, email, LinkedIn</td><td>Every stage</td></tr>
<tr><td>Risk flags</td><td>Missing decision-maker, budget uncertainty, competitive threat, timeline drift, champion gone quiet.</td><td>Continuous</td><td>Every stage</td></tr>
</tbody></table></div>
<p><a class="dl" href="/downloads/2nd-closer-field-map-template.csv" download>Download the field-map template (CSV, 16 fields, with definitions and examples)</a></p>
<p>Import it as a checklist, then create the properties in HubSpot (Settings &rarr; Properties &rarr; Deal) or Pipedrive (Settings &rarr; Data fields &rarr; Deals). Keep the definitions column; it is the part your AE will actually read.</p>
<h3>3. Backfill the last twenty deals</h3>
<p>Fill those fields for every deal you closed or lost in the last six months. It takes an afternoon and it is the single most valuable document your AE will get, because it is the process demonstrated on real deals rather than described. You will also see your own pattern: which stakeholder mix closes, which objection predicts a loss, how long &ldquo;confirmed budget&rdquo; takes to appear. That is your playbook. It was there the whole time.</p>
<h3>4. Make the fields fill themselves before the AE starts</h3>
<p>Here is the part most kits skip. You can define the fields and backfill them and your AE will still not fill them going forward, because no rep does. The category has spent fifteen years building reminders and validation rules and the average company still sits at thirty-five percent completion. The reason you were able to keep the process in your head is that you were on every call. The AE will be on every call too, and will remember about as much of it as you did: the parts that felt important, two days later.</p>
<p>So the last step is to remove the human from the data-entry loop before the human arrives. 2nd Closer reads the field map you just built, joins every call, and writes those fields from the transcript, with a citation to the line that produced each value. It sends the follow-up from the rep&rsquo;s inbox in five minutes, maps every stakeholder who gets mentioned, and flags the deal when the economic buyer still has not been in a conversation by Evaluation. Your AE inherits a process that runs, not a document that describes one.</p>
<div class="cta">
<p><strong>Hire one AE, get two.</strong> 2nd Closer is free while it&rsquo;s in public beta. Bring an API key from any LLM provider, connect HubSpot or Pipedrive, and it is live the morning after a 20-minute call.</p>
<a class="btn btn--primary" href="/beta">Join the free beta</a>
</div>
<h3>The first thirty days, once they start</h3>
<ul>
<li><strong>Week 1:</strong> the AE reads the twenty backfilled deals, not a deck. Shadow three of your calls; you shadow three of theirs.</li>
<li><strong>Week 2:</strong> they run discovery alone. You review the fields 2nd Closer filled, not their notes. The fields are the coaching surface: if &ldquo;decision process&rdquo; is empty after a second call, you know exactly which question they are not asking.</li>
<li><strong>Weeks 3&ndash;4:</strong> you stop joining calls on request. Ad hoc founder involvement signals you do not trust them with serious deals, and it makes the pipeline depend on you again. Join only when the risk feed says the deal needs you.</li>
<li><strong>Day 30:</strong> look at the risk feed and the field completion together. If completion is above ninety percent and the risks are being worked, the handoff has happened. If not, the fields will tell you which part of the process did not transfer.</li>
</ul>
` },
      "The transition from founder-led sales is not a leap of faith. It is a data migration, from your head to your CRM, followed by a decision to never let it depend on a human&rsquo;s memory again. Do the migration in an afternoon. Let the software keep it current.",
    ],
    related: ['series-a-cro-playbook', 'leading-vs-lagging', 'meddpicc-in-hubspot-auto-filled'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'follow-up-email-after-sales-call',
    seoTitle: 'Follow-up email after a sales call: 7 templates',
    category: 'Templates',
    date: '2026-09-12',
    readTime: '10 min',
    author: 'Zach Fine, Founder',
    authorUrl: 'https://www.linkedin.com/in/finezach',
    title: 'The follow-up email after a sales call.',
    deck: 'Seven templates for the moments where deals actually die: after discovery, after the demo, after a no-show, after silence, when a new stakeholder appears, after the proposal, and when it&rsquo;s time to let go. Plus the version that writes itself.',
    body: [
      "Follow-ups are where deals quietly die. Not in the call, where you were sharp, but in the forty-eight hours after it, when the email goes out late, generic, and without the one thing the buyer asked for. The buyer does not remember the demo. They remember whether you did what you said.",
      "The rules are short. Send it the same day, ideally within the hour. Lead with what they said, not what you do. Attach the thing they asked for. Name one next step with a date. Keep it under 150 words. Every template below follows those rules; swap the bracketed parts for what actually happened on the call.",
      { html: `
<h3>1. After a discovery call</h3>
<div class="tpl"><p class="tpl__k">Subject: [Company] &middot; what I heard, and Thursday</p>
<p>Hi [First name],</p>
<p>Thanks for the time today. What I heard: [their problem in their words], which is costing you [the number or consequence they gave], and you need something in place by [their timeline].</p>
<p>Two things you asked for are attached: [document 1] and [document 2].</p>
<p>You mentioned [name] from [team] would need to weigh in on [criterion]. Would a 20-minute call with them on Thursday work? I&rsquo;ll bring [the specific thing that answers their concern].</p>
<p>[Your name]</p></div>

<h3>2. After a demo</h3>
<div class="tpl"><p class="tpl__k">Subject: [Company] &middot; the three things from today</p>
<p>Hi [First name],</p>
<p>Three things stood out from the demo: [feature or outcome 1] for [their use case], [2], and [3], which you said would replace [the manual process they described].</p>
<p>The open question was [objection]. Short answer: [one-sentence answer]. Longer answer attached.</p>
<p>Proposed next step: a pilot on [scope] starting [date], with [success metric] as the bar. If that&rsquo;s the right shape, I&rsquo;ll send the pilot plan tomorrow.</p>
<p>[Your name]</p></div>

<h3>3. After a no-show</h3>
<div class="tpl"><p class="tpl__k">Subject: Missed you today &middot; two options</p>
<p>Hi [First name],</p>
<p>We missed each other at [time]. No problem. Two options: [day/time A] or [day/time B]. Or if the priority has moved, tell me and I&rsquo;ll close the loop on my side.</p>
<p>In case it helps decide: [one line on the outcome they were interested in].</p>
<p>[Your name]</p></div>

<h3>4. After a week of silence</h3>
<div class="tpl"><p class="tpl__k">Subject: [Company] &middot; still the right time?</p>
<p>Hi [First name],</p>
<p>When we spoke on [date], [their timeline or trigger] made this urgent. I haven&rsquo;t heard back since [last touch], so I want to check whether that changed.</p>
<p>If it&rsquo;s still on: the next step was [next step]; I can have it ready by [date]. If it&rsquo;s paused: tell me when to check back and I will. If it&rsquo;s off: say so and I&rsquo;ll stop.</p>
<p>[Your name]</p></div>

<h3>5. When a new stakeholder appears</h3>
<div class="tpl"><p class="tpl__k">Subject: [Champion] suggested I reach out &middot; [topic]</p>
<p>Hi [New stakeholder],</p>
<p>[Champion] mentioned you&rsquo;ll be looking at [the criterion this person owns, e.g. security] for [project]. Rather than have that go through [champion], here is the [document] directly, and the two answers people in your seat usually need: [answer 1] and [answer 2].</p>
<p>Happy to do 15 minutes with you alone if that&rsquo;s faster. [Two time options.]</p>
<p>[Your name]</p></div>

<h3>6. After the proposal</h3>
<div class="tpl"><p class="tpl__k">Subject: [Company] proposal &middot; what happens next</p>
<p>Hi [First name],</p>
<p>The proposal is attached. It reflects [the two or three things they asked for] and [scope]. The number is [number], which is [how it maps to the value they stated].</p>
<p>You said the decision runs [their process: who, in what order]. Is there anything [economic buyer] will need that isn&rsquo;t in here? I&rsquo;d rather add it now than after.</p>
<p>Can we hold [date] for a decision call?</p>
<p>[Your name]</p></div>

<h3>7. The breakup</h3>
<div class="tpl"><p class="tpl__k">Subject: Closing the file on [Company]</p>
<p>Hi [First name],</p>
<p>I&rsquo;ve reached out a few times since [date] without hearing back, so I&rsquo;m going to assume [project] isn&rsquo;t a priority right now and stop. No hard feelings.</p>
<p>If [the trigger] comes back, the door is open. And if I got the timing wrong, one line back is all it takes.</p>
<p>[Your name]</p></div>

<h3>Subject lines that get opened</h3>
<ul>
<li>Name the company and the next step: <code>[Company] &middot; Thursday</code>. It reads like an internal email.</li>
<li>Quote them: <code>&ldquo;we lose them at renewal&rdquo;</code>. Their words, in quotes, in the subject.</li>
<li>Never &ldquo;Following up&rdquo;, &ldquo;Checking in&rdquo;, &ldquo;Circling back&rdquo;. Those subjects tell the buyer the email contains nothing.</li>
</ul>

<h3>Timing</h3>
<div class="tw"><table>
<thead><tr><th>After</th><th>Send</th><th>Then</th></tr></thead>
<tbody>
<tr><td>Discovery or demo</td><td>Within the hour, same day at the latest</td><td>Nudge at day 3 if no reply; new-angle email at day 7</td></tr>
<tr><td>No-show</td><td>Within 15 minutes of the missed slot</td><td>One more at day 2, then stop</td></tr>
<tr><td>Proposal</td><td>With the proposal, same email</td><td>Day 2 confirm receipt; day 5 ask about the process</td></tr>
<tr><td>Silence</td><td>Day 7</td><td>Day 14 new angle; day 21 breakup</td></tr>
</tbody></table></div>

<h3>The version that writes itself</h3>
<p>Every template above depends on the same thing: remembering what the buyer said. The number they gave. The name they dropped. The document they asked for. The step you agreed. That is exactly what evaporates in the forty-eight hours after a call, which is why most follow-ups are late and generic, and why the good rep on your team is mostly just the one with the best memory.</p>
<p>2nd Closer removes the memory from the loop. It sits on the call, and within five minutes of it ending a follow-up is drafted from the actual transcript: the three things they said, the document Maria asked for, the next step with a date, in your voice, staged in your inbox or sent from your address. When a new stakeholder is named, template five goes out to them too, and a LinkedIn connection is queued. When the deal goes quiet, the risk feed says so on Monday instead of at the end of the quarter. The templates are the manual. The product is the autopilot.</p>
<div class="cta">
<p><strong>Free while it&rsquo;s in beta. Bring any LLM key.</strong> Works inside the HubSpot or Pipedrive you already run. Live the morning after a 20-minute call.</p>
<a class="btn btn--primary" href="/beta">Join the free beta</a>
</div>
` },
    ],
    related: ['first-ae-handoff-kit', 'six-week-feedback-loop', 'meddpicc-in-hubspot-auto-filled'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'meddpicc-in-hubspot-auto-filled',
    seoTitle: 'MEDDPICC in HubSpot and Pipedrive, auto-filled',
    category: 'Playbook',
    date: '2026-09-12',
    readTime: '11 min',
    author: 'Zach Fine, Founder',
    authorUrl: 'https://www.linkedin.com/in/finezach',
    title: 'MEDDPICC in HubSpot, <em>auto-filled.</em>',
    deck: 'The qualification framework is the easy part. Getting eight fields filled on every deal by reps who would rather sell is the part every team fails. Here is the field map for HubSpot and Pipedrive, and the way to fill it without anyone typing.',
    body: [
      "MEDDPICC is the enterprise qualification framework that Series A teams adopt the week the new VP Sales arrives: Metrics, Economic buyer, Decision criteria, Decision process, Paper process, Identify pain, Champion, Competition. Eight questions that, answered honestly on every deal, tell you whether it will close. It works. It has worked since PTC in the nineties.",
      "It also has a failure mode so common that nobody counts it as a failure any more: the fields exist, and they are empty. Field completion across B2B CRMs sits around thirty-five percent, and MEDDPICC fields are the first ones reps skip because each one is a paragraph, not a checkbox. The forecast call then runs on the fields that are filled, which are the easy ones, which are not the ones that predict the outcome.",
      { html: `
<h3>The field map</h3>
<p>Eight properties on the deal object. Use these types; free text for everything except the two that are genuinely categorical. The definitions column is the part reps and 2nd Closer both need: what counts as &ldquo;filled&rdquo; for your team.</p>
<div class="tw"><table>
<thead><tr><th>Letter</th><th>Property</th><th>Type (HubSpot / Pipedrive)</th><th>Filled when</th><th>Example</th></tr></thead>
<tbody>
<tr><td>M</td><td>Metrics</td><td>Multi-line text</td><td>The buyer states a number: what they measure, what it is now, what it needs to be.</td><td>&ldquo;Renewal rate 71%, needs to be 85% by Q2.&rdquo;</td></tr>
<tr><td>E</td><td>Economic buyer</td><td>Contact association + text</td><td>A named person with budget authority has been in a conversation. Not inferred from a title.</td><td>CFO, Dana Ruiz, met on 09/10</td></tr>
<tr><td>D</td><td>Decision criteria</td><td>Multi-line text</td><td>The buyer lists what they will judge on. Verbatim.</td><td>&ldquo;HubSpot-native, SOC 2 report, live in under two weeks.&rdquo;</td></tr>
<tr><td>D</td><td>Decision process</td><td>Multi-line text</td><td>Who signs, in what order, by when.</td><td>&ldquo;Security review, then CFO, then legal. Two to three weeks.&rdquo;</td></tr>
<tr><td>P</td><td>Paper process</td><td>Multi-line text</td><td>Procurement, legal, vendor onboarding steps and their owners.</td><td>&ldquo;MSA redlines through their counsel; vendor form; 30-day terms.&rdquo;</td></tr>
<tr><td>I</td><td>Identify pain</td><td>Multi-line text</td><td>The problem in the buyer&rsquo;s words, with a consequence attached.</td><td>&ldquo;We lose renewals because follow-ups go out late.&rdquo;</td></tr>
<tr><td>C</td><td>Champion</td><td>Contact association + strength picklist (weak / active / proven)</td><td>Someone inside is selling for you. Proven means they have done something you asked that cost them effort.</td><td>Priya Nair, proven (set up the CFO call)</td></tr>
<tr><td>C</td><td>Competition</td><td>Picklist from your registered competitors + text</td><td>Any named alternative, including &ldquo;do nothing&rdquo;, &ldquo;build it&rdquo; and &ldquo;hire someone&rdquo;.</td><td>Clari, low threat; also considering a RevOps hire</td></tr>
</tbody></table></div>
<p><a class="dl" href="/downloads/2nd-closer-field-map-template.csv" download>Download the 2nd Closer field-map template (CSV) and add these eight rows in your language</a></p>

<h3>Setting it up</h3>
<p><strong>HubSpot:</strong> Settings &rarr; Properties &rarr; Deal properties &rarr; Create property. Group them under a &ldquo;Qualification&rdquo; property group so they sit together on the record and in the sidebar. Add them to the deal stage requirements only for the stage where they should be true: economic buyer and decision process by Evaluation, paper process by Proposal. Requiring all eight at Discovery is how you get reps typing &ldquo;TBD&rdquo;.</p>
<p><strong>Pipedrive:</strong> Settings &rarr; Data fields &rarr; Deal &rarr; Add custom field. Mark the two picklists as &ldquo;important&rdquo; so they show in the deal detail sidebar. Use the required-fields-by-stage setting the same way.</p>

<h3>MEDDPICC, MEDDIC, BANT or SPICED?</h3>
<div class="tw"><table>
<thead><tr><th>Framework</th><th>Fields</th><th>Best for</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>BANT</td><td>Budget, Authority, Need, Timeline</td><td>Transactional, short cycles, SMB</td><td>Says nothing about how the decision gets made or who is fighting for you</td></tr>
<tr><td>MEDDIC</td><td>The six without Paper process and Competition</td><td>Mid-market, first framework for a Series A team</td><td>Deals still stall in legal and procurement, which it doesn&rsquo;t track</td></tr>
<tr><td>MEDDPICC</td><td>All eight</td><td>Enterprise and mid-market with real procurement</td><td>Eight paragraphs per deal; nobody fills it by hand</td></tr>
<tr><td>SPICED</td><td>Situation, Pain, Impact, Critical event, Decision</td><td>Product-led and customer-success-led motions</td><td>Lighter on the buying committee</td></tr>
</tbody></table></div>
<p>The honest answer for most seed and Series A teams: MEDDIC now, add Paper process and Competition the first time a deal dies in legal or to a competitor you never heard about. Whichever you pick, the framework is not the hard part.</p>

<h3>Why the fields stay empty</h3>
<p>Because filling them is a writing task, done from memory, two days after the call, by the most expensive person on the team. Reminders, validation rules and weekly pipeline scrubs have been tried for fifteen years. Completion is still thirty-five percent. Salesforce-only tools now fill these fields from call transcripts, which is why Weflow and Scratchpad rank for this query. If you are on HubSpot or Pipedrive, that page has not existed. This is it.</p>

<h3>How 2nd Closer fills MEDDPICC from every call</h3>
<p>You map the eight properties once, in a 30-minute call, and tell 2nd Closer what a filled one looks like for your team (the definitions column above). From then on:</p>
<ul>
<li><strong>Every call and email thread is read</strong> by 2nd Closer&rsquo;s notetaker or the one you already use (Fireflies, Fathom, Otter, Gong).</li>
<li><strong>Each field is written with a citation</strong> to the line in the transcript that produced it. Click the value in HubSpot or Pipedrive, see the sentence. Auditable by the rep, the manager and procurement.</li>
<li><strong>Empty over wrong.</strong> If the economic buyer has not been in a conversation, the field stays empty, and the risk feed says so. No hallucinated CFOs.</li>
<li><strong>Stage advances are proposed, not forced.</strong> When decision process and economic buyer are both filled, 2nd Closer proposes Discovery &rarr; Evaluation; a manager approves.</li>
<li><strong>The gaps become coaching.</strong> A rep whose deals never have a decision process filled is a rep who is not asking that question. You see it Monday, not at quarter end.</li>
</ul>
<p>Accuracy on well-structured calls runs 92&ndash;97%. Field completion goes from around thirty-one percent to roughly a hundred, because there is no longer a human in the data-entry loop.</p>
<div class="cta">
<p><strong>MEDDPICC that fills itself, on the HubSpot or Pipedrive you already run.</strong> Free while 2nd Closer is in public beta. Bring an API key from any LLM provider. Live the morning after a 20-minute call.</p>
<a class="btn btn--primary" href="/beta">Join the free beta</a>
</div>
` },
    ],
    related: ['first-ae-handoff-kit', 'follow-up-email-after-sales-call', 'leading-vs-lagging'],
  },
];

