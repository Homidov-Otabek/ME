import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = { title: "Проекты" };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="Портфолио" title="Проекты, решающие реальные задачи." description="Веб-платформы, корпоративные системы и мобильные приложения для бизнеса." />
      <ProjectGrid />
    </>
  );
}
