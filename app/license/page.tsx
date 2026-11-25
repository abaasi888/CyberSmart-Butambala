import { T } from "@/components/T";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "License",
  "Learn how CyberSmart Butambala learning materials and source code may be reused.",
  "/license/"
);

export default function LicensePage() {
  return (
    <div className="container page-container">
      <header className="page-heading">
        <p className="eyebrow eyebrow-dark"><T k="license.eyebrow" /></p>
        <h1><T k="license.title" /></h1>
        <p className="page-lede"><T k="license.intro" /></p>
      </header>
      <div className="license-grid">
        <section className="license-card">
          <span className="license-mark" aria-hidden="true">CC</span>
          <h2><T k="license.materialsTitle" /></h2>
          <p><T k="license.materials" /></p>
          <a className="text-link" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">
            CC BY-SA 4.0 <span aria-hidden="true">↗</span><span className="visually-hidden">(<T k="common.opensNewTab" />)</span>
          </a>
        </section>
        <section className="license-card">
          <span className="license-mark" aria-hidden="true">MIT</span>
          <h2><T k="license.codeTitle" /></h2>
          <p><T k="license.code" /></p>
          <a className="text-link" href="https://opensource.org/license/mit" target="_blank" rel="noreferrer">
            MIT License <span aria-hidden="true">↗</span><span className="visually-hidden">(<T k="common.opensNewTab" />)</span>
          </a>
        </section>
      </div>
      <p className="license-note"><T k="license.reviewNote" /></p>
    </div>
  );
}
