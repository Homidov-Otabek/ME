"use client";

import { useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Globe2, LockKeyhole, Smartphone } from "lucide-react";
import { projects, type Project } from "@/lib/data";

const filters: Array<"Все" | Project["category"]> = ["Все", "Web", "Mobile", "Business"];
const icons = { Web: Globe2, Mobile: Smartphone, Business: BriefcaseBusiness };

export default function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Все");
  const visible = filter === "Все" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="py-16 sm:py-24">
      <div className="shell">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Фильтр проектов">
          {filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${filter === item ? "border-[#1f6b4d] bg-[#1f6b4d] text-white" : "border-[#dce4df] bg-white hover:border-[#9aaba1]"}`}>{item}</button>)}
        </div>
        <p className="mt-5 text-sm text-[#65736c]">Показано: {visible.length}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, index) => {
            const Icon = icons[project.category];
            return (
              <article key={project.title} className="card flex min-h-[330px] flex-col p-7">
                <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-[#dff2e8] text-[#1f6b4d]"><Icon size={21} /></span><span className="font-mono text-xs text-[#87928c]">{String(index + 1).padStart(2, "0")}</span></div>
                <h2 className="mt-8 text-2xl font-bold tracking-[-.04em]">{project.title}</h2>
                <p className="mt-3 flex-1 leading-7 text-[#65736c]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f0f5f1] px-3 py-1.5 text-xs font-semibold text-[#496057]">{tag}</span>)}</div>
                <div className="mt-6 border-t border-[#dce4df] pt-5">
                  {project.url ? <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-[#1f6b4d] hover:underline">Открыть проект <ArrowUpRight size={17} /></a> : <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#87928c]"><LockKeyhole size={16} /> Внутренний проект</span>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
