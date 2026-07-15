import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Обо мне" };

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="Обо мне" title="Не просто пишу код — собираю продукт целиком." description="Разбираюсь в задаче бизнеса, проектирую систему и довожу её до работающего результата." />
      <section className="py-20 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <aside className="card h-fit p-7 sm:p-9">
            <div className="grid size-20 place-items-center rounded-3xl bg-[#1f6b4d] text-2xl font-black text-white">OH</div>
            <h2 className="mt-7 text-2xl font-bold">Otabek Homidov</h2>
            <p className="mt-2 text-[#65736c]">Full-stack & AI developer</p>
            <dl className="mt-8 space-y-4 border-t border-[#dce4df] pt-6 text-sm">
              <div className="flex justify-between gap-5"><dt className="text-[#87928c]">Локация</dt><dd className="font-semibold">Душанбе</dd></div>
              <div className="flex justify-between gap-5"><dt className="text-[#87928c]">Опыт</dt><dd className="font-semibold">4+ года</dd></div>
              <div className="flex justify-between gap-5"><dt className="text-[#87928c]">Фокус</dt><dd className="font-semibold">Web · Mobile · AI</dd></div>
            </dl>
          </aside>
          <div>
            <h2 className="text-3xl font-bold tracking-[-.04em] sm:text-5xl">От идеи до запуска — без разрыва между частями системы.</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-[#65736c]">
              <p>Я начал с frontend-разработки, затем расширил компетенции до backend, мобильных приложений и машинного обучения. Поэтому смотрю на продукт как на единую систему, а не как на набор отдельных экранов.</p>
              <p>Работал с e-commerce, логистикой, ритейлом, образованием и сервисным бизнесом. Особенно интересны задачи, где технология должна упростить реальный процесс и дать измеримый результат.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {["Понимаю бизнес-задачу", "Проектирую понятную архитектуру", "Делаю адаптивный интерфейс", "Интегрирую AI и автоматизацию"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#dce4df] bg-white p-4 font-semibold"><CheckCircle2 className="text-[#1f6b4d]" size={20} />{item}</div>)}
            </div>
            <Link href="/experience" className="button-primary mt-10">Посмотреть опыт <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
