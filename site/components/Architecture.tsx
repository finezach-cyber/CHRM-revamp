// 2nd Closer — the architecture, drawn. Inline SVG with real text so both people and parsers can read it.
// The point of the picture: the CRM sits outside the box. 2nd Closer reads it and writes to it; it is not one.

const W = 1160;
const H = 400;

type Box = { x: number; y: number; w: number; h: number; title: string; lines: string[]; accent?: boolean };

const INPUTS: Box[] = [
  { x: 20, y: 40, w: 220, h: 84, title: "Call", lines: ["Zoom, Meet, Teams", "built-in notetaker, or Fireflies / Fathom"] },
  { x: 20, y: 150, w: 220, h: 84, title: "Email + LinkedIn", lines: ["Gmail, Outlook", "DMs and InMail"] },
  { x: 20, y: 260, w: 220, h: 84, title: "CRM history", lines: ["every prior deal note", "every field, every stage"] },
];

const STAGES: Box[] = [
  { x: 300, y: 122, w: 176, h: 100, title: "Transcript", lines: ["one timeline per deal", "every source line kept"] },
  { x: 506, y: 122, w: 176, h: 100, title: "Structured fields", lines: ["your schema, not ours", "92–97% accurate, never guessed"] },
  { x: 712, y: 122, w: 176, h: 100, title: "Actions", lines: ["follow-up sent, committee mapped", "LinkedIn warm-up, risk flag"] },
];

const OUT: Box[] = [
  { x: 940, y: 40, w: 200, h: 84, title: "HubSpot or Pipedrive", lines: ["written back to,", "never replaced"], accent: true },
  { x: 940, y: 150, w: 200, h: 84, title: "The rep's inbox", lines: ["follow-up from their address", "in their voice"] },
  { x: 940, y: 260, w: 200, h: 84, title: "The manager", lines: ["risk feed, stage proposals", "approves; nothing auto-promotes"] },
];

function Node({ b }: { b: Box }) {
  return (
    <g>
      <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="3" fill={b.accent ? "var(--accent-soft)" : "var(--paper-pure)"} stroke={b.accent ? "var(--accent)" : "var(--rule-strong)"} />
      <text x={b.x + 14} y={b.y + 28} fontFamily="var(--font-sans)" fontSize="15" fontWeight="500" fill="var(--ink)">{b.title}</text>
      {b.lines.map((l, i) => (
        <text key={l} x={b.x + 14} y={b.y + 50 + i * 17} fontFamily="var(--font-sans)" fontSize="12" fill="var(--ink-3)">{l}</text>
      ))}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--rule-strong)" strokeWidth="1.5" markerEnd="url(#arch-arrow)" />;
}

export default function Architecture({ id = "architecture" }: { id?: string }) {
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
      <div className="m-arch__wrap">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby={id + "-title"} className="m-arch__svg">
          <title id={id + "-title"}>
            2nd Closer architecture: calls, email and CRM history flow into a transcript, then structured fields, then actions; the results are written back to HubSpot or Pipedrive, sent from the rep&apos;s inbox, and surfaced to the manager for approval.
          </title>
          <defs>
            <marker id="arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--rule-strong)" />
            </marker>
          </defs>

          {/* the execution layer box */}
          <rect x="280" y="20" width="628" height="360" rx="4" fill="var(--tint)" stroke="var(--ink)" strokeDasharray="4 4" />
          <text x="300" y="52" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2" fill="var(--ink-3)">2ND CLOSER · THE EXECUTION LAYER</text>
          <text x="300" y="72" fontFamily="var(--font-sans)" fontSize="13" fill="var(--ink-2)">Silent on the call. Runs in the five minutes after it. Never negotiates.</text>
          <text x="300" y="356" fontFamily="var(--font-sans)" fontSize="12.5" fill="var(--ink-3)">Win/loss iteration proposes changes to the field map and playbook. A manager approves; nothing promotes itself.</text>
          <text x="300" y="336" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2" fill="var(--ink-3)">ITERATE</text>
          <Arrow x1={800} y1={296} x2={594} y2={296} />
          <line x1="594" y1="296" x2="594" y2="226" stroke="var(--rule-strong)" strokeWidth="1.5" />
          <line x1="800" y1="222" x2="800" y2="296" stroke="var(--rule-strong)" strokeWidth="1.5" />

          {INPUTS.map((b) => <Node key={b.title} b={b} />)}
          {STAGES.map((b) => <Node key={b.title} b={b} />)}
          {OUT.map((b) => <Node key={b.title} b={b} />)}

          {/* inputs → transcript */}
          <Arrow x1={240} y1={82} x2={298} y2={150} />
          <Arrow x1={240} y1={192} x2={298} y2={172} />
          <Arrow x1={240} y1={302} x2={298} y2={194} />
          {/* stages */}
          <Arrow x1={476} y1={172} x2={504} y2={172} />
          <Arrow x1={682} y1={172} x2={710} y2={172} />
          {/* actions → outputs */}
          <Arrow x1={888} y1={150} x2={938} y2={82} />
          <Arrow x1={888} y1={172} x2={938} y2={192} />
          <Arrow x1={888} y1={194} x2={938} y2={302} />
          {/* CRM history comes from the CRM: a return edge */}
          <path d="M 1040 124 C 1040 140, 1120 380, 130 380 C 100 380, 100 360, 130 344" fill="none" stroke="var(--rule-strong)" strokeWidth="1.5" strokeDasharray="3 4" markerEnd="url(#arch-arrow)" />
          <text x="560" y="396" fontFamily="var(--font-sans)" fontSize="12" fill="var(--ink-3)" textAnchor="middle">The CRM is read before anything is written. Same record, both directions.</text>
        </svg>
      </div>
    </section>
  );
}
