# 1. CHRM: what it is and how it is positioned today

_Research date: 12 Sep 2026. Sources: the live site source (finezach-cyber/chrm-website), chrm.app pages as indexed by search engines, and third-party coverage cited inline._

## 1.1 What CHRM actually is

CHRM is **a second account executive for every closer**. It sits on top of the CRM a B2B team already runs (HubSpot or Pipedrive), listens to every conversation, and then does everything an AE does after the call except talk on the call and negotiate the contract.

It is **not a CRM**. It reads the team's existing CRM schema, stages and custom fields and treats them as ground truth. Nothing is migrated. No template is imposed.

What it does, per deal, continuously:

| Job of an AE after the call | What CHRM does | Where it lives on the site |
|---|---|---|
| Know the whole deal | Ingests call transcripts (built-in notetaker, or Fireflies/Fathom/Otter/Gong), Gmail/Outlook threads both directions, LinkedIn DMs and InMails, and the CRM's historical notes | `/product/conversation-capture` |
| Keep the CRM complete | Writes 10–22 fields per deal into HubSpot or Pipedrive in real time; 92–97% accuracy; "empty over wrong"; per-pipeline field maps; versioned | `/product/crm-hygiene`, `/product/engagement-summaries` |
| Follow the sales process | Reads the schema (MEDDPICC variants, custom stage criteria, personas) and runs it; proposes stage advances that a manager approves | `/features` step 02 |
| Write and send the follow-up | Drafted in the rep's voice from the actual conversation, sent from the rep's authenticated address in under five minutes; steerable with free text; multi-step sequences that pause when a real conversation is in flight | `/product/follow-up-emails`, `/product/email-sequences` |
| Work the buying committee | Discovers every stakeholder mentioned, infers role and influence, upserts contacts with role tags | `/product/stakeholder-mapping` |
| Build relationships on LinkedIn | Opens connections and runs warm-up sequences with committee members; rate-limited and mirrored to the CRM as activities | `/product/linkedin-outreach`, `/integrations/linkedin` |
| Enrich every contact | Apollo enrichment of every discovered person and company; ICP scoring | `/integrations/apollo` |
| Spot the deals that are slipping | Five risk categories, severity, source line, recommended action, in real time | `/product/risk-detection` |
| Handle competitors | Detects mentions, scores threat per deal, drafts counter-positioning into the next follow-up | `/product/competitor-intelligence` |
| Recommend the right package | Catalogue-aware SKU/tier recommendations with match scores | `/product/product-recommendations` |
| Get better | Multi-agent win/loss analysis, A/B-tested playbook hypotheses, manager-approved promotion | `/product/process-iteration` |

Onboarding is four OAuth sign-ins (CRM, calendar, LinkedIn, Apollo) plus a 30-minute configuration call. "Live in under a day." No workflow builder exists in the product, by design.

## 1.2 Current messaging (verbatim from the live site)

| Element | Copy |
|---|---|
| Title tag | "CHRM — The execution layer for CRM." |
| Hero H1 | "Stay human. Let AI do the rest." |
| Hero blurb | "CHRM is the execution layer for your CRM. It uses AI to run the complex sales processes B2B teams already have (filling the fields, sending the follow-ups, flagging the deals that slip) and to learn how to improve them. Without implementation risk. Without messy workflow building. Without needing an engineer. It just works." |
| Hero CTAs | "Book a 20-min call" / "See the features". Fine print: "No commitment · HubSpot & Pipedrive · Setup in under a day" |
| Framework | Capture → Structure → Activate → Iterate |
| Pricing (FAQ + JSON-LD only) | "$1,000 per AE seat per month. Every other seat — managers, RevOps, leadership — is free. The first thirty days are free for up to five AE seats." |
| ICP (FAQ) | "B2B sales teams with 5–50 account executives." |
| Compare page | Four categories: AI-native CRMs (Attio, Day.ai), Notetaker-plus (Avoma, Glyphic, Read), Conversation intelligence (Gong, Chorus, Clari), Lead generation (Apollo, ZoomInfo, Outreach) |
| About | Three notes: "AI that creates more work is a failure"; humans build trust and provide direction, AI executes; "GTM engineers are the new Implementation Industrial Complex" |
| Security | OAuth only, no credentials stored, transcripts discarded after extraction, SOC 2 "not yet" |

## 1.3 ICP

- **Company**: B2B, 5–50 AEs, on HubSpot or Pipedrive. Seed to Series B SaaS, plus services and agencies with a real sales motion. Half of early customers are on Pipedrive (per the Pipedrive integration page).
- **Economic buyer**: founder-CEO who runs sales, or VP Sales. **Champion**: VP Sales / RevOps lead. **Users**: AEs (who experience CHRM as "I stopped doing admin"), managers (risk feed, coaching), marketing (leading-indicator data).
- **Trigger events** (the site's four stories map to these): just raised and a VP Sales is starting in three weeks; inherited a CRM at 31% completion; forecast miss; a qualification framework rolled out that reps won't fill in; marketing running on six-week-lagging closed-won data; a Momentum.io customer on HubSpot displaced by the Salesforce acquisition.
- **What they were about to do instead**: hire a RevOps lead ($95–350k), hire a GTM engineer ($132–241k), sign a HubSpot partner retainer ($3.5–15k/month, 4–16 weeks), or migrate to an AI-native CRM and rebuild everything.

## 1.4 Assessment of the current positioning

**What works**
- "The execution layer for CRM" is a sharp category frame and correctly separates CHRM from notetakers (record), conversation intelligence (analyse) and native CRM AI (suggest).
- The four-step framework and twelve product pages are unusually complete for a company at this stage. The compare matrix, About notes and blog form a coherent thesis (work surface, trust/direction vs execution, implementation industrial complex).
- Pricing exists and is simple: $1,000/AE/month, non-AE seats free, 30 days free. Most peers at this segment hide pricing or gate it behind tiers.
- The Pipedrive depth is a genuine wedge. Almost every credible peer is Salesforce-first or HubSpot-only.

**What leaks conversions**
1. **The H1 is a brand line, not a promise.** "Stay human. Let AI do the rest." reads well but tells a VP Sales nothing about what they get. The blurb then lists field-filling first, which is the least differentiated thing CHRM does and invites the "it's a notetaker" misread (which is exactly the misread my first research pass made from the indexed copy).
2. **The breadth is buried.** LinkedIn outreach, enrichment, competitor handling, product recommendations and playbook iteration are on subpages. The homepage never shows that CHRM does the *whole* after-call job. The visual that would fix this (what happened in the five minutes after a call) does not exist.
3. **Price is hidden in the FAQ.** At $1,000/AE/month the buyer needs the anchor immediately: this is a fraction of a second AE, a GTM engineer or an implementation retainer. Without the anchor, $1,000 reads as expensive next to $19 notetakers. There is no /pricing page.
4. **No mid-funnel path.** Nav CTAs are "See it run" and "Book a call", both pointing to the same anchor. There is no product tour, no video, no calculator, and the "Get a free audit" link is a dead `#`.
5. **Social proof is explicitly fictional.** Stories are labelled illustrative. Fine for now, but the site needs at least one real logo row, a real quote, and the HubSpot/Pipedrive marketplace badges as soon as they exist.
6. **Compare page argues by category, not by search intent.** Nobody searches "notetaker-plus". They search "attio alternative", "momentum alternative", "sybill vs", "hubspot ai notetaker". The categories are right; the URLs and titles are not.
7. **Name collision.** "CHRM" in search is a hospitality certification and an HR certification. Branded search will not carry traffic; non-brand pages must.

## 1.5 Recommended positioning (used in every deliverable that follows)

- **Promise (H1):** *Every closer gets a second AE.*
- **Always beside it:** Works with the CRM you already have. HubSpot or Pipedrive. No migration, no new CRM, no engineer.
- **Supporting line:** CHRM sits silently on every call, then does everything an AE does after it: updates the CRM, writes and sends the follow-up, works the buying committee on LinkedIn, enriches every contact, and flags the deals that are slipping. Live in a day.
- **Category line (keep):** The execution layer for CRM.
- **Brand line (keep, as sign-off and About):** Stay human. Let AI do the rest.
- **Two enemies:** (1) ripping out your CRM for an AI-native one and rebuilding your process with an engineer; (2) the implementation industrial complex: $100k, six months, and field completion still at 31%.
- **Audience to capture, not a peer to fight:** teams looking at Attio/Day.ai/Clarify for "AI in the CRM" who do not want a migration. Frame: keep your CRM, get the AI.
- **Proof to lead with:** field completion 31% → ~100%; follow-up sent in under 5 minutes; 92–97% accuracy with "empty over wrong"; live in under a day; $1,000/AE/month with every other seat free.

Sources: live site source in `finezach-cyber/chrm-website`; [chrm.app](https://www.chrm.app/); [Salesforce State of Sales statistics](https://www.salesforce.com/sales/state-of-sales/sales-statistics/); [GTM engineer salary 2026](https://syncgtm.com/blog/gtm-engineer-salary); [HubSpot consulting cost 2026](https://automationstrategists.com/blog/hubspot-consulting-cost/); [Fractional RevOps vs GTM engineering](https://growintandem.com/fractional-revops-gtm-engineering-crm-guide/); [Salesforce acquires Momentum](https://www.salesforce.com/news/stories/salesforce-signs-definitive-agreement-to-acquire-momentum/).
