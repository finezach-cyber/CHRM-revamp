"use client";
// 2nd Closer features page — 4-step framework. Sticky step index shades when stuck.
import { Fragment, useEffect, useRef, useState } from "react";

type FeatureStepData = {
  id: string;
  n: string;
  name: string;
  short: string;
  h: string;
  sub: string;
  prose: string[];
  bullets: [string, string][];
  shotLabel: string;
  shotHint: string;
};

const FEATURE_STEPS: FeatureStepData[] = [
  {
    id: "capture",
    n: "01",
    name: "Capture",
    short: "Every conversation, in &mdash; automatically.",
    h: "Every conversation, in. <em>Automatically.</em>",
    sub: "2nd Closer has its own notetaker. It joins every booked call on your calendar, reads every email thread, and pulls context from LinkedIn and Apollo. Nothing to plug in. Nothing for your team to do.",
    prose: [
      "Your team already talks to buyers. 2nd Closer listens to every word — without making them log it, and without making them install a fourth notetaker. The 2nd Closer notetaker is built in. It auto-joins every call on your team's calendar, transcribes, and feeds the rest of the system continuously.",
      "Around the call, 2nd Closer pulls everything else worth knowing about the deal: the email thread either side of it, the buyer's LinkedIn for stakeholder context, the company's Apollo record for firmographics. If you already use Fireflies, Fathom, or Otter, 2nd Closer ingests their transcripts too — they're just one source among several.",
    ],
    bullets: [
      ["Built-in notetaker", "Joins every Zoom, Meet, and Teams call on your team’s calendar. No third-party tool to install."],
      ["Calendar-driven", "Connects to Google or Microsoft. The right calls are captured automatically. You don’t configure rules."],
      ["LinkedIn + Apollo", "Stakeholder context and firmographics, pulled in per deal. No more flipping between tabs."],
      ["Email threads", "Both directions. Connected via OAuth, not credentials."],
      ["External transcripts", "If you use Fireflies, Fathom, Otter, or Gong, we ingest them too. They’re just another source."],
    ],
    shotLabel: "Source inbox · 14 conversations today",
    shotHint: "Every transcript, every email, every Apollo record, in one continuous stream.",
  },
  {
    id: "structure",
    n: "02",
    name: "Structure",
    short: "Conversation becomes structured deal data.",
    h: "Conversation becomes <em>structured deal data.</em>",
    sub: "Your fields. Your stages. Your playbook. Populated from the call, not from a rep’s memory two days later.",
    prose: [
      "2nd Closer reads each conversation and writes it into your CRM using your existing field definitions. Champion, budget signal, timeline, top objection, next step, the twenty other fields you actually care about. Whatever your team has built into HubSpot or Pipedrive, 2nd Closer populates.",
      "We don't impose a template. We don't standardise you onto a generic MEDDPICC. Your sales process is already encoded in your CRM schema. 2nd Closer reads it, asks a few clarifying questions during a 30-minute call, and from then on writes structured data into the fields you already have. Empty fields where information wasn't discussed; populated fields where it was.",
    ],
    bullets: [
      ["Your custom fields", "Whatever you built into HubSpot or Pipedrive. We read the schema you already have."],
      ["92–97% accuracy", "On well-structured calls. Calls where deal specifics are discussed produce near-perfect outputs."],
      ["Empty over wrong", "When information is ambiguous or not discussed, 2nd Closer leaves the field empty rather than guess."],
      ["Stakeholder maps", "Champions, blockers, economic buyers — tagged and tied to the deal automatically."],
    ],
    shotLabel: "Deal record · auto-populated",
    shotHint: "Twenty-two fields. Filled from the transcript. Written to HubSpot.",
  },
  {
    id: "activate",
    n: "03",
    name: "Activate",
    short: "The next action happens. Automatically.",
    h: "The next action <em>happens.</em>",
    sub: "2nd Closer doesn't surface what to do. It does it. Follow-ups send. Risks flag. The work after the call is finished before the closer’s next Slack message.",
    prose: [
      "This is the layer every other tool stops short of. Note-takers stop at the transcript. Conversation intelligence stops at the insight. Your CRM stops at the field. 2nd Closer acts on all of it.",
      "Within minutes of a call ending, a personalised follow-up is drafted and sent through your CRM — referencing the things the buyer actually said, attaching the right collateral, using the rep's voice. Risk signals hit the manager dashboard. Stakeholder gaps surface before they become lost deals. No closer in the loop.",
    ],
    bullets: [
      ["Personalised follow-ups", "Built from deal context, persona, and stage. Multi-step sequences when needed."],
      ["Sent in under 5 min", "From your CRM, in your voice, using your collateral library."],
      ["Risk detection", "Missing decision-makers, budget uncertainty, timeline drift, champion disengagement, competitive threat."],
      ["Manager dashboard", "Risk and execution quality across the entire pipeline. Not just flagged deals."],
    ],
    shotLabel: "Follow-up · staged from call",
    shotHint: "Drafted in your voice. Sent within four minutes of the call ending.",
  },
  {
    id: "iterate",
    n: "04",
    name: "Iterate",
    short: "2nd Closer learns. Your playbook gets sharper.",
    h: "Your playbook <em>gets sharper.</em>",
    sub: "2nd Closer doesn’t just run your process. It watches every deal and learns what actually works.",
    prose: [
      "Sales playbooks are usually written once and revised never — because the data needed to revise them lives in conversations nobody logged. With 2nd Closer, every conversation is structured. So is the outcome. The playbook stops being a Notion doc nobody reads and starts being a system that improves.",
      "2nd Closer surfaces patterns across closed-won and closed-lost: which objections appear earliest in winning deals, which stakeholder mixes correlate with longer cycles, which follow-up phrasing produces replies. Your weekly review becomes a coaching session backed by real data. Your playbook becomes a record of what your team actually wins on.",
    ],
    bullets: [
      ["Win/loss patterns", "2nd Closer surfaces what actually correlates with closed-won — across every deal, not a sample."],
      ["Coaching signals", "Per-rep execution quality, follow-up gaps, deals where the process broke."],
      ["Playbook updates", "When a pattern is clear, 2nd Closer suggests a playbook change you can ship or ignore."],
      ["Forecasting that holds", "Pipeline data is honest, so the forecast is too. Variance drops quarter over quarter."],
    ],
    shotLabel: "Weekly pattern report",
    shotHint: "What changed in your team’s execution this week. And what to do about it.",
  },
];

function FeatureStep({ step }: { step: FeatureStepData }) {
  return (
    <section id={step.id} className="f-step" data-screen-label={"Step " + step.n + " " + step.name}>
      <header className="f-step__lead">
        <div className="f-step__num">{step.n} &middot; {step.name}</div>
        <div>
          <h2 className="f-step__h" dangerouslySetInnerHTML={{ __html: step.h }} />
          <p className="f-step__sub">{step.sub}</p>
        </div>
      </header>

      <div className="f-step__body">
        <div className="f-step__prose">
          {step.prose.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="f-step__list">
          {step.bullets.map(([title, body]) => (
            <li key={title}>
              <div>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            </li>
          ))}
        </ul>

        <figure className="f-step__shot">
          <div className="f-step__shot-head">
            <span className="f-step__shot-brand">2nd Closer</span>
            <span className="f-step__shot-meta">{step.shotLabel}</span>
          </div>
          <div className="f-step__shot-body">
            <img className="f-step__shot-img" src={`/assets/screenshots/features-step-${step.n}-${step.id}.png`} alt={step.shotLabel} loading="lazy" />
          </div>
          <div className="f-step__shot-foot">{step.shotHint}</div>
        </figure>
      </div>
    </section>
  );
}

function StepIndex() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px", threshold: [0, 1] }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <Fragment>
      <div ref={sentinelRef} className="f-index__sentinel" aria-hidden="true"></div>
      <nav className={"f-index" + (stuck ? " f-index--stuck" : "")} aria-label="Step index">
        {FEATURE_STEPS.map((s) => (
          <a key={s.id} href={"#" + s.id} className="f-index__cell">
            <span className="f-index__n">{s.n}</span>
            <span className="f-index__nm">{s.name}.</span>
            <span className="f-index__desc" dangerouslySetInnerHTML={{ __html: s.short }} />
          </a>
        ))}
      </nav>
    </Fragment>
  );
}

export default function Features() {
  return (
    <main className="f-page" id="top">
      <header className="f-hero">
        <p className="f-hero__eye">Features &middot; 2nd Closer</p>
        <h1 className="f-hero__h">
          Capture. Structure. Activate. <em>Iterate.</em>
        </h1>
        <p className="f-hero__sub">
          Four steps from conversation to closed-won. The execution layer that sits on top of
          your CRM, doing the work the category was always supposed to do.
        </p>
      </header>

      <section className="sp-answer f-answer" aria-labelledby="answer-h">
        <h2 className="sp-answer__h" id="answer-h">How does 2nd Closer work?</h2>
        <p className="sp-answer__p">
          2nd Closer works in four steps that repeat after every conversation. It captures the call with its built-in
          notetaker (or ingests Fathom, Fireflies or Otter) and pulls the email and LinkedIn threads for the same deal
          into one timeline. It structures what was said into the fields your CRM already has, writing each value to
          HubSpot or Pipedrive with a citation to the line it came from; on well-structured calls that is 92 to 97
          percent accurate, and a value it cannot find is left empty. It activates: the follow-up goes out from the
          rep&rsquo;s address in under five minutes, every stakeholder named is added and enriched, LinkedIn warm-up
          starts, and risk is flagged with a source line. It iterates: win/loss analysis proposes changes to the
          process, tests them on live deals, and a manager approves what ships. The four steps below show each one.
        </p>
      </section>

      <StepIndex />

      {FEATURE_STEPS.map((s) => (
        <FeatureStep key={s.id} step={s} />
      ))}
    </main>
  );
}
