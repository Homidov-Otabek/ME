import Link from "next/link";
import { ArrowRight, BrainCircuit, Code2, MapPin, Smartphone, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="page-grid border-b border-[#dce4df] bg-white py-16 sm:py-24 lg:py-32">
        <div className="shell grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rise-in">
            <span className="eyebrow">Full-stack & AI developer</span>
            <h1 className="mt-7 max-w-4xl text-[clamp(3.4rem,8vw,7.7rem)] font-[780] leading-[.86] tracking-[-.075em]">
              Создаю продукты, <span className="text-[#1f6b4d]">которые работают.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#65736c] sm:text-xl">От интерфейса до backend, мобильного приложения и AI-интеграции. Один разработчик — цельная система.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="button-primary">Смотреть проекты <ArrowRight size={18} /></Link>
              <Link href="/about" className="button-secondary">Обо мне</Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px] lg:mx-0 lg:justify-self-end">
            <div className="card relative overflow-hidden p-7 sm:p-9">
              <div className="absolute -right-12 -top-12 size-44 rounded-full bg-[#dff2e8]" />
              <div className="relative flex items-start justify-between">
                <div className="grid size-20 place-items-center rounded-3xl bg-[#1f6b4d] text-2xl font-black text-white">OH</div>
                <Sparkles className="text-[#ef7d45]" />
              </div>
              <p className="relative mt-10 text-2xl font-bold tracking-[-0.04em]">Otabek Homidov</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-[#65736c]"><MapPin size={16} /> Душанбе, Таджикистан</p>
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#dce4df] pt-7 text-center">
                <div><b className="block text-2xl text-[#1f6b4d]">11+</b><span className="text-xs text-[#65736c]">проектов</span></div>
                <div><b className="block text-2xl text-[#1f6b4d]">4+</b><span className="text-xs text-[#65736c]">лет в IT</span></div>
                <div><b className="block text-2xl text-[#1f6b4d]">3</b><span className="text-xs text-[#65736c]">направления</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="shell">
          <span className="eyebrow">Что я делаю</span>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { icon: Code2, number: "01", title: "Web-продукты", text: "Быстрые интерфейсы, личные кабинеты и сложные бизнес-системы." },
              { icon: Smartphone, number: "02", title: "Mobile", text: "Нативные Android-приложения, связанные с единой backend-системой." },
              { icon: BrainCircuit, number: "03", title: "AI и автоматизация", text: "LLM, компьютерное зрение и автоматизация реальных процессов." },
            ].map(({ icon: Icon, number, title, text }) => (
              <article key={title} className="card p-7 sm:p-8">
                <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-[#dff2e8] text-[#1f6b4d]"><Icon size={22} /></span><span className="font-mono text-xs text-[#87928c]">{number}</span></div>
                <h2 className="mt-10 text-2xl font-bold tracking-[-0.04em]">{title}</h2>
                <p className="mt-4 leading-7 text-[#65736c]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dce4df] bg-white py-20 sm:py-28">
        <div className="shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div><span className="eyebrow">Избранные работы</span><h2 className="mt-5 text-4xl font-bold tracking-[-0.055em] sm:text-6xl">Проекты в работе</h2></div>
            <Link href="/projects" className="button-secondary self-start">Все проекты <ArrowRight size={17} /></Link>
          </div>
          <div className="mt-10 divide-y divide-[#dce4df] border-y border-[#dce4df]">
            {projects.slice(0, 4).map((project, index) => (
              <div key={project.title} className="grid gap-4 py-6 sm:grid-cols-[55px_1fr_auto] sm:items-center">
                <span className="font-mono text-xs text-[#87928c]">0{index + 1}</span>
                <div><h3 className="text-xl font-bold">{project.title}</h3><p className="mt-1 text-sm text-[#65736c]">{project.description}</p></div>
                {project.url ? <a href={project.url} target="_blank" rel="noreferrer" className="font-semibold text-[#1f6b4d] hover:underline">Открыть ↗</a> : <span className="text-sm text-[#87928c]">Закрытый проект</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="shell rounded-[32px] bg-[#1f6b4d] px-7 py-12 text-white sm:px-12 sm:py-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-[#bfe6d2]">Есть задача?</p>
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-.055em] sm:text-6xl">Давайте обсудим продукт и найдём рабочее решение.</h2>
            <Link href="/contact" className="button-secondary shrink-0 self-start">Связаться <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
