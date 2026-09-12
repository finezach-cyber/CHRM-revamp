import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StartupsPage from "@/components/StartupsPage";

export const metadata: Metadata = {
  title: { absolute: "Sales for startups: a second AE for seed and Series A teams on HubSpot or Pipedrive" },
  description:
    "Founder-led at seed, first AEs at Series A. CHRM does the after-call work on the CRM you already have: follow-ups sent, fields filled, committee mapped, risk flagged. Free during the public beta, bring your own LLM key.",
  alternates: { canonical: "/startups" },
};

export default function Startups() {
  return (
    <PageShell current="startups">
      <StartupsPage />
    </PageShell>
  );
}
