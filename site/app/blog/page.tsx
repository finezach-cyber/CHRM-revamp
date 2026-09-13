import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: { absolute: "The 2nd Closer Journal — field notes on B2B GTM" },
  description:
    "Field notes and essays from 2nd Closer on B2B go-to-market: founder-led sales, first AEs, follow-ups, MEDDPICC in HubSpot, and the after-call work.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <PageShell current="blog">
      <BlogIndex />
    </PageShell>
  );
}
