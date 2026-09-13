import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Subpage from "@/components/Subpage";
import { getPage, productRouteSlugs, plainText, clampDescription } from "@/lib/data";

export function generateStaticParams() {
  return productRouteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return {
    title: { absolute: `${page.seoTitle || page.category} — 2nd Closer` },
    description: clampDescription(plainText(page.sub)),
    alternates: { canonical: `/product/${slug}` },
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return (
    <PageShell current="product" faqs={page.faqs} faqTitle={<>Questions on <em>{page.category.toLowerCase()}.</em></>}>
      <Subpage slug={slug} />
    </PageShell>
  );
}
