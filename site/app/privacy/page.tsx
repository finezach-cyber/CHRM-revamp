import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Privacy — 2nd Closer" },
  description: "How 2nd Closer handles conversation data, CRM data and credentials.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <PageShell current="privacy">
      <main className="sp-page" id="top">
        <p className="sp-crumbs"><Link href="/">2nd Closer</Link><span>/</span><span style={{ color: "var(--ink)" }}>Privacy</span></p>
        <header className="sp-hero">
          <h1 className="sp-hero__h">Privacy, <em>in plain terms.</em></h1>
          <p className="sp-hero__sub">The full policy is being finalised with counsel. Until it is published here, these are the commitments we operate under today.</p>
        </header>
        <section className="sp-body">
          <div className="sp-prose">
            <p>2nd Closer connects to your CRM, calendar, email, LinkedIn and Apollo over OAuth or per-user API keys. We do not store your passwords or CRM credentials.</p>
            <p>Conversation transcripts are processed to extract the structured fields your team has configured, then discarded. Only the structured output, drafted messages and activity records are written to your CRM and kept in your 2nd Closer workspace.</p>
            <p>Personal or unrelated email is filtered out of processing; the deal-thread filter is configurable per organisation.</p>
            <p>Each organisation is a separate tenant with its own data, integrations and settings. A formal SOC 2 audit is ahead of us; ask on the intro call for a walkthrough of our data handling.</p>
            <p>Questions or deletion requests: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
