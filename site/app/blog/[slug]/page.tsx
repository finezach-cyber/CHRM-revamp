import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import BlogPost from "@/components/BlogPost";
import { getBlogPost, blogRouteSlugs, plainText } from "@/lib/data";

export function generateStaticParams() {
  return blogRouteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: { absolute: `${post.seoTitle || plainText(post.title)} — 2nd Closer` },
    description: plainText(post.deck),
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", title: plainText(post.title), description: plainText(post.deck) },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getBlogPost(slug)) notFound();
  return (
    <PageShell current="blog">
      <BlogPost slug={slug} />
    </PageShell>
  );
}
