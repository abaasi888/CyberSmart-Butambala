import { notFound } from "next/navigation";
import { LocalizedLessonContent } from "@/components/LocalizedLessonContent";
import { lessons, getLesson } from "@/content/lessons";
import { pageMetadata } from "@/lib/seo";

interface LessonPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
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
  const translatedLesson = getLesson(params.slug, "lg");
  if (!translatedLesson) throw new Error(`Missing Luganda lesson translation for "${params.slug}".`);
  return <LocalizedLessonContent lesson={lesson} translatedLesson={translatedLesson} />;
}
