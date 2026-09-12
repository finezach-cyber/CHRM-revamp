"use client";
// CHRM — Pricing page. One price, then a calculator that anchors it against the hire it replaces.
import { useMemo, useState } from "react";
import Link from "next/link";
import { ANCHORS, PRICE_PER_AE_MONTH, FREE_DAYS, FREE_TRIAL_SEATS, BOOKING_URL } from "@/lib/site";

const fmt = (n: number) => "$" + Math.round(n).toLocaleString();

const INCLUDED: [string, string][] = [
  ["Built-in notetaker", "Joins every booked call on Zoom, Meet, Teams. Or ingest Fireflies, Fathom, Otter, Gong."],
  ["CRM hygiene", "Every field, every deal, written to HubSpot or Pipedrive in real time, with citations."],
  ["Follow-ups and sequences", "Drafted in the rep’s voice, sent from the rep’s inbox, sequences that respond to the deal."],
  ["Buying-committee mapping", "Every stakeholder discovered, role and influence inferred, upserted to the CRM."],
  ["LinkedIn warm-up outreach", "Connections and sequences to the committee, rate-limited, mirrored to the CRM."],
  ["Apollo enrichment", "Every discovered contact enriched. ICP scoring on firmographics."],
  ["Risk detection", "Five categories, severity, source line, recommended action, in real time."],
  ["Competitor intelligence", "Mentions detected, threat scored per deal, counter-positioning drafted."],
  ["Product recommendations", "The right SKU or tier from what the buyer said. Optional; for catalogues."],
  ["Win/loss iteration", "Multi-agent analysis, tested hypotheses, manager-approved playbook changes."],
  ["Manager, RevOps and leadership seats", "Free. Unlimited. Dashboards, risk feed, coaching signals included."],
  ["Onboarding", "Four OAuth sign-ins and a 30-minute configuration call. Live in under a day."],
];

export default function Pricing() {
  const [aes, setAes] = useState(10);
  const [ote, setOte] = useState(ANCHORS.secondAeOte);

  const calc = useMemo(() => {
    const chrm = aes * PRICE_PER_AE_MONTH * 12;
    // One extra AE for every closer is the literal comparison; one extra AE per five closers is the conservative one.
    const hires = Math.max(1, Math.round(aes / 5));
    const hireCost = hires * ote;
    const engineer = ANCHORS.gtmEngineerBase + 24_000; // + a modest tool stack
    const partner = ANCHORS.partnerRetainerMonth * 12;
    // Hours: ~2–4 h/day of admin per closer (site claim); use 2.5 h × 230 working days.
    const hoursBack = Math.round(aes * 2.5 * 230);
    return { chrm, hires, hireCost, engineer, partner, hoursBack };
  }, [aes, ote]);

  return (
    <main className="sp-page pr-page" id="top" data-screen-label="Pricing">
      <p className="sp-crumbs">
        <Link href="/">CHRM</Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>Pricing</span>
      </p>

      <header className="sp-hero">
        <p className="cd-eyebrow">Pricing</p>
        <h1 className="sp-hero__h">
          {fmt(PRICE_PER_AE_MONTH)} per AE per month.
          <br />
          <em>Everyone else is free.</em>
        </h1>
        <p className="sp-hero__sub">
          One number. No platform fee, no credits, no implementation line, no minimum. Managers,
          RevOps and leadership seats never bill. The first {FREE_DAYS} days are free for up to{" "}
          {FREE_TRIAL_SEATS} AE seats.
        </p>
      </header>

      <div className="sp-meta">
        <div className="sp-meta__cell"><p className="sp-meta__k">AE seat</p><p className="sp-meta__v">{fmt(PRICE_PER_AE_MONTH)} / month</p></div>
        <div className="sp-meta__cell"><p className="sp-meta__k">Manager, RevOps, leadership</p><p className="sp-meta__v">Free</p></div>
        <div className="sp-meta__cell"><p className="sp-meta__k">First {FREE_DAYS} days</p><p className="sp-meta__v">Free, up to {FREE_TRIAL_SEATS} AEs</p></div>
        <div className="sp-meta__cell"><p className="sp-meta__k">Contract</p><p className="sp-meta__v">Monthly. Cancel any time.</p></div>
      </div>

      <section className="pr-calc" aria-labelledby="calc-h">
        <div className="pr-calc__controls">
          <h2 id="calc-h" className="pr-calc__h">What it replaces.</h2>
          <p className="pr-calc__sub">
            Move the slider to your team. The comparison is against what teams actually do instead:
            hire more AEs to carry the admin, hire a GTM engineer to wire it, or pay a partner.
          </p>
          <label className="pr-field">
            <span className="pr-field__k">Account executives</span>
            <span className="pr-field__v">{aes}</span>
            <input type="range" min={1} max={50} value={aes} onChange={(e) => setAes(Number(e.target.value))} aria-valuetext={`${aes} account executives`} />
          </label>
          <label className="pr-field">
            <span className="pr-field__k">On-target earnings of one AE</span>
            <span className="pr-field__v">{fmt(ote)}</span>
            <input type="range" min={60_000} max={250_000} step={5_000} value={ote} onChange={(e) => setOte(Number(e.target.value))} aria-valuetext={`${fmt(ote)} on-target earnings`} />
          </label>
        </div>

        <div className="pr-calc__out">
          <div className="pr-out pr-out--chrm">
            <span className="pr-out__k">CHRM for {aes} {aes === 1 ? "closer" : "closers"}</span>
            <span className="pr-out__v">{fmt(calc.chrm)}</span>
            <span className="pr-out__n">per year. About {calc.hoursBack.toLocaleString()} rep-hours of admin given back.</span>
          </div>
          <div className="pr-out">
            <span className="pr-out__k">Hiring {calc.hires} extra {calc.hires === 1 ? "AE" : "AEs"} to absorb the admin</span>
            <span className="pr-out__v">{fmt(calc.hireCost)}</span>
            <span className="pr-out__n">per year OTE, before recruiting, ramp and tools. One per five closers, conservatively.</span>
          </div>
          <div className="pr-out">
            <span className="pr-out__k">One GTM engineer to wire it yourself</span>
            <span className="pr-out__v">{fmt(calc.engineer)}</span>
            <span className="pr-out__n">per year base plus a modest tool stack. You keep the maintenance.</span>
          </div>
          <div className="pr-out">
            <span className="pr-out__k">A HubSpot partner on retainer</span>
            <span className="pr-out__v">{fmt(calc.partner)}</span>
            <span className="pr-out__n">per year at a mid-range retainer. Reps still log the fields.</span>
          </div>
        </div>
      </section>

      <section className="pr-included">
        <h2 className="pr-included__h">Everything is included. <em>There is no “Pro”.</em></h2>
        <ul className="sp-list pr-included__list">
          {INCLUDED.map(([t, d]) => (
            <li key={t}>
              <div>
                <strong>{t}</strong>
                <span>{d}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="cd-verdict">
        <p className="cd-verdict__eye">Why no self-serve checkout</p>
        <p className="cd-verdict__p">
          A 30-minute configuration call is what makes CHRM correct for your CRM from day one. We
          walk your field map together, you tell us what a well-filled record looks like to your
          team, and the next morning it is running. If we are not the right fit, we will say so
          before the second call.
        </p>
        <div className="cd-verdict__ctas">
          <a href={BOOKING_URL} className="btn btn--primary">Book a 20-min call</a>
          <Link href="/setup" className="btn btn--ghost">How setup works</Link>
        </div>
      </section>

      <p className="cd-sources">
        Anchors: AE OTE is your input; GTM engineer base is the 2026 US midpoint ($132k–$241k);
        partner retainer is the midpoint of $3.5k–$15k a month. Sources on the{" "}
        <Link href="/compare/diy-gtm-stack">DIY comparison page</Link>.
      </p>
    </main>
  );
}
