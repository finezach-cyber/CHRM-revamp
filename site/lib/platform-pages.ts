import type { PageData } from "./types";

// CHRM marketing — Platform & experience pages
// Workspace, Chrome extension, Team

export const PLATFORM_PAGES: PageData[] = [

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'workspace',
    section: 'platform',
    category: 'Deals workspace',
    seoTitle: 'A sales pipeline that fills itself: the CHRM workspace',
    h: 'What reps <em>actually look at all day.</em>',
    sub: 'A tour of the main app: pipeline, deal detail, risk feed, inline insights. The screen your team opens before coffee.',
    meta: [
      ['Surface', 'Web app · responsive'],
      ['Primary user', 'AE + manager'],
      ['Inline AI', 'On every record'],
      ['Filters', 'Saved per user'],
    ],
    prose: [
      'The homepage can&rsquo;t show enough screen. If your team is the kind that needs to actually see the product before they commit, this is the page.',
      'CHRM&rsquo;s workspace is built for the closer who has fifteen deals in flight and a Friday review at 4pm. Pipeline view shows every deal with the AI-surfaced state — risk severity, summary excerpt, last touch, next action — without the rep having to click into each one.',
      { h: 'Deal detail is the focus.' },
      'Click into a deal and the timeline collapses every conversation — calls, emails, LinkedIn touches, CRM notes — into a single reverse-chronological feed. The AI summary sits above it with field-level citations. Open risks are pinned. Stakeholder map is on the right.',
      { h: 'Bulk actions where they matter.' },
      'Multi-select deals to apply a sequence, reassign ownership, or trigger batch AI re-analysis. Useful for onboarding a new pipeline, applying a process change, or handing deals between reps.',
      { h: 'Saved views per user.' },
      'Filters are saved per user. The view your VP opens for the Monday forecast and the view your AE opens for their personal pipeline aren&rsquo;t the same view — and shouldn&rsquo;t be.',
    ],
    bullets: [
      ['Pipeline view', 'Every deal, with AI state inline: risk, summary, next action.'],
      ['Deal detail timeline', 'Every conversation, every channel, in one reverse-chrono feed.'],
      ['Bulk actions', 'Multi-select for sequence enrollment, reassignment, batch re-analysis.'],
      ['Saved views', 'Filters per user. Manager and AE views aren\u2019t the same view.'],
    ],
    shotLabel: 'Pipeline view · 47 deals · risk inline',
    shotHint: 'The screen your team opens before coffee.',
    related: ['risk-detection', 'engagement-summaries', 'chrome-extension'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'chrome-extension',
    section: 'platform',
    category: 'Chrome extension',
    h: 'Write with CHRM, <em>inside your CRM.</em>',
    sub: 'A browser extension that adds a Write-with-CHRM button to email composers in HubSpot and Pipedrive. Reps stay in their CRM. CHRM does the drafting.',
    meta: [
      ['Surface', 'Chrome Web Store'],
      ['Detected CRMs', 'HubSpot + Pipedrive'],
      ['Auth', 'API key (locally stored)'],
      ['Tracking', 'Sent emails logged to deal'],
    ],
    prose: [
      'There&rsquo;s a category of CHRM user who lives in their CRM. They&rsquo;re not opening a separate tool, they don&rsquo;t want to open a separate tool, and asking them to is friction. The Chrome extension is for them.',
      'Install the extension. The next time the rep opens an email composer inside HubSpot or Pipedrive, a Write-with-CHRM button appears. One click drafts the email, using the same engagement intelligence, the same voice match, the same deal grounding as the main app. The rep edits and sends from within their CRM.',
      { h: 'Auto-detects which CRM.' },
      'The extension detects whether the rep is on HubSpot or Pipedrive and adapts its UI and field-extraction accordingly. No configuration toggle to flip.',
      { h: 'Sent emails close the loop.' },
      'When a CHRM-drafted email is sent through the extension, the event is recorded against the deal. The drafting model uses that signal to improve future drafts for the same rep.',
      { h: 'Authentication is per user.' },
      'The extension authenticates against the CHRM backend with a per-user API key, stored locally. Keys can be revoked from the user&rsquo;s profile if a device is lost.',
    ],
    bullets: [
      ['Native to HubSpot + Pipedrive', 'Button appears in the CRM\u2019s own email composer. No new surface.'],
      ['Auto-CRM detection', 'Extension adapts based on which CRM the rep is in.'],
      ['Same engine as the app', 'Engagement intelligence, deal grounding, voice match. Identical.'],
      ['Sent-email tracking', 'Closes the feedback loop. Future drafts improve.'],
    ],
    shotLabel: 'Pipedrive composer · Write with CHRM',
    shotHint: 'Drafted from deal context. Sent from the rep\u2019s CRM.',
    related: ['follow-up-emails', 'workspace', 'team'],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: 'team',
    section: 'platform',
    category: 'Team management & roles',
    h: 'Built for <em>a sales team, not a seat.</em>',
    sub: 'Invite members, assign roles, control permissions across the organisation. The page sales managers and VP-Ops read before pulling the trigger.',
    meta: [
      ['Roles', 'Owner · Admin · Manager · Closer'],
      ['Invites', 'Tokenised email links'],
      ['Multi-tenant', 'Per-org settings + data'],
      ['SSO', 'On the roadmap'],
    ],
    prose: [
      'Most evaluations stall at the same place: the buyer believes the product works for one rep, but can&rsquo;t see how it scales to a team. This page is for that buyer.',
      'CHRM is multi-tenant by design. Each organisation has its own CRM connection, its own users, its own settings, its own data. No co-mingling, no cross-org leakage. Inside the org, four roles control what people can do: owner, admin, manager, closer.',
      { h: 'Roles, with real boundaries.' },
      'Owners can change billing and delete the organisation. Admins can manage integrations and team settings. Managers can see all deals and configure team-wide automation. Closers can see and act on their own deals. Sensitive operations — connecting a CRM, changing the field map — are scoped to admins and above.',
      { h: 'Invitations are tokenised.' },
      'Invite by email. Invitees click a tokenised link, set up their account, and land directly in your organisation with the right role. No back-channel admin work, no shared password.',
      { h: 'Plan-aware seat management.' },
      'Add or remove seats from the team management page. Billing reflects the change immediately. Free seats — manager, RevOps, leadership — don&rsquo;t count against the AE seat plan.',
    ],
    bullets: [
      ['Four roles', 'Owner, Admin, Manager, Closer — each scoped to real boundaries.'],
      ['Tokenised invitations', 'Email invites with one-click setup. No shared credentials.'],
      ['Multi-tenant by design', 'Per-org data, integrations, settings. No leakage.'],
      ['Seat management', 'Add/remove seats live. Free seats for non-AE roles don\u2019t bill.'],
    ],
    shotLabel: 'Team page · 14 members · 3 roles',
    shotHint: 'Roles, permissions, and seat status, in one screen.',
    related: ['setup', 'workspace', 'process-iteration'],
  },

];
