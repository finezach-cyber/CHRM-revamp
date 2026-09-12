// CHRM — One comparison page, rendered from lib/compare-pages.ts.
import Link from "next/link";
import type { CmpCell, ComparePageData } from "@/lib/compare-pages";
import { getComparePage } from "@/lib/compare-pages";
import { BOOKING_URL, BETA } from "@/lib/site";

function Cell({ c }: { c: CmpCell }) {
  const sym = c.kind === "yes" ? "✓" : c.kind === "no" ? "—" : c.kind === "shaky" ? "!" : "~";
  const label = c.kind === "yes" ? "Yes" : c.kind === "no" ? "No" : c.kind === "shaky" ? "Caveat" : "Partial";
  return (
    <td className={"cmp-cell cmp-cell--" + c.kind}>
      <span className={"cmp-mark cmp-mark--" + c.kind} aria-label={label}>{sym}</span>
      {c.note && <span className="cmp-note">{c.note}</span>}
    </td>
  );
}

export default function CompareDetail({ slug }: { slug: string }) {
  const page = getComparePage(slug);
  if (!page) return null;
  const related = page.related.map(getComparePage).filter(Boolean) as ComparePageData[];

  return (
    <main className="sp-page cd-page" id="top" data-screen-label={"Compare · " + page.short}>
      <p className="sp-crumbs">
        <Link href="/">CHRM</Link>
        <span>/</span>
        <Link href="/compare">Compare</Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>{page.short}</span>
      </p>

      <header className="sp-hero">
        <p className="cd-eyebrow">{page.eyebrow}</p>
        <h1 className="sp-hero__h" dangerouslySetInnerHTML={{ __html: page.h }} />
        <p className="sp-hero__sub">{page.sub}</p>
      </header>

      <section className="cd-for">
        <p className="cd-for__h">This page is for you if</p>
        <ul className="cd-for__list">
          {page.forWho.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="sp-body cd-body">
        <div className="sp-prose">
          {page.framing.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      <div className="cmp-legend">
        <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--yes">✓</span> Native, by default</span>
        <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--partial">~</span> Partial</span>
        <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--shaky">!</span> Possible with an engineer</span>
        <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--no">—</span> Not supported</span>
      </div>

      <div className="cmp-tableWrap">
        <table className="cmp-table">
          <thead>
            <tr>
              <th scope="col" className="cmp-th cmp-th--cap">Capability</th>
              <th scope="col" className="cmp-th cmp-th--chrm">
                <span className="cmp-th__brand">CHRM</span>
                <span className="cmp-th__sub">The execution layer</span>
              </th>
              <th scope="col" className="cmp-th">
                <span className="cmp-th__brand">{page.themLabel}</span>
                <span className="cmp-th__sub">{page.themSub}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {page.rows.map((r) => (
              <tr key={r.cap}>
                <th scope="row" className="cmp-row-h">{r.cap}</th>
                <Cell c={r.chrm} />
                <Cell c={r.them} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="cd-verdict">
        <p className="cd-verdict__eye">Our honest read</p>
        <p className="cd-verdict__p">{page.verdict}</p>
        <div className="cd-verdict__ctas">
          <a href={BOOKING_URL} className="btn btn--primary">{BETA.cta}</a>
          <Link href="/features" className="btn btn--ghost">See how it works</Link>
        </div>
      </section>

      {page.faqs.length > 0 && (
        <section className="cd-faq">
          <p className="cd-faq__h">Questions we get on this</p>
          <dl>
            {page.faqs.map(([q, a]) => (
              <div key={q}>
                <dt>{q}</dt>
                <dd>{a}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {related.length > 0 && (
        <section className="sp-related">
          <p className="sp-related__h">Other comparisons</p>
          <div className="sp-related__grid">
            {related.map((r) => (
              <Link key={r.slug} className="sp-related__card" href={"/compare/" + r.slug}>
                <span className="sp-related__cat">Compare</span>
                <h3 className="sp-related__t">{r.short}</h3>
                <p className="sp-related__b" dangerouslySetInnerHTML={{ __html: r.h.replace(/<\/?em>/g, "") }} />
                <span className="sp-related__arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {page.sources && page.sources.length > 0 && (
        <p className="cd-sources">
          Sources:{" "}
          {page.sources.map(([label, href], i) => (
            <span key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
              {i < page.sources!.length - 1 ? " · " : ""}
            </span>
          ))}
          . Competitor details as published in September 2026; tell us if something has changed.
        </p>
      )}
    </main>
  );
}
