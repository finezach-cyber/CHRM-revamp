import type { PageData } from "./types";

// CHRM marketing — Integration pages
// HubSpot, Pipedrive, Gmail, Outlook, Fireflies, Apollo, LinkedIn

export const INTEGRATION_PAGES: PageData[] = [

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'hubspot',
    section: 'integrations',
    category: 'HubSpot integration',
    h: 'CHRM <em>for HubSpot.</em>',
    sub: 'Native OAuth, two-way real-time sync, custom-field mapping per pipeline. CHRM reads your HubSpot, writes back to it, and stays out of its way.',
    meta: [
      ['Connection', 'OAuth · ~15 minutes'],
      ['Sync', 'Real-time, two-way'],
      ['Custom fields', 'All supported'],
      ['Activities + notes', 'Ingested + pushed'],
    ],
    prose: [
      'HubSpot is the source of truth. CHRM is the execution layer that sits on top of it. The integration is built so the two never fight: every AI-extracted value, every drafted follow-up, every detected risk lives where it belongs: your existing HubSpot deal record.',
      'Connection is OAuth. No credentials handed over, no service account, no IT ticket. The first thing CHRM does after connecting is discover every custom field on every deal pipeline and present them as mapping targets.',
      { h: 'Custom fields fully supported.' },
      'Whatever you&rsquo;ve built into HubSpot — MEDDPICC fields, custom stage criteria, persona segmentation, deal trigger — CHRM populates. You decide which fields to map; CHRM reads the schema you already have.',
      { h: 'Two-way, real-time.' },
      'Conversation in. Field updates out. The latency between a call ending and the HubSpot deal updating is measured in minutes, not nightly batches.',
      { h: 'Activities and notes go both ways.' },
      'Existing HubSpot notes and activities are ingested as historical context on day one. CHRM-generated activity — calls processed, follow-ups sent, risks detected — writes back as activities on the deal, so the HubSpot timeline stays canonical.',
    ],
    bullets: [
      ['OAuth · 15 minutes', 'No credentials. No service account. No IT ticket.'],
      ['Per-pipeline field mapping', 'Different pipelines, different field maps. Configured once, kept current.'],
      ['Custom + standard fields', 'Every property on the deal record is a mapping target.'],
      ['Two-way activity sync', 'Existing notes ingested. CHRM activity written back.'],
    ],
    shotLabel: 'HubSpot field map · Enterprise pipeline',
    shotHint: 'Twenty-two custom fields, mapped to AI extraction.',
    related: ['crm-hygiene', 'pipedrive', 'setup'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'pipedrive',
    section: 'integrations',
    category: 'Pipedrive integration',
    h: 'CHRM <em>for Pipedrive.</em>',
    sub: 'Native OAuth, webhook-driven real-time sync, custom-field mapping per pipeline. CHRM operates inside your Pipedrive without rewriting it.',
    meta: [
      ['Connection', 'OAuth · ~15 minutes'],
      ['Sync', 'Webhook-driven, real-time'],
      ['Custom fields', 'All supported'],
      ['Activities + notes', 'Ingested + pushed'],
    ],
    prose: [
      'Half of CHRM&rsquo;s early customers are on Pipedrive. The integration is deep and tested, not a "we support it" footnote on a HubSpot-first product.',
      'Connection is OAuth. CHRM subscribes to Pipedrive&rsquo;s webhook events for deal changes, activity creation, and stage advances, so updates are real-time rather than polling-based. Less load on your Pipedrive, faster response in CHRM.',
      { h: 'Custom fields are first-class.' },
      'Every Pipedrive deal field, organisation field, and person field is a mapping target. CHRM discovers them on connection and presents them as options. You map; CHRM writes.',
      { h: 'Pipelines and stages.' },
      'Multi-pipeline setups are supported — each pipeline has its own field map and its own automation rules. Stage advancement based on deal intelligence is opt-in: CHRM proposes a stage change, your team approves.',
      { h: 'Activities both directions.' },
      'Pipedrive activities and notes are ingested on day one. CHRM-generated activity writes back to Pipedrive as activities on the deal, so the Pipedrive timeline stays the canonical record.',
    ],
    bullets: [
      ['OAuth · 15 minutes', 'No credentials handed over. No service account.'],
      ['Webhook-driven sync', 'Real-time. Lower load on Pipedrive than polling.'],
      ['Per-pipeline field mapping', 'Different pipelines, different maps. All custom fields supported.'],
      ['Stage advance, opt-in', 'CHRM proposes stage changes; your team approves before they apply.'],
    ],
    shotLabel: 'Pipedrive · webhook event log',
    shotHint: 'Every event handled in real time. No nightly batch.',
    related: ['crm-hygiene', 'hubspot', 'setup'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'gmail',
    section: 'integrations',
    category: 'Gmail / Google Workspace',
    h: 'Gmail, <em>fully two-way.</em>',
    sub: 'Two-way email sync across the team. Threads captured into the deal timeline. CHRM-drafted replies sent via the rep&rsquo;s authenticated address.',
    meta: [
      ['Connection', 'Google OAuth'],
      ['Direction', 'Two-way'],
      ['Send-as', 'Rep\u2019s authenticated address'],
      ['Workspace admin', 'Domain-wide opt-in available'],
    ],
    prose: [
      'Email is the spine of B2B sales. If the email integration is shallow, nothing else in the product matters. CHRM&rsquo;s Gmail integration is two-way, per-user OAuth, and built so reps never feel CHRM running behind them.',
      'Threads in both directions are captured continuously into the deal timeline. Outbound emails CHRM drafts are sent via the rep&rsquo;s authenticated Gmail address, so the prospect sees the rep&rsquo;s name in their inbox, not a CHRM relay.',
      { h: 'Workspace-admin friendly.' },
      'Connection is per-user OAuth by default; Workspace admins can also opt the entire domain in centrally if they prefer. Scopes are minimal and disclosed at consent.',
      { h: 'Drafts, not auto-sends.' },
      'CHRM-drafted replies land in the rep&rsquo;s drafts folder (and in the CHRM workspace) for review. Nothing sends without a click, except by explicit configuration for hands-off cadences.',
      { h: 'Privacy by design.' },
      'CHRM processes email content to extract structured deal context. Personal or unrelated mail is filtered out. The deal-thread filter is configurable.',
    ],
    bullets: [
      ['Two-way sync', 'Inbound + outbound threads captured. Drafts go out from your rep\u2019s address.'],
      ['Per-user OAuth', 'No service account. No password sharing.'],
      ['Domain-wide opt-in', 'Workspace admins can enable for the whole domain centrally.'],
      ['Drafts by default', 'Replies land in the rep\u2019s drafts for review. Auto-send is opt-in.'],
    ],
    shotLabel: 'Gmail · CHRM draft staged',
    shotHint: 'Drafted in Gmail. Sent from the rep\u2019s authenticated address.',
    related: ['follow-up-emails', 'outlook', 'conversation-capture'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'outlook',
    section: 'integrations',
    category: 'Outlook / Microsoft 365',
    h: 'Outlook, <em>treated equally.</em>',
    sub: 'Same depth as Gmail. Two-way thread capture, send-as the rep&rsquo;s authenticated address, Microsoft 365 admin support. For the half of enterprise that isn&rsquo;t on Google.',
    meta: [
      ['Connection', 'Microsoft OAuth'],
      ['Direction', 'Two-way'],
      ['Send-as', 'Rep\u2019s authenticated mailbox'],
      ['Tenant admin', 'Tenant-wide opt-in available'],
    ],
    prose: [
      'A surprising number of sales tools treat Outlook as a second-class integration. CHRM doesn&rsquo;t. If your team is on Microsoft 365 — and many regulated industries are — the integration is identical in depth to Gmail.',
      'Threads in both directions are captured into the deal timeline. CHRM-drafted replies send via the rep&rsquo;s authenticated mailbox. Tenant admins can opt the entire tenant in centrally, or leave it per-user OAuth.',
      { h: 'Designed for regulated environments.' },
      'Microsoft 365 is the default in financial services, healthcare, and government. CHRM&rsquo;s integration was built with those buyers in mind — minimum scopes, transparent processing, and clear data retention controls.',
      { h: 'Identical feature parity.' },
      'Everything that works for Gmail works for Outlook. Drafting, sending, threading, sequence delivery. Same depth, same latency, same drafts-by-default policy.',
    ],
    bullets: [
      ['Two-way sync', 'Inbound + outbound threads captured. Replies via the rep\u2019s mailbox.'],
      ['Per-user OAuth', 'No service account, no credential sharing.'],
      ['Tenant-wide opt-in', 'Microsoft 365 admins can enable centrally.'],
      ['Identical to Gmail in depth', 'No feature gap between the two providers.'],
    ],
    shotLabel: 'Outlook · CHRM draft staged',
    shotHint: 'Drafted in the rep\u2019s Microsoft 365 mailbox.',
    related: ['gmail', 'follow-up-emails', 'conversation-capture'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'fireflies',
    section: 'integrations',
    category: 'Fireflies note-taker',
    h: 'Fireflies, <em>plugged in deeply.</em>',
    sub: 'First-class Fireflies integration. Recordings, transcripts, and meeting summaries flow into CHRM and feed every downstream AI workflow.',
    meta: [
      ['Connection', 'Fireflies API'],
      ['Surface', 'Auto-ingested transcripts'],
      ['Downstream', 'All AI workflows'],
      ['Replaces', 'Not required (built-in notetaker)'],
    ],
    prose: [
      'CHRM has its own built-in notetaker, so Fireflies isn&rsquo;t required. But many teams already standardise on Fireflies and want their existing transcript library to feed CHRM&rsquo;s downstream intelligence. That&rsquo;s what this integration is for.',
      'Connect once. Every existing Fireflies transcript is ingested. Every new transcript flows in continuously. Risks, summaries, follow-ups, stakeholder maps — all driven from the Fireflies transcript exactly as they would be from CHRM&rsquo;s own notetaker.',
      { h: 'Side-by-side with the built-in notetaker.' },
      'You can run both. The CHRM notetaker joins meetings Fireflies doesn&rsquo;t catch (or that the rep prefers to keep off Fireflies); the Fireflies integration ingests the bulk of the team&rsquo;s library. Two sources, one structured record per deal.',
      { h: 'No re-listening.' },
      'Fireflies transcripts feed the same engagement summaries with the same source-line citations as native CHRM transcripts. Click a value in the summary; jump to the line in the Fireflies recording that produced it.',
    ],
    bullets: [
      ['Auto-ingested transcripts', 'Existing + ongoing. Connect once, ingest forever.'],
      ['Feeds every workflow', 'Risks, summaries, follow-ups, stakeholder maps, all driven from Fireflies transcripts.'],
      ['Side-by-side with built-in notetaker', 'Run both. CHRM ingests Fireflies output as one source among several.'],
      ['Cited summaries', 'Jump from a summary field to the source line in the Fireflies recording.'],
    ],
    shotLabel: 'Fireflies · 142 transcripts ingested',
    shotHint: 'Existing transcript library feeds every CHRM workflow.',
    related: ['conversation-capture', 'engagement-summaries', 'gmail'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'apollo',
    section: 'integrations',
    category: 'Apollo enrichment',
    h: 'Apollo, <em>connected to the conversation.</em>',
    sub: 'Every new contact discovered in a call is enriched via Apollo — company data, role, title, email, phone — without a manual lookup or a separate tab.',
    meta: [
      ['Connection', 'Apollo API'],
      ['Enrichment', 'Per discovered contact'],
      ['Coverage', 'Company + person'],
      ['Downstream', 'ICP scoring + stakeholder map'],
    ],
    prose: [
      'When a new name surfaces in a conversation — "we&rsquo;ll need to loop in Maria from security" — CHRM picks up Maria from the transcript and asks Apollo to fill in the rest. Title, role, email, phone, company context. The contact lands in the deal record complete.',
      'Reps stop tab-switching to Apollo every time a new stakeholder comes up. RevOps stops cleaning up half-populated contact records. The enrichment is per conversation, not per export.',
      { h: 'ICP scoring built on it.' },
      'Apollo firmographics feed CHRM&rsquo;s ICP scoring. Define your ICP — industry, headcount, revenue, region, anything — and CHRM scores every new deal against it automatically.',
      { h: 'Apollo customers, this is your page.' },
      'If your team already pays for Apollo, this integration uses the data you&rsquo;re already paying for. No second enrichment tool, no double-buy.',
    ],
    bullets: [
      ['Per-contact enrichment', 'Discovered in conversation. Enriched in seconds.'],
      ['Company + person coverage', 'Firmographics + role data, both directions.'],
      ['ICP scoring built on it', 'Define your ICP. CHRM scores every deal against Apollo firmographics.'],
      ['No double-buy', 'Uses the Apollo subscription you already have.'],
    ],
    shotLabel: 'Apollo enrichment · 23 contacts this week',
    shotHint: 'Discovered, enriched, written back to the deal.',
    related: ['stakeholder-mapping', 'industry-classification', 'crm-hygiene'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'linkedin',
    section: 'integrations',
    category: 'LinkedIn integration',
    h: 'LinkedIn, <em>safely and properly.</em>',
    sub: 'Authenticated LinkedIn integration powering DM/InMail capture, the warm-up outreach engine, sequence enrollment, and CRM activity mirroring. Safety controls front and centre.',
    meta: [
      ['Connection', 'Authenticated LinkedIn'],
      ['Channels', 'Connection · DM · InMail'],
      ['Safety', 'Daily limits, warm-up cadence'],
      ['CRM mirror', 'Activity to your CRM'],
    ],
    prose: [
      'LinkedIn is the most-questioned integration in every security review. So we&rsquo;re going to address it first: CHRM&rsquo;s LinkedIn integration is rate-limited, account-scoped, and built around platform-safe usage patterns. The safety posture is the default, not a hidden setting.',
      'Inside those rails, the integration is deep. LinkedIn DMs and InMails are captured into the deal timeline alongside email and call transcripts. Identified stakeholders are enrolled into warm-up outreach. Every touch — connection sent, accepted, message delivered, reply received — mirrors into your CRM as a logged activity.',
      { h: 'Configurable safety per account.' },
      'Daily connection-send limits. Daily message limits. Warm-up cadence for new accounts. Holiday pauses. All configurable per account, with sensible defaults that keep LinkedIn happy.',
      { h: 'CRM is canonical.' },
      'Nothing happens off-platform. Every LinkedIn action mirrors back to the connected CRM, so your HubSpot or Pipedrive deal timeline stays the system of record.',
    ],
    bullets: [
      ['DM + InMail capture', 'Both channels in the deal timeline. First-class context.'],
      ['Warm-up outreach', 'Identified stakeholders enrolled into sequences automatically.'],
      ['Per-account safety controls', 'Daily limits, warm-up cadence, platform-safe defaults.'],
      ['Mirrored to CRM', 'Every LinkedIn action logged as an activity on the deal.'],
    ],
    shotLabel: 'LinkedIn safety · daily limits, cadence',
    shotHint: 'Safety posture front and centre. Defaults that keep the account healthy.',
    related: ['linkedin-outreach', 'stakeholder-mapping', 'crm-hygiene'],
  },

];
