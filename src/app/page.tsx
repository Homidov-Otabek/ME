import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Clock3,
  Code2,
  Database,
  FolderKanban,
  Layers3,
  MapPin,
  Smartphone,
  Zap,
} from "lucide-react";
import ProjectCarousel from "@/components/ProjectCarousel";

const directions = [
  {
    number: "01 / Mobile",
    title: "Mobile Development",
    text: "Создаю нативные и кроссплатформенные приложения с плавным интерфейсом, отзывчивыми жестами и надёжной архитектурой.",
    stack: ["Kotlin", "Flutter", "Jetpack Compose", "App Security"],
    icon: Smartphone,
    className: "lg:col-span-7",
    glow: "bg-emerald-100/70",
  },
  {
    number: "02 / Web",
    title: "Frontend Engineering",
    text: "Проектирую чистые, быстрые и адаптивные веб-интерфейсы с высокой степенью кастомизации и аккуратной анимацией.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: Code2,
    className: "lg:col-span-5",
    glow: "bg-blue-100/70",
  },
  {
    number: "03 / Intelligence",
    title: "AI & Automation",
    text: "Интегрирую LLM, умный поиск по собственным данным и системы компьютерного зрения в реальные бизнес-процессы.",
    stack: ["LLM APIs", "RAG", "Computer Vision", "Dahua SDK"],
    icon: Bot,
    className: "lg:col-span-5",
    glow: "bg-violet-100/70",
  },
  {
    number: "04 / Backend",
    title: "Backend & Server",
    text: "Строю надёжные базы данных, безопасные API и серверные сценарии, которые выдерживают рост продукта и нагрузки.",
    stack: ["Node.js", "Python", "PostgreSQL", "REST API"],
    icon: Database,
    className: "lg:col-span-7",
    glow: "bg-fuchsia-100/60",
  },
];

const experience = [
  {
    period: "2023 — сейчас",
    company: "Ieram · Logistics",
    role: "Full-stack Developer & AI Engineer",
    text: "Автоматизация логистики, интеграция AI-моделей и разработка систем мониторинга с использованием компьютерного зрения.",
  },
  {
    period: "2021 — 2023",
    company: "Product teams · Freelance",
    role: "Web & Mobile Developer",
    text: "Веб-продукты, backend-системы и Android-приложения для ритейла, сервисов и e-commerce.",
  },
];

export default function Home() {
  return (
    <>
      <section id="home" className="px-4 pb-16 pt-32 sm:px-6 lg:min-h-screen lg:pt-40">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-12">
          <article className="bento-card group relative flex min-h-[450px] flex-col justify-between overflow-hidden p-8 sm:p-12 lg:col-span-8">
            <div className="pointer-events-none absolute -right-14 -top-14 size-60 rounded-full bg-slate-100/70 blur-3xl transition duration-700 group-hover:scale-125" />
            <div className="relative">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#f4f5f7] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-neutral-500">
                <MapPin size={14} /> Душанбе, Таджикистан
              </div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-neutral-400">Инженер-разработчик</p>
              <h1 className="max-w-2xl text-5xl font-black leading-[.94] tracking-[-.065em] text-[#0f172a] sm:text-7xl">
                Homidov<br />Otabek<span className="text-neutral-300">.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-neutral-400 sm:text-xl">
                Создаю продуманные мобильные и веб-продукты с сильной инженерией и исключительным вниманием к дизайну.
              </p>
            </div>
            <div className="relative mt-12 flex flex-wrap gap-3">
              <a href="#projects" className="premium-button">Мои проекты <ArrowRight size={16} /></a>
              <Link href="/about" className="soft-button">Кто я?</Link>
            </div>
          </article>

          <article className="bento-card flex min-h-[360px] flex-col justify-between p-8 lg:col-span-4">
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-xl border border-neutral-100 bg-neutral-50 text-neutral-600"><Zap size={20} /></span>
              <span className="micro-label">Personal info</span>
            </div>
            <div>
              <span className="micro-label">Специализация</span>
              <h2 className="mt-3 text-3xl font-black tracking-[-.04em]">Full-stack & AI</h2>
              <p className="mt-4 font-medium leading-relaxed text-neutral-500">Android, Frontend, Backend и интеллектуальная автоматизация.</p>
            </div>
            <div className="flex items-center gap-2 border-t border-neutral-100 pt-5">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-emerald-500" /></span>
              <span className="text-[11px] font-bold uppercase tracking-[.12em] text-neutral-500">Открыт к предложениям</span>
            </div>
          </article>

          {[
            { label: "Практика", value: "4+", caption: "года коммерческого опыта", icon: Clock3 },
            { label: "Портфолио", value: "15+", caption: "выполненных проектов", icon: FolderKanban },
            { label: "Экспертиза", value: "4", caption: "ключевых направления", icon: Layers3 },
          ].map(({ label, value, caption, icon: Icon }) => (
            <article key={label} className="bento-card flex min-h-[235px] flex-col justify-between p-8 lg:col-span-4">
              <div className="flex items-start justify-between"><span className="micro-label">{label}</span><Icon size={20} className="text-neutral-300" /></div>
              <strong className="my-6 text-6xl font-black tracking-[-.06em]">{value}</strong>
              <span className="micro-label text-neutral-500">{caption}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-28 px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div><span className="section-kicker">Специализация</span><h2 className="section-heading mt-4">Направления<br className="hidden sm:block" /> и навыки</h2></div>
            <p className="max-w-sm font-light leading-relaxed text-neutral-400">Четыре дисциплины, объединённые в одну экосистему разработки — от интерфейса до инфраструктуры.</p>
          </div>
          <div className="focus-grid grid grid-cols-1 gap-6 lg:grid-cols-12">
            {directions.map(({ icon: Icon, ...item }) => (
              <article key={item.title} className={`skill-card group relative flex min-h-[410px] flex-col justify-between overflow-hidden p-8 sm:p-11 ${item.className}`}>
                <span className={`pointer-events-none absolute -right-20 -top-20 size-72 rounded-full blur-[70px] transition duration-700 group-hover:scale-125 ${item.glow}`} />
                <div className="relative">
                  <div className="mb-10 flex items-start justify-between"><span className="grid size-12 place-items-center rounded-2xl border border-neutral-100 bg-neutral-50 text-neutral-600"><Icon size={21} /></span><span className="micro-label">{item.number}</span></div>
                  <h3 className="text-3xl font-black tracking-[-.045em]">{item.title}</h3>
                  <p className="mt-4 max-w-lg font-light leading-relaxed text-neutral-400">{item.text}</p>
                </div>
                <div className="relative mt-10 translate-y-1 opacity-60 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="micro-label mb-4 block">Инструменты и стек</span>
                  <div className="flex flex-wrap gap-2">{item.stack.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectCarousel />

      <section id="experience" className="scroll-mt-28 border-t border-neutral-200/60 bg-white px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">Бэкграунд</span>
          <h2 className="mt-4 text-4xl font-black tracking-[-.05em] sm:text-5xl">Профессиональный опыт</h2>
          <div className="relative mt-14 ml-3 space-y-5 border-l border-neutral-200 pl-8 sm:ml-5 sm:pl-10">
            {experience.map((item) => (
              <article key={item.period} className="experience-card group relative">
                <span className="absolute -left-[43px] top-8 size-5 rounded-full border-4 border-neutral-200 bg-white transition group-hover:border-[#0f172a] sm:-left-[51px]" />
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div><span className="micro-label">{item.company}</span><h3 className="mt-2 text-xl font-bold tracking-[-.03em]">{item.role}</h3></div>
                  <span className="shrink-0 text-xs font-semibold text-neutral-400">{item.period}</span>
                </div>
                <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-neutral-500">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-24 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[32px] bg-[#0f172a] p-8 text-white sm:p-12 lg:flex-row lg:items-end lg:justify-between">
          <div><span className="section-kicker text-white/45">Есть идея проекта?</span><h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-[-.05em] sm:text-5xl">Давайте создадим что-то выдающееся вместе.</h2></div>
          <Link href="/contact" className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-white px-7 text-sm font-bold text-[#0f172a] transition hover:-translate-y-1">Начать проект <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
