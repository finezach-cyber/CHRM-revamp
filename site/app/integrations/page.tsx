import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import IntegrationsIndex from "@/components/IntegrationsIndex";

export const metadata: Metadata = {
  title: { absolute: "CHRM integrations — HubSpot, Pipedrive, Gmail & more" },
  description:
    "CHRM integrates with HubSpot, Pipedrive, Gmail, Outlook, Fireflies, Apollo, and LinkedIn — native OAuth, two-way real-time sync, and custom-field mapping per pipeline.",
  alternates: { canonical: "/integrations" },
};

export default function Integrations() {
  return (
    <PageShell current="integrations">
      <IntegrationsIndex />
    </PageShell>
  );
}
