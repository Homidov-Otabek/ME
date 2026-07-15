import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#dce4df] bg-white py-10">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="text-lg font-extrabold tracking-[-0.03em]">Otabek Homidov</Link>
          <p className="mt-2 flex items-center gap-2 text-sm text-[#65736c]"><MapPin size={15} /> Душанбе, Таджикистан</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          <Link href="/projects" className="hover:text-[#1f6b4d]">Проекты</Link>
          <Link href="/experience" className="hover:text-[#1f6b4d]">Опыт</Link>
          <Link href="/contact" className="inline-flex items-center gap-1 hover:text-[#1f6b4d]">Контакты <ArrowUpRight size={14} /></Link>
        </div>
        <p className="text-xs text-[#87928c]">© {new Date().getFullYear()} Все права защищены.</p>
      </div>
    </footer>
  );
}
