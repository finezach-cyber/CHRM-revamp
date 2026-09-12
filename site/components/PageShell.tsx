// Common page chrome: Nav + page content + FAQ + DemoCTA + Footer, plus FAQPage structured data.
import type { ReactNode } from "react";
import Nav from "./Nav";
import FAQ from "./FAQ";
import DemoCTA from "./DemoCTA";
import Footer from "./Footer";
import { FAQS } from "@/lib/faqs";

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PageShell({
  current,
  children,
}: {
  current?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav current={current} />
      {children}
      <FAQ />
      <DemoCTA />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </>
  );
}
