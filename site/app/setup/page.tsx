import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Subpage from "@/components/Subpage";
import JsonLd from "@/components/JsonLd";
import { howTo } from "@/lib/jsonld";
import { SETUP_PAGE } from "@/lib/data";
import { SETUP_STEPS } from "@/lib/setup-page";

export const metadata: Metadata = {
  title: { absolute: "2nd Closer setup — live in a day" },
  description: "Four OAuth sign-ins, one 30-minute configuration call, no engineer and no workflow builder. Every booked call is captured by the next morning.",
  alternates: { canonical: "/setup" },
};

export default function Setup() {
  return (
    <PageShell current="setup" faqs={SETUP_PAGE.faqs} faqTitle={<>Questions on <em>setup.</em></>}>
      <Subpage slug="setup" />
      <JsonLd
        data={howTo({
          name: "How to set up 2nd Closer on HubSpot or Pipedrive",
          description: "Four OAuth sign-ins, one 30-minute configuration call, live by the next morning.",
          totalTime: "PT1H",
          steps: SETUP_STEPS,
        })}
      />
    </PageShell>
  );
}
