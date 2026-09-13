import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ProductIndex from "@/components/ProductIndex";

export const metadata: Metadata = {
  title: { absolute: "2nd Closer product — every feature, by stage" },
  description:
    "Every 2nd Closer feature by stage: CRM hygiene, follow-up emails, sequences, stakeholder maps, LinkedIn outreach, risk detection and win/loss iteration.",
  alternates: { canonical: "/product" },
};

export default function Product() {
  return (
    <PageShell current="product">
      <ProductIndex />
    </PageShell>
  );
}
