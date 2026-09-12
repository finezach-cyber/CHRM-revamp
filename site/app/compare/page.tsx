import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ComparePage from "@/components/ComparePage";

export const metadata: Metadata = {
  title: { absolute: "What CHRM is, and isn’t — CHRM" },
  description:
    "How CHRM differs from AI-native CRMs, notetakers, conversation intelligence like Gong, and lead-gen tools. Where we fit, where we don’t, and why the difference matters.",
  alternates: { canonical: "/compare" },
};

export default function Compare() {
  return (
    <PageShell current="compare">
      <ComparePage />
    </PageShell>
  );
}
