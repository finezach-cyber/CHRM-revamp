"use client";
// CHRM — shared accessibility helpers (WCAG 2.1 AA).
//  · Injects a "Skip to content" link as the first focusable element.
//  · Tags the page's <main> with a skip-target id + tabindex=-1.
//  · Escape closes an open nav dropdown; arrow keys rove between tablist tabs.
import { useEffect } from "react";

export default function A11y() {
  useEffect(() => {
    function ensureSkipLink() {
      if (document.querySelector(".skip-link")) return;
      const a = document.createElement("a");
      a.className = "skip-link";
      a.href = "#mainContent";
      a.textContent = "Skip to content";
      a.addEventListener("click", () => {
        requestAnimationFrame(() => {
          const id = (a.getAttribute("href") || "#mainContent").replace(/^#/, "");
          const m = document.getElementById(id);
          if (m) (m as HTMLElement).focus();
        });
      });
      if (document.body.firstChild) {
        document.body.insertBefore(a, document.body.firstChild);
      } else {
        document.body.appendChild(a);
      }
    }

    function tagMain() {
      const main = document.querySelector("main");
      if (!main) return false;
      if (!main.id) main.id = "mainContent";
      if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
      const link = document.querySelector(".skip-link");
      if (link) link.setAttribute("href", "#" + main.id);
      return true;
    }

    function onKeydownGlobal(e: KeyboardEvent) {
      if (e.key === "Escape") {
        const active = document.activeElement as HTMLElement | null;
        if (active && active.closest && active.closest(".m-nav__group")) {
          const group = active.closest(".m-nav__group")!;
          const trigger = group.querySelector("a") as HTMLElement | null;
          if (trigger) trigger.blur();
          if (document.activeElement && (document.activeElement as HTMLElement).blur) {
            (document.activeElement as HTMLElement).blur();
          }
        }
      }
    }

    function onKeydownTablist(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const tab = target.closest && target.closest('[role="tab"]');
      if (!tab) return;
      const list = tab.closest('[role="tablist"]');
      if (!list) return;
      const tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]')) as HTMLElement[];
      const i = tabs.indexOf(tab as HTMLElement);
      if (i === -1) return;

      let next: HTMLElement | null = null;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          next = tabs[(i + 1) % tabs.length];
          break;
        case "ArrowLeft":
        case "ArrowUp":
          next = tabs[(i - 1 + tabs.length) % tabs.length];
          break;
        case "Home":
          next = tabs[0];
          break;
        case "End":
          next = tabs[tabs.length - 1];
          break;
        default:
          return;
      }
      if (next) {
        e.preventDefault();
        next.focus();
        next.click();
      }
    }

    ensureSkipLink();
    tagMain();
    document.addEventListener("keydown", onKeydownGlobal);
    document.addEventListener("keydown", onKeydownTablist);

    return () => {
      document.removeEventListener("keydown", onKeydownGlobal);
      document.removeEventListener("keydown", onKeydownTablist);
    };
  }, []);

  return null;
}
