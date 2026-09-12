"use client";
// CHRM — "The five minutes after the call." An execution feed that reveals itself
// row by row. This is the one visual that shows the whole job, not just field-filling.
import { useEffect, useState } from "react";

type Kind = "done" | "sent" | "queued" | "flagged" | "proposed";

type Row = {
  t: string;
  kind: Kind;
  label: string;
  title: string;
  detail: string;
};

const ROWS: Row[] = [
  {
    t: "+0:00",
    kind: "done",
    label: "Captured",
    title: "Call ends. Transcript processed.",
    detail: "CHRM notetaker · 41 min · Vertex Financial · Discovery",
  },
  {
    t: "+0:41",
    kind: "done",
    label: "Written",
    title: "22 HubSpot fields updated.",
    detail: "Champion: Priya Nair · Budget: confirmed for Q4 · Timeline: pilot by Nov · Next step: security review",
  },
  {
    t: "+1:15",
    kind: "done",
    label: "Enriched",
    title: "New stakeholder: Maria Chen, Head of Security.",
    detail: "Mentioned at 23:14. Enriched via Apollo. Added to the committee as technical evaluator.",
  },
  {
    t: "+2:30",
    kind: "sent",
    label: "Sent",
    title: "Follow-up sent from jordan@vertex-partner.com.",
    detail: "In Jordan’s voice. References the three things Priya asked for. SOC 2 report attached for Maria.",
  },
  {
    t: "+2:48",
    kind: "queued",
    label: "Queued",
    title: "LinkedIn connection to Maria Chen.",
    detail: "Warm-up sequence started. Daily limits respected. Mirrored to HubSpot as an activity.",
  },
  {
    t: "+3:20",
    kind: "flagged",
    label: "Flagged",
    title: "Risk: economic buyer not yet in a conversation.",
    detail: "Severity medium · Source line 31:07 · Recommended: ask Priya for a 20-min with the CFO before proposal.",
  },
  {
    t: "+3:35",
    kind: "done",
    label: "Handled",
    title: "Competitor mentioned: Clari. Threat low.",
    detail: "Counter-positioning drafted into the next touch. Battle card linked on the deal.",
  },
  {
    t: "+4:10",
    kind: "proposed",
    label: "Proposed",
    title: "Stage advance: Discovery → Evaluation.",
    detail: "Deal summary updated with source-line citations. Waiting for manager approval.",
  },
];

const STEP_MS = 1100;
const HOLD_MS = 5200;

export default function AfterTheCall({ compact = false }: { compact?: boolean }) {
  const [shown, setShown] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setShown(ROWS.length);
      return;
    }
    let i = 0;
    let timer: number;
    const tick = () => {
      i += 1;
      setShown(i);
      if (i < ROWS.length) {
        timer = window.setTimeout(tick, STEP_MS);
      } else {
        timer = window.setTimeout(() => {
          i = 0;
          setShown(0);
          timer = window.setTimeout(tick, 500);
        }, HOLD_MS);
      }
    };
    timer = window.setTimeout(tick, 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <figure className={"atc" + (compact ? " atc--compact" : "")} aria-label="What CHRM does in the five minutes after a call">
      <div className="atc__head">
        <span className="atc__brand">CHRM</span>
        <span className="atc__meta">Vertex Financial · Discovery call · ended 14:32</span>
        <span className="atc__live" aria-hidden="true">
          <span className="atc__dot" /> live
        </span>
      </div>
      <ol className="atc__list" aria-live={reduced ? undefined : "polite"}>
        {ROWS.map((r, i) => (
          <li
            key={r.t}
            className={"atc__row atc__row--" + r.kind + (i < shown ? " atc__row--in" : "")}
            aria-hidden={i >= shown}
          >
            <span className="atc__t">{r.t}</span>
            <span className="atc__chip">{r.label}</span>
            <span className="atc__body">
              <span className="atc__title">{r.title}</span>
              <span className="atc__detail">{r.detail}</span>
            </span>
          </li>
        ))}
      </ol>
      <figcaption className="atc__foot">
        <span>Jordan’s next call started at 14:35.</span>
        <em>Jordan did none of this.</em>
      </figcaption>
    </figure>
  );
}
