import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Crumbs from "@/components/Crumbs";
import JsonLd from "@/components/JsonLd";
import { webPage } from "@/lib/jsonld";
import { FAQS } from "@/lib/faqs";

const DESC = "Every question we get about 2nd Closer, answered: what it is, what it is not, how it connects to HubSpot or Pipedrive, and what the free beta involves.";

export const metadata: Metadata = {
  title: { absolute: "Questions about 2nd Closer, answered" },
  description: DESC,
  alternates: { canonical: "/faq" },
};

export default function Faq() {
  return (
    <PageShell current="faq">
      <main className="sp-page" id="top" data-screen-label="FAQ">
        <Crumbs items={[{ name: "FAQ", href: "/faq" }]} />
        <header className="sp-hero">
          <h1 className="sp-hero__h">
            Questions about 2nd Closer, <em>answered.</em>
          </h1>
          <p className="sp-hero__sub">
            {FAQS.length} questions, in the order people ask them. The short version: 2nd Closer is not a CRM and not a
            notetaker. It is the AI account executive that does the after-call work inside the HubSpot or Pipedrive you
            already run, free during the public beta with your own LLM key.
          </p>
        </header>
        <JsonLd data={webPage({ path: "/faq", name: "Questions about 2nd Closer, answered", description: DESC })} />
      </main>
    </PageShell>
  );
}
