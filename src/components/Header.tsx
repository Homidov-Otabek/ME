"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/#projects", label: "Проекты" },
  { href: "/#skills", label: "Навыки" },
  { href: "/#experience", label: "Опыт" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-28px)] max-w-6xl -translate-x-1/2">
      <nav className="flex min-h-16 items-center justify-between rounded-2xl border border-white/70 bg-white/85 px-5 shadow-[0_8px_30px_rgba(15,23,42,.06)] backdrop-blur-xl sm:px-6" aria-label="Основная навигация">
        <Link href="/" className="group flex items-center gap-2 text-lg font-black tracking-[-.04em]" aria-label="На главную">
          Otabek H<span className="size-1.5 rounded-full bg-[#0f172a] transition duration-500 group-hover:scale-150" />
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.label} href={item.href} className={`text-[11px] font-bold uppercase tracking-[.14em] transition hover:text-[#0f172a] ${active ? "text-[#0f172a]" : "text-neutral-400"}`}>{item.label}</Link>;
          })}
        </div>
        <Link href="/contact" className="hidden rounded-xl bg-[#0f172a] px-5 py-3 text-[11px] font-bold uppercase tracking-[.13em] text-white transition hover:bg-neutral-800 sm:inline-flex">Связаться</Link>
        <button type="button" onClick={() => setOpen((value) => !value)} className="grid size-10 place-items-center rounded-xl bg-[#0f172a] text-white lg:hidden" aria-expanded={open} aria-label={open ? "Закрыть меню" : "Открыть меню"}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </nav>
      {open && <nav className="mt-2 grid gap-1 rounded-2xl border border-white bg-white p-3 shadow-xl lg:hidden" aria-label="Мобильная навигация">{[...navigation, { href: "/contact", label: "Связаться" }].map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-neutral-600 hover:bg-neutral-50 hover:text-[#0f172a]">{item.label}</Link>)}</nav>}
    </header>
  );
}
