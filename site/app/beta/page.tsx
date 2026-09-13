import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BetaPage from "@/components/BetaPage";

export const metadata: Metadata = {
  title: { absolute: "Free public beta: bring your own LLM key — 2nd Closer" },
  description:
    "2nd Closer is free during its public beta. Bring an API key from any LLM provider, connect HubSpot or Pipedrive, and the after-call work is handled by morning.",
  alternates: { canonical: "/beta" },
};

export default function Beta() {
  return (
    <PageShell current="beta">
      <BetaPage />
    </PageShell>
  );
}
