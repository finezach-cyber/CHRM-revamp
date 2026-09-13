// Breadcrumb trail: a real <nav><ol> for readers and a BreadcrumbList for engines.
import Link from "next/link";
import type { Crumb } from "@/lib/jsonld";
import { breadcrumb } from "@/lib/jsonld";
import JsonLd from "./JsonLd";

export default function Crumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "2nd Closer", href: "/" }, ...items];
  return (
    <nav className="sp-crumbs" aria-label="Breadcrumb">
      <ol>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {last ? (
                <span style={{ color: "var(--ink)" }} aria-current="page">{c.name}</span>
              ) : (
                <Link href={c.href}>{c.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumb(all)} />
    </nav>
  );
}
