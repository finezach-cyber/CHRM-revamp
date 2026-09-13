import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import BlogPost from "@/components/BlogPost";
import { getBlogPost, blogRouteSlugs, plainText, clampDescription } from "@/lib/data";
import { AUTHORS } from "@/lib/blog-posts";

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
  const description = clampDescription(plainText(post.deck));
  const cover = post.cover || "/assets/og-cover.png";
  return {
    title: { absolute: `${post.seoTitle || plainText(post.title)} — 2nd Closer` },
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: plainText(post.title),
      description,
      images: [cover],
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [AUTHORS.zach.url],
    },
    twitter: { card: "summary_large_image", title: plainText(post.title), description, images: [cover] },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return (
    <PageShell current="blog" faqs={post.faqs} faqTitle={<>Questions on <em>this piece.</em></>}>
      <BlogPost slug={slug} />
    </PageShell>
  );
}
