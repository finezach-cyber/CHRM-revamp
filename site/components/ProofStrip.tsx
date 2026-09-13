// 2nd Closer marketing — Proof strip. Five numbers the buyer can hold onto, with where they come from.
import Sources from "./Sources";

const PROOF: [string, string][] = [
  ["31% → ~100%", "CRM field completion, from the industry baseline to every deal"],
  ["< 5 min", "from the call ending to the follow-up sent"],
  ["92–97%", "field accuracy on well-structured calls; empty over wrong"],
  ["< 1 day", "from OAuth to first call processed. No engineer."],
  ["0", "workflow nodes to build. Four OAuth sign-ins and a 30-minute call."],
];

export default function ProofStrip() {
  return (
    <section className="m-proof" aria-label="Key numbers" data-screen-label="Proof strip">
      <ul className="m-proof__list">
        {PROOF.map(([big, label]) => (
          <li key={big}>
            <span className="m-proof__big">{big}</span>
            <span className="m-proof__label">{label}</span>
          </li>
        ))}
      </ul>
      <Sources
        className="m-proof__sources"
        items={[
          ["CRM data completeness and decay, Sopro citing Gartner", "https://sopro.io/resources/blog/crm-data-decay/"],
          ["Field-completion baseline and accuracy: measured on beta pipelines, shown on the configuration call", "/beta"],
        ]}
        note="31% is the typical required-field completion on a HubSpot or Pipedrive pipeline before 2nd Closer connects; 92–97% is field accuracy on well-structured calls, with an empty value preferred to a wrong one"
      />
    </section>
  );
}
