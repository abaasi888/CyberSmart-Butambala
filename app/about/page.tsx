import { Callout } from "@/components/Callout";
import { T } from "@/components/T";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About",
  "Learn about CyberSmart Butambala, a free systems-security education project for schools in Butambala District, Uganda.",
  "/about/"
);

export default function AboutPage() {
  return (
    <div className="container page-container">
      <header className="page-heading">
        <p className="eyebrow eyebrow-dark"><T k="about.eyebrow" /></p>
        <h1><T k="about.title" /></h1>
        <p className="page-lede"><T k="about.intro" /></p>
      </header>
      <div className="prose content-stack">
        <section>
          <h2><T k="about.backgroundTitle" /></h2>
          <p><T k="about.background" /></p>
        </section>
        <section>
          <h2><T k="about.founderTitle" /></h2>
          <p><T k="about.founder" /></p>
        </section>
        <section>
          <h2><T k="about.communityTitle" /></h2>
          <p><T k="about.community" /></p>
        </section>
        <section>
          <h2><T k="about.focusTitle" /></h2>
          <p><T k="about.focus" /></p>
        </section>
        <Callout title={<T k="about.ackTitle" />}>
          <p><T k="footer.acknowledgement" /></p>
        </Callout>
      </div>
    </div>
  );
}
