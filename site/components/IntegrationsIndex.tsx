// 2nd Closer — Integrations index page.
import Link from "next/link";
import type { PageData } from "@/lib/types";
import { INTEGRATION_PAGES, hrefForPage } from "@/lib/data";

function Card({ page, i }: { page: PageData; i: number }) {
  return (
    <Link className="idx-card" href={hrefForPage(page.slug)}>
      <span className="idx-card__n">{String(i + 1).padStart(2, "0")}</span>
      <h3 className="idx-card__t">{page.category}</h3>
      <p className="idx-card__b">{page.sub.split(". ")[0]}.</p>
      <span className="idx-card__arrow">&rarr;</span>
    </Link>
  );
}

export default function IntegrationsIndex() {
  const integrations = INTEGRATION_PAGES;
  const CRM = integrations.filter((p) => ["hubspot", "pipedrive"].includes(p.slug));
  const EMAIL = integrations.filter((p) => ["gmail", "outlook"].includes(p.slug));
  const REST = integrations.filter((p) => ["fireflies", "apollo", "linkedin"].includes(p.slug));

  return (
    <main className="idx-page" id="top">
      <p className="sp-crumbs">
        <Link href="/">2nd Closer</Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>Integrations</span>
      </p>

      <header className="idx-hero">
        <p className="idx-hero__eye">Integrations &middot; 2nd Closer</p>
        <h1 className="idx-hero__h">
          Connects with <em>your stack.</em>
        </h1>
        <p className="idx-hero__sub">
          OAuth-based, two-way, kept current. Seven integrations that turn on during onboarding:
          the four you connect at setup, and three that extend the surface as you grow.
        </p>
      </header>

      <section className="sp-answer" aria-labelledby="answer-h">
        <h2 className="sp-answer__h" id="answer-h">Which tools does 2nd Closer connect to?</h2>
        <p className="sp-answer__p">
          2nd Closer connects to seven tools over OAuth, and four of them are the whole setup: HubSpot or
          Pipedrive as the CRM (about fifteen minutes, schema read automatically), a Google or Microsoft calendar
          so the notetaker joins every booked call, LinkedIn for capture and warm-up outreach, and Apollo for
          enrichment of every contact named in a conversation. Gmail and Outlook give two-way email capture and
          let follow-ups go out from the rep&rsquo;s own address; Fireflies (and Fathom or Otter) feed existing
          transcripts in so nothing is re-recorded. Every integration is read-then-write: the CRM stays the system
          of record, activities are logged where a rep would have logged them, and credentials are never stored
          because access is by revocable OAuth token. Connect the four on the configuration call and the other
          three whenever they are useful; each takes about five minutes.
        </p>
      </section>

      <section className="idx-section">
        <header className="idx-section__head">
          <div className="idx-section__num">Section 01</div>
          <div>
            <h2 className="idx-section__h">CRM</h2>
            <p className="idx-section__sub">
              2nd Closer operates on top of one of these. Pick yours; we read its schema and write back
              to it.
            </p>
          </div>
        </header>
        <div className="idx-grid idx-grid--2">
          {CRM.map((p, i) => (
            <Card key={p.slug} page={p} i={i} />
          ))}
        </div>
      </section>

      <section className="idx-section">
        <header className="idx-section__head">
          <div className="idx-section__num">Section 02</div>
          <div>
            <h2 className="idx-section__h">Email</h2>
            <p className="idx-section__sub">
              Two-way thread capture, sent-as the rep&rsquo;s authenticated address. Identical depth
              across providers.
            </p>
          </div>
        </header>
        <div className="idx-grid idx-grid--2">
          {EMAIL.map((p, i) => (
            <Card key={p.slug} page={p} i={i} />
          ))}
        </div>
      </section>

      <section className="idx-section">
        <header className="idx-section__head">
          <div className="idx-section__num">Section 03</div>
          <div>
            <h2 className="idx-section__h">Conversation, enrichment, outreach</h2>
            <p className="idx-section__sub">
              The three that extend the surface beyond the CRM. Optional but very common.
            </p>
          </div>
        </header>
        <div className="idx-grid">
          {REST.map((p, i) => (
            <Card key={p.slug} page={p} i={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
