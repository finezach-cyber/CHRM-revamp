// 2nd Closer — Blog index page (author byline + avatar).
import Link from "next/link";
import { BLOG_POSTS, AUTHORS, hrefForBlog } from "@/lib/data";

function fmt(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogIndex() {
  const posts = BLOG_POSTS.slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const zach = AUTHORS.zach;
  const [feature, ...rest] = posts;

  return (
    <main className="blog-index" id="top">
      <p className="sp-crumbs">
        <Link href="/">2nd Closer</Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>Blog</span>
      </p>

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
                  <strong>{zach.name}</strong> &middot; {fmt(feature.date)} &middot; {feature.readTime}
                </span>
              </div>
            )}
          </div>
          <div className="blog-feature__shot">
            <span>Cover &mdash; placeholder</span>
          </div>
        </Link>
      )}

      <section className="blog-list">
        <p className="blog-list__h">All posts</p>
        <ul className="blog-list__ul">
          {rest.map((p) => (
            <li key={p.slug}>
              <Link href={hrefForBlog(p.slug)} className="blog-row">
                <span className="blog-row__cat">{p.category}</span>
                <span className="blog-row__title" dangerouslySetInnerHTML={{ __html: p.title }} />
                <span className="blog-row__meta">
                  {zach && <img src={zach.avatar} alt="" className="blog-row__avatar" />}
                  {fmt(p.date)} &middot; {p.readTime}
                </span>
                <span className="blog-row__arrow">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
