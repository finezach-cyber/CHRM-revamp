// 2nd Closer marketing — Final CTA with a working lead form.
import Link from "next/link";
import LeadForm from "./LeadForm";
import { BOOKING_URL, BETA } from "@/lib/site";

export default function DemoCTA() {
  const hasBooking = BOOKING_URL !== "#demo";
  return (
    <section className="m-demo" id="demo" data-screen-label="Demo CTA">
      <div className="m-demo__grid">
        <div className="m-demo__copy">
          <div className="t-eyebrow">{BETA.name}</div>
          <p className="m-demo__h">
            Join the free beta. <em>Bring any LLM key.</em>
          </p>
          <p className="m-demo__body">
            2nd Closer is free while it’s in public beta. You bring an API key from whichever LLM provider you
            already use; that usage is the only cost, on your bill, under your control. We don’t do
            self-serve onboarding: a 20-minute call lets us configure 2nd Closer to your CRM fields, your
            deal stages and the way your team actually works. The next morning every booked call is
            captured and every field is filling.
          </p>
          <p className="m-demo__fine">
            {`Free during the beta · any LLM key · HubSpot & Pipedrive · live in under a day · no stated limits`}
          </p>
          {hasBooking && (
            <p className="m-demo__alt">
              Prefer to pick a time now? <a href={BOOKING_URL}>Open the calendar &rarr;</a>
            </p>
          )}
          <p className="m-demo__alt">
            Not ready? <Link href="/beta">Read how the beta works</Link>, <Link href="/setup">see setup</Link> or{" "}
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
