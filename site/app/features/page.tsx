import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: { absolute: "2nd Closer features — Capture, Structure, Activate, Iterate" },
  description:
    "Capture, structure, activate, iterate: the four steps 2nd Closer runs after every sales call, inside the HubSpot or Pipedrive you already use.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <PageShell current="features">
      <Features />
    </PageShell>
  );
}
