"use client";

import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Callout } from "@/components/Callout";
import { T } from "@/components/T";
import { useLocale } from "@/components/LocaleProvider";
import type { Lesson } from "@/content/lessons";

export function LocalizedLessonContent({ lesson, translatedLesson }: { lesson: Lesson; translatedLesson: Lesson }) {
  const { locale } = useLocale();
  const content = locale === "lg" ? translatedLesson : lesson;
  const { studentSection, teacherSection } = content;

  return (
    <article className="container page-container lesson-detail">
      <Link className="back-link" href="/lessons/">← <T k="common.backToLessons" /></Link>
      <header className="page-heading lesson-heading">
        <p className="eyebrow eyebrow-dark"><T k="lesson.pageTitle" /> · <T k="lesson.track" /></p>
        <h1>{content.title}</h1>
        <p className="page-lede">{content.summary}</p>
      </header>
      <Callout title={<T k="lesson.systemsCore" />} headingLevel="h3">
        <p>{content.systemsSecurityCore}</p>
      </Callout>

      <section className="audience-section student-section prose content-stack" aria-labelledby="student-heading">
        <h2 id="student-heading"><T k="common.forStudents" /></h2>
        <Callout title={<T k="common.bigIdea" />} headingLevel="h3">
          <p>{studentSection.bigIdea}</p>
        </Callout>
        <div className="prose content-stack">
          <section><h3><T k="common.howItWorks" /></h3><p>{studentSection.howItWorks}</p></section>
          <Callout title={<T k="common.whereSystemsFail" />} headingLevel="h3">
            <p>{studentSection.whereSystemsFail}</p>
          </Callout>
          <section>
            <h3><T k="common.howToDefend" /></h3>
            <ul>{studentSection.howToDefend.map((tip) => <li key={tip}>{tip}</li>)}</ul>
          </section>
          <section>
            <h3><T k="common.selfCheck" /></h3>
            <ol>{studentSection.selfCheck.map((question) => <li key={question}>{question}</li>)}</ol>
          </section>
        </div>
      </section>

      <Accordion title={<T k="common.forTeachers" />}>
        <section className="audience-section teacher-section prose content-stack" aria-labelledby="teacher-heading">
          <h3 id="teacher-heading"><T k="common.technicalFraming" /></h3>
          <ul>{teacherSection.technicalFraming.map((point) => <li key={point}>{point}</li>)}</ul>
          <section>
            <h3><T k="common.teachingTip" /></h3>
            <p>{teacherSection.teachingTip}</p>
          </section>
          <section>
            <h3><T k="common.discussionPrompt" /></h3>
            <p>{teacherSection.discussionPrompt}</p>
          </section>
          <section>
            <h3><T k="common.extension" /></h3>
            <p>{teacherSection.extension}</p>
          </section>
        </section>
      </Accordion>
    </article>
  );
}
