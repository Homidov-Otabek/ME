"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Globe, Smartphone, Lock, Briefcase, Boxes, Layout, Layers, Terminal, Search, Zap, Code, Database, BookOpen, ShoppingBag } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { 
    title: "Apps.tj", 
    url: "https://apps.tj/", 
    desc: "Полномасштабный маркетплейс приложений и цифровых сервисов.",
    tags: ["Marketplace", "Fullstack", "Next.js"],
    icon: <Globe className="w-4 h-4" />
  },
  { 
    title: "Paykar Dist", 
    url: "https://paykardist.tj/", 
    desc: "ERP-система управления дистрибуцией и логистическими потоками.",
    tags: ["Enterprise", "ERP", "SQL"],
    icon: <Briefcase className="w-4 h-4" />
  },
  { 
    title: "Paribeauty", 
    url: "https://gift.paribeauty.tj/", 
    desc: "Экосистема для индустрии красоты: веб-портал и нативное Android приложение.",
    tags: ["Mobile", "Kotlin", "React"],
    icon: <Smartphone className="w-4 h-4" />
  },
  { 
    title: "Seller TessMarket", 
    desc: "Платформа для эффективной продажи и покупки товаров.",
    tags: ["E-commerce", "Platform", "Web"],
    icon: <ShoppingBag className="w-4 h-4" />
  },
  { 
    title: "Dex.tj", 
    desc: "Специализированная платформа для обучения немецкому языку.",
    tags: ["Education", "LMS", "Web"],
    icon: <BookOpen className="w-4 h-4" />
  },
  { 
    title: "Russian Baths", 
    url: "https://russianbaths.pro/", 
    desc: "Система бронирования и управления услугами отдыха.",
    tags: ["Booking", "Web", "Frontend"],
    icon: <Globe className="w-4 h-4" />
  },
  { 
    title: "Paykar 2026", 
    url: "https://2026.paykar.tj/", 
    desc: "Корпоративный портал для планирования долгосрочных стратегий ритейла.",
    tags: ["Next.js", "Tailwind", "Corporate"],
    icon: <Layout className="w-4 h-4" />
  },
  { 
    title: "Flip Park", 
    desc: "Коммерческая система управления развлекательными комплексами.",
    tags: ["Commercial", "Backend", "Management"],
    icon: <Briefcase className="w-4 h-4" />
  },
  { 
    title: "Grand Babyshop", 
    desc: "Интегрированная система управления розничной торговлей детскими товарами.",
    tags: ["Retail", "Fullstack", "Inventory"],
    icon: <Boxes className="w-4 h-4" />
  },
  { 
    title: "Pari Laundry", 
    desc: "Автоматизация бизнес-процессов для сетевых сервисов обслуживания.",
    tags: ["Service", "Backend", "Automation"],
    icon: <Database className="w-4 h-4" />
  },
  { 
    title: "StockFlow", 
    desc: "Мобильное приложение для складской логистики и сканирования товаров.",
    tags: ["Android", "Kotlin", "Logistics"],
    icon: <Smartphone className="w-4 h-4" />
  },
];

export default function Projects() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".projects-header", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "#projects-section",
            start: "top 85%",
            once: true
          }
        }
      );

      gsap.fromTo(".p-card-vault", 
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".vault-grid",
            start: "top 90%",
            once: true
          }
        }
      );
    });

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects-section" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_70%)] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="projects-header opacity-0 mb-24 border-b border-white/5 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-5 h-5 text-cyan-500" />
              <span className="text-[10px] font-mono font-bold tracking-[0.6em] text-cyan-500 uppercase">Production_Vault</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
              Project Hub
            </h2>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
            <Boxes className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-bold text-white tracking-widest uppercase">11 Core Projects</span>
          </div>
        </div>

        <div className="vault-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="p-card-vault opacity-0 group relative p-10 bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/[0.02] transition-all duration-500 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/30 transition-all duration-700" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-cyan-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all">
                  {p.icon}
                </div>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 text-slate-500 hover:text-white hover:bg-cyan-500 transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="p-2 rounded-xl bg-white/5 text-slate-800">
                    <Lock className="w-4 h-4" />
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 group-hover:text-slate-400 transition-colors">
                {p.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {p.tags.map((tag, t) => (
                  <span key={t} className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-600 bg-black/40 px-3 py-1 rounded-lg border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
