import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Subpage from "@/components/Subpage";

export const metadata: Metadata = {
  title: { absolute: "CHRM setup — live in a day" },
  description:
    "CHRM onboarding is four OAuth sign-ins and one 30-minute call — no engineer, no workflow building. From sign-in to first call processed in under a business day.",
  alternates: { canonical: "/setup" },
};

export default function SetupPage() {
  return (
    <PageShell current="setup">
      <Subpage slug="setup" />
    </PageShell>
  );
}
