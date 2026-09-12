// CHRM marketing — Final CTA with a working lead form.
import Link from "next/link";
import LeadForm from "./LeadForm";
import { BOOKING_URL, FREE_DAYS, FREE_TRIAL_SEATS } from "@/lib/site";

export default function DemoCTA() {
  const hasBooking = BOOKING_URL !== "#demo";
  return (
    <section className="m-demo" id="demo" data-screen-label="Demo CTA">
      <div className="m-demo__grid">
        <div className="m-demo__copy">
          <div className="t-eyebrow">Book a call</div>
          <h2 className="m-demo__h">
            Twenty minutes. <em>Then a second AE for every closer.</em>
          </h2>
          <p className="m-demo__body">
            We don’t do self-serve onboarding. A short call lets us configure CHRM to your CRM
            fields, your deal stages, and the way your team actually works. By the next morning
            every booked call is captured and every field is filling. If we’re not the right fit,
            we’ll say so before the second call.
          </p>
          <p className="m-demo__fine">
            No commitment &middot; first {FREE_DAYS} days free for up to {FREE_TRIAL_SEATS} AE seats &middot;
            HubSpot &amp; Pipedrive &middot; live in under a day
          </p>
          {hasBooking && (
            <p className="m-demo__alt">
              Prefer to pick a time now? <a href={BOOKING_URL}>Open the calendar &rarr;</a>
            </p>
          )}
          <p className="m-demo__alt">
            Not ready? <Link href="/pricing">See what it costs</Link> or{" "}
            <Link href="/features">read how it works</Link>.
          </p>
        </div>
        <div className="m-demo__form">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
