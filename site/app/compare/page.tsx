import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ComparePage from "@/components/ComparePage";

export const metadata: Metadata = {
  title: { absolute: "What 2nd Closer is, and isn’t — 2nd Closer" },
  description:
    "2nd Closer is not a CRM, a notetaker or a workflow builder. How it compares with AI-native CRMs, notetakers, agent suites and a DIY GTM stack.",
  alternates: { canonical: "/compare" },
};

export default function Compare() {
  return (
    <PageShell current="compare">
      <ComparePage />
    </PageShell>
  );
}
