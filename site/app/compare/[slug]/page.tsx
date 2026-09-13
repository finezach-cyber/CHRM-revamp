import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import CompareDetail from "@/components/CompareDetail";
import { getComparePage, compareRouteSlugs } from "@/lib/compare-pages";
import { plainText, clampDescription } from "@/lib/data";

export function generateStaticParams() {
  return compareRouteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparePage(slug);
  if (!page) return {};
  const description = clampDescription(plainText(page.sub));
  const title = page.title.includes("2nd Closer") ? page.title : `${page.title} — 2nd Closer`;
  const image = `/assets/og/compare-${slug}.png`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/compare/${slug}` },
    openGraph: { type: "website", title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function CompareSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getComparePage(slug);
  if (!page) notFound();
  return (
    <PageShell
      current="compare"
      faqs={page.faqs.map(([q, a]) => ({ q, a }))}
      faqTitle={<>Questions we get <em>on this comparison.</em></>}
    >
      <CompareDetail slug={slug} />
    </PageShell>
  );
}
