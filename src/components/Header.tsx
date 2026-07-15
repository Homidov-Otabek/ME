"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/projects", label: "Проекты" },
  { href: "/skills", label: "Навыки" },
  { href: "/experience", label: "Опыт" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce4df] bg-[#f7f9f6]/92 backdrop-blur-xl">
      <div className="shell flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="На главную">
          <span className="grid size-10 place-items-center rounded-full bg-[#1f6b4d] text-sm font-black text-white">OH</span>
          <span className="leading-tight">
            <b className="block text-sm tracking-[-0.02em]">Otabek Homidov</b>
            <span className="text-[11px] text-[#65736c]">Full-stack / AI developer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${active ? "bg-white text-[#1f6b4d] shadow-sm" : "text-[#65736c] hover:text-[#16251f]"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="button-primary hidden min-h-11 px-5 sm:inline-flex">Связаться</Link>
        <button type="button" onClick={() => setOpen((value) => !value)} className="grid size-11 place-items-center rounded-full border border-[#dce4df] bg-white lg:hidden" aria-expanded={open} aria-label={open ? "Закрыть меню" : "Открыть меню"}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#dce4df] bg-white px-5 py-4 lg:hidden" aria-label="Мобильная навигация">
          <div className="shell grid gap-1">
            {[...navigation, { href: "/contact", label: "Связаться" }].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold hover:bg-[#f0f5f1]">{item.label}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
