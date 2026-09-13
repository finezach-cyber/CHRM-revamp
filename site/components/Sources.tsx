// A sources line under any block that states a number. Attributed claims are citable; bare ones read as marketing.
import type { SourceLink } from "@/lib/types";

export default function Sources({ items, note, className }: { items?: SourceLink[]; note?: string; className?: string }) {
  if (!items || items.length === 0) return null;
  return (
    <p className={"cd-sources" + (className ? " " + className : "")}>
      Sources:{" "}
      {items.map(([label, href], i) => (
        <span key={href}>
          <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
          {i < items.length - 1 ? " · " : ""}
        </span>
      ))}
      {note ? `. ${note}` : "."}
    </p>
  );
}
