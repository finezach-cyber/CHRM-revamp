# 06 · The name: CHRM → 2nd Closer

_September 2026. Validated with DataForSEO (keyword_overview + live Google SERPs, US), web search for existing products, and DNS/RDAP checks on domains._

## Why rename
- "chrm" gets 1,300 searches a month (KD 5) and every one of them is for HR certifications. The brand term was never going to be ours.
- The product is the second account executive: silent on the call, does everything after it. A name that says so removes a sentence from every page.
- The brief: play on "coffee is for closers" (Glengarry Glen Ross) and "the second closer"; short, memorable, a machine not a person; the restraint of 2000s Apple naming.

## What was tested

| Name | Idea | Search | Domain | Verdict |
|---|---|---|---|---|
| **2nd Closer** | Says what it is; the Glengarry reference lands unaided | Zero volume for any variant, so the brand term is ours on day one. "closer ai" 880/mo, KD 3 | `2ndcloser.com` unregistered (Verisign RDAP 404). `2ndcloser.ai` no DNS, registry check blocked, confirm at the registrar. `secondcloser.com` parked by a third party | **Chosen** |
| Doppio | Double shot = second closer + coffee for closers in one word | "doppio" 33,100/mo KD 9 (coffee); "doppio ai" empty | doppio.ai is a Claude Code skills directory; doppio.com dark; doppio.sh is a PDF API | Phonetic clash with Dopple.ai ($38.9M, 33,100 brand searches/mo) and Doppel |
| Crema | The layer on top of the espresso; "the layer on top of your CRM"; C-R-M inside C-R-E-M-A | "crema" 74,000/mo KD 36; "crema ai" empty | crema.ai for sale on Atom; crema.com dark | Runner-up. Loses the "second" meaning |
| Encore | The second performance | "encore ai" 260/mo | | Encore AI raised $30M for revenue agents |
| Barista | Serves the closers their coffee | "barista ai" 20/mo | barista.ai for sale | Barista AI (Israel, 2022) sells sales-activity capture. Added to the competitor set |
| Seconds / Second | The second helping; the second AE | "second" 110,000/mo KD 23 | second.ai → Second Spectrum | Sixty Seconds (AI sales video), One Second AI (sales agents), Second Nature (sales training), Second (YC) |
| Sidecar | The second seat | "sidecar ai" 320/mo | sidecar.ai is a learning platform | SidecarAI already sells "captures context, automates follow-ups" for CRM; six other Sidecars |
| Refill | The second cup; refills the CRM | "refill" 27,100/mo, all pharmacy | refill.ai parked; refill.co is a telehealth prescriber | Pharmacy connotation; "refill ai" SERP is generative fill |
| Doubleshot | Two espressos | "double shot" 6,600/mo | doubleshot.ai listed for sale on Atom | Double (AI coding copilot) owns "double ai" |
| Top Off | The second pour | "top off" 4,400/mo | topoff.ai registered, empty | Two words; weak as a mark |
| Lungo | The long pull | | lungo.ai free; lungo.com is a Mac app | Lungo AI creative studio exists; no "second" meaning |
| Cortado, Ristretto, Percolate, Moka, Red Eye, Espresso, Deux, Plus One, Macchiato, Twice, Coffee | | | | Each owned by a funded or established software company (Cortado AI, ristretto.ai, Seismic, MokaHR, RedEye, Espresso AI, deux-ai.com, plusone.ai, digital macchiato, twice.ai on Atom, coffee.ai is a direct competitor) |
| Steak Knives | Second prize in the film | "steak knives" 22,200/mo | steakknives.ai free | Names the loser's prize |

Standby and Understudy, from the earlier round, are also taken (usestandby.com "your closer, on standby"; three Understudy products).

## The positioning risk, and the fix
"AI closer" is an existing category (1mind, Closora, Sales Closer AI): an AI that runs the call and closes. 2nd Closer must say in the same breath that it never speaks on the call and never negotiates. The brand idea that does this: **in the ring, the second never fights. The second does everything else.** It is the first FAQ answer and the last sentence of the hero.

## Copy rules after the rename
- The name is written **2nd Closer** in prose. Never "2ndCloser", "Second Closer" or "2nd closer", so the brand term does not split in search.
- Do not repeat "closer" or "second" next to the name. The old promise "Every closer gets a second AE" became redundant; the hero now reads "Silent on the call. Everything after it, done." The validated phrases ("second AE", "AI account executive", "HubSpot", "Pipedrive") live in the meta title, the description and body copy, not the H1.
- "Formerly CHRM" appears once in the footer and once in the FAQ. The Organization schema carries `alternateName: "CHRM"`. Every chrm.app path 301s to the same path on 2ndcloser.ai (`site/next.config.ts`).

## Launch checklist
1. Register `2ndcloser.ai` (primary) and `2ndcloser.com` (redirect). Check `secondcloser.com` with its parker if the price is small.
2. USPTO search for "CLOSER" marks in classes 9 and 42 before printing anything.
3. Point both domains at the deployment, keep chrm.app pointed at it too, and verify the host redirect with `curl -I -H "Host: www.chrm.app"`.
4. Google Search Console: add the new property, submit the sitemap, use Change of Address from chrm.app.
5. LinkedIn company page rename, X/GitHub handles, HubSpot and Pipedrive marketplace listings, Google Business.
6. Add "2nd closer", "2ndcloser" and "second closer ai" to the DataForSEO brand-term tracking.
