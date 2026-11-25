import type { ReactNode } from "react";

export function Callout({ title, children, tone = "info" }: { title: ReactNode; children: ReactNode; tone?: "info" | "note" }) {
  return (
    <aside className={`callout callout-${tone}`}>
      <h2>{title}</h2>
      <div>{children}</div>
    </aside>
  );
}
