// A closing paragraph of depth per page, appended after the extra section: what the feature is not,
// or the constraint it runs under. Keeps every product, integration and platform page above 700 words
// of its own, which is the floor at which AI engines start treating a page as worth citing.
export const PAGE_DEPTH: Record<string, string> = {
  "risk-detection":
    "Risk detection is not a forecast model and does not score the probability of closing. It answers a narrower question, deal by deal: what is missing or has changed that a good manager would ask about, and where in the conversation is the evidence. That narrowness is what makes it usable in a Monday pipeline review, where a probability is an argument and a cited gap is an action.",
  "engagement-summaries":
    "Summaries are regenerated when new evidence arrives, not frozen at the first call. A field that said &ldquo;budget: unconfirmed&rdquo; after discovery is updated to the stated range after the evaluation call, with the new citation, and the timeline note records both versions. Nothing a person corrected is overwritten; corrections are marked as human and kept until a person changes them again.",
  "crm-hygiene":
    "Hygiene is measured, not asserted. The workspace shows required-field completion per pipeline and per stage, before and after 2nd Closer connected, and the win/loss analysis uses the same measure to check whether a field is worth requiring at all. A field nobody reads and nothing depends on is a candidate for removal, and 2nd Closer will say so.",
  "follow-up-emails":
    "The follow-up is one email, sent once. It is not a sequence, not a cadence, and not a template with the buyer&rsquo;s first name in it. If the buyer does not reply, that is a signal for the sequence and for risk detection, both of which read the same deal record; the follow-up itself has done its job the moment it goes out with the facts right and the ask clear.",
  "email-sequences":
    "Every sequence is visible to the manager as a plan on the deal: the steps, their conditions, what has sent and what is waiting. A manager can pause a sequence for a deal that has moved to a conversation the rep should be having in person, and the pause is logged like any other action. Sequences never run to people who have not appeared on a deal, which is the line between execution and prospecting.",
  "stakeholder-mapping":
    "The map is a working object, not a report. Each stakeholder carries the last touch, the next suggested touch and a one-line summary of what they care about, drawn from their own words. A rep preparing for a call reads the committee in a minute; a manager reviewing a stalled deal sees at once whether the people who decide have ever been in a conversation.",
  "linkedin-outreach":
    "Warm-up outreach is scoped to deal execution by design. 2nd Closer will not scrape a list, send bulk invitations or run outreach to people who have not appeared on a deal in progress, and the limits that keep an account safe are the same for every user. Teams that want top-of-funnel LinkedIn automation should use a prospecting tool for it; this is the other half of the job.",
  "competitor-intelligence":
    "Counter-positioning is drafted, never sent on its own. It appears as a suggested paragraph in the next follow-up or as a note on the deal, and the rep decides whether the moment calls for it. Some competitor mentions are best answered by not answering; the rep knows which, and 2nd Closer records the choice so the win/loss analysis can learn from it.",
  "industry-classification":
    "Classification is one input to ICP scoring, not the whole of it. Fit also reads what the buyer described as their problem, the size and structure Apollo reports, and how the deal has behaved so far. A company in the right segment with no economic buyer in any conversation is not a good fit yet, and the score says so with the reason.",
  "product-recommendations":
    "Recommendations make the proposal faster and more accurate; they do not replace the rep&rsquo;s judgment about what to lead with, how to package, or when to hold something back for a later phase. The catalogue rules set the boundaries, the deal record supplies the requirements, and the rep makes the call. 2nd Closer never quotes a price to a buyer.",
  "process-iteration":
    "The analysis is transparent by construction. Every proposal shows the deals it was drawn from, the fields it compared and the outcome it measured, so a revenue leader can disagree with the evidence rather than with a black box. Rejected proposals are kept with the reason, and a rejected hypothesis is not proposed again unless new deals change the picture.",
  "conversation-capture":
    "Capture respects the boundaries a team sets. Internal meetings, personal calendars and mailboxes outside the deal are excluded by rule; recordings can be limited to specific pipelines or domains; and any participant can be excluded from a call in one click. Transcripts are processed to extract the structured fields and then discarded, so the CRM holds the output and not a recording archive.",
  hubspot:
    "The HubSpot integration is built for the tiers most teams under fifty reps actually run. Nothing here depends on Sales Hub Professional workflows, Breeze credits or Smart Deal Progression; a Starter portal with the properties your process needs is enough, and a Professional or Enterprise portal keeps every workflow it already has. HubSpot remains the system of record and the place reps look.",
  pipedrive:
    "Pipedrive teams tend to be outbound-heavy and fast, and the integration is built for that: activities logged the moment they happen, stage proposals a manager can approve from the workspace or from the deal itself, and a field map that follows Pipedrive&rsquo;s pipeline-per-motion pattern. Pipedrive stays canonical, and every value 2nd Closer writes can be traced to the line that produced it.",
  gmail:
    "Email capture is scoped to deals, which is also why it is fast to review. A manager reading a deal sees the whole thread with the buyer and nothing else; a rep sees their drafts in their own outbox. Threads are processed to extract structured fields and then discarded, so the CRM holds the record and the mailbox stays the mailbox.",
  outlook:
    "Tenant-wide consent is the usual path for Microsoft 365 teams, and it can be scoped: an admin can limit 2nd Closer to specific users, groups or shared mailboxes, and revoke it from the admin centre at any time. The integration was built for the half of the market that runs on Microsoft and is tested against the same cases as Gmail on every release.",
  fireflies:
    "Fireflies remains the tool reps open to search or re-listen; 2nd Closer is the tool that acts on what was said. Keeping both is the common pattern for teams that adopted Fireflies first, and turning the built-in notetaker on for the calls Fireflies misses is a one-click choice per team.",
  apollo:
    "Enrichment is deliberately narrow: people on deals, at the moment they appear. That keeps credit use proportional to pipeline and keeps the CRM free of contacts nobody has spoken to. Apollo remains the prospecting tool it was; 2nd Closer uses it to make sure that once a deal exists, every person in it is a real record with a title and a role.",
  linkedin:
    "The LinkedIn integration is optional and reversible. A team can run 2nd Closer for capture and CRM work alone, connect LinkedIn later when it wants the committee worked, and disconnect a rep&rsquo;s account at any time from their profile. Every action taken through it is logged on the deal, so there is never a LinkedIn conversation the CRM does not know about.",
  workspace:
    "The workspace is where approvals happen: stage advances proposed with the criteria met, drafts waiting for review, process changes with their evidence. Each approval is one click with the reasoning attached, and each is logged. The CRM records the result; the workspace records why.",
  "chrome-extension":
    "The extension shares the engine with the rest of 2nd Closer, so a draft written in the HubSpot composer knows the same transcript, threads and risks as the follow-up that would have been staged automatically. It is a different door into the same deal, for the reps who prefer to open it themselves.",
  team:
    "Multi-tenancy is the reason a team can start small and grow without a migration: one organisation, its own CRM connection and data, and roles that scale from a founder selling alone to a team with managers and RevOps. Adding a closer is adding a seat; adding a reader is free.",
  setup:
    "What setup does not include is as important as what it does. There is no data migration, because the CRM is not replaced. There is no workflow to design, because 2nd Closer reads the schema and runs the job. There is no rollout plan for reps, because nothing about their day changes except that the after-call work is done when they get to their next call.",
};

export const COMPARE_DEPTH: Record<string, string[]> = {
  "ai-native-crms": [
    "The honest case for an AI-native CRM is a team starting from nothing, or a technical team that wants to build its own motion on a flexible data model. For a team already on HubSpot or Pipedrive with a year of history, integrations and reports, the migration is the cost, and it is paid before any AI runs.",
    "2nd Closer removes the migration from the decision. The AI-native features that matter for closing (fields that fill themselves, follow-ups that write themselves, a committee that maps itself) run on the CRM you have, and if you later decide to switch CRMs anyway, the structured history 2nd Closer built comes with you.",
    "Both paths can be evaluated in the same week. Attio and Clarify have free tiers to try; 2nd Closer&rsquo;s beta is free with your own LLM key and live the morning after a 20-minute call, on the CRM you already have, so the comparison costs nothing but the two calls.",
  ],
  "diy-gtm-stack": [
    "A DIY stack is a product with one customer, and every product needs maintenance. When Apollo changes an endpoint, when HubSpot renames a property, when a Zap silently stops, the engineer who built it is the only one who can fix it, and the reps find out when the fields stop filling.",
    "2nd Closer absorbs upstream change on your behalf, which is the part of the comparison that compounds. The first quarter of a DIY stack looks cheaper than it is; the fourth quarter, with the engineer on their third rebuild, looks like the retainer it always was.",
    "If you already have a GTM engineer, 2nd Closer takes the after-call layer off their plate and leaves them the bespoke work only they can do. If you are deciding whether to hire one, run the beta first; the stack you were going to build is the job it does by default.",
  ],
  momentum: [
    "Momentum&rsquo;s strength was Slack-native deal rooms and call summaries pushed to the CRM, and Salesforce customers will keep getting that. HubSpot and Pipedrive customers were never the roadmap&rsquo;s centre, and after the acquisition they are not on it.",
    "2nd Closer treats HubSpot and Pipedrive as the whole market: the field map, the stage proposals and the activity logging are built against their APIs first, and the after-call job goes further than a summary in a channel. Migration from Momentum is a matter of connecting the same CRM and calendar.",
    "For a HubSpot team leaving Momentum, the practical test is a week: connect HubSpot and the calendar, watch the fields fill with citations and the follow-ups go out, and compare that to the summaries you were getting. The beta is free with your own LLM key.",
  ],
  "hubspot-breeze": [
    "Breeze is worth using where you have it. A summary in the record, a suggested next step and a stalled-deal highlight are useful prompts, and 2nd Closer does not ask you to turn them off. The gap is between a prompt and a done thing, and it is the gap reps fall into at 5pm on a Thursday.",
    "2nd Closer closes that gap on any HubSpot tier, including the Starter portals most small teams run, and on Pipedrive, where there is no native equivalent to compare against. Every value it writes is cited, every send is logged, and every stage move waits for a manager.",
    "The practical test for a HubSpot team is to keep Breeze on and add 2nd Closer for a week on one pipeline. If the fields fill, the follow-ups go and the committee reaches the CRM without a rep doing it, the difference between suggest and execute is visible in the portal.",
  ],
  sybill: [
    "Sybill is a good notetaker with useful drafts, and for a rep who wants better notes it is a fair choice at its price. The comparison turns on what happens next: whether the draft is sent, whether the people named on the call reach the CRM, whether anyone is told the economic buyer has never been in a conversation.",
    "2nd Closer is built for the team that wants those things done, not suggested, and for Pipedrive teams who need support today rather than on a roadmap. Both tools can be evaluated in a week; 2nd Closer&rsquo;s beta is free with your own LLM key.",
    "For a team on Sybill today, nothing needs to be switched off to try 2nd Closer: connect the CRM and calendar, run both for a week on the same calls, and compare what reached the CRM and the buyer. The beta is free with your own LLM key.",
  ],
  rox: [
    "Rox is the right shape for a large Salesforce organisation with a data team, and its agents do research and signal work that 2nd Closer does not attempt. The comparison is about fit, not quality: an enterprise agent platform needs an enterprise to run it.",
    "For one to fifty closers on HubSpot or Pipedrive, the bottleneck is not research; it is the after-call work nobody does. 2nd Closer does that work by default, from a 20-minute configuration call, and asks nothing of a data team because there is none.",
    "For a HubSpot or Pipedrive team that has looked at Rox and found the implementation heavy, 2nd Closer is the same after-call ambition at the scale you have: four sign-ins, a 20-minute call, and a pipeline that fills itself from the next morning, free during the beta.",
  ],
  oliv: [
    "A menu of agents lets a team buy only what it thinks it needs, which is appealing on a pricing page and expensive in practice, because the agents do not share a record. The follow-up agent does not know what the CRM agent wrote; the deal-review agent does not know who the follow-up went to.",
    "2nd Closer is one system with one deal timeline, so every action is informed by every other one, and there is nothing to configure between them. Same CRMs, same price during the beta for every team regardless of which parts they use: none.",
    "The practical comparison is a week on the same calls: which tool wrote the fields with citations, sent the follow-up from the rep&rsquo;s address, and put the new stakeholder in the CRM without a rep doing it. 2nd Closer&rsquo;s beta is free with your own LLM key.",
  ],
  fathom: [
    "Keep the notetaker you like. Fathom is HubSpot&rsquo;s most-installed meeting app for a reason, Fireflies has the deepest search, and tl;dv is cheap and fast. 2nd Closer ingests all three and uses their transcripts as the input to the after-call work, so switching notetakers is never required.",
    "The question a team should ask of any notetaker is what happened after the last call: were the fields written, did the follow-up go, did the new stakeholder reach the CRM. If the answer is that the rep did it, or did not, that is the job 2nd Closer takes.",
    "Try it without changing anything: keep Fathom or Fireflies, connect HubSpot or Pipedrive and the calendar, and watch what happens after the next call. If the fields fill with citations and the follow-up goes out, the notetaker has a second half.",
  ],
};

/** A second closing paragraph per page: what to settle on the configuration call for this feature. */
export const PAGE_DEPTH_2: Record<string, string> = {
  "risk-detection": "On the configuration call, the decisions for this feature are which of the five categories apply to your motion, the stage at which each becomes a flag, and who receives high-severity flags. Most teams start with all five at default thresholds and tighten after the first pipeline review shows which flags changed an outcome.",
  "engagement-summaries": "On the configuration call, the decisions for this feature are the fields to summarise into, the tone (one line per field or a short paragraph), and which fields require a citation before they are written. A team with an existing call-notes template usually maps it in ten minutes.",
  "crm-hygiene": "On the configuration call, the decisions for this feature are which properties 2nd Closer owns, which stay manual, and whether a value a person typed can be updated from conversation. The field-map template on the blog is the same list most teams walk through on the call.",
  "follow-up-emails": "On the configuration call, the decisions for this feature are the send posture per rep and per stage (review or auto-send with a pull-back window), the mailbox each rep sends from, and any account where follow-ups should never be automated. Reps can change their own posture later from their profile.",
  "email-sequences": "On the configuration call, the decisions for this feature are the stages where a sequence may run, the default spacing, and the conditions that pause it. Teams that already have HubSpot sequences usually keep one or two and let 2nd Closer draft the rest per deal.",
  "stakeholder-mapping": "On the configuration call, the decisions for this feature are the role vocabulary (yours or the default five), the CRM property each role maps to, and whether newly discovered people are created as contacts automatically or proposed first. Enrichment through Apollo is turned on in the same step.",
  "linkedin-outreach": "On the configuration call, the decisions for this feature are the daily limits per account, the review posture for messages, and which roles on a committee a warm-up may reach. A rep can connect LinkedIn later and inherit the team defaults.",
  "competitor-intelligence": "On the configuration call, the decisions for this feature are the competitors to register, a few lines of positioning for each, and the CRM property that holds the competitor and threat. Battle cards, if you have them, are linked in the same step.",
  "industry-classification": "On the configuration call, the decisions for this feature are the segment definitions, the confidence threshold below which a classification is proposed rather than written, and the CRM property it maps to. Marketing usually owns the definitions and sales owns the exceptions.",
  "product-recommendations": "On the configuration call, the decisions for this feature are the catalogue columns, the pricing rules a recommendation may apply, and whether recommendations are written as line items or as a note. A catalogue can be pasted from a spreadsheet or synced from the CRM products object.",
  "process-iteration": "On the configuration call, the decisions for this feature are who approves changes, how large a share of new deals an experiment may run on, and which parts of the process are off limits to proposals. Most teams start with fields and stage criteria in scope and pricing out of it.",
  "conversation-capture": "On the configuration call, the decisions for this feature are which calendars the notetaker watches, which notetaker output to ingest if you already have one, which domains are excluded, and how far back to read email and CRM history for the initial backfill.",
  hubspot: "The configuration call for HubSpot walks the field map pipeline by pipeline. Bring the properties your forecast depends on and the stages they belong to; leave with a map you can change at any time and a portal that fills itself from the next morning.",
  pipedrive: "The configuration call for Pipedrive walks the custom fields pipeline by pipeline and chooses the activity types 2nd Closer logs. Bring the fields your reporting depends on; leave with a map you can change at any time and a Pipedrive that fills itself from the next morning.",
  gmail: "On the configuration call, the decisions for Gmail are whether an admin connects the domain or reps connect themselves, the send posture per rep, and any domains or accounts to exclude from capture. Reps can pause capture for a thread from their profile.",
  outlook: "On the configuration call, the decisions for Outlook are tenant-wide consent or per-user sign-in, the users or groups in scope, and the send posture per rep. Shared mailboxes for capture are added in the same step if an admin wants them.",
  fireflies: "On the configuration call, the decisions for Fireflies are whether to import history, how far back, and whether the built-in notetaker also runs. Matching imported meetings to deals uses participant email, and unmatched meetings are listed for a person to place.",
  apollo: "On the configuration call, the decisions for Apollo are which contact and company properties enrichment writes to, whether to backfill existing records overnight, and the credit cap per month. Enrichment can be paused at any time without affecting the rest of 2nd Closer.",
  linkedin: "On the configuration call, the decisions for LinkedIn are the daily limits, the review posture, and which reps connect now. Capture and mirroring start the moment an account is connected; warm-up outreach starts only when a rep approves the first sequence.",
  workspace: "Nothing in the workspace needs configuring: it reflects the field map and the roles set on the configuration call. Saved views are created by each user, and the risk feed and approvals queue appear as soon as the first call is processed.",
  "chrome-extension": "Each rep installs the extension themselves and pastes a key from their profile. There is nothing for an admin to configure, and an admin can see which users have an active extension key and revoke any of them from the team page.",
  team: "On the configuration call, the decisions for the team are who is owner and admin, which managers see which closers, and how many closer seats to start with. Seats can be added or removed from the team page at any time, and non-closer roles never bill.",
  setup: "Bring three things to the configuration call: admin access to the CRM, a list of the fields your forecast depends on, and an LLM API key from any provider for the beta. Everything else is read from the systems you connect.",
};
