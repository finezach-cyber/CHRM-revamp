// CHRM marketing — Proof strip. Five numbers the buyer can hold onto.
import { PRICE_PER_AE_MONTH } from "@/lib/site";

const PROOF: [string, string][] = [
  ["31% → ~100%", "CRM field completion, from the industry baseline to every deal"],
  ["< 5 min", "from the call ending to the follow-up sent"],
  ["92–97%", "field accuracy on well-structured calls; empty over wrong"],
  ["< 1 day", "from OAuth to first call processed. No engineer."],
  [`$${PRICE_PER_AE_MONTH.toLocaleString()}`, "per AE per month. Managers, RevOps and leadership seats are free."],
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
    </section>
  );
}
