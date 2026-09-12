// CHRM marketing — Pricing teaser on the homepage. One number, one anchor, one link.
import Link from "next/link";
import { ANCHORS, PRICE_PER_AE_MONTH, FREE_DAYS, FREE_TRIAL_SEATS, BOOKING_URL } from "@/lib/site";

export default function PricingTeaser() {
  const yearly = PRICE_PER_AE_MONTH * 12;
  const ratio = Math.round(ANCHORS.secondAeOte / yearly);
  return (
    <section className="m-price" id="pricing" data-screen-label="Pricing teaser">
      <div className="m-price__grid">
        <div className="m-price__left">
          <div className="t-eyebrow">Pricing</div>
          <h2 className="m-price__h">
            ${PRICE_PER_AE_MONTH.toLocaleString()} per AE per month.
            <br />
            <em>Everyone else is free.</em>
          </h2>
          <p className="m-price__body">
            Managers, RevOps and leadership seats don’t bill. No platform fee, no credits, no
            implementation line. The first {FREE_DAYS} days are free for up to {FREE_TRIAL_SEATS} AE seats.
          </p>
          <div className="m-price__ctas">
            <Link href="/pricing" className="btn btn--primary">See the full comparison</Link>
            <a href={BOOKING_URL} className="btn btn--ghost">Book a 20-min call</a>
          </div>
        </div>
        <dl className="m-price__anchors">
          <div>
            <dt>A second AE on CHRM</dt>
            <dd>${yearly.toLocaleString()} <span>/ year</span></dd>
          </div>
          <div>
            <dt>Hiring a second AE</dt>
            <dd>${ANCHORS.secondAeOte.toLocaleString()} <span>/ year OTE, before ramp</span></dd>
          </div>
          <div>
            <dt>A GTM engineer to wire it yourself</dt>
            <dd>${ANCHORS.gtmEngineerBase.toLocaleString()} <span>/ year base, before tools</span></dd>
          </div>
          <div className="m-price__anchors-note">
            About one-{ratio === 10 ? "tenth" : `${ratio}th`} the cost of the hire it replaces, for every closer on the team.
          </div>
        </dl>
      </div>
    </section>
  );
}
