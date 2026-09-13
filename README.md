# 2nd Closer (formerly CHRM) revamp

Research, strategy and a drop-in redesign of [2ndcloser.ai](https://www.2ndcloser.ai), formerly chrm.app, around one promise: **an AI account executive that does the after-call work**.

| Folder | What's in it |
|---|---|
| `docs/01-positioning-research.md` | What CHRM is, how it is positioned today, the ICP, the leaks, the recommended positioning |
| `docs/02-competitive-landscape.md` | The 12 alternatives plus the DIY stack: pricing, CRM coverage, what they do after the call, where CHRM wins |
| `docs/03-keyword-strategy.md` | Six keyword clusters, gap analysis, page map, 90-day roadmap. Volumes are estimate bands to validate in Ahrefs/Semrush. |
| `docs/04-brand-and-website-redesign.md` | What changed on the site and why, conversion mechanics, config, launch checklist, measurement |
| `docs/05-seed-series-a-positioning.md` | The problems that draw seed and Series A founders (validated), positioning by stage, the free BYOK beta as positioning, the collateral plan |
| `docs/06-naming.md` | The rename to 2nd Closer: every name tested with volumes, SERP owners and domain status, the positioning risk, copy rules and the launch checklist |
| `docs/07-geo.md` | The generative-engine audit, what was changed for each finding, the measured result, and the off-site checklist |
| `docs/data/` | DataForSEO outputs: scored keywords, competitor rankings, founder cluster, generated tables |
| `tools/dataforseo/validate.py` | Re-runnable keyword validation (credentials from env vars; cache is git-ignored) |
| `brand/` | Refreshed logo (the H is the only coloured letter), favicon, tokens, guidelines |
| `site/` | The Next.js 16 site from `finezach-cyber/chrm-website` with the redesign applied. Same stack, same content pages, new homepage, `/beta`, `/startups`, `/compare/*`, three pillar posts, lead form, sitemap, structured data. Free-beta offer; no pricing on the site. |

## Run the site

```bash
cd site
npm install
npm run dev      # http://localhost:3000
npm run build && npm run lint
```

Optional environment variables (see `site/lib/site.ts`): `NEXT_PUBLIC_BOOKING_URL`, `NEXT_PUBLIC_FORM_ENDPOINT`, `NEXT_PUBLIC_CONTACT_EMAIL`.

## Ship it

`site/` is a superset of the live repo. To deploy, copy `site/` over `chrm-website` (or point Vercel at `site/`). No content was removed; product, integration, blog, stories, setup and about pages are unchanged apart from the shared nav, footer, FAQ and CTA.
