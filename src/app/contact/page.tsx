import type { Metadata } from "next";
import { MapPin, MessageCircle, Send } from "lucide-react";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "Контакты" };

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Контакты" title="Расскажите, что нужно создать." description="Опишите задачу, сроки и ожидаемый результат — так разговор сразу начнётся по делу." />
      <section className="py-20 sm:py-28">
        <div className="shell grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[28px] bg-[#1f6b4d] p-8 text-white sm:p-12">
            <MessageCircle size={32} className="text-[#bfe6d2]" />
            <h2 className="mt-10 text-3xl font-bold tracking-[-.05em] sm:text-5xl">Готов обсудить новый проект.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#d5eadf]">Контактные данные лучше добавить здесь после подтверждения. В старой версии был тестовый адрес, поэтому я не перенёс его как настоящий.</p>
            <div className="mt-9 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold"><MapPin size={17} /> Душанбе, Таджикистан</div>
          </div>
          <div className="card p-8 sm:p-10">
            <Send size={28} className="text-[#ef7d45]" />
            <h2 className="mt-8 text-2xl font-bold tracking-[-.04em]">Что прислать</h2>
            <ol className="mt-7 space-y-5">{["Коротко о продукте или бизнесе", "Какую проблему нужно решить", "Желаемые сроки запуска", "Ссылки на примеры, если они есть"].map((item, index) => <li key={item} className="flex gap-4"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#dff2e8] font-mono text-xs font-bold text-[#1f6b4d]">{index + 1}</span><span className="pt-1 text-[#496057]">{item}</span></li>)}</ol>
          </div>
        </div>
      </section>
    </>
  );
}
