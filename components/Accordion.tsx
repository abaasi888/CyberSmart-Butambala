"use client";

import { useId, useState, type ReactNode } from "react";

export function Accordion({ title, children }: { title: ReactNode; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <section className="accordion">
      <h2>
        <button
          type="button"
          className="accordion-trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{title}</span>
          <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button>
      </h2>
      <div className="accordion-panel" id={panelId} hidden={!isOpen}>{children}</div>
    </section>
  );
}
