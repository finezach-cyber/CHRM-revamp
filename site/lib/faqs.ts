// CHRM — FAQ content, shared by the FAQ component and the FAQPage JSON-LD.
export const FAQS: { q: string; a: string }[] = [
  {
    q: "Is CHRM a CRM?",
    a: "No. CHRM works on top of the CRM you already run, HubSpot or Pipedrive. It reads your fields, stages and history, and writes back to them. Your CRM stays the system of record. Think of CHRM as a second account executive who sits silently on every call and then does the work after it.",
  },
  {
    q: "What does CHRM actually do after a call?",
    a: "Everything an AE would do except talk and negotiate. It updates your CRM fields with citations, writes and sends the follow-up from the rep’s inbox, runs sequences, maps the buying committee, opens LinkedIn connections and warm-up sequences with stakeholders, enriches every new contact via Apollo, flags deal risk with a recommended action, handles competitor mentions, and learns from wins and losses to improve the playbook.",
  },
  {
    q: "How does CHRM connect to HubSpot or Pipedrive?",
    a: "OAuth, fifteen minutes. CHRM discovers every pipeline, stage and custom field and presents them as mapping targets. You choose which fields to fill and what a well-filled record looks like to your team. No middleware, no credentials stored on our side.",
  },
  {
    q: "Does CHRM work with Salesforce?",
    a: "CHRM currently supports HubSpot and Pipedrive, the two CRMs most common in B2B teams with 5–50 closers. If Salesforce is your system of record, mention it on the intro call and we'll tell you honestly whether we can support your setup today.",
  },
  {
    q: "Does CHRM replace my notetaker (Fireflies, Fathom, Otter)?",
    a: "Only if you want it to. CHRM has its own built-in notetaker that joins every booked call. It also ingests Fireflies, Fathom, Otter and Gong transcripts as one source among several. Keep what you have; CHRM takes the transcript and does the rest of the job.",
  },
  {
    q: "Do I need an engineer or a workflow builder?",
    a: "No. There is no workflow canvas in CHRM, by design. You sign into four things (your CRM, your calendar, LinkedIn, Apollo), we read your CRM schema, and the execution layer turns on. When an upstream API changes, we absorb it.",
  },
  {
    q: "How long does setup take?",
    a: "Under one business day. Four OAuth sign-ins and a 30-minute configuration call where we walk through your field map together. The next morning every booked call is captured, every field is filling, every follow-up is staged.",
  },
  {
    q: "Can I customise which CRM fields CHRM fills?",
    a: "Completely. Custom fields, standard fields, deal stages, contact properties, anything in your HubSpot or Pipedrive, mapped per pipeline. Most teams configure ten to twenty-two fields per deal record. We don't impose a template.",
  },
  {
    q: "How accurate is CHRM at populating CRM fields?",
    a: "92–97% field accuracy on well-structured calls. When information is ambiguous or not discussed, CHRM leaves the field empty rather than guess. Every populated value links to the line in the transcript that produced it.",
  },
  {
    q: "Does CHRM send emails without a human looking?",
    a: "Follow-ups are drafted from the actual conversation and land where the rep can review, steer or send. Hands-off sending is opt-in per team. Stage advances are proposed for a manager to approve. LinkedIn outreach runs inside daily limits and warm-up cadences you control.",
  },
  {
    q: "What deal risk signals does CHRM detect?",
    a: "Five categories: missing decision-maker, budget uncertainty, competitive threat, timeline drift, and champion disengagement. Each risk carries a severity, the source line that triggered it, and a recommended next action, surfaced in your CRM and the manager feed.",
  },
  {
    q: "Is my data secure? Is CHRM SOC 2 compliant?",
    a: "CHRM connects over OAuth and stores no credentials. Transcripts are processed to extract structured fields and then discarded; only the structured output is written to your CRM. A formal SOC 2 audit is ahead of us, not behind us. If your security team needs a review, ask on the intro call and we'll walk through exactly how we handle data.",
  },
  {
    q: "How much does CHRM cost?",
    a: "CHRM is priced per account-executive seat, and we share the number on the 20-minute intro call once we know your team size and CRM setup. Managers, RevOps and leadership seats don't bill. There is no platform fee, no credits and no implementation line. The first thirty days are free for up to five AE seats.",
  },
  {
    q: "What size sales team does CHRM work best for?",
    a: "B2B sales teams with 5–50 account executives on HubSpot or Pipedrive. At that scale the after-call work is a constant drag on the most expensive people in the company, and there is no RevOps engineering team to absorb it. Under 5 reps the admin is usually manageable; over 50 you typically need enterprise CRM architecture we don't currently serve.",
  },
];
