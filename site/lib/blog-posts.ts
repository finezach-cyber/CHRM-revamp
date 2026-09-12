import type { Author, BlogPost } from "./types";

// CHRM marketing — Blog post data
// Editorial long-form, in CHRM's voice. Each post renders via BlogPost.jsx.

// Default author metadata, used by every post in this file.
export const AUTHORS: Record<string, Author> = {
  zach: {
    name: 'Zach Fine',
    role: 'Founder, CHRM',
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
      "CHRM&rsquo;s position is that the data capture problem is solved by removing the closer from the loop, not by motivating them harder. The conversation already exists. The notetaker is already running. CHRM reads the transcript, populates the leading fields, and writes them to your CRM before the closer&rsquo;s next call begins.",
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
    title: 'Why CHRM has no workflow builder.',
    deck: 'Every other category of sales tool ships with a drag-and-drop workflow canvas. We don&rsquo;t. Here&rsquo;s why we never will.',
    body: [
      "A workflow canvas — the kind of node-based editor where you drag a trigger, connect it to an action, define the conditions, and test it — is the standard interface for sales automation. Outreach has one. HubSpot has one. Zapier is one.",
      "It is also, on inspection, the interface that quietly created the GTM engineering job.",
      { h: 'What workflow builders ask of you.' },
      "Every workflow node looks small in isolation. Drag a trigger. Drag an action. Connect them. The problem is that real go-to-market processes are not three nodes. They are forty nodes. They branch. They condition on external systems. They have edge cases. They have to be maintained as your product, your team, and your pricing change every quarter.",
      "Forty nodes that all need to keep working is a system. Systems need owners. Owners need to be paid. The job is the GTM engineer, and the math is roughly two senior engineering salaries to keep the duct tape stuck to a stack that was supposed to be off-the-shelf software.",
      { h: 'What CHRM does instead.' },
      "CHRM does not ask you to design the workflow. You sign into your CRM, your calendar, LinkedIn, and Apollo. We read your CRM schema. We know what fields to populate because they&rsquo;re already in your HubSpot or Pipedrive. We know what conversations matter because they&rsquo;re on your calendar.",
      "There is no canvas. There is no node. There is no trigger to wire to an action. The execution layer is the product. It runs without an integration architect.",
      { h: 'The bet.' },
      "Our bet is that the workflow-canvas era ends inside the next three years, the same way custom CRM implementations ended inside the SaaS era twenty years ago. The companies that win will not be the ones with the best canvas. They will be the ones whose customers never had to open one.",
    ],
    related: ['gtm-engineer-anti-pattern', 'leading-vs-lagging'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'gtm-engineer-anti-pattern',
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
      "This is the bet CHRM is making. Not better AI. Not more workflow nodes. Software that does not require an Industrial Complex to make it run.",
    ],
    related: ['why-no-workflow-nodes', 'live-in-a-day'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'six-week-feedback-loop',
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
      "You don&rsquo;t need a faster team to operate a one-day loop. You need data that doesn&rsquo;t require humans to log it. That&rsquo;s what CHRM does.",
    ],
    related: ['leading-vs-lagging', 'series-a-cro-playbook'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'live-in-a-day',
    category: 'How CHRM works',
    date: '2026-03-17',
    readTime: '4 min',
    author: 'Zach Fine, Founder',
    authorUrl: 'https://www.linkedin.com/in/finezach',
    title: 'A note on what &ldquo;live in under a day&rdquo; actually means.',
    deck: 'No implementation. No engineer. No quarter-long rollout. Here&rsquo;s the literal sequence.',
    body: [
      "Most enterprise software ships with an implementation timeline. A statement of work. A kickoff. A discovery phase. A test environment. A user acceptance period. A production rollout. The line on the contract is the licence. The line on the budget is the implementation. The implementation always costs more.",
      "CHRM doesn&rsquo;t do that. The sequence is short enough to print on a postcard.",
      { h: 'The actual sequence.' },
      "OAuth into your CRM. CHRM reads every pipeline, every stage, every custom field. Fifteen minutes.",
      "Connect Google or Microsoft Calendar. CHRM&rsquo;s built-in notetaker now joins every booked call. Five minutes.",
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
      "CHRM is one option. The point isn&rsquo;t the vendor — the point is the sequence. Fix the data layer before you build the analytics layer. Fix the analytics layer before you build the playbook automation layer. Most Series A go-to-market teams do this in reverse, and the receipts are everywhere.",
    ],
    related: ['leading-vs-lagging', 'six-week-feedback-loop'],
  },
];
