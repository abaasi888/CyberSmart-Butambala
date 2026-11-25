import { LessonCard } from "@/components/LessonCard";
import { T } from "@/components/T";
import { lessons } from "@/content/lessons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Lessons",
  "Six classroom-ready systems-security lessons for students and teachers.",
  "/lessons/"
);

export default function LessonsPage() {
  return (
    <div className="container page-container">
      <header className="page-heading">
        <p className="eyebrow eyebrow-dark"><T k="lessons.eyebrow" /></p>
        <h1><T k="lessons.title" /></h1>
        <p className="page-lede"><T k="lessons.intro" /></p>
      </header>
      <p className="language-note"><T k="lessons.englishNote" /></p>
      <div className="lesson-grid">
        {lessons.map((lesson, index) => <LessonCard key={lesson.slug} lesson={lesson} index={index} />)}
      </div>
    </div>
  );
}
