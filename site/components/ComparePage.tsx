// CHRM — Compare index: search-intent comparison pages first, the category matrix below.
import Link from "next/link";
import Compare from "./Compare";
import { COMPARE_PAGES } from "@/lib/compare-pages";

export default function ComparePage() {
  return (
    <main className="sp-page" id="top">
      <p className="sp-crumbs">
        <Link href="/">CHRM</Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>Compare</span>
      </p>
      <header className="sp-hero">
        <h1 className="sp-hero__h">
          What CHRM is, <em>and isn&rsquo;t.</em>
        </h1>
        <p className="sp-hero__sub">
          CHRM is not a CRM, not a notetaker and not a workflow builder. It is a second AE that
          works inside the CRM you already run. Here is how that compares to the things you were
          about to buy, hire or build instead.
        </p>
      </header>

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
    </main>
  );
}
