#!/usr/bin/env python3
"""
CHRM keyword validation against DataForSEO — competitor-first, gap-first.

Stages (each cached under tools/dataforseo/cache/, so re-runs are free):
  ranked   ranked_keywords for every competitor domain (the keyword universe)
  seeds    keyword_overview for the hand-picked seed list from docs/03
  expand   keyword_ideas + related_keywords from decision-point seeds
  serp     live SERP top 10 for the top gap candidates (who actually ranks)
  score    classify, score leverage, write docs/data/*.csv and a markdown report

Credentials: DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD env vars only.
Usage: python3 tools/dataforseo/validate.py [--dry-run] [--stages ranked,seeds,expand,serp,score]
"""
import base64, csv, json, os, re, sys, time, hashlib
from collections import defaultdict
from pathlib import Path
from urllib import request, error

ROOT = Path(__file__).resolve().parents[2]
CACHE = Path(__file__).resolve().parent / "cache"
DATA = ROOT / "docs" / "data"
CACHE.mkdir(exist_ok=True)
DATA.mkdir(parents=True, exist_ok=True)

API = "https://api.dataforseo.com/v3/"
LOC, LANG = 2840, "en"  # United States, English

# ---------------------------------------------------------------- inputs
COMPETITORS = {
    # execution-layer peers
    "sybill.ai": "peer", "oliv.ai": "peer", "goairspeed.com": "peer", "winn.ai": "peer",
    "momentum.io": "peer", "attention.tech": "peer",
    # notetakers the ICP already has
    "fathom.video": "notetaker", "fireflies.ai": "notetaker", "tldv.io": "notetaker",
    "avoma.com": "notetaker", "grain.com": "notetaker",
    # AI-native CRMs (audience source)
    "attio.com": "crm", "day.ai": "crm", "clarify.ai": "crm",
    # content machines that own SMB SERPs
    "coffee.ai": "content", "claap.io": "content",
}

# My original estimate bands from docs/03 (for the "where I was wrong" table)
SEEDS = {
    "attio alternative": "500–1,500", "attio alternatives": "500–1,500", "attio vs hubspot": "500–1,500",
    "ai native crm": "500–1,000", "ai crm": "5,000–15,000", "best ai crm": "5,000–15,000",
    "hubspot ai": "3,000–8,000", "hubspot ai tools": "3,000–8,000", "pipedrive ai": "500–1,500",
    "best ai tools for pipedrive": "500–1,500", "day.ai alternative": "100–400", "clarify crm alternative": "100–400",
    "hubspot implementation cost": "500–1,500", "hubspot onboarding cost": "300–800", "hubspot consultant cost": "300–800",
    "fractional revops": "500–1,500", "revops consultant cost": "500–1,500", "gtm engineer": "2,000–5,000",
    "gtm engineer salary": "2,000–5,000", "crm implementation cost": "500–1,000",
    "ai sales assistant": "3,000–8,000", "ai sales agent": "3,000–8,000", "ai agents for sales": "3,000–8,000",
    "ai account executive": "200–600", "agentforce alternative": "200–600", "hubspot breeze agents": "500–1,500",
    "smart deal progression": "500–1,500", "momentum.io alternative": "200–500", "momentum io alternatives": "200–500",
    "rox alternative": "100–400", "ai notetaker for hubspot": "1,000–2,500", "hubspot ai notetaker": "1,000–2,500",
    "ai notetaker for pipedrive": "300–800", "pipedrive ai notetaker": "300–800",
    "automatically update hubspot after calls": "200–600", "ai tool to update crm after sales calls": "200–600",
    "ai follow up email after sales call": "1,000–3,000", "crm data entry automation": "500–1,500", "crm hygiene": "500–1,500",
    "meddpicc hubspot": "300–800", "meddic hubspot": "300–800", "stakeholder mapping sales": "1,000–3,000",
    "buying committee": "1,000–3,000", "deal risk": "300–1,000", "deal slippage": "300–1,000",
    "linkedin outreach automation": "1,000–3,000", "sales follow up email automation": "1,000–2,000",
    "fathom alternatives": "2,000–6,000", "fireflies alternatives": "2,000–6,000", "tldv alternatives": "2,000–6,000",
    "sybill alternative": "300–800", "sybill vs fathom": "300–800", "execution layer for crm": "n/a",
    "ai crm automation": "n/a", "crm automation for hubspot": "n/a", "hubspot automation": "n/a",
    "pipedrive automation": "n/a", "sales follow up automation": "n/a", "ai for sales teams": "n/a",
    "conversation intelligence": "n/a", "revenue intelligence": "n/a", "ai sales copilot": "n/a",
}

EXPAND_SEEDS = [
    "attio alternative", "hubspot implementation cost", "ai sales agent", "ai account executive",
    "ai notetaker for pipedrive", "crm automation", "sales follow up automation", "momentum.io alternative",
    "ai sales assistant", "gtm engineer",
]

# Relevance tagging: (tag, weight, regex). First match wins; order matters.
BRAND = r"(sybill|oliv\.?ai|\boliv\b|airspeed|glyphic|winn\.?ai|momentum\.?io|\bmomentum\b|attention\.?tech|fathom|firefl(y|ies)|tl;?dv|avoma|\bgrain\b|attio|\batio\b|day\.?ai|\bday ai\b|clarify|coffee\.?ai|claap|\bgong\b|chorus|\bclari\b|otter|read\.?ai|fellow|granola|krisp|notta|tactiq|jamie|fyxer|sembly|spinach|rox\.com|\brox\b|agentforce|breeze)"
RULES = [
    # never our lane, whatever the volume
    ("exclude", 0.0, r"salesforce logging|^on follow up$|\b(ipad|iphone|android|mac|windows|student|students|lecture|lectures|handwriting|class notes|study|voice recorder|dictation|ai assistants?$|virtual assistant|personal assistant|chatgpt|gemini|copilot for|microsoft copilot|notion ai|google docs|obsidian|evernote|onenote|apple notes|quotes?|quotation|meme|memes|books?|salesmanship|jobs?|careers?|log ?in|sign ?in|password|meaning|definition|define|what does|synonym|grammar|hyphen|or follow|vs follow|versus follow|template|templates|examples?|resume|interview|certification|salary|salaries|stock|pricing plans?|discount|coupon|api|tutorial|course|cheat sheet|excel|spreadsheet|google sheets|notion crm|wordpress|shopify|real estate|insurance|mortgage|recruit|hr software|customer service|help desk|support ticket)\b"),
    ("cost-anchor", 0.4, r"\b(account executive salary|ae salary|cost of (hiring|an ae|a sales rep)|sales rep cost|revops salary)\b"),
    ("competitor-alt", 0.9, BRAND + r".*\b(alternatives?|vs\.?|versus|competitors?|comparison|compared)\b|\b(alternatives?|vs\.?|versus|competitors?|comparison)\b.*" + BRAND),
    ("brand-nav", 0.0, BRAND),
    ("crm-vendor-nav", 0.0, r"^(hubspot|pipedrive|salesforce|zoho|attio)( crm| software| app)?$|\b(cloud[- ]based crm|cloud crm|crm (software|system|systems|platform|platforms|tools?|programs?)|free crm|small business crm|crm for small business|best crm|top crm|crm (meaning|examples?))\b|\b(hubspot|pipedrive|salesforce|zoho|monday|close\.com|freshsales|copper)\b.*\b(pricing|price|cost|plans?|login|log in|free|trial|review|reviews|competitors?|alternatives?|vs)\b|\b(is salesforce|what is hubspot|hubspot vs|salesforce vs|pipedrive vs)\b"),
    ("prospecting", 0.0, r"\b(cold (email|call|outreach|calling)|lead gen|lead generation|prospecting|\bsdr\b|\bbdr\b|email finder|b2b data|contact database|dialer|lead list|intent data|sales engagement|outbound)\b"),
    ("decision-point", 1.0, r"\b(implementation cost|onboarding cost|implementation partner|hubspot (partner|agency|consultant|onboarding|implementation)|revops (consultant|agency|as a service|tools?|software|framework)|what is revops|fractional revops|gtm engineer(ing)?|sales ops(?! salary)|sales operations|revenue operations|crm implementation|crm consultant|crm migration|deal desk)\b"),
    ("ai-native-crm", 0.9, r"\b(ai[- ]native crm|ai crm|crm with ai|ai[- ]powered crm|autonomous crm|agentic crm|crm ai|ai for crm|best crm for startups|crm for startups|startup crm|crm ai agent)\b"),
    ("post-call", 1.0, r"\b(after (the |a |sales |every |each )?(call|meeting|demo)|post[- ](call|meeting)|call summar(y|ies)|meeting summar(y|ies)|sales call notes|call notes|follow[- ]?ups?( email)?|crm (update|updates|updating|autofill|auto-fill|auto fill|data entry|hygiene|fields?|notes?|logging)|update (the |your |my )?crm|updating (the )?crm|hubspot (fields?|properties|notes|logging)|deal (notes|fields)|meeting notes (to|into) (crm|hubspot|salesforce|pipedrive)|notes to crm|log (calls|meetings|activities)|auto[- ]?(log|populate|fill)|salesforce logging|activity logging|data entry)\b"),
    ("ai-sales-agent", 1.0, r"\b(ai (sales |revenue |b2b |crm )(agent|agents|assistant|assistants|copilot|co-pilot|employee|teammate)|ai (agent|agents|assistant|assistants|copilot) for (sales|account executives|aes|revenue|crm|hubspot|pipedrive)|sales (ai )?agent|ai account executive|ai (for|in) (sales|account executives|aes|b2b sales|revenue)|sales ai|ai sales|artificial intelligence (in |for )?sales|ai powered sales|ai sales (tools?|software|platform)|sales automation (ai|tools?|software)|ai revops|agentic sales)\b"),
    ("crm-automation", 0.9, r"\b(crm automation|automate (your |the )?crm|hubspot automation|pipedrive automation|hubspot workflows?|sales automation|crm workflow|crm integration|hubspot integrations?|pipedrive integrations?|sales force automation)\b"),
    ("deal-execution", 0.7, r"\b(deal risk|deal slippage|at[- ]risk deals?|stakeholder map(ping)?|buying committee|meddic|meddpicc|meddicc|bant|spiced|challenger sales|sandler|sales (playbook|methodology|process|qualification)|pipeline (review|hygiene|management)|forecast (accuracy|ing)|win[- ]?loss|deal review|icp sales|sales icp|deal tracking|sales pipeline)\b"),
    ("notetaker", 0.4, r"(?=.*\b(sales|meeting|meetings|call|calls|zoom|google meet|teams|crm|hubspot|pipedrive|salesforce|revenue|b2b)\b)\b(note ?takers?|notetaking|note taking|meeting (recorder|recording|transcription|assistant|assistants|notes)|transcribe|transcription|ai notes|call recording|conversation intelligence|revenue intelligence|sales intelligence|sales call recording|record (sales|zoom|google meet|teams) (calls?|meetings?))\b"),
    ("sales-generic", 0.25, r"\b(b2b sales|sales (team|teams|tools?|software|tech stack|enablement|productivity)|revenue team)\b"),
    ("crm-generic", 0.0, r"\bcrm\b"),
]
INTENT_W = {"commercial": 1.0, "transactional": 1.0, "navigational": 0.9, "informational": 0.5}


# ---------------------------------------------------------------- founder / seed–Series A cluster
FOUNDER_SEEDS = [
    "founder led sales", "founder-led sales", "founder led sales playbook", "founder led sales to sales team",
    "first sales hire", "first sales hire startup", "when to hire first sales rep", "when to hire your first ae",
    "founding ae", "founding account executive", "hire first sales rep", "first ae hire", "hiring a founding ae",
    "sales playbook", "sales playbook template", "sales playbook example", "startup sales playbook", "b2b sales playbook",
    "startup sales process", "sales process for startups", "repeatable sales process", "sales process template",
    "best crm for startups", "crm for startups", "startup crm", "hubspot for startups", "best crm for small startups",
    "best crm for saas startups", "crm for early stage startups", "hubspot startup discount",
    "sales forecast accuracy", "pipeline coverage", "pipeline coverage ratio", "sales pipeline review", "pipeline review template",
    "board deck template", "series a board deck", "saas board deck", "series a metrics", "seed stage metrics", "series a sales metrics",
    "sales hiring plan", "sales capacity planning", "sales capacity model", "ae ramp time", "sales ramp time", "quota attainment",
    "one person sales team", "sales team of one", "how to scale a sales team", "scaling sales team startup", "building a sales team from scratch",
    "sales ops for startups", "revops for startups", "startup revops", "sales stack for startups", "startup sales stack", "sales tools for startups",
    "how to do sales as a founder", "founder sales", "technical founder sales", "sales for technical founders",
    "first vp of sales", "when to hire vp of sales", "head of sales startup", "vp sales hire startup",
    "sales follow up", "follow up after demo", "follow up email after demo", "demo follow up email",
    "deal review template", "pipeline meeting", "weekly pipeline review", "sales forecast template",
    "crm adoption", "sales reps not using crm", "salespeople hate crm", "crm data entry",
    "founder led sales handoff", "transition from founder led sales", "scaling founder led sales",
    "seed stage sales", "series a sales", "series a go to market", "gtm for startups", "go to market startup",
]


def stage_founder(dry):
    """Volumes, KD, intent and SERP for the seed / Series A founder cluster."""
    print("Stage: founder cluster")
    out = call("dataforseo_labs/google/keyword_overview/live", [{
        "keywords": sorted(set(FOUNDER_SEEDS)), "location_code": LOC, "language_code": LANG,
    }], "founder_overview", dry)
    found = {}
    for r in results(out):
        for it in r.get("items") or []:
            found[it["keyword"]] = kw_fields(it)
    missing = sorted(k for k in set(FOUNDER_SEEDS) if k not in found)
    if missing:
        out = call("keywords_data/google_ads/search_volume/live", [{
            "keywords": missing, "location_code": LOC, "language_code": LANG,
        }], "founder_ads", dry)
        for r in results(out):
            if r and r.get("keyword") is not None:
                found[r["keyword"]] = {"volume": r.get("search_volume"), "cpc": r.get("cpc"), "kd": None, "intent": None, "ads": True}
    if dry:
        return
    rows = []
    for kw, f in found.items():
        rows.append({"keyword": kw, "volume": f.get("volume") or 0, "kd": f.get("kd"), "cpc": f.get("cpc"), "intent": f.get("intent"), "serp_top10": ""})
    rows.sort(key=lambda r: -r["volume"])
    top = [r for r in rows if r["volume"] >= 200][:18]
    for r in top:
        out = call("serp/google/organic/live/regular", [{
            "keyword": r["keyword"], "location_code": LOC, "language_code": LANG, "depth": 10, "device": "desktop",
        }], "serp_" + hashlib.md5(r["keyword"].encode()).hexdigest()[:10], dry)
        doms = []
        for rr in results(out):
            for it in rr.get("items") or []:
                if it.get("type") == "organic" and it.get("domain"):
                    doms.append(it["domain"])
        r["serp_top10"] = ";".join(doms)
    with open(DATA / "founder-keywords.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
    fmt = lambda n: f"{int(n):,}" if n else "0"
    t = md_table(["Keyword", "Vol/mo", "KD", "Intent", "Who ranks top 10"],
                 [(r["keyword"], fmt(r["volume"]), r["kd"] if r["kd"] is not None else "", r["intent"] or "", r["serp_top10"][:120]) for r in rows if r["volume"] >= 50])
    section = f"""

## Seed / Series A founder cluster ({time.strftime('%d %b %Y')})
_{len(rows)} terms; SERP checked for the top {len(top)}. Raw: `docs/data/founder-keywords.csv`._

{t}
"""
    with open(DATA / "validated-keywords.md", "a") as f:
        f.write(section)
    print(f"  {len(rows)} founder keywords → docs/data/founder-keywords.csv")


# ---------------------------------------------------------------- client
def _auth():
    login, pw = os.environ.get("DATAFORSEO_LOGIN"), os.environ.get("DATAFORSEO_PASSWORD")
    if not login or not pw:
        sys.exit("Set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD in the environment.")
    return "Basic " + base64.b64encode(f"{login}:{pw}".encode()).decode()


def call(path, payload, cache_key, dry=False):
    f = CACHE / (cache_key + ".json")
    if f.exists():
        return json.loads(f.read_text())
    if dry:
        print(f"  [dry] POST {path}  ({cache_key})")
        return None
    req = request.Request(API + path, data=json.dumps(payload).encode(), method="POST",
                          headers={"Authorization": _auth(), "Content-Type": "application/json"})
    for attempt in range(3):
        try:
            with request.urlopen(req, timeout=180) as r:
                out = json.loads(r.read())
            break
        except error.HTTPError as e:
            body = e.read().decode(errors="ignore")[:300]
            if attempt == 2:
                sys.exit(f"HTTP {e.code} on {path}: {body}")
            time.sleep(3)
    if out.get("status_code") != 20000:
        sys.exit(f"API error on {path}: {out.get('status_message')}")
    t = out["tasks"][0]
    if t.get("status_code") != 20000:
        print(f"  ! task error {t.get('status_code')} {t.get('status_message')} on {path}")
    f.write_text(json.dumps(out))
    print(f"  {path}  cost ${out.get('cost', 0):.4f}")
    return out


def results(out):
    if not out:
        return []
    t = out["tasks"][0]
    return (t.get("result") or [])


# ---------------------------------------------------------------- stages
def stage_ranked(dry):
    print("Stage: ranked keywords per competitor")
    rows = []
    for dom, tier in COMPETITORS.items():
        out = call("dataforseo_labs/google/ranked_keywords/live", [{
            "target": dom, "location_code": LOC, "language_code": LANG, "limit": 1000,
            "order_by": ["ranked_serp_element.serp_item.etv,desc"],
            "filters": [["ranked_serp_element.serp_item.rank_group", "<=", 30]],
        }], f"ranked_{dom}", dry)
        for r in results(out):
            for it in r.get("items") or []:
                kd = it.get("keyword_data") or {}
                se = (it.get("ranked_serp_element") or {}).get("serp_item") or {}
                ki = kd.get("keyword_info") or {}
                rows.append({
                    "domain": dom, "tier": tier, "keyword": kd.get("keyword"),
                    "position": se.get("rank_group"), "url": se.get("url"), "etv": round(se.get("etv") or 0, 1),
                    "volume": ki.get("search_volume"), "cpc": ki.get("cpc"),
                    "kd": (kd.get("keyword_properties") or {}).get("keyword_difficulty"),
                    "intent": (kd.get("search_intent_info") or {}).get("main_intent"),
                })
    if rows:
        with open(DATA / "competitor-rankings.csv", "w", newline="") as f:
            w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
        print(f"  {len(rows)} ranking rows across {len(COMPETITORS)} domains")
    return rows


def stage_seeds(dry):
    print("Stage: seed keyword overview")
    kws = sorted(SEEDS.keys())
    out = call("dataforseo_labs/google/keyword_overview/live", [{
        "keywords": kws, "location_code": LOC, "language_code": LANG, "include_serp_info": True,
    }], "seeds_overview", dry)
    found = {}
    for r in results(out):
        for it in r.get("items") or []:
            found[it["keyword"]] = it
    return found


def stage_expand(dry):
    print("Stage: keyword expansion")
    items = {}
    out = call("dataforseo_labs/google/keyword_ideas/live", [{
        "keywords": EXPAND_SEEDS, "location_code": LOC, "language_code": LANG, "limit": 400,
        "order_by": ["keyword_info.search_volume,desc"],
        "filters": [["keyword_info.search_volume", ">=", 30]],
    }], "expand_ideas", dry)
    for r in results(out):
        for it in r.get("items") or []:
            items[it["keyword"]] = it
    for s in EXPAND_SEEDS:
        out = call("dataforseo_labs/google/related_keywords/live", [{
            "keyword": s, "location_code": LOC, "language_code": LANG, "depth": 2, "limit": 150,
            "filters": [["keyword_data.keyword_info.search_volume", ">=", 30]],
        }], "expand_related_" + hashlib.md5(s.encode()).hexdigest()[:8], dry)
        for r in results(out):
            for it in r.get("items") or []:
                kd = it.get("keyword_data") or {}
                if kd.get("keyword"):
                    items.setdefault(kd["keyword"], kd)
    print(f"  {len(items)} expansion keywords")
    return items


ADS_EXTRA = [
    "ai notetaker for pipedrive", "pipedrive notetaker", "pipedrive ai notetaker", "hubspot notetaker", "hubspot ai notetaker",
    "ai sales assistant for hubspot", "hubspot ai agent", "hubspot ai sales assistant", "ai account executive", "ai for account executives",
    "ai follow up email", "sales follow up email ai", "post call follow up email", "follow up email after sales call",
    "auto update crm", "crm auto fill", "crm autofill", "automate crm data entry", "ai crm data entry", "update crm automatically",
    "revops as a service", "hubspot partner", "hubspot agency", "hubspot onboarding", "hubspot implementation", "hubspot consultant",
    "revops consultant", "fractional revops", "gtm engineer", "hubspot implementation cost",
    "attio pricing", "attio alternative", "attio alternatives", "attio vs hubspot", "attio crm", "day.ai crm", "clarify crm",
    "momentum io", "momentum.io alternative", "momentum io alternatives", "sybill ai", "sybill alternative", "sybill alternatives",
    "oliv ai", "oliv ai alternative", "airspeed ai", "gong alternatives", "gong alternative", "rox ai", "rox alternative",
    "smart deal progression", "hubspot breeze", "hubspot breeze agents", "agentforce alternative", "agentforce for hubspot",
    "ai sales agent", "ai sales agents", "ai sales assistant", "ai agents for sales", "ai sales copilot", "ai sdr",
    "crm hygiene", "crm data hygiene", "deal risk", "stakeholder mapping", "stakeholder mapping sales", "buying committee",
    "meddpicc hubspot", "meddic hubspot", "linkedin outreach automation", "linkedin automation tools", "sales follow up automation",
    "execution layer for crm", "second ae", "ai ae", "conversation intelligence", "revenue intelligence", "ai crm", "ai native crm",
]


def stage_ads(dry, labs_found):
    """Google Ads search volume for seeds Labs had no data on, plus extra probes."""
    print("Stage: Google Ads volumes for uncovered seeds")
    kws = sorted({k for k in list(SEEDS) + ADS_EXTRA if k not in labs_found})
    out = call("keywords_data/google_ads/search_volume/live", [{
        "keywords": kws, "location_code": LOC, "language_code": LANG,
    }], "ads_volume", dry)
    found = {}
    for r in results(out):
        if r and r.get("keyword") is not None:
            found[r["keyword"]] = {"keyword_info": {"search_volume": r.get("search_volume"), "cpc": r.get("cpc")},
                                   "keyword_properties": {}, "search_intent_info": {}, "ads_competition": r.get("competition")}
    print(f"  {len(found)} keywords with Ads data of {len(kws)} asked")
    return found


def kw_fields(it):
    """Normalise a Labs keyword item (overview / ideas / related) to volume, kd, cpc, intent."""
    ki = it.get("keyword_info") or {}
    return {
        "volume": ki.get("search_volume"), "cpc": ki.get("cpc"),
        "kd": (it.get("keyword_properties") or {}).get("keyword_difficulty"),
        "intent": (it.get("search_intent_info") or {}).get("main_intent"),
    }


def classify(kw):
    k = kw.lower()
    for tag, w, rx in RULES:
        if re.search(rx, k):
            return tag, w
    return "other", 0.0


def build_universe(ranked, seeds, expand):
    U = {}
    def get(kw):
        if kw not in U:
            U[kw] = {"keyword": kw, "volume": None, "kd": None, "cpc": None, "intent": None,
                     "peers": set(), "notetakers": set(), "crms": set(), "content": set(),
                     "best_peer_pos": None, "sources": set(), "estimate": SEEDS.get(kw, "")}
        return U[kw]
    for r in ranked:
        if not r["keyword"]:
            continue
        u = get(r["keyword"]); u["sources"].add("ranked")
        for k in ("volume", "kd", "cpc", "intent"):
            if u[k] is None and r[k] is not None:
                u[k] = r[k]
        bucket = {"peer": "peers", "notetaker": "notetakers", "crm": "crms", "content": "content"}[r["tier"]]
        if r["position"] and r["position"] <= 10:
            u[bucket].add(r["domain"])
        if r["tier"] == "peer" and r["position"]:
            u["best_peer_pos"] = min(u["best_peer_pos"] or 99, r["position"])
    for kw, it in {**expand, **seeds}.items():
        u = get(kw); u["sources"].add("seed" if kw in seeds else "expand")
        if u["volume"] is None and kw_fields(it)["volume"] is None: u["volume"] = 0
        for k, v in kw_fields(it).items():
            if v is not None:
                u[k] = v
    return U


def stage_serp(U, dry):
    """Live SERP on the top gap candidates: who actually ranks."""
    print("Stage: SERP check on top candidates")
    cands = [u for u in U.values() if u["volume"] and u["tag_w"] >= 0.7 and not u["peers"]]
    cands.sort(key=lambda u: -(u["volume"] or 0))
    cands = cands[:45]
    serp = {}
    for u in cands:
        out = call("serp/google/organic/live/regular", [{
            "keyword": u["keyword"], "location_code": LOC, "language_code": LANG, "depth": 10, "device": "desktop",
        }], "serp_" + hashlib.md5(u["keyword"].encode()).hexdigest()[:10], dry)
        doms = []
        for r in results(out):
            for it in r.get("items") or []:
                if it.get("type") == "organic" and it.get("domain"):
                    doms.append(it["domain"])
        serp[u["keyword"]] = doms
    return serp


def serp_kind(dom):
    d = dom.lower()
    if d in COMPETITORS: return "competitor:" + COMPETITORS[d]
    if re.search(r"hubspot\.com|pipedrive\.com|salesforce\.com|zoho\.com|monday\.com|attio\.com|close\.com|freshworks|copper\.com|folk\.app", d): return "crm-vendor"
    if re.search(r"g2\.com|capterra|getapp|softwareadvice|trustradius|producthunt|saasworthy|sourceforge", d): return "review-site"
    if re.search(r"reddit|quora|linkedin\.com|youtube|medium\.com", d): return "ugc"
    if re.search(r"zapier|make\.com|n8n|clay\.com|apollo\.io|outreach\.io|salesloft|gong\.io|zoominfo|cirrusinsight|lark|clickup|notion", d): return "adjacent-vendor"
    if re.search(r"agency|consult|partner|labs|studio|solutions|digital|marketing|growth|ops|revops", d): return "agency"
    return "blog/other"


def stage_score(U, serp):
    print("Stage: score and write")
    rows = []
    for u in U.values():
        vol = u["volume"] or 0
        if vol < 20:
            continue
        tag, w = u["tag"], u["tag_w"]
        if w == 0:
            continue
        kd = u["kd"] if u["kd"] is not None else 50
        iw = INTENT_W.get(u["intent"] or "informational", 0.5)
        if u["peers"]:
            gap, gm = "peer-owned", 1.0
        elif u["notetakers"] and tag in ("post-call", "crm-automation", "ai-sales-agent"):
            gap, gm = "notetaker-owned, execution-shaped", 1.2
        elif u["notetakers"] or u["crms"] or u["content"]:
            gap, gm = "adjacent-owned", 1.1
        else:
            gap, gm = "unclaimed", 1.5
        top = serp.get(u["keyword"])
        serp_mix = ""
        if top:
            kinds = [serp_kind(d) for d in top]
            if any(k == "competitor:peer" for k in kinds):
                gap, gm = "peer-owned (SERP)", 1.0
            c = defaultdict(int)
            for k in kinds: c[k] += 1
            serp_mix = ", ".join(f"{k}×{n}" for k, n in sorted(c.items(), key=lambda x: -x[1]))
        score = vol * iw * (1 - kd / 100) * gm * w
        rows.append({
            "keyword": u["keyword"], "volume": vol, "kd": u["kd"], "cpc": u["cpc"], "intent": u["intent"],
            "tag": tag, "gap": gap, "peers_top10": ";".join(sorted(u["peers"])),
            "notetakers_top10": ";".join(sorted(u["notetakers"])), "crms_top10": ";".join(sorted(u["crms"])),
            "content_top10": ";".join(sorted(u["content"])), "serp_top10_mix": serp_mix,
            "serp_top10": ";".join(top or []), "sources": ";".join(sorted(u["sources"])),
            "my_estimate": u["estimate"], "leverage": round(score),
        })
    rows.sort(key=lambda r: -r["leverage"])
    with open(DATA / "keywords.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
    print(f"  {len(rows)} scored keywords → docs/data/keywords.csv")
    write_report(rows, U)
    return rows


def md_table(headers, rows):
    out = ["| " + " | ".join(headers) + " |", "|" + "---|" * len(headers)]
    for r in rows:
        out.append("| " + " | ".join(str(c) if c is not None else "" for c in r) + " |")
    return "\n".join(out)


def write_report(rows, U):
    fmt = lambda n: f"{int(n):,}" if isinstance(n, (int, float)) and n is not None else (n or "")
    top = rows[:40]
    t1 = md_table(["#", "Keyword", "Vol/mo", "KD", "Intent", "Cluster", "Gap", "Who ranks top 10", "Leverage"],
                  [(i + 1, r["keyword"], fmt(r["volume"]), r["kd"], r["intent"], r["tag"], r["gap"],
                    (r["serp_top10_mix"] or ";".join(filter(None, [r["peers_top10"], r["notetakers_top10"], r["crms_top10"], r["content_top10"]])) or "none of the tracked set"),
                    fmt(r["leverage"])) for i, r in enumerate(top)])
    seeds = [r for r in rows if r["my_estimate"]]
    seeds.sort(key=lambda r: -(r["volume"] or 0))
    t2 = md_table(["Keyword", "My estimate", "Actual vol/mo", "KD", "Gap", "Verdict"],
                  [(r["keyword"], r["my_estimate"], fmt(r["volume"]), r["kd"], r["gap"], verdict(r)) for r in seeds])
    # Missing seeds (no volume returned)
    missing = [k for k in SEEDS if k not in {r["keyword"] for r in rows} and k not in U]
    gaps = [r for r in rows if r["gap"] == "unclaimed"][:25]
    t3 = md_table(["Keyword", "Vol/mo", "KD", "Cluster", "SERP top 10 is", "Leverage"],
                  [(r["keyword"], fmt(r["volume"]), r["kd"], r["tag"], r["serp_top10_mix"] or "unchecked", fmt(r["leverage"])) for r in gaps])
    nt = [r for r in rows if r["gap"].startswith("notetaker")][:20]
    t4 = md_table(["Keyword", "Vol/mo", "KD", "Notetakers in top 10", "Leverage"],
                  [(r["keyword"], fmt(r["volume"]), r["kd"], r["notetakers_top10"], fmt(r["leverage"])) for r in nt])
    peer = [r for r in rows if r["gap"].startswith("peer")][:20]
    t5 = md_table(["Keyword", "Vol/mo", "KD", "Peers in top 10", "Leverage"],
                  [(r["keyword"], fmt(r["volume"]), r["kd"], r["peers_top10"] or "(SERP)", fmt(r["leverage"])) for r in peer])
    # Competitor summary
    per = defaultdict(lambda: {"kws": 0, "top10": 0, "etv": 0.0})
    try:
        with open(DATA / "competitor-rankings.csv") as f:
            for r in csv.DictReader(f):
                p = per[r["domain"]]; p["kws"] += 1
                if r["position"] and int(float(r["position"])) <= 10: p["top10"] += 1
                p["etv"] += float(r["etv"] or 0)
    except FileNotFoundError:
        pass
    t6 = md_table(["Domain", "Tier", "Ranked kws (top 1k by traffic, pos ≤30)", "In top 10", "Est. monthly organic visits (ETV)"],
                  [(d, COMPETITORS[d], per[d]["kws"], per[d]["top10"], fmt(per[d]["etv"])) for d in sorted(per, key=lambda d: -per[d]["etv"])])
    cluster = defaultdict(lambda: [0, 0])
    for r in rows:
        cluster[r["tag"]][0] += 1; cluster[r["tag"]][1] += r["volume"] or 0
    t7 = md_table(["Cluster", "Keywords", "Total vol/mo"], [(k, v[0], fmt(v[1])) for k, v in sorted(cluster.items(), key=lambda x: -x[1][1])])
    report = f"""# Validated keyword data (DataForSEO, US, {time.strftime('%d %b %Y')})

_Generated by `tools/dataforseo/validate.py`. Raw rows in `docs/data/keywords.csv` ({len(rows)} keywords) and `docs/data/competitor-rankings.csv`. Leverage = volume × intent weight × (1 − KD/100) × gap multiplier × relevance weight._

## Competitor organic footprint
{t6}

## Demand by cluster (relevant keywords only)
{t7}

## Top 40 by leverage
{t1}

## Real gaps: relevant demand where none of the tracked competitors is in the top 10
{t3}

## Notetaker-owned, execution-shaped (the "and then what" angle)
{t4}

## Peer-owned (where execution-layer competitors already rank; fight only with a better page)
{t5}

## Where my estimates were wrong
{t2}

Seeds with no volume data returned (treat as < 20 searches/mo): {", ".join(missing) or "none"}.
"""
    (DATA / "validated-keywords.md").write_text(report)
    print("  → docs/data/validated-keywords.md")


def verdict(r):
    est = r["my_estimate"]
    v = r["volume"] or 0
    m = re.findall(r"[\d,]+", est)
    if len(m) == 2:
        lo, hi = int(m[0].replace(",", "")), int(m[1].replace(",", ""))
        if v < lo * 0.5: return "overestimated"
        if v > hi * 2: return "underestimated"
        if lo <= v <= hi: return "in band"
        return "close"
    return "no prior"


# ---------------------------------------------------------------- main
def main():
    dry = "--dry-run" in sys.argv
    stages = "ranked,seeds,expand,ads,serp,score"
    for a in sys.argv:
        if a.startswith("--stages="):
            stages = a.split("=", 1)[1]
    stages = stages.split(",")
    if dry:
        print("Dry run: call plan (cached calls are skipped)")
        print(f"  ranked_keywords × {len(COMPETITORS)} domains  ≈ ${0.11 * len(COMPETITORS):.2f}")
        print(f"  keyword_overview × 1 ({len(SEEDS)} seeds)      ≈ $0.10")
        print(f"  keyword_ideas × 1 + related_keywords × {len(EXPAND_SEEDS)} ≈ ${0.1 + 0.1 * len(EXPAND_SEEDS):.2f}")
        print(f"  serp live regular × ≤45               ≈ $0.10")
        print(f"  total                                  ≈ ${0.11 * len(COMPETITORS) + 0.2 + 0.1 * len(EXPAND_SEEDS) + 0.1:.2f}")
    ranked = stage_ranked(dry) if "ranked" in stages else []
    if not ranked and (DATA / "competitor-rankings.csv").exists():
        with open(DATA / "competitor-rankings.csv") as f:
            ranked = [{**r, "position": int(float(r["position"])) if r["position"] else None,
                       "volume": int(float(r["volume"])) if r["volume"] else None,
                       "kd": int(float(r["kd"])) if r["kd"] else None,
                       "cpc": float(r["cpc"]) if r["cpc"] else None} for r in csv.DictReader(f)]
    seeds = stage_seeds(dry) if "seeds" in stages else {}
    expand = stage_expand(dry) if "expand" in stages else {}
    if "ads" in stages:
        seeds = {**stage_ads(dry, set(seeds)), **seeds}
    if "founder" in stages:
        stage_founder(dry)
    if dry or stages == ["founder"]:
        return
    U = build_universe(ranked, seeds, expand)
    for u in U.values():
        u["tag"], u["tag_w"] = classify(u["keyword"])
    serp = stage_serp(U, dry) if "serp" in stages else {}
    if "score" in stages:
        stage_score(U, serp)


if __name__ == "__main__":
    main()
