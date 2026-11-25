import { Accordion } from "@/components/Accordion";
import { T } from "@/components/T";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Accessibility",
  "Read the CyberSmart Butambala accessibility statement and known limitations.",
  "/accessibility/"
);

export default function AccessibilityPage() {
  return (
    <div className="container page-container">
      <header className="page-heading">
        <p className="eyebrow eyebrow-dark"><T k="accessibility.eyebrow" /></p>
        <h1><T k="accessibility.title" /></h1>
        <p className="page-lede"><T k="accessibility.intro" /></p>
      </header>
      <div className="prose content-stack">
        <section>
          <h2><T k="accessibility.commitmentTitle" /></h2>
          <p><T k="accessibility.commitment" /></p>
        </section>
        <section>
          <h2><T k="accessibility.knownTitle" /></h2>
          <p><T k="accessibility.known" /></p>
        </section>
        <Accordion title={<T k="accessibility.feedbackTitle" />}>
          <p><T k="accessibility.feedback" /></p>
        </Accordion>
      </div>
    </div>
  );
}
