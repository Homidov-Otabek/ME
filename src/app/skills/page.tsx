import type { Metadata } from "next";
import { BrainCircuit, Code2, Database, Smartphone } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import { skills } from "@/lib/data";

export const metadata: Metadata = { title: "Навыки" };
const icons = [Code2, Database, Smartphone, BrainCircuit];

export default function SkillsPage() {
  return (
    <>
      <PageIntro eyebrow="Компетенции" title="Технологии — инструмент, результат — цель." description="Стек для создания цельных продуктов: от удобного интерфейса до backend, mobile и AI." />
      <section className="py-20 sm:py-28"><div className="shell grid gap-5 md:grid-cols-2">{skills.map((skill, index) => { const Icon = icons[index]; return <article key={skill.group} className="card p-7 sm:p-9"><span className="grid size-13 place-items-center rounded-2xl bg-[#dff2e8] text-[#1f6b4d]"><Icon size={23} /></span><h2 className="mt-8 text-2xl font-bold tracking-[-.04em]">{skill.group}</h2><div className="mt-6 flex flex-wrap gap-2">{skill.items.map((item) => <span key={item} className="rounded-full border border-[#dce4df] bg-[#f7f9f6] px-4 py-2 text-sm font-semibold">{item}</span>)}</div></article>; })}</div></section>
    </>
  );
}
