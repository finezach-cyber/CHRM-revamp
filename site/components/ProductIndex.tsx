// CHRM — Product index page, grouped by Capture/Structure/Activate/Iterate.
// (The source's live "tweaks" panel is omitted; its default layout is baked in.)
import Link from "next/link";
import type { PageData } from "@/lib/types";
import { groupedProduct } from "@/lib/steps";
import { PLATFORM_PAGES, hrefForPage } from "@/lib/data";

function Card({ page, i }: { page: PageData; i: number }) {
  return (
    <Link className="idx-card" href={hrefForPage(page.slug)}>
      <span className="idx-card__n">{String(i + 1).padStart(2, "0")}</span>
      <h3 className="idx-card__t">{page.category}</h3>
      <p className="idx-card__b">{page.sub.split(". ")[0]}.</p>
      <span className="idx-card__arrow">&rarr;</span>
    </Link>
  );
}

export default function ProductIndex() {
  const groups = groupedProduct();
  const platform = PLATFORM_PAGES;

  return (
    <main className="idx-page" id="top">
      <p className="sp-crumbs">
        <Link href="/">CHRM</Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>Product</span>
      </p>

      <header className="idx-hero">
        <p className="idx-hero__eye">Product &middot; CHRM</p>
        <h1 className="idx-hero__h">
          Capture. Structure. Activate. <em>Iterate.</em>
        </h1>
        <p className="idx-hero__sub">
          Twelve features, four steps. The full surface of CHRM, for the buyer who&rsquo;s
          evaluating specific capabilities.
        </p>
      </header>

      <nav className="idx-stepnav" aria-label="Step index">
        {groups.map((g) => (
          <a key={g.id} href={"#" + g.id} className="idx-stepnav__cell">
            <span className="idx-stepnav__n">{g.n}</span>
            <span className="idx-stepnav__nm">{g.name}.</span>
            <span className="idx-stepnav__count">
              {g.pages.length} {g.pages.length === 1 ? "page" : "pages"}
            </span>
          </a>
        ))}
      </nav>

      {groups.map((g) => (
        <section className="idx-section" key={g.id} id={g.id}>
          <header className="idx-section__head">
            <div className="idx-section__num">Step {g.n} &middot; {g.name}</div>
            <div>
              <h2 className="idx-section__h">{g.name}.</h2>
              <p className="idx-section__sub">{g.blurb}</p>
            </div>
          </header>
          <div className="idx-grid">
            {g.pages.map((p, i) => (
              <Card key={p.slug} page={p} i={i} />
            ))}
          </div>
        </section>
      ))}

      {platform.length > 0 && (
        <section className="idx-section" id="platform">
          <header className="idx-section__head">
            <div className="idx-section__num">Platform</div>
            <div>
              <h2 className="idx-section__h">Platform &amp; experience</h2>
              <p className="idx-section__sub">
                The pages that aren&rsquo;t a single feature &mdash; the workspace, the Chrome
                extension, team management.
              </p>
            </div>
          </header>
          <div className="idx-grid">
            {platform.map((p, i) => (
              <Card key={p.slug} page={p} i={i} />
            ))}
          </div>
        </section>
      )}

      <section className="idx-section" id="frameworks">
        <header className="idx-section__head">
          <div className="idx-section__num">Frameworks</div>
          <div>
            <h2 className="idx-section__h">Higher-level pages</h2>
            <p className="idx-section__sub">The narrative around the surface.</p>
          </div>
        </header>
        <div className="idx-grid idx-grid--2">
          <Link className="idx-card" href="/features">
            <span className="idx-card__n">F1</span>
            <h3 className="idx-card__t">The four-step framework</h3>
            <p className="idx-card__b">Capture. Structure. Activate. Iterate. The narrative.</p>
            <span className="idx-card__arrow">&rarr;</span>
          </Link>
          <Link className="idx-card" href="/setup">
            <span className="idx-card__n">F2</span>
            <h3 className="idx-card__t">Setup &amp; onboarding</h3>
            <p className="idx-card__b">Four sign-ins. Live in a day. No engineer.</p>
            <span className="idx-card__arrow">&rarr;</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
