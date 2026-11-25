"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/components/LocaleProvider";

export function MobileMenu({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    if (!isOpen) return;

    const focusable = () => panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) ?? [];
    focusable()[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const activeIsOutside = !panelRef.current?.contains(document.activeElement);
      if (event.shiftKey && (document.activeElement === first || activeIsOutside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || activeIsOutside)) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="navigation-controls">
      <button
        ref={triggerRef}
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? t("menu.close") : t("menu.open")}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true" className={isOpen ? "menu-icon is-open" : "menu-icon"}>
          <i />
          <i />
        </span>
        <span className="menu-label">{isOpen ? t("menu.close") : t("menu.open")}</span>
      </button>
      <div
        ref={panelRef}
        className={isOpen ? "navigation-panel is-open" : "navigation-panel"}
        id={panelId}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) setIsOpen(false);
        }}
      >
        <nav className="primary-nav" aria-label="Primary">
          {children}
        </nav>
        <LanguageToggle />
      </div>
    </div>
  );
}
