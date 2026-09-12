# 3. Keyword strategy: what to rank for, and why

## 3.1 Method and caveats

- **Volumes are estimate bands**, not tool exports. Ahrefs, Semrush, Similarweb and Google Keyword Planner were unreachable from the research environment. Bands are US monthly searches inferred from category size, SERP composition and comparable published data. **Validate in Ahrefs/Semrush before committing content budget**; the ranking logic below holds even if absolute numbers move.
- **SERP owners** are the domains observed ranking in search results during research (Sep 2026). "Gap" means the top results are listicles, review aggregators or vendors that don't serve HubSpot/Pipedrive teams end to end.
- **Scoring**: Priority = intent fit (does the searcher have CHRM's problem?) × winnability (can a young domain rank?) × volume. Bottom-funnel and gap pages first; category terms last.
- **Rule from the positioning**: CHRM is not a CRM. AI-native CRM keywords are captured with "keep your CRM, get the AI" pages, never with "CHRM vs Attio".

## 3.2 The clusters

### Cluster A. "I want AI in my CRM without switching CRMs" (highest intent fit, underserved)
| Keyword | Est. US vol/mo | Intent | SERP owners observed | Gap | Priority |
|---|---|---|---|---|---|
| attio alternative(s) | 500–1,500 | Comparison | automationjinn, coffee.ai, authencio, G2 | Listicles of other CRMs; nobody says "keep HubSpot" | **1** |
| attio vs hubspot | 500–1,500 | Comparison | coffee.ai, ziellab, automationjinn | Both sides argue CRM vs CRM | **1** |
| ai native crm | 500–1,000 | Category | ahoy.ai, coffee.ai, clarify.ai | All are CRMs selling migration | 2 |
| ai crm / best ai crm | 5,000–15,000 | Category | Clarify, Lark, Cirrus Insight, Pinggy | Hard; use for one pillar only | 3 |
| hubspot ai / hubspot ai tools | 3,000–8,000 | Category | HubSpot, Vorin, Default | Reviews of Breeze; no execution-layer angle | 2 |
| pipedrive ai / best ai tools for pipedrive | 500–1,500 | Category | Pipedrive, cotera.co, Vantaige | Weak SERP; Pipedrive has no native notetaker | **1** |
| day.ai alternative / clarify alternative | 100–400 | Comparison | thin | Open | 2 |

### Cluster B. "I'm about to pay for an implementation or a RevOps hire" (budget competitor)
| Keyword | Est. vol | Intent | SERP owners | Gap | Priority |
|---|---|---|---|---|---|
| hubspot implementation cost | 500–1,500 | Commercial | HubSpot partners (Purasu, Technix, Automation Strategists) | Every result is an agency selling the implementation | **1** |
| hubspot onboarding cost / hubspot consultant cost | 300–800 | Commercial | agencies | same | 2 |
| fractional revops / revops consultant cost | 500–1,500 | Commercial | growintandem, agencies | same | 2 |
| gtm engineer / gtm engineer salary | 2,000–5,000 | Informational | SyncGTM, DevCommX, RemoteGrowthPartners | Nobody argues you don't need one | 2 |
| crm implementation cost | 500–1,000 | Commercial | consultancies | same | 3 |

### Cluster C. "AI sales agent / AI account executive" (category CHRM should own the SMB end of)
| Keyword | Est. vol | Intent | SERP owners | Gap | Priority |
|---|---|---|---|---|---|
| ai sales assistant | 3,000–8,000 | Category | Cirrus Insight, Oliv, Knowlix, Lark | Listicles | 2 |
| ai sales agent / ai agents for sales | 3,000–8,000 | Category | Salesforce, HubSpot, Albato, GehanTech | SDR-agent heavy (11x, Artisan); AE-agent angle open | 2 |
| ai account executive | 200–600 | Category | thin, SDR-agent vendors | **Open. Own it.** | **1** |
| agentforce alternative / agentforce for hubspot | 200–600 | Comparison | eesel, coworker.ai | Open for HubSpot/Pipedrive | 2 |
| hubspot breeze agents / smart deal progression | 500–1,500 | Informational | HubSpot, Sidekick, Vantagepoint | Reviews; "executes vs suggests" angle open | 2 |
| momentum.io alternative(s) | 200–500 (spiking) | Comparison | ZoomInfo Pipeline, Weflow | Salesforce-first lists; HubSpot users unserved | **1** |
| rox alternative / rox.com pricing | 100–400 | Comparison | thin | Open | 3 |

### Cluster D. Post-call execution (where the notetakers live; CHRM complements them)
| Keyword | Est. vol | Intent | SERP owners | Gap | Priority |
|---|---|---|---|---|---|
| ai notetaker for hubspot / hubspot ai notetaker | 1,000–2,500 | Commercial | Fathom (marketplace), NoteLinker, Airspeed, arrows.to | Notes-only tools; "and then what" angle | 2 |
| ai notetaker for pipedrive / pipedrive ai notetaker | 300–800 | Commercial | Noota, tl;dv, Fellow, MeetGeek | Weak; **CHRM can own** | **1** |
| automatically update hubspot after calls / ai tool to update crm after sales calls | 200–600 | Commercial | Airspeed, Sybill, Hyperbound | Vendor blogs | 2 |
| ai follow up email after sales call | 1,000–3,000 | Commercial | Mixmax, AskElephant, SalesCloser | Templates, not sent-for-you | 2 |
| crm data entry automation / crm hygiene | 500–1,500 | Problem | Coffee.ai, AskElephant, Von | Open for execution angle | 2 |
| meddpicc hubspot / meddic in hubspot | 300–800 | How-to | Coffee.ai, HubSpot community | "auto-fill from calls" angle | 2 |

### Cluster E. Deal execution (mid-funnel, feeds product pages)
| Keyword | Est. vol | Intent | SERP owners | Gap | Priority |
|---|---|---|---|---|---|
| stakeholder mapping sales / buying committee | 1,000–3,000 | Informational | Salesmotion, Outreach, ZoomInfo | Templates; "kept current automatically" angle | 3 |
| deal risk / deal slippage | 300–1,000 | Informational | ZoomInfo, Outreach | Forecasting tools | 3 |
| linkedin outreach automation safe / linkedin automation limits | 1,000–3,000 | Commercial | Expandi, Dripify, Waalaxy | Cold-outreach tools; warm-up-to-committee angle open | 3 |
| sales follow up email automation | 1,000–2,000 | Commercial | Monday, ZoomInfo, Sybill | Sequencers | 3 |

### Cluster F. Notetaker comparisons (high volume, borrowed intent; publish only as "CHRM + X")
| Keyword | Est. vol | Notes |
|---|---|---|
| fathom alternatives / fireflies alternatives / tldv alternatives | 2,000–6,000 each | Owned by Sybill, tl;dv, Notta, Krisp, G2. CHRM should not chase; publish "Fathom + CHRM" and "Fireflies + CHRM" integration pages instead (Fireflies page already exists). |
| sybill alternative / sybill vs | 300–800 | tl;dv, G2, JustCall own it. One page: "Sybill fills fields. CHRM does the job." |

## 3.3 What competitors' traffic tells us

- **Sybill, tl;dv, Airspeed, Oliv, Coffee.ai, Claap** all run the same playbook: hundreds of "best X tools 2026", "X pricing", "X alternatives" posts. This is where their organic traffic comes from, and it is a red ocean for a new domain.
- **Nobody** is publishing from the buyer's decision point: "should I switch to an AI-native CRM?", "should I hire a GTM engineer?", "what will this HubSpot implementation actually cost me?" Those searches are made by exactly CHRM's ICP at exactly the moment of budget, and the current answers are all vendors selling the expensive path. That is the gap.
- **Pipedrive** is structurally underserved: no native notetaker, MCP-server-only AI strategy, and the "AI for Pipedrive" SERP is thin. CHRM already has real Pipedrive depth ("half of early customers"). Own every "pipedrive + AI/notetaker/automation" query.
- **Momentum's exit** created a dated spike in "momentum alternative" that HubSpot users can't satisfy with the Salesforce-centric lists ranking today.

## 3.4 Page map (what to build, in order)

| Priority | URL | Target keywords | Type |
|---|---|---|---|
| 1 | `/compare/ai-native-crms` | attio alternative, attio vs hubspot, ai native crm, day.ai alternative | Audience page: "Want what Attio promises without switching CRMs?" |
| 1 | `/compare/momentum` | momentum.io alternative, momentum salesforce hubspot | Timely alternative page |
| 1 | `/integrations/pipedrive` (expand) + `/blog/ai-for-pipedrive` | pipedrive ai, ai notetaker for pipedrive, pipedrive automation | Owned wedge |
| 1 | `/pricing` | chrm pricing, ai sales assistant pricing, "second AE cost" | Conversion page with cost comparison |
| 1 | `/blog/hubspot-implementation-cost` | hubspot implementation cost, hubspot onboarding cost | Decision-point pillar |
| 1 | `/blog/ai-account-executive` | ai account executive, ai agent for account executives | Category-defining pillar |
| 2 | `/compare/hubspot-breeze` | smart deal progression, hubspot breeze agents, hubspot ai notetaker | "Suggests vs executes" |
| 2 | `/compare/diy-gtm-stack` | gtm engineer, fractional revops cost, clay zapier hubspot | Budget competitor page |
| 2 | `/compare/sybill`, `/compare/rox`, `/compare/oliv` | sybill alternative, rox alternative, oliv alternative | Peer pages |
| 2 | `/integrations/fathom`, `/integrations/hubspot` (expand) | fathom hubspot, ai notetaker for hubspot | Complement pages |
| 2 | `/blog/meddpicc-in-hubspot-auto-filled` | meddpicc hubspot | How-to pillar |
| 3 | `/blog/gtm-engineer-anti-pattern` (exists; retitle for search) | gtm engineer | Existing thesis, SEO title |
| 3 | `/blog/stakeholder-mapping-kept-current`, `/blog/linkedin-warm-up-for-buying-committees` | stakeholder mapping, linkedin outreach automation | Product-led pillars |

## 3.5 Ninety-day roadmap

- **Weeks 1–2**: ship the redesign (this repo), `/pricing`, `/compare/ai-native-crms`, `/compare/momentum`, sitemap, JSON-LD (SoftwareApplication with offers, FAQPage on FAQ, BreadcrumbList). Submit to Search Console. List on HubSpot App Marketplace and Pipedrive Marketplace (both are ranking pages in their own right).
- **Weeks 3–6**: the four decision-point pillars (implementation cost, AI account executive, AI for Pipedrive, MEDDPICC auto-filled). Each 1,500–2,500 words, one comparison table, one product screenshot, FAQ schema.
- **Weeks 7–12**: peer compare pages (Breeze, DIY stack, Sybill, Rox, Oliv), complement pages (Fathom, Fireflies), two product-led pillars. Start a monthly "field completion index" data post from anonymised customer data to earn links.
- **Ongoing**: every page targets one primary keyword in title, H1 and first paragraph; internal links from homepage compare section and footer; one founder LinkedIn post per pillar (the founder's LinkedIn is already the primary channel).

## 3.6 Measurement

- Search Console: impressions and clicks per page map row, weekly.
- Rank targets by day 90: top 10 for `attio alternative`, `momentum alternative`, `ai notetaker for pipedrive`, `ai account executive`; top 20 for `hubspot implementation cost`, `pipedrive ai`.
- Conversion: demo bookings per organic landing page, with `/pricing` and `/compare/*` expected to convert 2–4× the blog.
