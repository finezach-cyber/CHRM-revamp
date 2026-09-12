// CHRM — For startups: seed (founder-led) and Series A (first AEs). Two stages, one product.
import Link from "next/link";
import AfterTheCall from "./AfterTheCall";
import { BOOKING_URL, BETA } from "@/lib/site";

export default function StartupsPage() {
  return (
    <main className="sp-page" id="top" data-screen-label="For startups">
      <p className="sp-crumbs">
        <Link href="/">CHRM</Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>For startups</span>
      </p>

      <header className="sp-hero">
        <p className="cd-eyebrow">Seed and Series A · HubSpot or Pipedrive</p>
        <h1 className="sp-hero__h">
          Sales for startups that can’t afford <em>a second AE yet.</em>
        </h1>
        <p className="sp-hero__sub">
          At seed the founder is the sales team. At Series A the first AEs arrive and the founder’s
          process has to survive the handoff. Both stages lose deals in the same place: the work
          after the call. CHRM does that work, on the CRM you already have, free while it’s in beta.
        </p>
      </header>

      <div className="st-facts" aria-label="Why this stage is hard">
        <div><span className="big">68%</span><span className="lbl">of founders fail the founder-led to AE handoff the first time</span><span className="src">Forum VC</span></div>
        <div><span className="big">5.7 mo</span><span className="lbl">average AE ramp; 40–60% of first AEs miss year-one quota</span><span className="src">Bridge Group · Chambr · 2026</span></div>
        <div><span className="big">$200–280k</span><span className="lbl">fully loaded cost of a first AE in year one</span><span className="src">Bain Capital Ventures · Scalerr</span></div>
        <div><span className="big">34% / yr</span><span className="lbl">rate at which CRM data decays without someone keeping it current</span><span className="src">Sopro · Gartner</span></div>
      </div>

      {/* Seed */}
      <section className="st-stage" id="seed">
        <div>
          <p className="st-stage__eye">Seed · founder-led sales</p>
          <h2 className="st-stage__h">You keep selling. <em>CHRM keeps the rest.</em></h2>
          <p className="st-stage__p">
            You are running every call, and the calls are the easy part. The follow-up goes out two
            days late. The CRM has the deals you remember to log. The investor update pipeline is a
            spreadsheet you rebuild from memory. You don’t need a sales hire yet. You need the
            after-call work done.
          </p>
          <ul className="st-stage__list">
            <li><strong>Follow-ups sent in five minutes,</strong> in your voice, from your inbox, referencing what the buyer actually said.</li>
            <li><strong>Your CRM fills itself,</strong> so the pipeline you show investors is the one that exists.</li>
            <li><strong>Every stakeholder mentioned gets mapped and enriched,</strong> and warmed up on LinkedIn while you sleep.</li>
            <li><strong>Your process gets written down by being run.</strong> The fields CHRM fills become the playbook your first AE inherits.</li>
            <li><strong>Free during the beta, on your own LLM key.</strong> A seed budget can carry it.</li>
          </ul>
          <div className="st-stage__ctas">
            <a href={BOOKING_URL} className="btn btn--primary">{BETA.cta}</a>
            <Link href="/blog/first-ae-handoff-kit" className="btn btn--ghost">Read the first-AE handoff kit</Link>
          </div>
        </div>
        <div>
          <AfterTheCall />
        </div>
      </section>

      {/* Series A */}
      <section className="st-stage" id="series-a">
        <div>
          <p className="st-stage__eye">Series A · the first AEs</p>
          <h2 className="st-stage__h">Hire one AE. <em>Get two.</em></h2>
          <p className="st-stage__p">
            You raised, you hired, and now three to ten closers are running a process that lived in
            the founder’s head. Field completion is 31%. The board deck takes the weekend. The new
            VP Sales inherits a CRM nobody trusts. CHRM makes every one of those closers a two-person
            team, and gives leadership a pipeline it can actually read.
          </p>
          <ul className="st-stage__list">
            <li><strong>Every closer gets a second AE.</strong> The CRM, the follow-ups, the committee, the risk flags. Reps sell; CHRM executes.</li>
            <li><strong>Field completion goes from ~31% to ~100%,</strong> with a citation on every value. The forecast stops being a vibe.</li>
            <li><strong>Your methodology runs itself.</strong> MEDDPICC, BANT, SPICED or your own fields, filled from every call, not from a rep’s memory two days later.</li>
            <li><strong>Risk shows up Monday morning,</strong> not at the end of the quarter: missing decision-maker, budget unconfirmed, champion gone quiet.</li>
            <li><strong>No RevOps hire, no GTM engineer, no partner retainer.</strong> Four sign-ins and a 30-minute call.</li>
          </ul>
          <div className="st-stage__ctas">
            <a href={BOOKING_URL} className="btn btn--primary">{BETA.cta}</a>
            <Link href="/blog/meddpicc-in-hubspot-auto-filled" className="btn btn--ghost">MEDDPICC in HubSpot, auto-filled</Link>
          </div>
        </div>
        <div>
          <figure className="sp-shot">
            <div className="sp-shot__head"><span className="sp-shot__brand">CHRM</span><span className="sp-shot__meta">Field-map view · pipeline-scoped</span></div>
            <div className="sp-shot__body"><img className="sp-shot__img" src="/assets/screenshots/product-crm-hygiene.png" alt="CHRM field map view: every CRM field mapped to an AI-extractable structure" loading="lazy" /></div>
            <div className="sp-shot__foot">Every CRM field, mapped to what CHRM extracts from a call. Configured in the 30-minute call.</div>
          </figure>
        </div>
      </section>

      <section className="cd-verdict">
        <p className="cd-verdict__eye">Which CRM should a startup pick?</p>
        <p className="cd-verdict__p">
          Whichever one your team will open. HubSpot if inbound matters and you want the startup
          discount, Pipedrive if you run outbound. CHRM works on either from day one, so the choice
          stops being about which CRM has the best AI. <Link href="/compare/ai-native-crms">Looking at Attio? Read this first.</Link>
        </p>
        <div className="cd-verdict__ctas">
          <a href={BOOKING_URL} className="btn btn--primary">{BETA.cta}</a>
          <Link href="/beta" className="btn btn--ghost">How the free beta works</Link>
        </div>
      </section>

      <section className="sp-related">
        <p className="sp-related__h">Built for this stage</p>
        <div className="sp-related__grid">
          <Link className="sp-related__card" href="/blog/first-ae-handoff-kit">
            <span className="sp-related__cat">Kit</span>
            <h3 className="sp-related__t">The first-AE handoff kit</h3>
            <p className="sp-related__b">The checklist and the field-map template that turn founder-led sales into a process a hire can run.</p>
            <span className="sp-related__arrow">&rarr;</span>
          </Link>
          <Link className="sp-related__card" href="/blog/follow-up-email-after-sales-call">
            <span className="sp-related__cat">Templates</span>
            <h3 className="sp-related__t">Follow-up email after a sales call</h3>
            <p className="sp-related__b">Seven templates that get replies, and the version that writes itself.</p>
            <span className="sp-related__arrow">&rarr;</span>
          </Link>
          <Link className="sp-related__card" href="/blog/series-a-cro-playbook">
            <span className="sp-related__cat">Essay</span>
            <h3 className="sp-related__t">The Series A CRO playbook is broken</h3>
            <p className="sp-related__b">Fix the data layer before the dashboards. The order of operations that works.</p>
            <span className="sp-related__arrow">&rarr;</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
