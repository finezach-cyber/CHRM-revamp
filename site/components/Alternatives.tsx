// CHRM marketing — The three ways teams try to fix this, and what each one costs.
import Link from "next/link";
import { ANCHORS } from "@/lib/site";

const fmt = (n: number) => "$" + Math.round(n).toLocaleString();

type Col = { id: string; name: string; sub: string; href: string; cells: string[] };

const ROWS = ["Time to value", "What it costs", "Who maintains it", "What happens after the call", "Your CRM"];

const COLS: Col[] = [
  {
    id: "ai-native",
    name: "Switch to an AI-native CRM",
    sub: "Attio · Day.ai · Clarify",
    href: "/compare/ai-native-crms",
    cells: [
      `${ANCHORS.aiNativeMigrationWeeks}+ weeks of migration`,
      `${fmt(ANCHORS.aiNativeSeatMonth)}/seat/mo + credits + the engineer who builds the workflows`,
      "Your engineer, on their workflow canvas",
      "Whatever you built. Nothing by default.",
      "Replaced. Every integration re-wired.",
    ],
  },
  {
    id: "diy",
    name: "Hire a GTM engineer and wire it",
    sub: "Clay · n8n · Zapier · Gong · Apollo",
    href: "/compare/diy-gtm-stack",
    cells: [
      "3–6 months to something that runs",
      `${fmt(ANCHORS.gtmEngineerBase)} base salary, plus the tools`,
      "Your engineer, every time an API changes",
      "Whatever you wired. Until it breaks.",
      "Kept. Held together with duct tape.",
    ],
  },
  {
    id: "partner",
    name: "Pay a partner to implement",
    sub: "HubSpot partner agencies · fractional RevOps",
    href: "/compare/diy-gtm-stack#partners",
    cells: [
      "4–16 weeks",
      `${fmt(ANCHORS.partnerRetainerMonth)}/mo retainer, typically ${fmt(ANCHORS.partnerRetainerMonth * 12)}+/yr`,
      "The agency, on retainer",
      "Whatever they configured. Reps still log it.",
      "Kept. Still 31% complete.",
    ],
  },
  {
    id: "chrm",
    name: "CHRM",
    sub: "The execution layer",
    href: "/setup",
    cells: [
      "Under one business day",
      "A per-AE subscription, shared on the intro call. No platform fee, no implementation line.",
      "CHRM. Upstream changes are absorbed by us.",
      "The whole job, by default.",
      "Kept. Read, respected, written back to.",
    ],
  },
];

export default function Alternatives() {
  return (
    <section className="m-alts" id="alternatives" data-screen-label="Alternatives">
      <header className="sec-head">
        <div className="t-eyebrow">The alternatives</div>
        <h2 className="sec-head__h">
          Three ways teams try to fix this. <em>And what each one costs.</em>
        </h2>
        <p className="sec-head__sub">
          Every one of them starts with “first we need to…”. A migration. A hire. A project.
          CHRM starts with four sign-ins.
        </p>
      </header>

      <div className="m-alts__wrap">
        <table className="m-alts__table">
          <thead>
            <tr>
              <th scope="col" className="m-alts__th m-alts__th--row"><span className="sr-only">Criterion</span></th>
              {COLS.map((c) => (
                <th scope="col" key={c.id} className={"m-alts__th" + (c.id === "chrm" ? " m-alts__th--chrm" : "")}>
                  <span className="m-alts__name">{c.name}</span>
                  <span className="m-alts__sub">{c.sub}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={row}>
                <th scope="row" className="m-alts__rowH">{row}</th>
                {COLS.map((c) => (
                  <td key={c.id} className={"m-alts__cell" + (c.id === "chrm" ? " m-alts__cell--chrm" : "")}>
                    {c.cells[i]}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <th scope="row" className="m-alts__rowH"><span className="sr-only">Read more</span></th>
              {COLS.map((c) => (
                <td key={c.id} className={"m-alts__cell m-alts__cell--link" + (c.id === "chrm" ? " m-alts__cell--chrm" : "")}>
                  <Link href={c.href}>{c.id === "chrm" ? "How setup works" : "Read the comparison"} &rarr;</Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="m-alts__note">
        Cost anchors are 2026 US market ranges (GTM engineer $132k–$241k base; HubSpot partner
        retainers $3.5k–$15k/month; Attio Pro $79/seat after the July 2026 increase). Sources in
        the <Link href="/compare/diy-gtm-stack">comparison pages</Link>.
      </p>
    </section>
  );
}
