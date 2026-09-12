// 2nd Closer marketing — The split. What your closer keeps; what 2nd Closer takes.
import Link from "next/link";

const KEEPS: [string, string][] = [
  ["Run the call", "Be present. Ask the second question. Read the room."],
  ["Build trust", "The thing no model does. The reason the buyer picks you."],
  ["Handle the objection live", "In the moment, with judgement."],
  ["Negotiate the contract", "Price, terms, the hard conversation."],
  ["Decide which deals to fight for", "Direction is a human job."],
];

const TAKES: [string, string, string][] = [
  ["Keep the CRM complete", "Every field, every deal, in real time. 31% → ~100%.", "/product/crm-hygiene"],
  ["Write and send the follow-up", "In the rep’s voice, from the rep’s inbox, in under five minutes.", "/product/follow-up-emails"],
  ["Run the sequence", "Multi-step cadences that pause when a real conversation is in flight.", "/product/email-sequences"],
  ["Map the buying committee", "Every name mentioned, with a role and an influence score.", "/product/stakeholder-mapping"],
  ["Work LinkedIn", "Connections and warm-up sequences to the committee. Rate-limited. Mirrored to the CRM.", "/product/linkedin-outreach"],
  ["Enrich every contact", "Apollo firmographics and role data on every person who comes up.", "/integrations/apollo"],
  ["Flag the deals that slip", "Five risk categories, severity, source line, next action.", "/product/risk-detection"],
  ["Handle the competitor", "Detects the mention, scores the threat, drafts the counter.", "/product/competitor-intelligence"],
  ["Recommend the package", "The right SKU or tier, from what the buyer actually said.", "/product/product-recommendations"],
  ["Follow your process", "Reads your schema and stages. No template imposed. Proposes stage advances; you approve.", "/features"],
  ["Learn from every deal", "Win/loss analysis, tested hypotheses, manager-approved playbook changes.", "/product/process-iteration"],
];

export default function WhoDoesWhat() {
  return (
    <section className="m-split" id="second-ae" data-screen-label="Who does what">
      <header className="sec-head">
        <div className="t-eyebrow">Who does what</div>
        <h2 className="sec-head__h">
          You talk. <em>2nd Closer does the rest.</em>
        </h2>
        <p className="sec-head__sub">
          An account executive’s week is a few hours of conversation and thirty hours of
          everything around it. 2nd Closer takes the thirty. It is not a CRM. It works inside the one
          you already have.
        </p>
      </header>

      <div className="m-split__grid">
        <div className="m-split__col m-split__col--human">
          <p className="m-split__colH">What your closer keeps</p>
          <ul className="m-split__list">
            {KEEPS.map(([t, d]) => (
              <li key={t}>
                <strong>{t}</strong>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="m-split__col m-split__col--chrm">
          <p className="m-split__colH">What 2nd Closer takes</p>
          <ul className="m-split__list m-split__list--two">
            {TAKES.map(([t, d, href]) => (
              <li key={t}>
                <Link href={href}>
                  <strong>{t}</strong>
                  <span>{d}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
