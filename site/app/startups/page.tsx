import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StartupsPage from "@/components/StartupsPage";

export const metadata: Metadata = {
  title: { absolute: "Sales for startups on HubSpot or Pipedrive — 2nd Closer" },
  description:
    "A second AE for seed and Series A teams: follow-ups sent, fields filled, committee mapped, risk flagged, on the CRM you already have. Free during the beta.",
  alternates: { canonical: "/startups" },
};

export default function Startups() {
  return (
    <PageShell current="startups">
      <StartupsPage />
    </PageShell>
  );
}
