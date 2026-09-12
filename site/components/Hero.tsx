// CHRM marketing — Hero. The promise on the left; the proof (what happens after a call) on the right.
import Link from "next/link";
import AfterTheCall from "./AfterTheCall";
import { BOOKING_URL, FREE_DAYS, FREE_TRIAL_SEATS } from "@/lib/site";

export default function Hero() {
  return (
    <section className="m-hero m-hero--split" id="top" data-screen-label="Hero">
      <div className="m-hero__grid">
        <div className="m-hero__copy">
          <div className="m-hero__eyebrow">CHRM &middot; The execution layer for HubSpot &amp; Pipedrive</div>
          <h1 className="m-hero__tagline">
            Every closer gets
            <br />
            <em>a second AE.</em>
          </h1>
          <p className="m-hero__blurb">
            CHRM sits silently on every call, then does everything an AE does after it:
            updates the CRM, writes and sends the follow-up, works the buying committee on
            LinkedIn, enriches every contact, and flags the deals that are slipping.
            On the HubSpot or Pipedrive you already run. Live in a day.
          </p>
          <div className="m-hero__ctas">
            <a href={BOOKING_URL} className="btn btn--primary">Book a 20-min call</a>
            <Link href="/features" className="btn btn--ghost">See how it works</Link>
          </div>
          <p className="m-hero__fine">
            {`Works with HubSpot & Pipedrive · no migration, no engineer · first ${FREE_DAYS} days free for up to ${FREE_TRIAL_SEATS} AEs`}
          </p>
        </div>
        <div className="m-hero__proof">
          <AfterTheCall />
        </div>
      </div>

      <div className="m-hero__connectors">
        <span className="m-hero__connectors-label">Works with</span>
        <ul>
          <li>HubSpot</li>
          <li>Pipedrive</li>
          <li>Google &amp; Microsoft calendar</li>
          <li>Gmail &amp; Outlook</li>
          <li>LinkedIn</li>
          <li>Apollo</li>
          <li>Fireflies, Fathom, Otter</li>
        </ul>
      </div>
    </section>
  );
}
