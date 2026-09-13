import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import WhoDoesWhat from "@/components/WhoDoesWhat";
import Architecture from "@/components/Architecture";
import FeaturesTeaser from "@/components/FeaturesTeaser";
import Alternatives from "@/components/Alternatives";
import Onboarding from "@/components/Onboarding";
import Stories from "@/components/Stories";
import Compare from "@/components/Compare";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Order is the argument: promise → proof → what it does → how → vs the alternatives →
// setup → stories → category compare → FAQ → form (in PageShell).
export default function Home() {
  return (
    <PageShell current="home">
      <main>
        <Hero />
        <ProofStrip />
        <WhoDoesWhat />
        <Architecture />
        <FeaturesTeaser />
        <Alternatives />
        <Onboarding />
        <Stories />
        <Compare />
      </main>
    </PageShell>
  );
}
