"use client";
// 2nd Closer — the architecture, drawn. Inline SVG with real text so both people and parsers can read it.
// The point of the picture: the CRM sits outside the box. 2nd Closer reads it and writes to it; it is not one.
//
// Two rules this file exists to keep:
//   1. The server emits the COMPLETE desktop diagram, every node lit. The stepper only ever subtracts
//      emphasis on the client — same contract as AfterTheCall.tsx. A crawler with no JS reads all 37 labels.
//   2. Dimming is opacity, never aria-hidden and never display:none. Every label stays in the
//      accessibility tree and in innerText at all times.

import { useEffect, useRef, useState } from "react";

type Step = 0 | 1 | 2 | 3; // 0 = rest: everything lit. 1–3 = one band in focus.

type Box = {
  x: number; y: number; w: number; h: number;
  title: string; lines: string[]; accent?: boolean;
};

type Edge = { d: string; dash?: string; arrow?: boolean };

type Layout = {
  w: number; h: number;
  pad: number;          // left inset of text inside a node
  box: { x: number; y: number; w: number; h: number };
  boxLabel: { x: number; y: number };
  boxSub: { x: number; y: number; text: string };
  iterate: { x: number; y: number; lines: string[] };
  caption: { x: number; y: number; lines: string[] };
  inputs: Box[]; stages: Box[]; out: Box[];
  edgesIn: Edge[]; edgesMid: Edge[]; edgesOut: Edge[];
};

const STEPS = ["What goes in", "The execution layer", "What comes out"] as const;

// ── Desktop ───────────────────────────────────────────────────────────────
const DESK: Layout = {
  w: 1160, h: 432, pad: 14,
  box: { x: 286, y: 20, w: 610, h: 360 },
  boxLabel: { x: 302, y: 52 },
  boxSub: { x: 302, y: 72, text: "Silent on the call. Runs in the five minutes after it. Never negotiates." },
  iterate: {
    x: 302, y: 322,
    lines: ["Win/loss iteration proposes changes to the field map and playbook.", "A manager approves; nothing promotes itself."],
  },
  caption: { x: 642, y: 426, lines: ["The CRM is read before anything is written. Same record, both directions."] },
  inputs: [
    { x: 20, y: 22, w: 234, h: 100, title: "Call", lines: ["Zoom, Meet, Teams", "built-in notetaker,", "or Fireflies / Fathom"] },
    { x: 20, y: 150, w: 234, h: 100, title: "Email + LinkedIn", lines: ["Gmail, Outlook", "DMs and InMail"] },
    { x: 20, y: 278, w: 234, h: 100, title: "CRM history", lines: ["every prior deal note", "every field, every stage"] },
  ],
  stages: [
    { x: 302, y: 140, w: 182, h: 120, title: "Transcript", lines: ["one timeline per deal", "every source line kept"] },
    { x: 500, y: 140, w: 182, h: 120, title: "Structured fields", lines: ["your schema, not ours", "92–97% accurate,", "never guessed"] },
    { x: 698, y: 140, w: 182, h: 120, title: "Actions", lines: ["follow-up sent", "committee mapped", "LinkedIn warm-up", "risk flag"] },
  ],
  out: [
    { x: 920, y: 22, w: 224, h: 100, title: "HubSpot or Pipedrive", lines: ["written back to,", "never replaced"], accent: true },
    { x: 920, y: 150, w: 224, h: 100, title: "The rep's inbox", lines: ["follow-up from their address", "in their voice"] },
    { x: 920, y: 278, w: 224, h: 100, title: "The manager", lines: ["risk feed, stage proposals", "approves; nothing auto-promotes"] },
  ],
  edgesIn: [{ d: "M254 72 H270 V328 H254 M254 200 H300", arrow: true }],
  edgesMid: [
    { d: "M484 200 H498", arrow: true },
    { d: "M682 200 H696", arrow: true },
    { d: "M789 260 V296 H591 V264", arrow: true },
  ],
  edgesOut: [
    { d: "M880 200 H908 V72 M908 200 V328" },
    { d: "M908 72 H918", arrow: true },
    { d: "M908 200 H918", arrow: true },
    { d: "M908 328 H918", arrow: true },
    { d: "M1144 72 H1154 V404 H130 V382", dash: "3 4", arrow: true },
  ],
};

// ── Phone: the same nine nodes and two loops, turned on its side ───────────
const PHONE: Layout = {
  w: 360, h: 1250, pad: 14,
  box: { x: 16, y: 320, w: 328, h: 560 },
  boxLabel: { x: 32, y: 350 },
  boxSub: { x: 32, y: 370, text: "Silent on the call. Runs in the five minutes after it." },
  iterate: {
    x: 32, y: 806,
    lines: ["Win/loss iteration proposes changes to the", "field map and playbook. A manager approves;", "nothing promotes itself."],
  },
  caption: { x: 180, y: 1222, lines: ["The CRM is read before anything is written.", "Same record, both directions."] },
  inputs: [
    { x: 16, y: 8, w: 328, h: 84, title: "Call", lines: ["Zoom, Meet, Teams", "built-in notetaker, or Fireflies / Fathom"] },
    { x: 16, y: 104, w: 328, h: 84, title: "Email + LinkedIn", lines: ["Gmail, Outlook", "DMs and InMail"] },
    { x: 16, y: 200, w: 328, h: 84, title: "CRM history", lines: ["every prior deal note", "every field, every stage"] },
  ],
  stages: [
    { x: 32, y: 392, w: 296, h: 100, title: "Transcript", lines: ["one timeline per deal", "every source line kept"] },
    { x: 32, y: 532, w: 296, h: 100, title: "Structured fields", lines: ["your schema, not ours", "92–97% accurate, never guessed"] },
    { x: 32, y: 672, w: 296, h: 100, title: "Actions", lines: ["follow-up sent, committee mapped", "LinkedIn warm-up, risk flag"] },
  ],
  out: [
    { x: 16, y: 916, w: 328, h: 84, title: "HubSpot or Pipedrive", lines: ["written back to,", "never replaced"], accent: true },
    { x: 16, y: 1012, w: 328, h: 84, title: "The rep's inbox", lines: ["follow-up from their address", "in their voice"] },
    { x: 16, y: 1108, w: 328, h: 84, title: "The manager", lines: ["risk feed, stage proposals", "approves; nothing auto-promotes"] },
  ],
  edgesIn: [{ d: "M180 284 V318", arrow: true }],
  edgesMid: [
    { d: "M180 492 V530", arrow: true },
    { d: "M180 632 V670", arrow: true },
    { d: "M328 722 H338 V582 H330", arrow: true },
  ],
  edgesOut: [
    { d: "M180 880 V914", arrow: true },
    { d: "M16 958 H6 V242 H14", dash: "3 4", arrow: true },
  ],
};

/** A band is lit at rest (step 0) and whenever it is the active step. */
const lit = (step: Step, band: 1 | 2 | 3) => step === 0 || step === band;

function Group({ band, step, children }: { band: 1 | 2 | 3; step: Step; children: React.ReactNode }) {
  return <g className={"m-arch__g" + (lit(step, band) ? "" : " m-arch__g--dim")}>{children}</g>;
}

function Node({ b, pad }: { b: Box; pad: number }) {
  return (
    <g>
      <rect
        x={b.x} y={b.y} width={b.w} height={b.h} rx="3"
        fill={b.accent ? "var(--accent-soft)" : "var(--paper-pure)"}
        stroke={b.accent ? "var(--accent)" : "var(--rule-strong)"}
      />
      <text x={b.x + pad} y={b.y + 28} fontFamily="var(--font-sans)" fontSize="15" fontWeight="500" fill="var(--ink)">
        {b.title}
      </text>
      {b.lines.map((l, i) => (
        <text key={l} x={b.x + pad} y={b.y + 50 + i * 17} fontFamily="var(--font-sans)" fontSize="12" fill="var(--ink-3)">
          {l}
        </text>
      ))}
    </g>
  );
}

function Edges({ edges, id }: { edges: Edge[]; id: string }) {
  return (
    <>
      {edges.map((e) => (
        <path
          key={e.d} d={e.d} fill="none" stroke="var(--rule-strong)" strokeWidth="1.5"
          strokeDasharray={e.dash} markerEnd={e.arrow ? `url(#${id}-arrow)` : undefined}
        />
      ))}
    </>
  );
}

function Diagram({ L, id, step }: { L: Layout; id: string; step: Step }) {
  return (
    <svg viewBox={`0 0 ${L.w} ${L.h}`} role="img" aria-labelledby={id + "-title"} className="m-arch__svg">
      <title id={id + "-title"}>
        2nd Closer architecture: calls, email and CRM history flow into a transcript, then structured fields, then
        actions; the results are written back to HubSpot or Pipedrive, sent from the rep&apos;s inbox, and surfaced to
        the manager for approval.
      </title>
      <defs>
        <marker id={id + "-arrow"} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--rule-strong)" />
        </marker>
      </defs>

      {/* 02 — the execution layer */}
      <Group band={2} step={step}>
        <rect x={L.box.x} y={L.box.y} width={L.box.w} height={L.box.h} rx="4" fill="var(--arch-tint)" stroke="var(--ink)" strokeDasharray="4 4" />
        <text x={L.boxLabel.x} y={L.boxLabel.y} fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2" fill="var(--ink-3)">
          2ND CLOSER · THE EXECUTION LAYER
        </text>
        <text x={L.boxSub.x} y={L.boxSub.y} fontFamily="var(--font-sans)" fontSize="13" fill="var(--ink-2)">
          {L.boxSub.text}
        </text>
        <text x={L.iterate.x} y={L.iterate.y} fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2" fill="var(--ink-3)">
          ITERATE
        </text>
        {L.iterate.lines.map((l, i) => (
          <text key={l} x={L.iterate.x} y={L.iterate.y + 20 + i * 17} fontFamily="var(--font-sans)" fontSize="12.5" fill="var(--ink-3)">
            {l}
          </text>
        ))}
        {L.stages.map((b) => <Node key={b.title} b={b} pad={L.pad} />)}
        <Edges edges={L.edgesMid} id={id} />
      </Group>

      {/* 01 — what goes in */}
      <Group band={1} step={step}>
        {L.inputs.map((b) => <Node key={b.title} b={b} pad={L.pad} />)}
        <Edges edges={L.edgesIn} id={id} />
      </Group>

      {/* 03 — what comes out */}
      <Group band={3} step={step}>
        {L.out.map((b) => <Node key={b.title} b={b} pad={L.pad} />)}
        <Edges edges={L.edgesOut} id={id} />
        {L.caption.lines.map((l, i) => (
          <text key={l} x={L.caption.x} y={L.caption.y + i * 18} fontFamily="var(--font-sans)" fontSize="12" fill="var(--ink-3)" textAnchor="middle">
            {l}
          </text>
        ))}
      </Group>
    </svg>
  );
}

const HOLD_MS = 2600;

export default function Architecture({ id = "architecture" }: { id?: string }) {
  const [step, setStep] = useState<Step>(0); // 0 on the server: the whole diagram, lit.
  const [phone, setPhone] = useState(false); // false on the server: the desktop diagram.
  const [mounted, setMounted] = useState(false);
  const [auto, setAuto] = useState(true);
  const wrap = useRef<HTMLDivElement>(null);

  // Measure the container, not the viewport: this component also renders inside the narrower /compare shell.
  // State is set inside a callback rather than synchronously in the effect body, as AfterTheCall.tsx does.
  useEffect(() => {
    let ro: ResizeObserver | undefined;
    const t = window.setTimeout(() => {
      setMounted(true);
      const el = wrap.current;
      if (!el || typeof ResizeObserver === "undefined") return;
      ro = new ResizeObserver(([entry]) => setPhone(entry.contentRect.width < 700));
      ro.observe(el);
    }, 0);
    return () => { window.clearTimeout(t); ro?.disconnect(); };
  }, []);

  // Auto-play, but only where motion is welcome. Reduced motion leaves the diagram at rest, fully lit.
  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setStep((s) => ((s % 3) + 1) as Step), HOLD_MS);
    return () => window.clearInterval(t);
  }, [auto]);

  const go = (next: Step) => { setAuto(false); setStep(next); };

  return (
    <section className="m-arch" id={id} data-screen-label="Architecture" aria-labelledby={id + "-h"}>
      <header className="sec-head">
        <div className="t-eyebrow">How it fits</div>
        <h2 className="sec-head__h" id={id + "-h"}>
          Is 2nd Closer a CRM? <em>No. It works inside yours.</em>
        </h2>
        <p className="sec-head__sub">
          Every conversation goes in on the left. Your CRM stays where it is on the right, and 2nd Closer writes to it.
          The middle is the execution layer: transcript, structured fields, actions.
        </p>
      </header>

      <div className="m-arch__wrap" ref={wrap} data-phone={phone ? "true" : undefined}>
        <Diagram L={phone ? PHONE : DESK} id={id} step={step} />
      </div>

      {/* Controls appear once mounted: without JS there is nothing for them to do, and the diagram is already whole. */}
      {mounted && (
        <div className="m-arch__ctl">
          <div className="m-arch__nav">
            <button
              type="button" className="m-arch__btn" aria-label="Previous step"
              onClick={() => go((step <= 1 ? 3 : step - 1) as Step)}
            >
              ←
            </button>
            <button
              type="button" className="m-arch__btn" aria-label="Next step"
              onClick={() => go((step >= 3 ? 1 : step + 1) as Step)}
            >
              →
            </button>
          </div>

          <div className="m-arch__steps">
            {STEPS.map((label, i) => {
              const n = (i + 1) as Step;
              return (
                <button
                  key={label} type="button"
                  className={"m-arch__step" + (step === n ? " m-arch__step--on" : "")}
                  aria-pressed={step === n}
                  aria-label={`Step ${n} of 3: ${label}`}
                  onClick={() => go(step === n ? 0 : n)}
                >
                  <span className="m-arch__step-n">0{n}</span>
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          <p className="m-arch__auto" aria-live="polite">
            {auto ? "Auto" : "Manual"} · {step === 0 ? "all" : step}/3
          </p>
        </div>
      )}
    </section>
  );
}
