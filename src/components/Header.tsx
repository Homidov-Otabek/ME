"use client";
import { useEffect, useState } from "react";
import { Terminal, Layers, Layout, Monitor } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "bg-[#030305]/80 backdrop-blur-xl py-5" : "bg-transparent py-10"}`}>
      <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`} />
      
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-indigo-400 font-bold group-hover:rotate-12 transition-transform group-hover:border-indigo-500/50">H</div>
          <span className="text-base font-bold tracking-[0.2em] text-white group-hover:text-indigo-400 transition-colors uppercase">Otabek.Dev</span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {[
            { label: "Arsenal", href: "#skills", icon: <Layers className="w-3.5 h-3.5" /> },
            { label: "Projects", href: "#projects-section", icon: <Monitor className="w-3.5 h-3.5" /> },
            { label: "Experience", href: "#experience", icon: <Layout className="w-3.5 h-3.5" /> },
          ].map((item) => (
            <a key={item.label} href={item.href} className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400 hover:text-indigo-400 transition-all">
              {item.icon} {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden sm:flex items-center gap-3 px-6 py-2.5 glass-card text-indigo-400 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all">
          Connect <Terminal className="w-3.5 h-3.5" />
        </a>
      </nav>
    </header>
  );
}
