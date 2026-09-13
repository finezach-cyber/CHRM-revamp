// 2nd Closer — shared Subpage. Renders one feature/integration/platform page by slug.
// Structure is deliberate for extraction: h1 → the page's own question-form h2 with a self-contained answer →
// h2 sections → screenshot with figcaption → sources → related. The page's FAQ renders in the shell.
import Link from "next/link";
import type { PageData, ProseItem } from "@/lib/types";
import { getPage, hrefForPage, plainText } from "@/lib/data";
import { webPage } from "@/lib/jsonld";
import Crumbs from "./Crumbs";
import JsonLd from "./JsonLd";
import Sources from "./Sources";

// Slots that have a captured product screenshot (others keep the placeholder).
const SHOTS = new Set([
  "product-risk-detection", "product-engagement-summaries", "product-crm-hygiene",
  "product-follow-up-emails", "product-linkedin-outreach",
  "product-workspace", "product-team",
  "product-competitor-intelligence", "product-industry-classification",
  "product-email-sequences", "product-product-recommendations",
  "integrations-hubspot", "integrations-apollo", "integrations-linkedin",
]);

function crumbsFor(page: PageData) {
  if (page.section === "integrations") return [{ name: "Integrations", href: "/integrations" }];
  if (page.slug === "setup") return [];
  return [{ name: "Product", href: "/product" }];
}

function Prose({ items }: { items: ProseItem[] }) {
  return (
    <div className="sp-prose">
      {items.map((item, i) => {
        if (typeof item === "string") {
          return <p key={i} dangerouslySetInnerHTML={{ __html: item }} />;
        }
        if (item && "h" in item) {
          return <h2 key={i} dangerouslySetInnerHTML={{ __html: item.h }} />;
        }
        if (item && "html" in item) {
          return <div key={i} className="sp-prose__html" dangerouslySetInnerHTML={{ __html: item.html }} />;
        }
        return null;
      })}
    </div>
  );
}

export default function Subpage({ slug }: { slug: string }) {
  const page = getPage(slug);
  if (!page) {
    return (
      <main className="sp-page">
        <p style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>Unknown page: {slug}</p>
      </main>
    );
  }

  const related = (page.related || []).map((s) => getPage(s)).filter(Boolean) as PageData[];
  const shotName = (page.section === "integrations" ? "integrations-" : "product-") + page.slug;
  const hasShot = SHOTS.has(shotName);
  const path = hrefForPage(page.slug);

  return (
    <main className="sp-page" id="top" data-screen-label={page.category}>
      <Crumbs items={[...crumbsFor(page), { name: page.category, href: path }]} />

      <header className="sp-hero">
        <h1 className="sp-hero__h" dangerouslySetInnerHTML={{ __html: page.h }} />
        <p className="sp-hero__sub">{page.sub}</p>
      </header>

      {page.answer && (
        <section className="sp-answer" aria-labelledby="answer-h">
          <h2 className="sp-answer__h" id="answer-h">{page.answer.q}</h2>
          <p className="sp-answer__p" dangerouslySetInnerHTML={{ __html: page.answer.a }} />
        </section>
      )}

      <dl className="sp-meta">
        {(page.meta || []).map(([k, v]) => (
          <div className="sp-meta__cell" key={k}>
            <dt className="sp-meta__k">{k}</dt>
            <dd className="sp-meta__v" dangerouslySetInnerHTML={{ __html: v }} />
          </div>
        ))}
      </dl>

      <section className="sp-body">
        <Prose items={page.prose || []} />
        <ul className="sp-list">
          {(page.bullets || []).map(([title, body]) => (
            <li key={title}>
              <div>
                <strong>{title}</strong>
                <span dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {hasShot && (
        <figure className="sp-shot">
          <div className="sp-shot__head">
            <img src="/assets/2nd-closer-wordmark-day.svg" alt="2nd Closer" className="sp-shot__brand-img" />
            <span className="sp-shot__meta">{page.shotLabel}</span>
          </div>
          <div className="sp-shot__body">
            <img className="sp-shot__img" src={`/assets/screenshots/${shotName}.png`} alt={page.shotLabel} loading="lazy" />
          </div>
          <figcaption className="sp-shot__foot">{page.shotHint}</figcaption>
        </figure>
      )}

      <Sources items={page.sources} />

      {related.length > 0 && (
        <section className="sp-related" aria-labelledby="related-h">
          <h2 className="sp-related__h" id="related-h">See also</h2>
          <div className="sp-related__grid">
            {related.map((r) => (
              <Link key={r.slug} className="sp-related__card" href={hrefForPage(r.slug)}>
                <span className="sp-related__cat">
                  {r.section === "integrations" ? "Integration" : r.section === "platform" ? "Platform" : "Product"}
                </span>
                <h3 className="sp-related__t">{r.category}</h3>
                <p className="sp-related__b">{r.sub.split(". ")[0]}.</p>
                <span className="sp-related__arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <JsonLd
        data={webPage({
          path,
          name: plainText(page.seoTitle || page.category),
          description: plainText(page.sub),
          dateModified: page.updated,
          image: hasShot ? { url: `/assets/screenshots/${shotName}.png`, caption: page.shotLabel } : undefined,
        })}
      />
    </main>
  );
}
