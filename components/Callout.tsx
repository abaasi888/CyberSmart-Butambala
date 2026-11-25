import type { ReactNode } from "react";

export function Callout({
  title,
  children,
  tone = "info",
  headingLevel = "h2"
}: {
  title: ReactNode;
  children: ReactNode;
  tone?: "info" | "note";
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <aside className={`callout callout-${tone}`}>
      <Heading>{title}</Heading>
      <div>{children}</div>
    </aside>
  );
}
