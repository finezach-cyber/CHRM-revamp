// 2nd Closer — shared Subpage. Renders one feature/integration/platform page by slug.
import Link from "next/link";
import type { PageData, ProseItem } from "@/lib/types";
import { getPage, hrefForPage } from "@/lib/data";

// Slots that have a captured product screenshot (others keep the placeholder).
const SHOTS = new Set([
  "product-risk-detection", "product-engagement-summaries", "product-crm-hygiene",
  "product-follow-up-emails", "product-linkedin-outreach",
  "product-workspace", "product-team",
  "product-competitor-intelligence", "product-industry-classification",
  "product-email-sequences", "product-product-recommendations",
  "integrations-hubspot", "integrations-apollo", "integrations-linkedin",
]);

function Crumbs({ page }: { page: PageData }) {
  const sectionLabel =
    page.section === "integrations"
      ? "Integrations"
      : page.section === "platform" && page.slug !== "setup"
      ? "Product"
      : page.section === "platform"
      ? "Setup"
      : "Product";
  const sectionHref =
    page.section === "integrations"
      ? "/integrations"
      : page.section === "platform" && page.slug !== "setup"
      ? "/product"
      : page.section === "platform"
      ? "/setup"
      : "/product";
  return (
    <p className="sp-crumbs">
      <Link href="/">2nd Closer</Link>
      <span>/</span>
      <Link href={sectionHref}>{sectionLabel}</Link>
      <span>/</span>
      <span style={{ color: "var(--ink)" }}>{page.category}</span>
    </p>
  );
}

function Prose({ items }: { items: ProseItem[] }) {
  return (
    <div className="sp-prose">
      {items.map((item, i) => {
        if (typeof item === "string") {
          return <p key={i} dangerouslySetInnerHTML={{ __html: item }} />;
        }
        if (item && "h" in item) {
          return <h3 key={i} dangerouslySetInnerHTML={{ __html: item.h }} />;
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

  return (
    <main className="sp-page" id="top" data-screen-label={page.category}>
      <Crumbs page={page} />

      <header className="sp-hero">
        <h1 className="sp-hero__h" dangerouslySetInnerHTML={{ __html: page.h }} />
        <p className="sp-hero__sub">{page.sub}</p>
      </header>

      <div className="sp-meta">
        {(page.meta || []).map(([k, v]) => (
          <div className="sp-meta__cell" key={k}>
            <p className="sp-meta__k">{k}</p>
            <p className="sp-meta__v" dangerouslySetInnerHTML={{ __html: v }} />
          </div>
        ))}
      </div>

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
            <span className="sp-shot__brand">2nd Closer</span>
            <span className="sp-shot__meta">{page.shotLabel}</span>
          </div>
          <div className="sp-shot__body">
            <img className="sp-shot__img" src={`/assets/screenshots/${shotName}.png`} alt={page.shotLabel} loading="lazy" />
          </div>
          <div className="sp-shot__foot">{page.shotHint}</div>
        </figure>
      )}

      {related.length > 0 && (
        <section className="sp-related">
          <p className="sp-related__h">See also</p>
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
    </main>
  );
}
