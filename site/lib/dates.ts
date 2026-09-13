// Dates the site can state in machine-readable form.

/** Date of the last site-wide copy revision (the CHRM → 2nd Closer rename). Used as lastmod/dateModified for pages without their own date. */
export const SITE_UPDATED = "2026-09-12";

export function fmtDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
