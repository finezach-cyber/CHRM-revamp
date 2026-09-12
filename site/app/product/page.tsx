import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ProductIndex from "@/components/ProductIndex";

export const metadata: Metadata = {
  title: { absolute: "CHRM product — every feature, by stage" },
  description:
    "Every CHRM feature in one place, sorted by Capture, Structure, Activate, and Iterate: risk detection, cited summaries, CRM hygiene, follow-ups, sequences, and more.",
  alternates: { canonical: "/product" },
};

export default function Product() {
  return (
    <PageShell current="product">
      <ProductIndex />
    </PageShell>
  );
}
