import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Crumbs from "@/components/Crumbs";
import Calculator from "@/components/Calculator";
import Sources from "@/components/Sources";
import JsonLd from "@/components/JsonLd";
import { webPage } from "@/lib/jsonld";

const TITLE = "What the after-call work costs your sales team";
const DESC = "Hours of CRM logging, follow-ups and LinkedIn touches per week, and the first-year cost of each way to buy them back: a hire, an engineer, a partner, a new CRM.";

export const metadata: Metadata = {
  title: { absolute: TITLE + " — 2nd Closer" },
  description: DESC,
  alternates: { canonical: "/calculator" },
};

const FAQS = [
  {
    q: "How is the after-call time calculated?",
    a: "Calls per closer per week multiplied by the minutes of work each call creates (CRM logging, the follow-up email, LinkedIn touches, enrichment lookups, the deal review), multiplied by the number of closers, over 46 working weeks. Change any input and the result updates.",
  },
  {
    q: "Where do the alternative costs come from?",
    a: "From published 2026 US ranges: GTM engineer base salaries of $132k–$241k (SyncGTM), HubSpot partner retainers of $3.5k–$15k a month, and Attio Pro at $79 a seat after the July 2026 increase. The calculator uses the midpoints and shows its assumptions in the table.",
  },
  {
    q: "What does 2nd Closer cost?",
    a: "Nothing during the public beta. You bring an API key from any LLM provider and that usage, billed by the provider, is the only cost. Pricing after the beta is shared on the intro call.",
  },
];

export default function CalculatorPage() {
  return (
    <PageShell current="calculator" faqs={FAQS} faqTitle={<>Questions on <em>the numbers.</em></>}>
      <main className="sp-page" id="top" data-screen-label="Calculator">
        <Crumbs items={[{ name: "Calculator", href: "/calculator" }]} />
        <header className="sp-hero">
          <p className="cd-eyebrow">Calculator</p>
          <h1 className="sp-hero__h">
            What does the after-call work <em>cost you?</em>
          </h1>
          <p className="sp-hero__sub">
            An account executive&rsquo;s week is a few hours of conversation and a lot of hours around it. Put your
            team in and see the hours, then what each way of buying them back costs in year one.
          </p>
        </header>
        <section className="sp-answer" aria-labelledby="answer-h">
          <h2 className="sp-answer__h" id="answer-h">How much time does a sales team spend on after-call work?</h2>
          <p className="sp-answer__p">
            A closer who runs twelve customer calls a week and spends thirty-five minutes after each one on CRM
            updates, the follow-up email, LinkedIn touches and enrichment lookups gives up seven hours a week, or
            about 320 hours a year, to work that never involves a buyer. On a five-closer team that is 35 hours a
            week: close to one full-time rep doing everything except selling. Teams buy those hours back in one of
            four ways. They hire, at roughly {`$${(120000).toLocaleString("en-US")}`} on-target earnings per rep. They hire a GTM engineer to wire
            tools together, at a six-figure salary before tooling. They pay an implementation partner a monthly
            retainer. Or they migrate to an AI-native CRM and rebuild their workflows. 2nd Closer is the fifth way:
            it does the after-call work inside the CRM the team already has, free during the public beta.
          </p>
        </section>
        <Calculator />
        <Sources
          items={[
            ["GTM engineer salary ranges, SyncGTM 2026", "https://syncgtm.com/blog/gtm-engineer-salary"],
            ["HubSpot consulting and partner retainer costs", "https://automationstrategists.com/blog/hubspot-consulting-cost/"],
            ["Fractional RevOps pricing", "https://growintandem.com/fractional-revops-gtm-engineering-crm-guide/"],
            ["Attio pricing, 2026", "https://attio.com/pricing"],
            ["AE compensation ranges, Bridge Group 2026", "https://blog.bridgegroupinc.com/"],
          ]}
          note="Midpoints of published 2026 US ranges; your market may differ"
        />
        <JsonLd data={webPage({ path: "/calculator", name: TITLE, description: DESC })} />
      </main>
    </PageShell>
  );
}
