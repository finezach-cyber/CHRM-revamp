// 2nd Closer — Single blog post (author byline + avatar, dated in machine-readable form, BlogPosting schema).
import Link from "next/link";
import { BLOG_POSTS, AUTHORS, getBlogPost, hrefForBlog, plainText } from "@/lib/data";
import { fmtDate } from "@/lib/dates";
import { blogPosting } from "@/lib/jsonld";
import Crumbs from "./Crumbs";
import JsonLd from "./JsonLd";
import Sources from "./Sources";

function wordCount(post: { deck: string; body: unknown[] }): number {
  const text = [post.deck, ...post.body.map((b) => (typeof b === "string" ? b : (b as { h?: string; html?: string }).h || (b as { html?: string }).html || ""))]
    .map(plainText)
    .join(" ");
  return text.split(/\s+/).filter(Boolean).length;
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
  const author = AUTHORS.zach;
  const path = hrefForBlog(post.slug);
  const updated = post.updated && post.updated !== post.date ? post.updated : null;
  const title = plainText(post.title);

  return (
    <main className="bp-page" id="top">
      <Crumbs items={[{ name: "Blog", href: "/blog" }, { name: post.category, href: path }]} />

      <header className="bp-hero">
        <p className="bp-hero__cat">{post.category}</p>
        <h1 className="bp-hero__h" dangerouslySetInnerHTML={{ __html: post.title }} />
        <p className="bp-hero__deck" dangerouslySetInnerHTML={{ __html: post.deck }} />

        <div className="bp-byline">
          <a className="bp-byline__pic" href={author.url} target="_blank" rel="noopener noreferrer" aria-label={author.name}>
            <img src={author.avatar} alt={author.name} />
          </a>
          <div className="bp-byline__meta">
            <div className="bp-byline__name">
              <a href={author.url} target="_blank" rel="noopener noreferrer">{author.name}</a>
              <span className="bp-byline__role"> &middot; {author.role}</span>
            </div>
            <div className="bp-byline__date">
              <time dateTime={post.date}>{fmtDate(post.date)}</time> &middot; {post.readTime}
              {updated && (
                <>
                  {" "}&middot; Updated <time dateTime={updated}>{fmtDate(updated)}</time>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <figure className="bp-cover">
        {post.cover ? (
          <img className="bp-cover__img" src={post.cover} alt={`${title} — 2nd Closer`} width={1200} height={630} />
        ) : (
          <div className="bp-cover__body"><span>{post.category}</span></div>
        )}
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

      <Sources items={post.sources} className="bp-sources" />

      <aside className="bp-author">
        <a className="bp-author__pic" href={author.url} target="_blank" rel="noopener noreferrer" aria-label={author.name}>
          <img src={author.avatar} alt={author.name} />
        </a>
        <div>
          <p className="bp-author__eye">Written by</p>
          <p className="bp-author__name">
            <a href={author.url} target="_blank" rel="noopener noreferrer">{author.name}</a>
          </p>
          <p className="bp-author__role">{author.role}</p>
          <p className="bp-author__link">
            <a href={author.url} target="_blank" rel="noopener noreferrer">Connect on LinkedIn &rarr;</a>
          </p>
        </div>
      </aside>

      {related.length > 0 && (
        <section className="bp-related" aria-labelledby="related-h">
          <h2 className="bp-related__h" id="related-h">Keep reading</h2>
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

      <JsonLd data={blogPosting(post, { path, headline: title, description: plainText(post.deck), wordCount: wordCount(post) })} />
    </main>
  );
}
