import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: { absolute: "The 2nd Closer Journal — field notes on B2B GTM" },
  description:
    "Essays on B2B go-to-market from the 2nd Closer team: leading vs lagging data, the six-week feedback loop, why 2nd Closer has no workflow builder, and the GTM-engineering trap.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <PageShell current="blog">
      <BlogIndex />
    </PageShell>
  );
}
