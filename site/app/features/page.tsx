import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: { absolute: "CHRM features — Capture, Structure, Activate, Iterate" },
  description:
    "The four steps behind CHRM: capture every conversation, structure it into your CRM, activate follow-ups and outreach, and iterate the playbook from real outcomes.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <PageShell current="features">
      <Features />
    </PageShell>
  );
}
