// 2nd Closer — Compare index: search-intent comparison pages first, the category matrix below.
import Link from "next/link";
import Compare from "./Compare";
import Architecture from "./Architecture";
import { COMPARE_PAGES } from "@/lib/compare-pages";
import { itemList } from "@/lib/jsonld";
import Crumbs from "./Crumbs";
import JsonLd from "./JsonLd";

export default function ComparePage() {
  return (
    <main className="sp-page" id="top">
      <Crumbs items={[{ name: "Compare", href: "/compare" }]} />
      <header className="sp-hero">
        <h1 className="sp-hero__h">
          What 2nd Closer is, <em>and isn&rsquo;t.</em>
        </h1>
        <p className="sp-hero__sub">
          2nd Closer is not a CRM, not a notetaker and not a workflow builder. It is a second AE that
          works inside the CRM you already run. Here is how that compares to the things you were
          about to buy, hire or build instead.
        </p>
      </header>

      <section className="sp-answer" aria-labelledby="answer-h">
        <h2 className="sp-answer__h" id="answer-h">Is 2nd Closer a CRM, a notetaker or a workflow builder?</h2>
        <p className="sp-answer__p">
          None of the three. 2nd Closer is an AI account executive that works inside the HubSpot or Pipedrive a team already runs. A CRM stores the record; 2nd Closer reads it and writes back to it after every conversation, with a citation on every value. A notetaker records and summarises a call; 2nd Closer ingests that transcript (from its built-in notetaker or from Fathom, Fireflies or Otter) and then does the after-call work the summary describes: fields written, follow-up sent from the rep&rsquo;s address in under five minutes, committee mapped and enriched, LinkedIn warm-up started, risk flagged. A workflow builder asks an engineer to wire triggers to actions; 2nd Closer reads the CRM schema and runs the whole job by default after a 20-minute configuration call. The eight pages below compare it, capability by capability, with each thing a team might buy, hire or build instead.
        </p>
      </section>

      <Architecture id="compare-architecture" />

      <section className="idx-section" id="pages">
        <header className="idx-section__head">
          <div className="idx-section__num">By alternative</div>
          <div>
            <h2 className="idx-section__h">Pick the one you&rsquo;re weighing.</h2>
            <p className="idx-section__sub">Honest, capability by capability, with our read at the end.</p>
          </div>
        </header>
        <div className="idx-grid">
          {COMPARE_PAGES.map((p, i) => (
            <Link className="idx-card" href={"/compare/" + p.slug} key={p.slug}>
              <span className="idx-card__n">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="idx-card__t">{p.short}</h3>
              <p className="idx-card__b" dangerouslySetInnerHTML={{ __html: p.h.replace(/<\/?em>/g, "") }} />
              <span className="idx-card__arrow">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <Compare headed={true} />
      <JsonLd data={itemList("2nd Closer comparison pages", COMPARE_PAGES.map((p) => ({ name: p.title, href: "/compare/" + p.slug })))} />
    </main>
  );
}
