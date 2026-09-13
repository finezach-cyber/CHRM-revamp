"use client";
// 2nd Closer marketing — FAQ. Collapsible section with accordion questions inside.
// Renders whichever questions it is given; the page shell decides (page-specific by default).
import { useState, type ReactNode } from "react";
import type { QA } from "@/lib/types";

export default function FAQ({
  items,
  title,
  defaultOpen = true,
}: {
  items: QA[];
  title?: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(-1);
  const [sectionOpen, setSectionOpen] = useState(defaultOpen);

  return (
    <section
      className={"m-faq m-faq--collapsible" + (sectionOpen ? " m-faq--open" : "")}
      id="faq"
      data-screen-label="FAQ"
    >
      <button
        className="m-faq__head"
        aria-expanded={sectionOpen}
        aria-controls="faq-panel"
        onClick={() => setSectionOpen((s) => !s)}
      >
        <div className="m-faq__head-l">
          <span className="t-eyebrow">Frequently asked</span>
          <h2 className="m-faq__head-h">
            {title || (
              <>
                Everything you need to know <em>about 2nd Closer.</em>
              </>
            )}
          </h2>
        </div>
        <span className="m-faq__head-meta">{items.length} {items.length === 1 ? "question" : "questions"}</span>
        <span className="m-faq__head-icon" aria-hidden="true">+</span>
      </button>

      <div className="m-faq__panel" id="faq-panel" hidden={!sectionOpen}>
        <ul className="m-faq__list">
          {items.map((f, i) => (
            <li key={f.q} className={"m-faq__item" + (i === open ? " m-faq__item--open" : "")}>
              <button
                className="m-faq__q"
                id={"faq-q-" + i}
                aria-expanded={i === open}
                aria-controls={"faq-a-" + i}
                onClick={() => setOpen(i === open ? -1 : i)}
              >
                <span className="m-faq__q-text">{f.q}</span>
                <span className="m-faq__q-icon" aria-hidden="true">+</span>
              </button>
              <div className="m-faq__a" id={"faq-a-" + i} role="region" aria-labelledby={"faq-q-" + i}>
                {f.a}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
