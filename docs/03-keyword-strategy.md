# 3. Keyword strategy, validated against DataForSEO

_Validated 12 Sep 2026 with DataForSEO (Google, United States, English): Labs ranked keywords for 16 competitor domains (8,109 ranking rows), keyword overview and Google Ads volumes for 133 seed and probe terms, keyword ideas and related-keyword expansion from 10 decision-point seeds (479 terms), and live top-10 SERPs for the 45 strongest gap candidates. Raw data: `docs/data/keywords.csv` (554 relevant keywords scored), `docs/data/competitor-rankings.csv`, `docs/data/validated-keywords.md` (auto-generated tables). Script: `tools/dataforseo/validate.py`. Total API spend: about $1.70._

## 3.1 The headline finding

**This category is small in search, and the competitors know it.** All of CHRM's relevant demand together (post-call execution, AI sales agents, CRM automation, methodology, RevOps decisions, competitor alternatives) is roughly 110,000 US searches a month across 554 keywords, and most of that sits in a few dozen terms. The tracked competitors' organic traffic comes overwhelmingly from off-topic content plays: Fireflies ranks for "funny team names", tl;dv for "wfh meaning" and "chatgpt pricing", Claap for "slack login", Sybill for "sell me this pen" and "qbr definition". Their sales-relevant rankings are a thin slice.

Two consequences for CHRM:

1. **Do not build a content machine.** Ten pages aimed at the right terms will out-earn 300 listicles, and every one of those ten can end in the demo form.
2. **My estimate bands were wrong in a consistent direction.** I overestimated every long-tail "alternative" and "implementation cost" query by 5–20× and missed the two biggest winnable pools: sales-methodology terms (MEDDPICC, MEDDIC, BANT, Challenger, Sandler, SPICED: ~23,000/mo, KD 0–19) and the follow-up-email template query (8,100–9,900/mo, KD 21). The corrected list is below; the full "where I was wrong" table is in `docs/data/validated-keywords.md`.

## 3.2 Competitor organic footprint (what they actually rank for)

| Domain | Tier | Ranking kws (top 1k by traffic, pos ≤30) | In top 10 | Est. organic visits/mo | What drives it |
|---|---|---|---|---|---|
| day.ai | AI-native CRM | 46 | 12 | 1.86M | Almost entirely the brand term "day ai" (6.1M/mo, a homonym), not category demand |
| fireflies.ai | notetaker | 1,000 | 527 | 49,600 | "funny team names", "youtube shorts dl", brand |
| coffee.ai | content | 283 | 82 | 46,500 | "revenue intelligence platform", CRM comparisons |
| tldv.io | notetaker | 1,000 | 743 | 33,400 | "turbo ai", "wfh meaning", "ai note taker", "chatgpt pricing" |
| claap.io | content | 1,000 | 624 | 32,700 | "slack login", "hubspot login", "gong", "one party consent states" |
| clarify.ai | AI-native CRM | 228 | 41 | 23,200 | "ai native crm" (#2), CRM comparisons |
| momentum.io | peer | 472 | 158 | 19,800 | "spiced sales methodology", "sales automation", "ai powered sales platform" |
| sybill.ai | peer | 1,000 | 607 | 18,300 | "seamless ai", "qbr", "sell me this pen", "gong alternatives", "crm notes" |
| avoma.com | notetaker | 1,000 | 744 | 17,200 | "ai powered meeting assistant", "meddpicc", "sales intelligence platforms", "ai sales" |
| attio.com | AI-native CRM | 313 | 143 | 10,400 | "ai native crm" (#2), "cometly", "clay app", brand |
| fathom.video | notetaker | 203 | 166 | 5,800 | brand, "deal view" |
| grain.com | notetaker | 1,000 | 392 | 5,200 | "log calls in salesforce", brand |
| oliv.ai | peer | 451 | 136 | 1,500 | "gong ai", listicles |
| winn.ai · attention.tech · goairspeed.com | peers | 26 · 14 · 73 | 12 · 9 · 7 | < 300 each | Effectively no organic presence |

Read: the execution-layer peers (Sybill, Momentum, Oliv, Winn, Attention, Airspeed) own almost nothing that matters. Momentum's methodology and "sales automation" rankings are the only real ones, and Momentum is now Salesforce. The notetakers own "ai note taker" and "meeting assistant" (not CHRM's lane). The AI-native CRMs own "ai native crm" (an audience CHRM wants) and little else.

## 3.3 Demand by cluster (relevant keywords only, US/mo)

| Cluster | Keywords | Total volume | Comment |
|---|---|---|---|
| Sales methodology (deal-execution) | 119 | 45,800 | MEDDPICC 12,100 (KD 7), MEDDIC 4,400 (KD 8), stakeholder mapping 4,400, challenger 2,400, sales pipeline 1,900, BANT 1,000, Sandler 1,000, SPICED 720. Low KD, nobody execution-shaped ranks. |
| Post-call (follow-ups, CRM updates) | 44 | 23,300 | "follow up email after sales call" 8,100–9,900 (KD 21) is 40% of it. "email follow up app" 880 (KD 8). The CRM-autofill long-tails I guessed at are < 20/mo each. |
| AI sales agent / assistant | 49 | 14,800 | ai sales agent(s) 1,300 + 1,300, artificial intelligence in sales 1,600, ai sales 1,600, ai sales tools 1,000, ai sales assistant 590, ai agents for sales 390, **ai account executive 40**. |
| RevOps / decision point | 33 | 12,100 | gtm engineer 3,600 (KD 0), sales operations 1,600 (KD 8), deal desk 1,300 (KD 0), what is revops 880, hubspot consultant 880 (CPC $88), hubspot partner 590, hubspot agency 480, hubspot onboarding 390 (CPC $62). "hubspot implementation cost" is 10/mo. |
| CRM automation | 29 | 5,800 | sales force automation software 1,000, hubspot integrations 880, crm automation 590, sales force automation 720. |
| Competitor alternatives | 73 | 4,600 | gong alternatives 210 (KD 0, CPC $114), attio vs hubspot 170 (KD 0), attio alternative(s) 90 + 70, tldv alternatives 30. **momentum.io / sybill / oliv / rox "alternative" queries return no measurable volume.** |
| AI CRM (audience) | 8 | 4,000 | ai crm 1,900 (KD 26), ai powered crm 1,300 (KD 34), ai native crm 480 (KD 15). Brand nav: attio crm 2,400, attio pricing 590, clarify crm 590. |
| Notetaker (adjacent) | 171 | 102,000 | "ai powered meeting assistant" 40,500 (KD 53, Avoma), "ai meeting assistant" 4,400. Big, crowded, not CHRM's job. Use only on integration pages. |

## 3.4 The validated priority list

Leverage = volume × intent weight × (1 − KD/100) × gap multiplier × relevance. "Who ranks" is the live top 10 as of 12 Sep 2026.

| # | Keyword (primary) | Vol/mo | KD | Who ranks top 10 today | Gap type | CHRM page |
|---|---|---|---|---|---|---|
| 1 | follow up email after sales call (+ follow-up email after sales call) | 9,900 / 8,100 | 21 | Zendesk, Highspot, Salesforce, HubSpot, Pipedrive, Mailshake, Woodpecker (template posts) | Unclaimed by any execution vendor | `/blog/follow-up-email-after-sales-call`: the templates people want, then "CHRM writes and sends this in five minutes" |
| 2 | meddpicc (+ meddic, meddic sales methodology, meddpicc hubspot) | 12,100 / 4,400 / 1,600 | 7–10 | meddicc.com, meddpicc.net, Reddit, **Weflow, Scratchpad** (Salesforce-only tools), Qwilr, Avoma #7 | Salesforce tools rank; nobody for HubSpot/Pipedrive | `/blog/meddpicc-in-hubspot-auto-filled` pillar + `/methodology/meddic`, `/bant`, `/spiced`, `/challenger`, `/sandler` |
| 3 | gtm engineer | 3,600 | 0 | Clay, Apollo, ZoomInfo, Norwest, Reddit, YouTube (all "hire one") | Unclaimed for the "don't" argument | Retitle existing `/blog/gtm-engineer-anti-pattern` |
| 4 | stakeholder mapping (+ buying committee 50) | 4,400 | n/a | Miro, 6sigma, JHU, Atlassian (generic PM content) | Unclaimed for sales | Retitle `/product/stakeholder-mapping` to "Stakeholder mapping for sales, kept current automatically" |
| 5 | ai sales agent / ai sales agents (+ ai sales assistant 590, ai agents for sales 390, ai sales tools 1,000, ai account executive 40) | 1,300 + 1,300 | 15 | Salesforce, Artisan, SalesCloser, Creatio, Fin.ai, IBM, Workato (SDR-agent heavy) | Unclaimed for the AE angle | `/blog/ai-sales-agent-for-account-executives` pillar; H1 "An AI sales agent that works your deals, not your leads" |
| 6 | ai crm / ai powered crm / ai native crm (+ attio vs hubspot 170, attio alternative 90) | 1,900 / 1,300 / 480 | 26 / 34 / 15 | Salesforce, HubSpot, Lark, Creatio, IBM; ai native crm: Reddit, Clarify #2, Reevo, Coffee | AI-native audience; CRM vendors rank | Retarget `/compare/ai-native-crms` title to "AI CRM without switching CRMs" (H1 unchanged) |
| 7 | sales operations / what is revops / what is revenue operations / deal desk | 1,600 / 880 / 720 / 1,300 | 0–10 | Salesforce, Reddit, DealHub, Lucid, Wikipedia, RevOps Co-op | Unclaimed for "without hiring" | `/blog/sales-operations-without-a-revops-hire` |
| 8 | hubspot consultant / hubspot partner / hubspot agency / hubspot onboarding / hubspot implementation | 880 / 590 / 480 / 390 / 170 | n/a (Ads) | Agencies | The real "implementation cost" demand, with $28–88 CPCs | `/blog/hubspot-implementation-cost` retargeted: "Before you hire a HubSpot consultant" |
| 9 | email follow up app | 880 | 8 | FollowUpThen, SalesHandy, followup.cc, Reddit | Unclaimed | Section inside page #1 plus `/product/follow-up-emails` retitle |
| 10 | sales pipeline / icp sales / sales icp | 1,900 / 1,000 / 1,000 | 3–21 | blogs, CRM vendors | Unclaimed | `/product/workspace` retitle ("sales pipeline that fills itself"), ICP section on `/integrations/apollo` |
| 11 | gong alternatives / gong alternative | 210 + 210 | 0 | Sybill #? top 10, listicles | Peer-owned but KD 0 and CPC $114 | `/compare/gong` (new): "Gong alternative for HubSpot and Pipedrive teams" |
| 12 | crm automation / sales force automation software / hubspot integrations | 590 / 1,000 / 880 | 11–33 | Salesforce, IBM, Monday, HubSpot | Unclaimed for execution angle | `/integrations/hubspot` retitle; `/blog/crm-automation-without-workflows` |
| 13 | hubspot breeze / hubspot ai agent | 590 / 320 | n/a | HubSpot | Navigational; converts on "suggests vs executes" | Existing `/compare/hubspot-breeze` (already targeted) |
| 14 | linkedin automation tools / linkedin outreach automation | 880 / 170 | 27 | Expandi, Dripify, Waalaxy | Cold tools; warm-up-to-committee angle | `/product/linkedin-outreach` retitle |

Dropped from the plan after validation: "hubspot implementation cost" (10/mo), "ai notetaker for pipedrive" / "pipedrive ai notetaker" (no measurable volume), "momentum.io alternative", "sybill alternative", "rox alternative", "oliv alternative" (no measurable volume; keep the compare pages for conversion and sales enablement, not for traffic), "attio alternative" as a primary (90/mo; now secondary on the AI-CRM page), "crm hygiene" (140/mo, KD 0: fine as a section, not a page), "ai account executive" as a primary (40/mo; CHRM should still use the phrase, but rank the page on "ai sales agent").

## 3.5 Why this is the right list (gaps, not just volume)

- **Unclaimed by any execution vendor.** For #1, #3, #4, #5, #7, #8 the live top 10 contains no Sybill, Oliv, Airspeed, Winn, Momentum or Attention page. The SERPs are template posts, generic PM content, CRM vendors and agencies. A page that answers the query and then shows the work being done (the after-the-call feed) is differentiated on the SERP itself.
- **Salesforce tools rank where HubSpot/Pipedrive tools don't.** Weflow and Scratchpad hold top-10 spots on "meddpicc". They are Salesforce-only. The identical page for HubSpot and Pipedrive does not exist.
- **Low difficulty.** Eleven of the fourteen primaries have KD ≤ 21; three are KD 0. A new domain can rank in weeks, not quarters.
- **Commercial signal where volume is low.** The RevOps/HubSpot-partner terms are small but carry $28–$88 CPCs, meaning agencies pay heavily for them. Those searchers are at the exact budget decision CHRM wants to intercept.
- **Nothing here depends on the notetaker SERPs.** "ai note taker" (27,100), "ai powered meeting assistant" (40,500) and their variants are owned by tl;dv, Avoma and Fireflies at KD 31–67. CHRM should not chase them; the integration pages (Fireflies, Fathom) capture that intent as a complement.

## 3.6 Page map, re-ranked

| Priority | Page | Primary keyword (vol) | Secondaries | Status |
|---|---|---|---|---|
| 1 | `/blog/follow-up-email-after-sales-call` | follow up email after sales call (9,900) | email follow up app (880), follow up email subject line (1,000) | To write |
| 1 | `/blog/meddpicc-in-hubspot-auto-filled` | meddpicc (12,100) | meddic (4,400), meddic sales methodology (1,600), meddpicc hubspot (10) | To write |
| 1 | `/blog/gtm-engineer-anti-pattern` (retitle) | gtm engineer (3,600) | gtm engineering, gtm engineer salary (260) | Exists; new SEO title |
| 1 | `/product/stakeholder-mapping` (retitle) | stakeholder mapping (4,400) | buying committee (50) | Exists; new title/H1 |
| 2 | `/blog/ai-sales-agent-for-account-executives` | ai sales agent (1,300) | ai sales agents (1,300), ai sales assistant (590), ai agents for sales (390), ai account executive (40) | To write |
| 2 | `/compare/ai-native-crms` (retarget) | ai native crm (480) | ai crm (1,900), ai powered crm (1,300), attio vs hubspot (170), attio alternative (90) | Exists; new SEO title |
| 2 | `/blog/sales-operations-without-a-revops-hire` | sales operations (1,600) | what is revops (880), what is revenue operations (720), deal desk (1,300) | To write |
| 2 | `/blog/before-you-hire-a-hubspot-consultant` | hubspot consultant (880) | hubspot partner (590), hubspot agency (480), hubspot onboarding (390), hubspot implementation (170) | To write (replaces the "implementation cost" pillar) |
| 3 | `/compare/gong` | gong alternatives (210, KD 0) | gong alternative, gong competitors (320) | To write |
| 3 | `/methodology/{meddic,bant,spiced,challenger,sandler}` | each 720–4,400 | "in hubspot", "in pipedrive" variants | To write, templated |
| 3 | `/integrations/hubspot`, `/product/workspace`, `/product/linkedin-outreach`, `/product/follow-up-emails` | hubspot integrations (880), sales pipeline (1,900), linkedin automation tools (880), email follow up app (880) | | Exist; title/H1 tweaks |
| keep | `/compare/momentum`, `/compare/sybill`, `/compare/rox`, `/compare/oliv`, `/compare/fathom`, `/compare/diy-gtm-stack` | no measurable search volume | | Keep for conversion and sales; link from footer only |

## 3.7 Ninety-day plan (revised)

- **Weeks 1–2**: ship the four retitles (GTM engineer post, stakeholder mapping, AI-native CRM compare page, HubSpot integration page). Write page #1 (follow-up email) and page #2 (MEDDPICC in HubSpot). Both include the after-the-call feed as the "or let CHRM do it" section and end in the lead form.
- **Weeks 3–6**: AI sales agent pillar, sales operations pillar, HubSpot consultant pillar. Templated methodology pages (five, ~900 words each, one comparison table: the fields, how CHRM fills them from a call).
- **Weeks 7–12**: `/compare/gong`, CRM-automation pillar, product-page retitles. Start a quarterly "field completion index" from anonymised customer data for links.
- **Rank targets by day 90** (realistic given KD): top 10 for gtm engineer, deal desk, meddic sales methodology, ai native crm, attio vs hubspot; top 20 for follow up email after sales call, meddpicc, ai sales agent, stakeholder mapping, sales operations.

## 3.8 Measurement

- Search Console impressions and clicks per row in the page map, weekly.
- Conversion: demo-form submissions per organic landing page. Expected order: compare and pricing pages highest, methodology pages and the follow-up template page lowest per visit but highest in volume.
- Re-run `python3 tools/dataforseo/validate.py` quarterly (cache cleared) to refresh the tables; cost is under $2.
