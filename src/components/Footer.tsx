import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200/60 bg-white px-4 pb-10 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-neutral-200/60 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div><Link href="/" className="text-lg font-black tracking-[-.04em]">Otabek Homidov</Link><p className="mt-4 max-w-[240px] text-xs font-light leading-relaxed text-neutral-400">Создание премиальных цифровых интерфейсов, мобильных продуктов и AI-решений.</p></div>
          <div><h3 className="micro-label mb-4">Разделы</h3><div className="grid gap-3 text-sm text-neutral-500"><Link href="/about" className="hover:text-[#0f172a]">Обо мне</Link><Link href="/#skills" className="hover:text-[#0f172a]">Навыки</Link><Link href="/#projects" className="hover:text-[#0f172a]">Проекты</Link></div></div>
          <div><h3 className="micro-label mb-4">Связь</h3><div className="grid gap-3 text-sm text-neutral-500"><Link href="/contact" className="inline-flex items-center gap-1 hover:text-[#0f172a]">Написать мне <ArrowUpRight size={13} /></Link><Link href="/contact" className="hover:text-[#0f172a]">Контакты</Link></div></div>
          <div><h3 className="micro-label mb-4">Локация</h3><p className="text-sm text-neutral-500">Душанбе, Таджикистан</p><div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2"><span className="size-2 rounded-full bg-emerald-500" /><span className="text-[10px] font-bold uppercase tracking-[.1em] text-emerald-700">Доступен для работы</span></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-8 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Homidov Otabek. Все права защищены.</p><p className="italic">Designed with precision.</p></div>
      </div>
    </footer>
  );
}
