import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Terms — 2nd Closer" },
  description: "Commercial terms for 2nd Closer.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function Terms() {
  return (
    <PageShell current="terms">
      <main className="sp-page" id="top">
        <p className="sp-crumbs"><Link href="/">2nd Closer</Link><span>/</span><span style={{ color: "var(--ink)" }}>Terms</span></p>
        <header className="sp-hero">
          <h1 className="sp-hero__h">Terms, <em>in plain terms.</em></h1>
          <p className="sp-hero__sub">The full terms of service are being finalised with counsel. The commercial terms below are what every customer is on today.</p>
        </header>
        <section className="sp-body">
          <div className="sp-prose">
            <p>2nd Closer is billed per account-executive seat at the rate agreed on your order. Manager, RevOps and leadership seats are free. Billing is monthly and can be cancelled at any time from the team management page.</p>
            <p>The first thirty days are free for up to five AE seats. No card is required to start.</p>
            <p>Your CRM remains your system of record. Everything 2nd Closer writes is stored in your CRM as ordinary fields and activities and is yours to keep if you leave.</p>
            <p>Questions: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
