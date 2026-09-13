// 2nd Closer — One comparison page, rendered from lib/compare-pages.ts.
// The table is the most citable asset on the site, so every cell carries a word ("Yes", "No") as well as a glyph.
import Link from "next/link";
import type { CmpCell, ComparePageData } from "@/lib/compare-pages";
import { getComparePage } from "@/lib/compare-pages";
import { BOOKING_URL, BETA } from "@/lib/site";
import { plainText } from "@/lib/data";
import { webPage } from "@/lib/jsonld";
import Crumbs from "./Crumbs";
import JsonLd from "./JsonLd";
import Sources from "./Sources";

const WORD: Record<CmpCell["kind"], string> = { yes: "Yes", no: "No", shaky: "Caveat", partial: "Partial" };
const SYM: Record<CmpCell["kind"], string> = { yes: "✓", no: "—", shaky: "!", partial: "~" };

function Cell({ c }: { c: CmpCell }) {
  return (
    <td className={"cmp-cell cmp-cell--" + c.kind}>
      <span className="sr-only">{WORD[c.kind]}. </span>
      <span className={"cmp-mark cmp-mark--" + c.kind} aria-hidden="true">{SYM[c.kind]}</span>
      {c.note && <span className="cmp-note"> {c.note}</span>}
    </td>
  );
}

export default function CompareDetail({ slug }: { slug: string }) {
  const page = getComparePage(slug);
  if (!page) return null;
  const related = page.related.map(getComparePage).filter(Boolean) as ComparePageData[];
  const path = "/compare/" + page.slug;

  return (
    <main className="sp-page cd-page" id="top" data-screen-label={"Compare · " + page.short}>
      <Crumbs items={[{ name: "Compare", href: "/compare" }, { name: page.short, href: path }]} />

      <header className="sp-hero">
        <p className="cd-eyebrow">{page.eyebrow}</p>
        <h1 className="sp-hero__h" dangerouslySetInnerHTML={{ __html: page.h }} />
        <p className="sp-hero__sub">{page.sub}</p>
      </header>

      {page.answer && (
        <section className="sp-answer" aria-labelledby="answer-h">
          <h2 className="sp-answer__h" id="answer-h">{page.answer.q}</h2>
          <p className="sp-answer__p" dangerouslySetInnerHTML={{ __html: page.answer.a }} />
        </section>
      )}

      <section className="cd-for" aria-labelledby="for-h">
        <h2 className="cd-for__h" id="for-h">Who is this page for?</h2>
        <ul className="cd-for__list">
          {page.forWho.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="sp-body cd-body" aria-labelledby="framing-h">
        <h2 className="cd-for__h" id="framing-h">How does 2nd Closer compare with {page.themLabel}?</h2>
        <div className="sp-prose">
          {page.framing.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      {page.more && page.more.length > 0 && (
        <section className="sp-body cd-body" aria-labelledby="more-h">
          <h2 className="cd-for__h" id="more-h">When is {page.themLabel} the better choice?</h2>
          <div className="sp-prose">
            {page.more.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </section>
      )}

      <div className="cmp-legend" aria-hidden="true">
        <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--yes">✓</span> Native, by default</span>
        <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--partial">~</span> Partial</span>
        <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--shaky">!</span> Possible with an engineer</span>
        <span className="cmp-legend__item"><span className="cmp-mark cmp-mark--no">—</span> Not supported</span>
      </div>

      <div className="cmp-tableWrap">
        <table className="cmp-table">
          <caption className="sr-only">2nd Closer versus {page.themLabel}, capability by capability. Yes means native by default; Partial means part of the job; Caveat means possible with an engineer; No means not supported.</caption>
          <thead>
            <tr>
              <th scope="col" className="cmp-th cmp-th--cap">Capability</th>
              <th scope="col" className="cmp-th cmp-th--chrm">
                <span className="cmp-th__brand">2nd Closer</span>
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

      <section className="cd-verdict" aria-labelledby="verdict-h">
        <h2 className="cd-verdict__eye" id="verdict-h">Which should you pick?</h2>
        <p className="cd-verdict__p">{page.verdict}</p>
        <div className="cd-verdict__ctas">
          <a href={BOOKING_URL} className="btn btn--primary">{BETA.cta}</a>
          <Link href="/features" className="btn btn--ghost">See how it works</Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="sp-related" aria-labelledby="related-h">
          <h2 className="sp-related__h" id="related-h">Other comparisons</h2>
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

      <Sources items={page.sources} note="Competitor details as published in September 2026; tell us if something has changed" />

      <JsonLd
        data={webPage({
          path,
          name: page.title,
          description: plainText(page.sub),
          dateModified: page.updated,
        })}
      />
    </main>
  );
}
