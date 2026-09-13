// 2nd Closer — Blog index page (author byline + avatar).
import Link from "next/link";
import { BLOG_POSTS, AUTHORS, hrefForBlog, plainText } from "@/lib/data";
import { fmtDate } from "@/lib/dates";
import { itemList } from "@/lib/jsonld";
import Crumbs from "./Crumbs";
import JsonLd from "./JsonLd";

export default function BlogIndex() {
  const posts = BLOG_POSTS.slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const zach = AUTHORS.zach;
  const [feature, ...rest] = posts;

  return (
    <main className="blog-index" id="top">
      <Crumbs items={[{ name: "Blog", href: "/blog" }]} />

      <header className="blog-index__hero">
        <p className="blog-index__eye">The 2nd Closer Journal</p>
        <h1 className="blog-index__h">
          Notes from the <em>execution layer.</em>
        </h1>
        <p className="blog-index__sub">
          Field notes, design philosophy, and longer essays on how B2B go-to-market actually
          works &mdash; and where it&rsquo;s broken.
        </p>
        {zach && (
          <div className="blog-index__author">
            <a className="blog-index__author-pic" href={zach.url} target="_blank" rel="noopener noreferrer" aria-label={zach.name}>
              <img src={zach.avatar} alt={zach.name} />
            </a>
            <div>
              <p className="blog-index__author-eye">All posts by</p>
              <p className="blog-index__author-name">
                <a href={zach.url} target="_blank" rel="noopener noreferrer">{zach.name}</a>
                <span> &middot; {zach.role}</span>
              </p>
            </div>
          </div>
        )}
      </header>

      <section className="sp-answer" aria-labelledby="answer-h">
        <h2 className="sp-answer__h" id="answer-h">What is the 2nd Closer Journal about?</h2>
        <p className="sp-answer__p">
          The Journal is where 2nd Closer writes about the work around the sales call rather than the call itself:
          how a founder hands a process to a first AE without losing it, what a follow-up email should contain
          and how fast it should go, how to put MEDDPICC into HubSpot or Pipedrive as fields that actually get
          filled, why a workflow builder is the wrong abstraction for after-call work, and what a GTM engineer
          costs against what one automates. Every piece is written by the founder, dated, and revised when the
          product or the market changes; nine pieces so far. The templates and field maps in them are free to
          download and work whether or not a team uses 2nd Closer, because the point of each piece is the
          practice, and the product is the version of the practice that runs itself.
        </p>
      </section>

      {feature && (
        <Link href={hrefForBlog(feature.slug)} className="blog-feature">
          <div className="blog-feature__copy">
            <span className="blog-feature__cat">{feature.category} &middot; Featured</span>
            <h2 className="blog-feature__h" dangerouslySetInnerHTML={{ __html: feature.title }} />
            <p className="blog-feature__deck" dangerouslySetInnerHTML={{ __html: feature.deck }} />
            {zach && (
              <div className="blog-feature__byline">
                <img src={zach.avatar} alt={zach.name} />
                <span>
                  <strong>{zach.name}</strong> &middot; <time dateTime={feature.date}>{fmtDate(feature.date)}</time> &middot; {feature.readTime}
                </span>
              </div>
            )}
          </div>
          <div className="blog-feature__shot">
            {feature.cover ? (
              <img src={feature.cover} alt={plainText(feature.title)} width={1200} height={630} />
            ) : (
              <span>{feature.category}</span>
            )}
          </div>
        </Link>
      )}

      <section className="blog-list">
        <h2 className="blog-list__h">All posts</h2>
        <ul className="blog-list__ul">
          {rest.map((p) => (
            <li key={p.slug}>
              <Link href={hrefForBlog(p.slug)} className="blog-row">
                <span className="blog-row__cat">{p.category}</span>
                <span className="blog-row__title" dangerouslySetInnerHTML={{ __html: p.title }} />
                <span className="blog-row__meta">
                  {zach && <img src={zach.avatar} alt="" className="blog-row__avatar" />}
                  <time dateTime={p.date}>{fmtDate(p.date)}</time> &middot; {p.readTime}
                </span>
                <span className="blog-row__arrow">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <JsonLd data={itemList("The 2nd Closer Journal", posts.map((p) => ({ name: plainText(p.title), href: hrefForBlog(p.slug) })))} />
    </main>
  );
}
