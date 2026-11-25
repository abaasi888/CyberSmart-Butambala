import { LessonCard } from "@/components/LessonCard";
import { T } from "@/components/T";
import { getLesson, lessons } from "@/content/lessons";
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
      <div className="lesson-grid">
        {lessons.map((lesson, index) => {
          const translatedLesson = getLesson(lesson.slug, "lg");
          if (!translatedLesson) throw new Error(`Missing Luganda lesson translation for "${lesson.slug}".`);
          return <LessonCard key={lesson.slug} lesson={lesson} translatedLesson={translatedLesson} index={index} />;
        })}
      </div>
    </div>
  );
}
