// Common page chrome: Nav + page content + FAQ + CTA + Footer, plus FAQPage structured data.
// The FAQ is page-specific: pass `faqs` and only those questions render and reach the schema.
// The full 21-question FAQ renders only on the homepage and /faq, so it is not repeated on every URL.
import type { ReactNode } from "react";
import Nav from "./Nav";
import FAQ from "./FAQ";
import DemoCTA from "./DemoCTA";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import { FAQS } from "@/lib/faqs";
import { faqPage } from "@/lib/jsonld";
import type { QA } from "@/lib/types";

export default function PageShell({
  current,
  children,
  faqs,
  faqTitle,
}: {
  current?: string;
  children: ReactNode;
  faqs?: QA[];
  faqTitle?: ReactNode;
}) {
  const global = current === "home" || current === "faq";
  const items = faqs && faqs.length > 0 ? faqs : global ? FAQS : null;
  return (
    <>
      <Nav current={current} />
      {children}
      {items && <FAQ items={items} title={faqTitle} defaultOpen={!global || current === "faq"} />}
      <DemoCTA />
      <Footer />
      {items && <JsonLd data={faqPage(items)} />}
    </>
  );
}
