import { notFound } from "next/navigation";
import { T } from "@/components/T";
import { Callout } from "@/components/Callout";
import { lessons, getLesson } from "@/content/lessons";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

interface LessonPageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return lessons.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: LessonPageProps) {
  const lesson = getLesson(params.slug);
  if (!lesson) return pageMetadata("Lesson not found", "This lesson could not be found.", "/lessons/");
  return pageMetadata(lesson.title, lesson.summary, `/lessons/${lesson.slug}/`);
}

export default function LessonPage({ params }: LessonPageProps) {
  const lesson = getLesson(params.slug);
  if (!lesson) notFound();

  const { studentSection, teacherSection } = lesson;

  return (
    <article className="container page-container lesson-detail">
      <Link className="back-link" href="/lessons/">← <T k="common.backToLessons" /></Link>
      <header className="page-heading lesson-heading">
        <p className="eyebrow eyebrow-dark"><T k="lesson.pageTitle" /> · SYSTEMS SECURITY</p>
        <h1>{lesson.title}</h1>
        <p className="page-lede">{lesson.summary}</p>
      </header>
      <Callout title={<T k="lesson.systemsCore" />}>
        <ul className="tag-list tag-list-large">
          {lesson.systemsSecurityCore.map((topic) => <li key={topic}>{topic}</li>)}
        </ul>
      </Callout>

      <section className="audience-section student-section" aria-labelledby="student-heading">
        <header className="audience-heading">
          <span className="audience-number">01</span>
          <h2 id="student-heading"><T k="common.forStudents" /></h2>
        </header>
        <div className="prose content-stack">
          <section><h3><T k="common.bigIdea" /></h3><p>{studentSection.bigIdea}</p></section>
          <section><h3><T k="common.howItWorks" /></h3><p>{studentSection.howItWorks}</p></section>
          <section><h3><T k="common.whereSystemsFail" /></h3><p>{studentSection.whereSystemsFail}</p></section>
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

      <section className="audience-section teacher-section" aria-labelledby="teacher-heading">
        <header className="audience-heading">
          <span className="audience-number">02</span>
          <h2 id="teacher-heading"><T k="common.forTeachers" /></h2>
        </header>
        <div className="prose content-stack">
          <section>
            <h3><T k="common.technicalFraming" /></h3>
            <ul>{teacherSection.technicalFraming.map((point) => <li key={point}>{point}</li>)}</ul>
          </section>
          <section><h3><T k="common.teachingTip" /></h3><p>{teacherSection.teachingTip}</p></section>
          <section><h3><T k="common.discussionPrompt" /></h3><p>{teacherSection.discussionPrompt}</p></section>
          <section><h3><T k="common.extension" /></h3><p>{teacherSection.extension}</p></section>
        </div>
      </section>
      <Callout title={<T k="lessons.englishOnlyTitle" />} tone="note">
        <p><T k="lessons.englishNote" /></p>
      </Callout>
    </article>
  );
}
