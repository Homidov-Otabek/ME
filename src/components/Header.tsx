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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-8"}`}>
      {/* Border line - refined to avoid "white flash" */}
      <div className={`absolute bottom-0 left-0 w-full h-px bg-cyan-500/20 transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`} />
      
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center text-black font-black group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.5)]">H</div>
          <span className="text-sm font-black tracking-widest text-white group-hover:text-cyan-400 transition-colors uppercase">Otabek.Sys</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Arsenal", href: "#skills", icon: <Layers className="w-3 h-3" /> },
            { label: "Projects", href: "#projects-section", icon: <Monitor className="w-3 h-3" /> },
            { label: "Experience", href: "#experience", icon: <Layout className="w-3 h-3" /> },
          ].map((item) => (
            <a key={item.label} href={item.href} className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 hover:text-cyan-400 transition-colors">
              {item.icon} {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="flex items-center gap-2 px-5 py-2 border border-cyan-500/30 text-cyan-400 text-[10px] font-black tracking-widest uppercase hover:bg-cyan-500 hover:text-black transition-all">
          Connect <Terminal className="w-3 h-3" />
        </a>
      </nav>
    </header>
  );
}
