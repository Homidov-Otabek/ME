"use client";

import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const projectDetails = {
  apps: { title: "Apps.tj", subtitle: "Маркетплейс цифровых продуктов", tasks: ["Продуктовая архитектура и быстрый каталог приложений.", "Адаптивный интерфейс и удобная навигация.", "Интеграция frontend и серверной части."], tech: ["Next.js", "TypeScript", "Full-stack"] },
  paykar: { title: "Paykar Dist", subtitle: "ERP для дистрибуции", tasks: ["Управление складом и логистическими потоками.", "Проектирование рабочих интерфейсов для команды.", "Интеграция данных и бизнес-операций."], tech: ["ERP", "SQL", "Enterprise"] },
  pari: { title: "Paribeauty", subtitle: "Beauty-экосистема", tasks: ["Разработка веб-портала и Android-приложения.", "Единая серверная логика для нескольких платформ.", "Удобные сценарии для клиентов и команды."], tech: ["Kotlin", "React", "Mobile"] },
  dex: { title: "Dex.tj", subtitle: "Образовательная платформа", tasks: ["Системный интерфейс обучения немецкому языку.", "Личная траектория и структура уроков.", "Адаптация продукта под мобильные устройства."], tech: ["Education", "LMS", "Web"] },
  stock: { title: "StockFlow", subtitle: "Мобильная складская логистика", tasks: ["Сканирование и быстрый учёт товаров.", "Нативное Android-приложение для сотрудников.", "Надёжная синхронизация складских операций."], tech: ["Android", "Kotlin", "Logistics"] },
} as const;

type ProjectId = keyof typeof projectDetails;
const projects: { id: ProjectId; name: string; type: string; accent: string }[] = [
  { id: "apps", name: "Apps.tj", type: "digital marketplace", accent: "bg-blue-500" },
  { id: "paykar", name: "Пайкар", type: "retail ecosystem", accent: "bg-red-500" },
  { id: "pari", name: "Paribeauty", type: "beauty platform", accent: "bg-pink-400" },
  { id: "dex", name: "Dex.tj", type: "education", accent: "bg-amber-400" },
  { id: "stock", name: "StockFlow", type: "logistics", accent: "bg-emerald-500" },
];

export default function ProjectCarousel() {
  const [active, setActive] = useState<ProjectId | null>(null);
  const detail = active ? projectDetails[active] : null;

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active]);

  return (
    <section id="projects" className="scroll-mt-28 overflow-hidden bg-[#f8fafc] py-24">
      <div className="mx-auto mb-10 max-w-6xl px-4 sm:px-6"><span className="section-kicker">Избранные проекты</span><h2 className="mt-3 text-4xl font-black tracking-[-.05em]">Продукты, над которыми я работал</h2></div>
      <div className="marquee-group flex overflow-hidden border-y border-neutral-100 bg-white py-10">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="marquee-track flex shrink-0 gap-5 pr-5">
            {projects.map((project) => (
              <button key={`${copy}-${project.id}`} type="button" tabIndex={copy === 1 ? -1 : undefined} onClick={() => setActive(project.id)} className="project-tile group">
                <span className="flex items-center gap-2">
                  <span className={`size-2.5 rounded-full ${project.accent}`} />
                  <strong className="text-xl font-black tracking-[-.04em]">{project.name}</strong>
                </span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400">{project.type}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#0f172a] px-3 py-2 text-[9px] font-bold uppercase tracking-[.13em] text-white transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-neutral-700">
                  Подробнее <ArrowRight size={11} />
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className={`fixed inset-0 z-[80] transition ${active ? "visible opacity-100" : "invisible opacity-0"}`} role="dialog" aria-modal="true" aria-label={detail?.title ?? "Описание проекта"}>
        <button type="button" aria-label="Закрыть" className="absolute inset-0 bg-[#0f172a]/45 backdrop-blur-sm" onClick={() => setActive(null)} />
        <aside className={`absolute right-0 top-0 flex h-full w-full max-w-lg flex-col bg-white p-8 shadow-2xl transition-transform duration-500 ease-out sm:p-12 ${active ? "translate-x-0" : "translate-x-full"}`}>
          <button type="button" onClick={() => setActive(null)} className="ml-auto grid size-11 place-items-center rounded-full bg-neutral-100 transition hover:bg-neutral-200" aria-label="Закрыть панель"><X size={19} /></button>
          {detail && <div className="my-auto py-10"><span className="section-kicker">Кейс-исследование</span><h3 className="mt-4 text-4xl font-black tracking-[-.05em]">{detail.title}</h3><p className="mt-2 text-sm text-neutral-400">{detail.subtitle}</p><h4 className="micro-label mt-10">Выполненные задачи</h4><ul className="mt-5 space-y-4">{detail.tasks.map((task) => <li key={task} className="flex gap-3 text-sm font-light leading-relaxed text-neutral-600"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0f172a]" />{task}</li>)}</ul><h4 className="micro-label mt-10">Стек технологий</h4><div className="mt-4 flex flex-wrap gap-2">{detail.tech.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}</div></div>}
          <button type="button" onClick={() => setActive(null)} className="premium-button w-full">Понятно, закрыть</button>
        </aside>
      </div>
    </section>
  );
}
