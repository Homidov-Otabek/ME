import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { experience } from "@/lib/data";

export const metadata: Metadata = { title: "Опыт" };

export default function ExperiencePage() {
  return (
    <>
      <PageIntro eyebrow="Карьера" title="Опыт, построенный на реальных продуктах." description="Путь от разработки интерфейсов до архитектуры систем и внедрения AI в бизнес-процессы." />
      <section className="py-20 sm:py-28"><div className="shell max-w-5xl">{experience.map((item, index) => <article key={item.period} className="grid gap-6 border-t border-[#cfd9d3] py-10 first:border-t-0 md:grid-cols-[180px_1fr]"><div><span className="font-mono text-sm font-bold text-[#1f6b4d]">{item.period}</span><p className="mt-3 text-sm text-[#65736c]">{item.company}</p></div><div><span className="text-xs font-bold uppercase tracking-[.12em] text-[#ef7d45]">Этап 0{index + 1}</span><h2 className="mt-3 text-2xl font-bold tracking-[-.04em] sm:text-3xl">{item.role}</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[#65736c]">{item.description}</p><div className="mt-6 flex flex-wrap gap-2">{item.stack.map((tech) => <span key={tech} className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">{tech}</span>)}</div></div></article>)}</div></section>
    </>
  );
}
