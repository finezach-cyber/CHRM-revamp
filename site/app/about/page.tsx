import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import About from "@/components/About";

export const metadata: Metadata = {
  title: { absolute: "Stay human, let AI do the rest — 2nd Closer" },
  description:
    "2nd Closer’s design philosophy: AI that creates work is a failure, humans are for trust and direction, and software shouldn’t need an implementation industry to run.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell current="about">
      <About />
    </PageShell>
  );
}
