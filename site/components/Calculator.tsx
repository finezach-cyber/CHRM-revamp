"use client";
// 2nd Closer — what the after-call work costs you. Hours first, then the price of each alternative way to buy them back.
// 2nd Closer's own price is not published; the beta is free and the LLM key is yours.
import { useState } from "react";
import Link from "next/link";
import { ANCHORS, BETA, BOOKING_URL } from "@/lib/site";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const num = (n: number, d = 0) => n.toLocaleString("en-US", { maximumFractionDigits: d });

export default function Calculator() {
  const [aes, setAes] = useState(5);
  const [calls, setCalls] = useState(12);
  const [minutes, setMinutes] = useState(35);
  const [ote, setOte] = useState(ANCHORS.secondAeOte);

  const hoursPerRepPerWeek = (calls * minutes) / 60;
  const hoursPerWeek = hoursPerRepPerWeek * aes;
  const hoursPerYear = hoursPerWeek * 46;
  const feePerRep = hoursPerRepPerWeek / 40; // fraction of a rep's week spent on after-call work
  const repEquivalents = feePerRep * aes;
  const costOfRepTime = repEquivalents * ote;

  const alternatives: { name: string; year1: number; note: string; href: string }[] = [
    {
      name: "Hire the second AEs",
      year1: Math.ceil(repEquivalents) * ote,
      note: `${num(repEquivalents, 1)} rep-equivalents of after-call work, rounded up to whole hires at ${money(ote)} OTE each.`,
      href: "/startups",
    },
    {
      name: "Hire a GTM engineer and wire it",
      year1: ANCHORS.gtmEngineerBase,
      note: "Base salary midpoint of the 2026 range, before tooling, and before the three to six months it takes to run.",
      href: "/compare/diy-gtm-stack",
    },
    {
      name: "Pay a partner to implement",
      year1: ANCHORS.partnerRetainerMonth * 12,
      note: "A mid-range HubSpot partner retainer for a year. The reps still do the logging.",
      href: "/compare/diy-gtm-stack#partners",
    },
    {
      name: "Switch to an AI-native CRM",
      year1: ANCHORS.aiNativeSeatMonth * 12 * (aes + 3) + (ANCHORS.aiNativeMigrationWeeks / 52) * ANCHORS.gtmEngineerBase,
      note: `Pro seats for the reps plus three non-rep seats, and ${ANCHORS.aiNativeMigrationWeeks} weeks of an engineer's time to migrate and build the workflows.`,
      href: "/compare/ai-native-crms",
    },
  ];

  return (
    <div className="calc">
      <form className="calc__form" onSubmit={(e) => e.preventDefault()} aria-label="Your team">
        <label className="calc__field">
          <span className="calc__label">Closers on the team</span>
          <input type="range" min={1} max={50} value={aes} onChange={(e) => setAes(+e.target.value)} />
          <output className="calc__out">{aes}</output>
        </label>
        <label className="calc__field">
          <span className="calc__label">Customer calls per closer, per week</span>
          <input type="range" min={2} max={40} value={calls} onChange={(e) => setCalls(+e.target.value)} />
          <output className="calc__out">{calls}</output>
        </label>
        <label className="calc__field">
          <span className="calc__label">Minutes of after-call work per call</span>
          <input type="range" min={10} max={90} step={5} value={minutes} onChange={(e) => setMinutes(+e.target.value)} />
          <output className="calc__out">{minutes} min</output>
        </label>
        <label className="calc__field">
          <span className="calc__label">On-target earnings per closer</span>
          <input type="range" min={60000} max={250000} step={5000} value={ote} onChange={(e) => setOte(+e.target.value)} />
          <output className="calc__out">{money(ote)}</output>
        </label>
        <p className="calc__fine">
          Defaults: 12 calls a week and 35 minutes a call, which is CRM logging, the follow-up, the LinkedIn touches,
          the enrichment lookups and the deal review. Adjust to your team.
        </p>
      </form>

      <div className="calc__results" aria-live="polite">
        <div className="calc__hero">
          <div>
            <span className="calc__big">{num(hoursPerWeek)} h</span>
            <span className="calc__lbl">of after-call work per week, across the team</span>
          </div>
          <div>
            <span className="calc__big">{num(hoursPerYear)} h</span>
            <span className="calc__lbl">a year. That is {num(repEquivalents, 1)} full-time reps doing everything except selling.</span>
          </div>
          <div>
            <span className="calc__big">{money(costOfRepTime)}</span>
            <span className="calc__lbl">of closer compensation spent on it, at {money(ote)} OTE</span>
          </div>
        </div>

        <table className="calc__table">
          <caption className="sr-only">First-year cost of each way to buy back the after-call work</caption>
          <thead>
            <tr>
              <th scope="col">Way to buy the hours back</th>
              <th scope="col">First-year cost</th>
              <th scope="col">What that assumes</th>
            </tr>
          </thead>
          <tbody>
            {alternatives.map((a) => (
              <tr key={a.name}>
                <th scope="row"><Link href={a.href}>{a.name}</Link></th>
                <td className="calc__num">{money(a.year1)}</td>
                <td>{a.note}</td>
              </tr>
            ))}
            <tr className="calc__row--chrm">
              <th scope="row">2nd Closer</th>
              <td className="calc__num">Free during the beta</td>
              <td>{BETA.line} Live the morning after a 20-minute call. Every closer keeps the hours.</td>
            </tr>
          </tbody>
        </table>

        <div className="cd-verdict__ctas">
          <a href={BOOKING_URL} className="btn btn--primary">{BETA.cta}</a>
          <Link href="/compare" className="btn btn--ghost">Compare the alternatives</Link>
        </div>
      </div>
    </div>
  );
}
