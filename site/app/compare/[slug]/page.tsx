import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import CompareDetail from "@/components/CompareDetail";
import { getComparePage, compareRouteSlugs } from "@/lib/compare-pages";
import { plainText } from "@/lib/data";

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
  return {
    title: { absolute: `${page.title} — 2nd Closer` },
    description: plainText(page.sub),
    alternates: { canonical: `/compare/${slug}` },
  };
}

export default async function CompareSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getComparePage(slug)) notFound();
  return (
    <PageShell current="compare">
      <CompareDetail slug={slug} />
    </PageShell>
  );
}
