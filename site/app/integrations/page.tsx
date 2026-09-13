import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import IntegrationsIndex from "@/components/IntegrationsIndex";

export const metadata: Metadata = {
  title: { absolute: "2nd Closer integrations — HubSpot, Pipedrive, Gmail & more" },
  description:
    "HubSpot, Pipedrive, Gmail, Outlook, LinkedIn, Apollo and Fireflies. Seven OAuth integrations that turn on during a 30-minute setup call.",
  alternates: { canonical: "/integrations" },
};

export default function Integrations() {
  return (
    <PageShell current="integrations">
      <IntegrationsIndex />
    </PageShell>
  );
}
