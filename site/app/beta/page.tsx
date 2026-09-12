import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BetaPage from "@/components/BetaPage";

export const metadata: Metadata = {
  title: { absolute: "2nd Closer free public beta: bring your own LLM key, live in a day" },
  description:
    "2nd Closer is free during its public beta. Bring an API key from any LLM provider (Anthropic, OpenAI, Google or another), connect HubSpot or Pipedrive, and every rep has the after-call work handled by the next morning. No seat cap, no card.",
  alternates: { canonical: "/beta" },
};

export default function Beta() {
  return (
    <PageShell current="beta">
      <BetaPage />
    </PageShell>
  );
}
