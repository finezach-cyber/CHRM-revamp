// 2nd Closer — Single blog post (author byline + avatar).
import Link from "next/link";
import { BLOG_POSTS, AUTHORS, getBlogPost, hrefForBlog } from "@/lib/data";

function fmt(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogPost({ slug }: { slug: string }) {
  const post = getBlogPost(slug);
  if (!post) {
    return (
      <main className="bp-page">
        <p style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>Unknown post: {slug}</p>
      </main>
    );
  }

  const related = (post.related || []).map((s) => BLOG_POSTS.find((p) => p.slug === s)).filter(Boolean) as typeof BLOG_POSTS;

  const author =
    AUTHORS.zach || {
      name: post.author || "2nd Closer",
      role: "",
      url: post.authorUrl || "",
      avatar: "",
    };

  return (
    <main className="bp-page" id="top">
      <p className="sp-crumbs">
        <Link href="/">2nd Closer</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>{post.category}</span>
      </p>

      <header className="bp-hero">
        <p className="bp-hero__cat">{post.category}</p>
        <h1 className="bp-hero__h" dangerouslySetInnerHTML={{ __html: post.title }} />
        <p className="bp-hero__deck" dangerouslySetInnerHTML={{ __html: post.deck }} />

        <div className="bp-byline">
          {author.avatar && (
            <a className="bp-byline__pic" href={author.url || "#"} target="_blank" rel="noopener noreferrer" aria-label={author.name}>
              <img src={author.avatar} alt={author.name} />
            </a>
          )}
          <div className="bp-byline__meta">
            <div className="bp-byline__name">
              {author.url ? (
                <a href={author.url} target="_blank" rel="noopener noreferrer">{author.name}</a>
              ) : (
                author.name
              )}
              {author.role && <span className="bp-byline__role"> &middot; {author.role}</span>}
            </div>
            <div className="bp-byline__date">
              {fmt(post.date)} &middot; {post.readTime}
            </div>
          </div>
        </div>
      </header>

      <figure className="bp-cover">
        <div className="bp-cover__body">
          <span>Article cover &mdash; placeholder</span>
        </div>
      </figure>

      <article className="bp-body">
        {(post.body || []).map((item, i) => {
          if (typeof item === "string") {
            return <p key={i} dangerouslySetInnerHTML={{ __html: item }} />;
          }
          if (item && "h" in item) {
            return <h2 key={i} dangerouslySetInnerHTML={{ __html: item.h }} />;
          }
          if (item && "html" in item) {
            return <div key={i} className="bp-body__html" dangerouslySetInnerHTML={{ __html: item.html }} />;
          }
          return null;
        })}
      </article>

      {author.name && (
        <aside className="bp-author">
          {author.avatar && (
            <a className="bp-author__pic" href={author.url || "#"} target="_blank" rel="noopener noreferrer" aria-label={author.name}>
              <img src={author.avatar} alt={author.name} />
            </a>
          )}
          <div>
            <p className="bp-author__eye">Written by</p>
            <p className="bp-author__name">
              {author.url ? (
                <a href={author.url} target="_blank" rel="noopener noreferrer">{author.name}</a>
              ) : (
                author.name
              )}
            </p>
            {author.role && <p className="bp-author__role">{author.role}</p>}
            {author.url && (
              <p className="bp-author__link">
                <a href={author.url} target="_blank" rel="noopener noreferrer">Connect on LinkedIn &rarr;</a>
              </p>
            )}
          </div>
        </aside>
      )}

      {related.length > 0 && (
        <section className="bp-related">
          <p className="bp-related__h">Keep reading</p>
          <div className="bp-related__grid">
            {related.map((r) => (
              <Link key={r.slug} href={hrefForBlog(r.slug)} className="bp-related__card">
                <span className="bp-related__cat">{r.category}</span>
                <h3 className="bp-related__t" dangerouslySetInnerHTML={{ __html: r.title }} />
                <p className="bp-related__d" dangerouslySetInnerHTML={{ __html: r.deck }} />
                <span className="bp-related__arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
