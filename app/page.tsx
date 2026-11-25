import Link from "next/link";
import { T } from "@/components/T";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

export const metadata = pageMetadata(
  SITE_NAME,
  "Free cybersecurity education for primary and secondary schools in Butambala District, Uganda.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><T k="home.eyebrow" /></p>
            <h1><T k="home.title" /></h1>
            <p className="hero-subhead"><T k="home.subhead" /></p>
            <p className="hero-intro"><T k="home.intro" /></p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/lessons/"><T k="home.lessonsCta" /><span aria-hidden="true">→</span></Link>
              <Link className="button button-secondary" href="/about/"><T k="home.aboutCta" /></Link>
            </div>
            <p className="fellowship-note"><span className="fellowship-mark" aria-hidden="true">✳</span><T k="home.acknowledgement" /></p>
          </div>
          <div className="hero-illustration" aria-hidden="true">
            <div className="hero-orbit orbit-outer" />
            <div className="hero-orbit orbit-inner" />
            <div className="illustration-device">
              <span className="device-speaker" />
              <svg viewBox="0 0 120 140" fill="none">
                <path d="M60 7 106 25v34c0 34-19 57-46 73C33 116 14 93 14 59V25L60 7Z" />
                <path d="m39 68 14 14 30-34" />
              </svg>
              <span className="device-status" />
            </div>
            <span className="orbit-label label-top"><T k="home.think" /></span>
            <span className="orbit-label label-bottom"><T k="home.checkChoose" /></span>
            <span className="orbit-star star-one">✳</span>
            <span className="orbit-star star-two">✳</span>
          </div>
        </div>
      </section>

      <section className="home-intro section-space">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow eyebrow-dark"><T k="home.introEyebrow" /></p>
            <h2><T k="home.introTitle" /></h2>
          </div>
          <p><T k="home.introText" /></p>
        </div>
      </section>

      <section className="home-lessons section-space">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark"><T k="home.lessonsEyebrow" /></p>
              <h2><T k="home.lessonsTitle" /></h2>
            </div>
            <Link className="text-link" href="/lessons/"><T k="common.learnMore" /><span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-topic-grid">
            <div><span>01</span><h3><T k="home.topicThreatTitle" /></h3><p><T k="home.topicThreatText" /></p></div>
            <div><span>02</span><h3><T k="home.topicAuthenticationTitle" /></h3><p><T k="home.topicAuthenticationText" /></p></div>
            <div><span>03</span><h3><T k="home.topicPhishingTitle" /></h3><p><T k="home.topicPhishingText" /></p></div>
          </div>
        </div>
      </section>

      <section className="home-acknowledgement">
        <div className="container acknowledgement-inner">
          <span className="acknowledgement-symbol" aria-hidden="true">✳</span>
          <div>
            <p className="eyebrow"><T k="home.programEyebrow" /></p>
            <h2><T k="home.acknowledgement" /></h2>
            <p><T k="footer.acknowledgement" /></p>
          </div>
        </div>
      </section>
    </>
  );
}
