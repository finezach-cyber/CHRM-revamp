# 1. CHRM today: solution and positioning

_Research date: 12 Sep 2026. Sources: chrm.app pages as indexed by search engines (direct fetch of chrm.app was blocked from the research environment), plus third-party coverage. Quotes are verbatim from indexed page copy._

## 1.1 What CHRM is

CHRM is an AI layer that sits between a B2B sales team's conversations and its CRM. After every sales call it:

1. **Fills CRM fields** in HubSpot or Pipedrive (standard fields, custom fields, deal stage, contact properties; "most teams configure ten to twenty fields per deal record").
2. **Drafts / sends the follow-up** ("personalised follow-up", "follow-up sequences").
3. **Flags deal risk** across five categories: missing decision-maker, budget uncertainty, competitive threat, timeline drift, champion disengagement. Flags are surfaced *inside the CRM*, "not buried in a call recording somewhere".
4. **Maps the buying committee**: every name mentioned in every conversation tied to a deal is mapped to a role and an influence score (product page `/product/stakeholder-mapping`).

Supporting capabilities: a **built-in notetaker** that auto-joins every booked call via Google or Microsoft calendar ("no third-party tool to install"); it can also **work alongside** an existing notetaker (Fireflies, Fathom, Otter) and act on their transcripts. Data enrichment from **LinkedIn** (stakeholder context) and **Apollo** (firmographics). OAuth connection to HubSpot/Pipedrive "in fifteen minutes"; "live in a day".

## 1.2 Current messaging (verbatim)

| Element | Current copy |
|---|---|
| Title tag (home) | "CHRM — The execution layer for CRM." |
| Alt title tag (index.html) | "CHRM \| AI CRM Automation for HubSpot & Pipedrive" |
| Headline / meta | "After every sales call it fills your CRM fields, drafts the follow-up, and flags deal risk — no rep logs a thing. Live in a day." |
| Positioning statement | "CHRM is the execution layer for your CRM. It uses AI to run the complex sales processes B2B teams already have (filling the fields, sending the follow-ups, flagging the deals that slip) and to learn how to improve them." |
| Proof claim | "When field completion rates are below 35% — the industry average — forecasts are built on guesswork. CHRM brings field completion to 95%+ across all deals." |
| ICP statement | "HubSpot and Pipedrive — the two most common CRMs in B2B teams with 5–50 closers." |
| Pricing | "Priced per seat based on the number of account executives on your team … pricing is shared during the demo call." 20-minute demo. |
| Onboarding | No self-serve; "a 15-minute configuration session means CHRM works correctly for your specific CRM structure from day one." |
| Team | "Founding team of four" (names not indexed). |

## 1.3 ICP (as stated + inferred)

- **Company**: B2B, 5–50 closers (AEs), running HubSpot or Pipedrive. Typically seed to Series B SaaS, agencies and services firms with a real outbound/inbound sales motion but no RevOps team big enough to police CRM hygiene.
- **Economic buyer**: Head of Sales / VP Sales / founder-who-runs-sales. **Champion**: RevOps or Sales Ops lead (when one exists), or the sales manager who runs pipeline reviews. **User**: AEs (they mostly experience CHRM as "I stopped doing CRM").
- **Trigger events**: forecast miss blamed on bad data; board asking for pipeline rigor; rolling out a qualification framework (MEDDIC/BANT/SPICED) and reps not filling it in; new sales leader inheriting a dirty CRM; a notetaker already in place but "the notes never make it into the fields"; Momentum.io customers on HubSpot displaced by the Salesforce acquisition (Mar 2026).
- **Jobs to be done**: (1) keep the CRM complete without rep effort, (2) make the forecast trustworthy, (3) never miss a follow-up, (4) see which deals are quietly dying and why, (5) know who is actually in the buying committee.

## 1.4 Assessment of current positioning

**Strengths**
- "Execution layer for CRM" is a sharp, ownable category frame. It correctly separates CHRM from notetakers (which *record*) and from native CRM AI (which *suggests*). It is a good enterprise-style phrase.
- Outcome-first proof ("35% → 95%+ field completion") is exactly the number a RevOps lead cares about.
- The HubSpot + Pipedrive focus is a real wedge: most credible competitors are Salesforce-first (Weflow, Scratchpad, Momentum→Salesforce, Attention at enterprise price points).
- "Live in a day" and "no rep logs a thing" are concrete and rep-relatable.

**Weaknesses / conversion leaks**
1. **"Execution layer" is a category label, not a promise.** Sales leaders don't search for it and don't feel it. The H1 should lead with the outcome and keep "execution layer" as the category line beneath it.
2. **Demo-only, no price, no self-serve** = high friction for a 5–50 seat buyer who is used to Fathom ($0–25), Fireflies ($10–19), tl;dv ($18–59). Every comparable at this segment publishes pricing. Hidden pricing reads as "enterprise", which contradicts the ICP.
3. **No mid-funnel offer.** Visitors who aren't ready for a demo have nowhere to go. There is no video, interactive demo, ROI/hygiene calculator, or content.
4. **No visible social proof indexed** (logos, testimonials, G2, marketplace listings). At this stage, even 3 named customers + the HubSpot App Marketplace badge would move conversion materially.
5. **Undifferentiated vs. "notetaker + CRM sync"** in the buyer's head. Fathom, Fireflies, tl;dv, Grain all claim "syncs to HubSpot/Pipedrive". CHRM must make the *notes vs. fields* distinction explicit and visual (see redesign).
6. **Thin site**: only two indexed URLs plus one product page. No integration pages, no comparison pages, no blog. This is the main reason organic traffic is ~zero (see doc 3).
7. **Name collision**: "CHRM" is dominated in search by "Certified Human Resource Manager" and "Certified Hospitality Revenue Manager". Branded search will not be a traffic source until the brand is much bigger; navigational queries should be "chrm.app" / "chrm crm" and the site must win on non-brand terms.

## 1.5 Recommended positioning (used in the redesign)

- **Category**: The execution layer for HubSpot and Pipedrive.
- **One-line promise (H1)**: *Every call ends with your CRM already updated.*
- **Supporting line**: CHRM joins your calls, fills the fields, sends the follow-up and flags the deals that are slipping. Inside HubSpot or Pipedrive. No rep logs a thing.
- **Proof points to lead with**: 95%+ field completion (vs. ~35% average), live in a day, 15-minute OAuth setup, works with the notetaker you already have.
- **Enemy**: "Notes that never become fields." Notetakers summarise; native CRM AI suggests; CHRM executes.
- **Persona framing**: Sales leaders get a forecast they can defend. RevOps gets a complete CRM without policing reps. AEs get their evenings back.

Sources: [chrm.app](https://www.chrm.app/), [chrm.app/index.html](https://www.chrm.app/index.html), [chrm.app/product/stakeholder-mapping](https://www.chrm.app/product/stakeholder-mapping), [Salesforce State of Sales statistics](https://www.salesforce.com/sales/state-of-sales/sales-statistics/), [Salesforce acquires Momentum](https://www.salesforce.com/news/stories/salesforce-signs-definitive-agreement-to-acquire-momentum/).
