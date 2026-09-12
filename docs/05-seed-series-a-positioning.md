# 5. Seed and Series A: the problems that draw relevant traffic, how to position, what to build

_12 Sep 2026. Sources: DataForSEO validation (`docs/data/founder-keywords.csv`, `docs/data/validated-keywords.md`), the Phase 2 competitor and gap data, and the 2026 founder-sales literature cited inline. Pricing is withheld from the site (Phase 2 decision); the offer on the site is the free public beta, bring your own LLM key._

## 5.1 The short version

Seed and Series A companies do not search for "AI sales agent" or "CRM automation". They search for the problem they are standing in: *how do I follow up after this call*, *what fields does a qualified deal need*, *when do I hire my first AE*, *which CRM should a startup use*, *do I need a GTM engineer*. The founder-specific vocabulary is small in raw volume (the whole cluster is about 8,000 US searches a month) but it is almost entirely unclaimed by any execution-layer vendor, and the searchers are exactly the people a free BYOK beta is built for: technical, budget-constrained, allergic to implementation projects, and already on HubSpot or Pipedrive.

So the strategy is not "rank for startup keywords". It is: (1) own the five or six high-volume problem pages that founders and first sales hires actually hit (follow-up email, MEDDPICC, GTM engineer, stakeholder mapping, AI sales agent, sales playbook), (2) give each one a founder-stage on-ramp into the beta, and (3) put the stage-specific story on one page (`/startups`) and one kit (`/blog/first-ae-handoff-kit`) that the founder community will share on its own channels, where most of this audience actually lives.

## 5.2 The problems, ranked

Ranking = relevant traffic × CHRM fit × urgency at the stage. Volumes are US monthly, DataForSEO, Sep 2026.

| # | Problem (as the founder experiences it) | Stage | Evidence of pain | Relevant search demand | CHRM fit | Verdict |
|---|---|---|---|---|---|---|
| 1 | **The follow-up went out late and generic, and the deal died in the 48 hours after the call.** | Seed and A | Founders on every call have no time after it; first AEs ramp 5.7 months and copy the demo without the follow-through | "follow up email after sales call" 9,900 (KD 21) + "sales follow up" 210 + "follow up after demo" family | Direct: CHRM writes and sends it in 5 min from the rep's inbox | **Build first.** Biggest unclaimed page in the whole plan and the most founder-relevant. |
| 2 | **The process lives in the founder's head and dies at the first-AE handoff.** | Seed → A | 68% fail the handoff first time (Forum VC); $200–280k fully loaded first AE; 40–60% miss year-one quota; $484k cost of a mis-hire | "founder led sales" 210 + 210, "founder sales" 320, "founding ae" 90 + 90, "first sales hire" family (Ads: low), "sales playbook" 720 (KD 4), "sales playbook template/example" 310, "repeatable sales process" 50 | Direct: CHRM makes the CRM hold the process and run it, so the hire inherits a running system | **Build second.** Small volume, highest intent, most shareable. The kit is the collateral founders forward to each other. |
| 3 | **We adopted MEDDPICC/MEDDIC/BANT and nobody fills it in.** | A | 31–35% field completion; the forecast runs on the easy fields | "meddpicc" 12,100 (KD 7), "meddic" 4,400, "meddic sales methodology" 1,600, "bant sales" 1,000, "challenger" 2,400, "sandler" 1,000, "spiced" 720 | Direct: CHRM fills the eight fields from every call with citations | **Build.** Only Salesforce tools (Weflow, Scratchpad) rank here; the HubSpot/Pipedrive page does not exist. |
| 4 | **Should I hire a GTM engineer / RevOps person / HubSpot consultant to make the CRM work?** | A | GTM engineer $132–241k; partner retainers $3.5–15k/mo; "hubspot consultant" carries an $88 CPC | "gtm engineer" 3,600 (KD 0), "sales operations" 1,600, "what is revops" 880, "hubspot consultant" 880, "hubspot partner" 590, "deal desk" 1,300 | Direct: the whole thesis of the company ("no implementation industrial complex") | **Retitle + build.** Existing GTM-engineer post retitled (done); add the "before you hire a HubSpot consultant" and "sales ops without a RevOps hire" pieces. |
| 5 | **Which CRM should a startup use, and does it have AI?** | Seed | YC teams default to HubSpot (90% startup discount), Pipedrive for outbound, Attio for technical/PLG; they are shopping for "AI in the CRM" | "hubspot for startups" 880 (KD 8), "best crm for startups" 480 (KD 12), "crm for startups" 480 (KD 10), "startup crm" 110, "ai crm" 1,900, "ai native crm" 480 | Indirect but strong: "pick whichever CRM your team will open; CHRM works on either" reframes the decision | **Build `/startups` (done) and target this cluster from it.** Also the `/compare/ai-native-crms` audience page (done). |
| 6 | **The board deck takes the weekend because the pipeline can't be trusted.** | A | CRM data decays ~34%/yr; boards that must dig for data spend the whole meeting on numbers | "sales forecast template" 320 (KD 0), "pipeline coverage" 170 + 170, "quota attainment" 170, "board deck template" 50, "series a metrics" (Ads: low) | Direct outcome (field completion → forecast), but search demand is small and template-shaped | **Collateral, not a pillar.** A board-deck pipeline template as a download inside the Series A section; a founder LinkedIn post series. |
| 7 | **I'm a technical founder and I hate sales admin.** | Seed | "sales for technical founders" / "technical founder sales": no measurable volume; the pain is real but unsearched | ~0 | Direct, and BYOK is the perfect hook for this persona | **Channel, not SEO.** Hacker News / YC / indie founder communities, BYOK as the headline. |
| 8 | **Reps aren't using the CRM.** | A | "crm adoption" 50, "crm data entry" 110, "sales reps not using crm" (Ads: low) | tiny | Direct | **Fold into #3 and #4.** |

**Dropped:** "sales capacity planning", "ae ramp time", "sales hiring plan", "series a sales metrics" (all < 60/mo; informational; better served by the kit's tables than by pages). "ai sdr" (1,600, $88 CPC) is prospecting, not CHRM's lane; do not chase it.

## 5.3 Positioning by stage

The umbrella promise stays: **Every closer gets a second AE. Works with the CRM you already have.** The stage pages and collateral change who "the closer" is and what the second AE saves.

| | Seed (founder-led) | Series A (first AEs, first sales leader) |
|---|---|---|
| Who | Technical or product founder doing all the selling; 0–2 reps; HubSpot Starter or Pipedrive; often YC or similar | 3–15 closers; a new VP/Head of Sales; HubSpot Pro or Pipedrive; a board that wants a forecast |
| The moment | More qualified conversations than hours; follow-ups slipping; investor update built from memory | Hired AEs into a process that existed only in the founder's head; field completion ~31%; considering RevOps/GTM engineer/agency |
| Promise | **You keep selling. CHRM keeps the rest.** The founder's second AE. | **Hire one AE, get two.** And a pipeline the board can read. |
| Proof that matters | Follow-up sent in 5 min; stakeholders mapped and warmed up on LinkedIn; the CRM fills itself so the process gets written down by being run | 31% → ~100% field completion with citations; methodology runs itself; risk on Monday not at quarter end; no RevOps hire |
| Why now | Free beta on your own key; a seed budget can carry it; live in a day | The handoff is happening now; every week of empty fields is a week the new hire is guessing |
| Enemy | The 48 hours after the call | The implementation industrial complex (GTM engineer, partner retainer, AI-native CRM migration) |
| Objection to pre-empt | "I don't have a sales process yet." → The fields are the process; start with five. | "We'll get RevOps to do it." → RevOps builds the map; nobody fills it. CHRM fills it. |

### Message map by persona

| Persona | What they search / read | The line | Collateral |
|---|---|---|---|
| Technical founder (seed) | HN, YC forum, "best crm for startups", BYOK tools | "Bring your own key. Keep your CRM. Never write a follow-up again." | `/beta`, `/startups#seed`, HN/YC post |
| Founder who sells (seed) | "follow up email after sales call", "sales playbook", "founder led sales" | "You keep selling. CHRM keeps the rest." | Follow-up templates post, handoff kit |
| First Head/VP of Sales (A) | "meddpicc", "sales playbook template", "gtm engineer", "hubspot consultant" | "Your methodology runs itself. No RevOps hire." | MEDDPICC field map, GTM-engineer post, sales-ops post |
| First AE (A) | "follow up email after demo", "meddic" | "A second AE who does your admin." | Templates post; the after-the-call feed |
| Board / investor (A) | pipeline coverage, forecast accuracy | "A pipeline you can read." | Board-deck pipeline template (to build) |

## 5.4 The free BYOK beta as positioning

BYOK is not just a pricing mechanic. For this audience it is a trust signal and a hook:

- **Control.** "Your transcripts go to the provider you chose, under your account and retention settings, not through a reseller." Answers the data question before the security-minded founder asks it. Pairs honestly with "SOC 2 is ahead of us."
- **Honest cost.** "You see the AI cost on your own invoice, per token, with a spend cap you set." Technical founders distrust marked-up per-seat AI bundles; BYOK reads as the opposite.
- **Honest beta.** "We're early and the product moves weekly, so we'd rather you pay your provider than pay us for something still being shaped." Consistent with the site's voice (work surface, no implementation complex).
- **Any provider** widens the funnel: OpenAI-standardised teams, Anthropic-standardised teams, Google credits from a startup programme all fit.

Objections to pre-empt on `/beta` (done): which model, how much usage costs (no numbers until real beta data exists; show the estimate on the call, cap spend at the provider), what happens after the beta (per-AE pricing shared on the call; beta terms honoured for an announced period), can I leave (everything lives in the CRM; revoke the key).

What the beta needs from the product side, outside this repo: a scoped-key setup guide per provider, a usage view inside CHRM so teams can see tokens per deal, and a spend-cap recommendation table. Those three things turn "bring your own key" from a fear into a feature.

## 5.5 Collateral plan

| Priority | Piece | Format | Target query / channel | Status |
|---|---|---|---|---|
| 1 | **Follow-up email after a sales call** | Pillar post, 7 templates, timing table, "the version that writes itself" | "follow up email after sales call" 9,900 | Built: `/blog/follow-up-email-after-sales-call` |
| 1 | **The first-AE handoff kit** | Post + downloadable field-map template (CSV, 16 fields with definitions) | "founding ae", "first sales hire", "founder led sales"; YC/founder communities | Built: `/blog/first-ae-handoff-kit`, `/downloads/chrm-field-map-template.csv` |
| 1 | **MEDDPICC in HubSpot, auto-filled** | Pillar post: 8-field map with property types, HubSpot and Pipedrive setup, framework comparison | "meddpicc" 12,100, "meddic" 4,400 | Built: `/blog/meddpicc-in-hubspot-auto-filled` |
| 1 | **`/startups`** | Stage page: seed and Series A halves, facts strip, CRM-choice verdict | "hubspot for startups", "crm for startups", "best crm for startups" | Built |
| 1 | **`/beta`** | Offer page: what you get, what you bring, why BYOK, beta FAQ, form | Navigational; every CTA points here | Built |
| 2 | **Before you hire a HubSpot consultant** | Post: what agencies charge ($3.5–15k/mo), what they deliver, what still stays empty | "hubspot consultant" 880, "hubspot partner" 590, "hubspot agency" 480, "hubspot onboarding" 390 | To write |
| 2 | **Sales operations without a RevOps hire** | Post | "sales operations" 1,600, "what is revops" 880, "deal desk" 1,300 | To write |
| 2 | **An AI sales agent that works your deals, not your leads** | Post | "ai sales agent(s)" 2,600, "ai sales assistant" 590 | To write |
| 2 | **Board-deck pipeline template** | Download (Sheets/CSV): coverage, stage conversion, field-completion line, risk count | "sales forecast template" 320 (KD 0), "pipeline coverage" 340; Series A section | To build |
| 2 | **Methodology pages** | Five short templated pages: MEDDIC, BANT, SPICED, Challenger, Sandler in HubSpot/Pipedrive | 720–4,400 each, KD 0–19 | To build from the MEDDPICC page pattern |
| 3 | **Founder LinkedIn series** (10 posts) | The after-the-call feed as a carousel; "the 48 hours after the call"; "I made my CRM hold my process before I hired"; BYOK explainer | The channel where seed founders actually are | Outline in this doc; write from the three pillars |
| 3 | **Hacker News / YC launch post** | "CHRM: a second AE for founders, on your own LLM key, free beta" | Technical founders; BYOK is the hook | To write when the provider setup guide exists |
| 3 | **Capacity calculator** (no $) | Interactive: closers × calls/week → hours of after-call work given back; "that's N more calls a week" | On `/startups`; sales enablement | To build |
| 3 | **2-minute demo video script** | The five minutes after one call, narrated; ends on the beta | Every page; LinkedIn | Script to write |
| 3 | **Accelerator partner offer** | One-pager for YC/Techstars/HubSpot for Startups: free beta + priority setup for portfolio companies | Partner channel | To write |

## 5.6 What changed on the site in this phase

- Offer reframed to the free public beta everywhere: hero fine print, nav ("Free beta · BYOK"), primary CTA "Join the free beta" (still the 20-minute call), lead form asks which LLM key they'd bring, FAQ gains five beta questions, alternatives table cost cell, onboarding "Public beta: Free · BYOK", the CEO story.
- New pages: `/beta`, `/startups`; new posts: handoff kit, follow-up templates, MEDDPICC field map; new download: field-map CSV.
- "First 30 days free for up to five AE seats" removed (superseded by the free beta).
- Hero gains "Built for seed and Series A teams with 1–50 closers" with a link to `/startups`.

## 5.7 Measurement for this audience

- Beta requests per week, split by CRM and by provider selected in the form (tells you which ecosystem to lean into).
- Organic landings on the three pillars and `/startups`; downloads of the field-map CSV (a proxy for founder-stage intent).
- Time from beta request to configured (the call is the bottleneck; if requests outrun capacity, add a self-serve key-setup guide and a group onboarding slot).
- Share of beta teams that are seed vs Series A (ask on the call; record in the CRM). If Series A dominates, lead with "hire one AE, get two"; if seed, lead with "the founder's second AE".
