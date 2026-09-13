import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import About from "@/components/About";

export const metadata: Metadata = {
  title: { absolute: "Stay human, let AI do the rest — 2nd Closer" },
  description:
    "Stay human, let AI do the rest: the design philosophy behind 2nd Closer, in three notes on what AI should do in sales and what it should not.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell current="about">
      <About />
    </PageShell>
  );
}
