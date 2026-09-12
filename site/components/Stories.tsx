"use client";
// CHRM marketing — Stories. Four roles, all at the same company.
import { useEffect, useState } from "react";
import Link from "next/link";

const COMPANY = "Series A B2B SaaS · 10 closers · MEDDPICC playbook";

type Chapter = { eye: string; h: string; body: string[] };
type Shot = { label: string; hint: string; cta: string };
type Story = {
  id: string;
  role: string;
  tabMeta: string;
  co: string;
  photo: string;
  quote: string;
  shot: Shot;
  chapters: Chapter[];
  results: { big: string; label: string }[];
};

const STORIES: Story[] = [
  {
    id: "ceo",
    role: "Founder & CEO",
    tabMeta: "Risk · implementation",
    co: COMPANY,
    photo: "/photos/ceo.png",
    quote: "I signed on a Tuesday. Wednesday morning we were processing calls.",
    shot: {
      label: "CRM forecast view · post-rollout",
      hint: "A populated HubSpot pipeline column that wasn’t there the week before.",
      cta: "See the forecast view in CHRM",
    },
    chapters: [
      {
        eye: "The pain",
        h: "I had just raised. I had no time for a six-month rollout.",
        body: [
          "We closed our Series A on a Monday and I had a VP Sales starting in three weeks. He was going to inherit ten reps, a HubSpot we'd outgrown in eighteen months, and a forecast number I'd already promised the board. CRM field completion was thirty-one percent. Pipeline confidence was a vibe.",
          "I'd been pitched by the bigger platforms. Every one of them wanted a quarter of implementation, a six-figure annual contract, and a Slack channel with their CS team. I didn't have a quarter. I had three weeks before someone I'd just hired walked in expecting the basics to work.",
        ],
      },
      {
        eye: "Where CHRM came in",
        h: "The risk was nothing. So I just tried it.",
        body: [
          "What got me past the door was the offer. Twenty-minute demo. Thirty days free for up to five seats. No contract negotiation, no procurement form, no implementation timeline written on the whiteboard. If it didn't work I'd close the tab.",
          "I signed up on a Tuesday afternoon. Wednesday at 9am we had a twenty-minute call. By 9:45 CHRM&rsquo;s notetaker was joining every booked call on the calendar, every HubSpot deal had a CHRM record, and every Apollo prospect we had had a stakeholder map. There was nothing to roll out. There was nothing to ask the team to learn. Nobody knew CHRM existed until they noticed their CRMs were full.",
        ],
      },
      {
        eye: "How we set it up",
        h: "There was no implementation. There was a 20-minute call.",
        body: [
          "We connected HubSpot. We connected Google Calendar, our LinkedIn, and Apollo. CHRM has its own notetaker. It joined every call from that moment forward, so there was no Fathom or Otter to plug in. I named the twelve fields I actually needed populated &mdash; champion, budget signal, timeline, next step, top objection, the rest of it. I named the five deal stages we use. That was the setup.",
          "I never wrote a spec. I never opened a ticket. I never asked a single closer to do anything differently. Nothing in the stack was replaced. HubSpot stayed HubSpot. Fathom stayed Fathom. CHRM just sat on top.",
        ],
      },
      {
        eye: "What changed",
        h: "My VP walked in to a CRM that was actually full.",
        body: [
          "By the end of week one I was opening HubSpot on Monday morning and seeing a real pipeline for the first time since we&rsquo;d started selling. Every deal had a champion, a budget signal, a top risk, a next step. I could read the column. I could forecast from it.",
          "My new VP started two weeks after CHRM went live. The first conversation I had with him was about strategy, not about cleaning up the CRM. I closed Q3 nine points over plan &mdash; not because CHRM closed deals, but because we stopped losing the ones we&rsquo;d already earned to follow-ups that went out two days late.",
        ],
      },
    ],
    results: [
      { big: "9 pts", label: "Over plan in the first full quarter on CHRM" },
      { big: "0", label: "Days of implementation time" },
      { big: "< 1 day", label: "From signup to first call processed" },
    ],
  },
  {
    id: "vp-sales",
    role: "VP of Sales",
    tabMeta: "Configuration · playbook",
    co: COMPANY,
    photo: "/photos/vp-sales.png",
    quote: "I configured my playbook into CHRM. In a 30-minute call. No engineer.",
    shot: {
      label: "Field configuration · MEDDPICC",
      hint: "Twenty-two custom HubSpot fields mapped to the team’s playbook.",
      cta: "See the configuration view in CHRM",
    },
    chapters: [
      {
        eye: "The pain",
        h: "I had a HubSpot setup nobody but me understood.",
        body: [
          "I joined post-Series A to inherit a CRM that had been built and rebuilt by three different people. I rewrote it. Twenty-two custom fields. Five deal stages I'd argued for. A MEDDPICC variant we'd refined over four hundred deals. Our whole sales process lived in that schema. It took me and an engineer two sprints.",
          "Field completion was thirty-one percent. The reps weren't going to learn another tool. I wasn't going to hand a vendor my two months of work and let them re-architect it because it didn't match their template. I'd been pitched by three platforms that wanted me to standardise on theirs. None of them got a second meeting.",
        ],
      },
      {
        eye: "Where CHRM came in",
        h: "It read my HubSpot. It didn&rsquo;t try to rewrite it.",
        body: [
          "What CHRM asked me on the call was: which of your existing fields do you want filled, and what does a populated one look like. That was the whole conversation. Not, here is our framework. Not, here is best practice. My schema, my stages, my definitions.",
          "I didn&rsquo;t need to teach anybody our process. I didn&rsquo;t need to write a brief. I didn&rsquo;t need to put an engineer on a call. Nobody from CHRM ever asked me what MEDDPICC was. The structure was already in the CRM &mdash; they just read it.",
        ],
      },
      {
        eye: "How we set it up",
        h: "Thirty minutes. Me, the founder of CHRM, and HubSpot.",
        body: [
          "We connected HubSpot via OAuth. CHRM pulled every custom field, every deal stage, every property I'd built. I went down the list and said: fill this one, fill this one, leave this one alone. For each field I gave it one or two sentences of context &mdash; what a strong champion looks like to us, what we mean by &lsquo;board-level deal,&rsquo; how we score budget.",
          "By minute thirty it was done. Twenty-two fields configured. Five stages mapped to risk signals. Three personas wired to follow-up templates I already had in the team Notion. I never opened a ticket with engineering. I never wrote a runbook. I configured my own sales process into the tool, in the time it would have taken me to write the brief for someone else to do it.",
        ],
      },
      {
        eye: "What changed",
        h: "My pipeline review is a strategy conversation now.",
        body: [
          "Field completion went from thirty-one percent to ninety-six in the first two weeks. The first Friday after we went live, CHRM flagged three deals at risk for reasons that would not have surfaced until close. We saved two of them. We coached the third into a clean loss instead of a six-week stall.",
          "Two of my ten reps hit quota last quarter who hadn&rsquo;t all year. They didn&rsquo;t suddenly get better; the deals they were already running just stopped leaking on the execution side. My Friday pipeline review is a strategy conversation now, not an archaeology dig through call notes.",
        ],
      },
    ],
    results: [
      { big: "96%", label: "CRM field completion across the team (from 31%)" },
      { big: "0", label: "Engineering tickets opened for the rollout" },
      { big: "+2", label: "Reps over quota who weren&rsquo;t the prior quarter" },
    ],
  },
  {
    id: "ae",
    role: "Account Executive",
    tabMeta: "Time back · selling",
    co: COMPANY,
    photo: "/photos/ae.png",
    quote: "I&rsquo;m closing more because I&rsquo;m actually selling more.",
    shot: {
      label: "Drafted follow-up · staged from call",
      hint: "A personalised email, ready to send four minutes after the call ended.",
      cta: "See the follow-up view in CHRM",
    },
    chapters: [
      {
        eye: "The pain",
        h: "I lost two hours after every discovery call.",
        body: [
          "Ninety minutes on a call. Then ninety minutes of admin. Logging the call. Filling the fields I remembered to fill. Writing the follow-up. Finding the security one-pager. Updating my forecast spreadsheet. By the time I sent the email it was the next day, and my recall of what they actually said was already foggy.",
          "I was burning the back half of every day on the conversation I&rsquo;d already had, instead of the next one I needed to set.",
        ],
      },
      {
        eye: "Where CHRM came in",
        h: "My calendar gave me the afternoon back.",
        body: [
          "My VP rolled it out across the team. I didn't have to do anything &mdash; CHRM&rsquo;s notetaker was on every booked call the next morning. My discovery calls started showing up in HubSpot fully populated by the time I'd had coffee. The follow-up was already drafted, in my voice, referencing the things the prospect actually said.",
          "I read each one. I edited one paragraph in roughly half of them. I sent. The rest of the afternoon I spent on calls.",
        ],
      },
      {
        eye: "How we set it up",
        h: "Nothing. Literally nothing on my end.",
        body: [
          "I was told on Monday that CHRM was going live. I was asked once for two examples of follow-up emails I was proud of, so the tone would match. That was it. I never logged into CHRM. I never learned a new tool. My HubSpot looked the same. My calendar looked the same &mdash; except a new participant called CHRM was on every booked call. The difference was that everything I used to do at 6pm was already done.",
        ],
      },
      {
        eye: "What changed",
        h: "I was present on every call.",
        body: [
          "I stopped bracing for the admin during the call. I was listening for the deal, not the field. The follow-up sent itself in the minutes I used to spend remembering it. I touched HubSpot three times last week. All three times because I wanted to.",
          "I closed seven deals last quarter. The quarter before, I closed four. Same pipeline shape, same ICP, same ramp. The difference is that I had time to work the deals I had instead of administering them.",
        ],
      },
    ],
    results: [
      { big: "+3 deals", label: "Closed last quarter vs the one before" },
      { big: "~10 hrs", label: "Per week back from admin into selling" },
      { big: "< 5 min", label: "Between a call ending and the follow-up landing" },
    ],
  },
  {
    id: "vp-marketing",
    role: "VP of Marketing",
    tabMeta: "Leading data · not lagging",
    co: COMPANY,
    photo: "/photos/vp-marketing.png",
    quote: "I stopped finding out six weeks late. The data got leading.",
    shot: {
      label: "Leading indicators · real-time",
      hint: "Persona, intent, source signal — captured the day the call happens.",
      cta: "See the leading-indicator view in CHRM",
    },
    chapters: [
      {
        eye: "The pain",
        h: "I was finding out about pipeline problems six weeks after they happened.",
        body: [
          "Every signal I had as a marketing leader was lagging. Closed-won rates, pipeline coverage, attribution slides &mdash; those tell you the answer six to eight weeks after the deal hit the funnel. By the time I knew our ICP definition was off, I'd already shipped a quarter of programs against it. By the time I knew the SDR-to-AE handoff was leaking on a specific persona, two cohorts of leads had already churned out of the pipeline.",
          "Revenue had been impacted for six weeks before I could see it in the data. And the conversation in my QBR was always retrospective &mdash; here's what we missed, here's what we'd do differently, here's why I'm asking the board for a bigger budget. By that point, the damage was done.",
        ],
      },
      {
        eye: "Where CHRM came in",
        h: "CHRM gave me leading data, not lagging.",
        body: [
          "The breakthrough wasn't a new dashboard. It was that CHRM captures and structures the leading signal from every single conversation, on the day it happens. Persona. Intent. Trigger. Champion strength. Source confirmation. Competitor mentioned. What the buyer actually said about why they're talking to us.",
          "That data is in HubSpot the morning after every discovery call &mdash; not six weeks later when the deal closed or didn't. I stopped operating on closed-won as my primary signal and started operating on what was being captured upstream.",
        ],
      },
      {
        eye: "How we set it up",
        h: "I co-owned the field map with the VP of Sales.",
        body: [
          "I sat in the CHRM configuration call alongside our VP of Sales. We named the leading fields I needed populated for marketing visibility &mdash; confirmed lead source, persona segmentation, deal trigger, competitor mentioned, decision criteria, champion strength at discovery. Not lagging fields. Leading ones.",
          "CHRM populated them from every call from that day forward. No change to the marketing stack. No new tool. Just real signal showing up in HubSpot the morning after each conversation &mdash; four to six weeks before that signal would have shown up as a closed-won or closed-lost outcome.",
        ],
      },
      {
        eye: "What changed",
        h: "I started catching problems the same week they started.",
        body: [
          "Three weeks in, CHRM&rsquo;s data flagged a persona mismatch on a campaign I&rsquo;d just shipped. The discovery calls were happening, but the persona field on every one of them read &lsquo;champion at wrong altitude.&rsquo; Six weeks earlier that would have surfaced as a closed-lost cluster I&rsquo;d be writing up at the next QBR. Instead I killed the campaign in week three and re-routed the budget. Pipeline impact was measurable inside the quarter, not the next one.",
          "More broadly, my QBR conversation changed from &lsquo;here&rsquo;s what we missed&rsquo; to &lsquo;here&rsquo;s what we&rsquo;re catching.&rsquo; Pipeline per marketing dollar went up thirty-eight percent the next quarter. I hadn&rsquo;t gotten smarter; the lag between a problem starting and me seeing it had collapsed from six weeks to one day.",
        ],
      },
    ],
    results: [
      { big: "6 wk → 1 day", label: "Lag between a pipeline problem starting and seeing it" },
      { big: "+38%", label: "Pipeline per marketing dollar in the next quarter" },
      { big: "94%", label: "Leading-indicator fields populated automatically" },
    ],
  },
];

function StoryShot({ shot, id }: { shot: Shot; id: string }) {
  return (
    <figure className="m-stories__shot">
      <div className="m-stories__shot-frame">
        <div className="m-stories__shot-head">
          <span className="m-stories__shot-brand">CHRM</span>
          <span className="m-stories__shot-meta">{shot.label}</span>
        </div>
        <div className="m-stories__shot-body">
          <img className="m-stories__shot-img" src={`/assets/screenshots/story-${id}.png`} alt={shot.label} loading="lazy" />
        </div>
        <div className="m-stories__shot-foot">{shot.hint}</div>
      </div>
      <Link className="m-stories__shot-link" href="/features">
        {shot.cta} &rarr;
      </Link>
    </figure>
  );
}

export default function Stories() {
  const [active, setActive] = useState("ceo");
  const current = STORIES.find((s) => s.id === active)!;

  useEffect(() => {
    const idsSet = new Set(STORIES.map((s) => s.id));
    const apply = () => {
      const h = (window.location.hash || "").replace(/^#/, "");
      if (idsSet.has(h)) setActive(h);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const onTab = (id: string) => {
    setActive(id);
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", "#" + id);
    }
  };

  return (
    <section className="m-stories" id="stories" data-screen-label="Stories">
      <header className="m-stories__head">
        <div>
          <div className="t-eyebrow">Stories from the team</div>
          <h2 className="m-stories__h">A day on CHRM, by role.</h2>
        </div>
        <p className="m-stories__sub">
          Four people. <em>One company.</em> {COMPANY}. People shown are fictive and
          illustrative.
        </p>
      </header>

      <figure className="m-stories__team">
        <img src="/photos/team-group.png" alt="The team — fictive, illustrative." />
        <figcaption>The team &middot; illustrative</figcaption>
      </figure>

      <div className="m-stories__tabs" role="tablist" aria-label="Choose a role">
        {STORIES.map((s) => (
          <button
            key={s.id}
            role="tab"
            id={"stories-tab-" + s.id}
            aria-selected={s.id === active}
            aria-controls="stories-panel"
            tabIndex={s.id === active ? 0 : -1}
            className={"m-stories__tab" + (s.id === active ? " m-stories__tab--cur" : "")}
            onClick={() => onTab(s.id)}
          >
            {s.role}
            <span className="m-stories__tab-meta">{s.tabMeta}</span>
          </button>
        ))}
      </div>

      <article
        className="m-stories__panel"
        id="stories-panel"
        role="tabpanel"
        aria-labelledby={"stories-tab-" + current.id}
        tabIndex={0}
        key={current.id}
      >
        <figure className="m-stories__photo">
          <img src={current.photo} alt={current.role + " — illustrative."} />
          <figcaption>{current.role} &middot; illustrative</figcaption>
        </figure>

        <div className="m-stories__copy">
          <div className="m-stories__role">
            <span className="m-stories__role-name">{current.role}</span>
            <span className="m-stories__role-co">{current.co}</span>
          </div>
          <blockquote
            className="m-stories__quote"
            dangerouslySetInnerHTML={{ __html: "&ldquo;" + current.quote + "&rdquo;" }}
          />

          {current.chapters.slice(0, 2).map((c) => (
            <div className="m-stories__chapter" key={c.eye}>
              <div className="m-stories__chapter-eye">{c.eye}</div>
              <h4 className="m-stories__chapter-h" dangerouslySetInnerHTML={{ __html: c.h }} />
              {c.body.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          ))}

          <StoryShot shot={current.shot} id={current.id} />

          {current.chapters.slice(2).map((c) => (
            <div className="m-stories__chapter" key={c.eye}>
              <div className="m-stories__chapter-eye">{c.eye}</div>
              <h4 className="m-stories__chapter-h" dangerouslySetInnerHTML={{ __html: c.h }} />
              {c.body.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          ))}

          <div className="m-stories__results">
            {current.results.map((r) => (
              <div key={r.label}>
                <span className="m-stories__result-big" dangerouslySetInnerHTML={{ __html: r.big }} />
                <span className="m-stories__result-label" dangerouslySetInnerHTML={{ __html: r.label }} />
              </div>
            ))}
          </div>
        </div>
      </article>

      <p className="m-stories__disclaim">
        Scenarios and the people shown are illustrative, not customer testimonials. Numbers
        are representative of CHRM&rsquo;s design intent at this stage of the company.
      </p>
    </section>
  );
}
