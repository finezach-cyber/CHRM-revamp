"use client";
// 2nd Closer marketing — Compare. Tab strip selecting which category to compare against.
import { useEffect, useState } from "react";

type Status = { kind: "yes" | "no" | "shaky" | "partial"; note: string | null };
type CapKey = string;

const CAPABILITIES: { id: CapKey; label: string }[] = [
  { id: "capture", label: "Captures every conversation automatically" },
  { id: "crm-populate", label: "Populates your existing CRM fields" },
  { id: "cited", label: "Source-line citations on every value" },
  { id: "followups", label: "Auto-drafts personalised follow-ups in rep voice" },
  { id: "risk", label: "Real-time deal risk detection across the pipeline" },
  { id: "stakeholders", label: "Buying-committee + stakeholder map per deal" },
  { id: "linkedin", label: "LinkedIn warm-up outreach for the committee" },
  { id: "coaching", label: "Coaching insights for reps" },
  { id: "iteration", label: "Continuous win/loss process iteration" },
  { id: "prospecting", label: "Top-of-funnel prospecting + cold sequencing" },
  { id: "no-migration", label: "Works with your existing CRM — no migration" },
  { id: "no-engineer", label: "Setup without an engineer or workflow builder" },
];

const Y = (note?: string): Status => ({ kind: "yes", note: note || null });
const N = (note?: string): Status => ({ kind: "no", note: note || "Not supported" });
const SHAKY = (note?: string): Status => ({ kind: "shaky", note: note || "Possible — with brittle integrations + an engineer" });
const PART = (note: string): Status => ({ kind: "partial", note });

type Category = {
  id: string;
  short: string;
  label: string;
  sub: string;
  framing: string;
  them: Record<CapKey, Status>;
  chrm: Record<CapKey, Status>;
};

const CATEGORIES: Category[] = [
  {
    id: "ai-native",
    short: "AI-native CRMs",
    label: "AI-native CRMs",
    sub: "Attio · Day.ai · Clarify · agentic CRM startups",
    framing:
      "They promise to replace your CRM with an AI-native one. The vision is clean. Then you read the implementation guide. Every capability beyond core record-keeping requires custom workflow nodes, agents you configure yourself, schemas you migrate, and an engineer to keep the integrations stitched together. The output is slop held together with shaky APIs. We don’t replace your CRM. CRMs are great record-keeping tools. 2nd Closer sits on top of yours.",
    them: {
      capture: SHAKY(),
      "crm-populate": SHAKY("Possible inside their own CRM only — not yours"),
      cited: SHAKY("Available where built; rarely shipped by default"),
      followups: SHAKY("Requires workflow nodes + an agent config"),
      risk: SHAKY("Custom-built per team via their canvas"),
      stakeholders: SHAKY("If your engineer wires it"),
      linkedin: N("No native LinkedIn outreach"),
      coaching: SHAKY("Possible via custom dashboards"),
      iteration: N("Workflow canvas, not learning loop"),
      prospecting: N("Not their job"),
      "no-migration": N("Requires migrating off HubSpot or Pipedrive"),
      "no-engineer": N("Workflow design = GTM engineering tax"),
    },
    chrm: {
      capture: Y(),
      "crm-populate": Y("Into your existing HubSpot or Pipedrive"),
      cited: Y("Every field links to the source line"),
      followups: Y(),
      risk: Y("Five risk categories, real-time, no config"),
      stakeholders: Y(),
      linkedin: Y("Warm-up outreach included"),
      coaching: Y("Side effect of the execution data"),
      iteration: Y("Multi-agent win/loss analysis"),
      prospecting: N("Not our lane — we integrate with Apollo/Outreach"),
      "no-migration": Y("Your CRM stays canonical"),
      "no-engineer": Y("Four OAuth sign-ins, no canvas"),
    },
  },
  {
    id: "notetaker-plus",
    short: "Notetaker-plus",
    label: "Notetaker-plus",
    sub: "Sybill · Airspeed · Avoma · notetakers with autofill",
    framing:
      "They started as notetakers and added CRM auto-population on top. The transcript lands in HubSpot. The fields fill in. Then the product stops. There is no follow-up engine, no risk feed, no LinkedIn outreach, no playbook iteration. CRM hygiene is table stakes. The work after the call is where deals are won or lost. That’s the part they don’t do.",
    them: {
      capture: Y(),
      "crm-populate": Y(),
      cited: PART("Some products; not consistent"),
      followups: N("Summaries, not sent emails"),
      risk: N("Conversation-level only, not deal-level"),
      stakeholders: PART("Extracted, not tracked over time"),
      linkedin: N("No LinkedIn outreach"),
      coaching: PART("Call-level QA, not playbook"),
      iteration: N("No win/loss learning loop"),
      prospecting: N("Not their lane"),
      "no-migration": Y(),
      "no-engineer": Y(),
    },
    chrm: {
      capture: Y(),
      "crm-populate": Y("With source-line citations"),
      cited: Y("Every value, every field"),
      followups: Y("Sent, not summarised"),
      risk: Y("Pipeline-wide, real-time"),
      stakeholders: Y("Tracked and kept current"),
      linkedin: Y(),
      coaching: Y(),
      iteration: Y(),
      prospecting: N("Not our lane"),
      "no-migration": Y(),
      "no-engineer": Y(),
    },
  },
  {
    id: "gong",
    short: "Conversation intelligence",
    label: "Conversation intelligence",
    sub: "Gong · Chorus · Clari",
    framing:
      "They record and analyse every conversation. They produce excellent coaching insights and a wishlist for your reps to execute. The dashboard is a system of record for what went wrong. The follow-up, the risk fix, the stakeholder chase all stay your team’s problem. 2nd Closer can be used as a coaching tool, but coaching is a side effect. The primary function is execution and continuous playbook iteration.",
    them: {
      capture: Y(),
      "crm-populate": PART("Some fields; not the full record"),
      cited: Y("Within their recording UI"),
      followups: N("Suggests, doesn’t send"),
      risk: PART("Surfaced; manual to act on"),
      stakeholders: PART("Mentioned, not tracked back to CRM"),
      linkedin: N(),
      coaching: Y("Their primary job"),
      iteration: N("Coaching, not process learning"),
      prospecting: N(),
      "no-migration": Y(),
      "no-engineer": Y(),
    },
    chrm: {
      capture: Y(),
      "crm-populate": Y("Full record, your CRM"),
      cited: Y("In your CRM, not just the recording"),
      followups: Y(),
      risk: Y("Acted on, not just surfaced"),
      stakeholders: Y("Tracked over the lifecycle"),
      linkedin: Y(),
      coaching: Y("Side effect of the execution data"),
      iteration: Y("Process learning, not just rep coaching"),
      prospecting: N(),
      "no-migration": Y(),
      "no-engineer": Y(),
    },
  },
  {
    id: "leadgen",
    short: "Lead generation",
    label: "Lead generation",
    sub: "Apollo · ZoomInfo · Outreach · Salesloft",
    framing:
      "They find prospects, enrich them, sequence them, schedule the meeting. Their job ends when the buyer accepts the call. 2nd Closer starts where they end. We integrate with both (Apollo enrichment, Outreach data), so your top-of-funnel work flows into ours. We are not trying to do their job.",
    them: {
      capture: N("Out of scope; pre-meeting only"),
      "crm-populate": PART("Contact-level only, not deal execution"),
      cited: N(),
      followups: PART("Cold sequences, not post-call follow-ups"),
      risk: N(),
      stakeholders: PART("Found, not tracked through the deal"),
      linkedin: PART("Cold LinkedIn touches, not warm-up to committee"),
      coaching: N(),
      iteration: N(),
      prospecting: Y("Their primary job"),
      "no-migration": Y(),
      "no-engineer": Y(),
    },
    chrm: {
      capture: Y(),
      "crm-populate": Y(),
      cited: Y(),
      followups: Y("Post-call, in the rep’s voice"),
      risk: Y(),
      stakeholders: Y("Tracked through the deal"),
      linkedin: Y("Warm-up after the meeting is booked"),
      coaching: Y(),
      iteration: Y(),
      prospecting: N("Not our lane. We integrate, not compete."),
      "no-migration": Y(),
      "no-engineer": Y(),
    },
  },
];

function Cell({ status }: { status?: Status }) {
  if (!status) {
    return (
      <td className="cmp-cell cmp-cell--no">
        <span className="cmp-mark cmp-mark--no" aria-label="No">&mdash;</span>
      </td>
    );
  }
  const cls = "cmp-cell cmp-cell--" + status.kind;
  const sym =
    status.kind === "yes" ? "✓" : status.kind === "no" ? "—" : status.kind === "shaky" ? "!" : "~";
  const ariaLabel =
    status.kind === "yes" ? "Yes" : status.kind === "no" ? "No" : status.kind === "shaky" ? "Caveat" : "Partial";
  return (
    <td className={cls}>
      <span className={"cmp-mark cmp-mark--" + status.kind} aria-label={ariaLabel}>{sym}</span>
      {status.note && <span className="cmp-note">{status.note}</span>}
    </td>
  );
}

export default function Compare({ headed = true }: { headed?: boolean }) {
  const [active, setActive] = useState(CATEGORIES[0].id);

  useEffect(() => {
    const ids = new Set(CATEGORIES.map((c) => c.id));
    const apply = () => {
      const h = (window.location.hash || "").replace(/^#/, "");
      if (ids.has(h)) setActive(h);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const current = CATEGORIES.find((c) => c.id === active)!;

  return (
    <section className="m-compare" id="compare" data-screen-label="Compare">
      {headed && (
        <header className="sec-head">
          <div className="t-eyebrow">Compare</div>
          <h2 className="sec-head__h">
            What 2nd Closer is, <em>and isn&rsquo;t.</em>
          </h2>
          <p className="sec-head__sub">
            Four categories of tool the market keeps confusing us with. Pick one to compare
            against, capability by capability.
          </p>
        </header>
      )}

      <div className="cmp-tabs" role="tablist" aria-label="Pick a category to compare">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            role="tab"
            id={"cmp-tab-" + c.id}
            aria-selected={c.id === active}
            aria-controls="cmp-panel"
            tabIndex={c.id === active ? 0 : -1}
            className={"cmp-tab" + (c.id === active ? " cmp-tab--cur" : "")}
            onClick={() => {
              setActive(c.id);
              if (window.history && window.history.replaceState) {
                window.history.replaceState(null, "", "#" + c.id);
              }
            }}
          >
            <span className="cmp-tab__cat">{c.label}</span>
            <span className="cmp-tab__sub" dangerouslySetInnerHTML={{ __html: c.sub }} />
          </button>
        ))}
      </div>

      <div className="cmp-panel" id="cmp-panel" role="tabpanel" aria-labelledby={"cmp-tab-" + current.id} tabIndex={0}>
        <div className="cmp-framing" key={current.id + "-frame"}>
          <p>{current.framing}</p>
        </div>

        <div className="cmp-legend">
          <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--yes">✓</span> Native &middot; built-in</span>
          <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--partial">~</span> Partial</span>
          <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--shaky">!</span> Possible with engineer + brittle integrations</span>
          <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--no">—</span> Not supported</span>
        </div>

        <div className="cmp-tableWrap">
          <table className="cmp-table">
            <thead>
              <tr>
                <th scope="col" className="cmp-th cmp-th--cap">Capability</th>
                <th scope="col" className="cmp-th cmp-th--chrm">
                  <span className="cmp-th__brand">2nd Closer</span>
                  <span className="cmp-th__sub">The execution layer</span>
                </th>
                <th scope="col" className="cmp-th">
                  <span className="cmp-th__brand">{current.label}</span>
                  <span className="cmp-th__sub" dangerouslySetInnerHTML={{ __html: current.sub }} />
                </th>
              </tr>
            </thead>
            <tbody>
              {CAPABILITIES.map((cap) => (
                <tr key={cap.id}>
                  <th scope="row" className="cmp-row-h">{cap.label}</th>
                  <Cell status={current.chrm[cap.id]} />
                  <Cell status={current.them[cap.id]} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
