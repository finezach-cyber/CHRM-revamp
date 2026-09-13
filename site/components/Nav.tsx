// 2nd Closer marketing — top navigation
// Dropdowns under Product (grouped by the 4-step framework), Integrations and Compare. Pricing is a first-class link.
import { Fragment } from "react";
import Link from "next/link";
import { groupedProduct } from "@/lib/steps";
import { INTEGRATION_PAGES, hrefForPage } from "@/lib/data";
import { COMPARE_PAGES } from "@/lib/compare-pages";
import { BOOKING_URL, BETA } from "@/lib/site";

export default function Nav({ current }: { current?: string }) {
  const groups = groupedProduct();
  const integrations = INTEGRATION_PAGES;
  const isCur = (c: string) => current === c;
  const cls = (c: string) => (isCur(c) ? "m-nav__a--cur" : "");
  const aria = (c: string) => (isCur(c) ? ("page" as const) : undefined);

  return (
    <nav className="m-nav" aria-label="Primary">
      <Link href="/" className="m-nav__brand" aria-label="2nd Closer — home">
        <img src="/assets/2nd-closer-wordmark-day.svg" alt="2nd Closer" />
      </Link>
      <div className="m-nav__links">
        <span className="m-nav__group">
          <Link href="/product" className={cls("product")} aria-current={aria("product")} aria-haspopup="true">
            Product
          </Link>
          <div className="m-nav__menu" aria-label="Product features">
            <div className="m-nav__menu-inner">
              {groups.map((g) => (
                <Fragment key={g.id}>
                  <p className="m-nav__menu-h">
                    <em>{g.n}</em>
                    {g.name}
                  </p>
                  {g.pages.map((p) => (
                    <Link key={p.slug} href={hrefForPage(p.slug)}>
                      {p.category}
                    </Link>
                  ))}
                </Fragment>
              ))}
              <div className="m-nav__menu-sep"></div>
              <Link href="/features"><span>How it works</span>Capture · Structure · Activate · Iterate</Link>
              <Link href="/#stories"><span>Stories</span>Four roles, one team</Link>
            </div>
          </div>
        </span>

        <span className="m-nav__group">
          <Link href="/integrations" className={cls("integrations")} aria-current={aria("integrations")} aria-haspopup="true">
            Integrations
          </Link>
          <div className="m-nav__menu" aria-label="Integrations">
            <div className="m-nav__menu-inner">
              {integrations.map((p) => (
                <Link key={p.slug} href={hrefForPage(p.slug)}>
                  {p.category}
                </Link>
              ))}
              <div className="m-nav__menu-sep"></div>
              <Link href="/setup"><span>Get started</span>Setup &middot; live in a day</Link>
            </div>
          </div>
        </span>

        <span className="m-nav__group">
          <Link href="/compare" className={cls("compare")} aria-current={aria("compare")} aria-haspopup="true">
            Compare
          </Link>
          <div className="m-nav__menu" aria-label="Comparisons">
            <div className="m-nav__menu-inner">
              {COMPARE_PAGES.map((p) => (
                <Link key={p.slug} href={"/compare/" + p.slug}>
                  {p.short}
                </Link>
              ))}
              <div className="m-nav__menu-sep"></div>
              <Link href="/calculator"><span>Calculator</span>What the after-call work costs you</Link>
              <Link href="/faq"><span>FAQ</span>Every question, answered</Link>
            </div>
          </div>
        </span>

        <Link href="/startups" className={cls("startups")} aria-current={aria("startups")}>For startups</Link>
        <Link href="/blog" className={cls("blog")} aria-current={aria("blog")}>Blog</Link>
        <Link href="/about" className={cls("about")} aria-current={aria("about")}>About</Link>
      </div>
      <div className="m-nav__ctas">
        <Link href="/beta" className="m-nav__cta">Free beta · BYOK</Link>
        <a href={BOOKING_URL} className="m-nav__cta--btn">{BETA.cta}</a>
      </div>
    </nav>
  );
}
