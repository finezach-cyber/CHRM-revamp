import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Pricing from "@/components/Pricing";
import { PRICE_PER_AE_MONTH } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `CHRM pricing — $${PRICE_PER_AE_MONTH.toLocaleString()} per AE per month, every other seat free` },
  description:
    "CHRM costs $1,000 per account executive per month. Managers, RevOps and leadership seats are free. No platform fee, no credits, no implementation. First 30 days free for up to five AE seats. Compare it to hiring a second AE, a GTM engineer or a HubSpot partner.",
  alternates: { canonical: "/pricing" },
};

export default function PricingRoute() {
  return (
    <PageShell current="pricing">
      <Pricing />
    </PageShell>
  );
}
