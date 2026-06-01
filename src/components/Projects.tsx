"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Globe, Smartphone, Lock, Briefcase, Boxes, Layout, Database, BookOpen, ShoppingBag, Search } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { 
    title: "Apps.tj", 
    url: "https://apps.tj/", 
    desc: "Полномасштабный маркетплейс приложений и цифровых сервисов.",
    tags: ["Marketplace", "Fullstack", "Next.js"],
    icon: <Globe className="w-5 h-5" />
  },
  { 
    title: "Paykar Dist", 
    url: "https://paykardist.tj/", 
    desc: "ERP-система управления дистрибуцией и логистическими потоками.",
    tags: ["Enterprise", "ERP", "SQL"],
    icon: <Briefcase className="w-5 h-5" />
  },
  { 
    title: "Paribeauty", 
    url: "https://gift.paribeauty.tj/", 
    desc: "Экосистема для индустрии красоты: веб-портал и нативное Android приложение.",
    tags: ["Mobile", "Kotlin", "React"],
    icon: <Smartphone className="w-5 h-5" />
  },
  { 
    title: "Seller TessMarket", 
    desc: "Платформа для эффективной продажи и покупки товаров.",
    tags: ["E-commerce", "Platform", "Web"],
    icon: <ShoppingBag className="w-5 h-5" />
  },
  { 
    title: "Dex.tj", 
    desc: "Специализированная платформа для обучения немецкому языку.",
    tags: ["Education", "LMS", "Web"],
    icon: <BookOpen className="w-5 h-5" />
  },
  { 
    title: "Russian Baths", 
    url: "https://russianbaths.pro/", 
    desc: "Система бронирования и управления услугами отдыха.",
    tags: ["Booking", "Web", "Frontend"],
    icon: <Globe className="w-5 h-5" />
  },
  { 
    title: "Paykar 2026", 
    url: "https://2026.paykar.tj/", 
    desc: "Корпоративный портал для планирования долгосрочных стратегий ритейла.",
    tags: ["Next.js", "Tailwind", "Corporate"],
    icon: <Layout className="w-5 h-5" />
  },
  { 
    title: "Flip Park", 
    desc: "Коммерческая система управления развлекательными комплексами.",
    tags: ["Commercial", "Backend", "Management"],
    icon: <Briefcase className="w-5 h-5" />
  },
  { 
    title: "Grand Babyshop", 
    desc: "Интегрированная система управления розничной торговлей детскими товарами.",
    tags: ["Retail", "Fullstack", "Inventory"],
    icon: <Boxes className="w-5 h-5" />
  },
  { 
    title: "Pari Laundry", 
    desc: "Автоматизация бизнес-процессов для сетевых сервисов обслуживания.",
    tags: ["Service", "Backend", "Automation"],
    icon: <Database className="w-5 h-5" />
  },
  { 
    title: "StockFlow", 
    desc: "Мобильное приложение для складской логистики и сканирования товаров.",
    tags: ["Android", "Kotlin", "Logistics"],
    icon: <Smartphone className="w-5 h-5" />
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
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#projects-section",
            start: "top 85%",
            once: true
          }
        }
      );

      gsap.fromTo(".p-card-vault", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".vault-grid",
            start: "top 85%",
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects-section" className="py-40 px-6 bg-[#030305] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="projects-header opacity-0 mb-32 border-b border-white/5 pb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Search className="w-6 h-6 text-indigo-400" />
              <span className="text-[11px] font-mono font-bold tracking-[0.5em] text-indigo-400 uppercase">Production_Vault</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase leading-none">
              PROJECT HUB
            </h2>
          </div>
          <div className="flex items-center gap-4 px-8 py-4 glass-card">
            <Boxes className="w-5 h-5 text-indigo-400" />
            <span className="text-xs font-bold text-slate-200 tracking-[0.2em] uppercase">11 Core Projects</span>
          </div>
        </div>

        <div className="vault-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="p-card-vault opacity-0 group relative p-12 glass-card glass-card-hover rounded-[2rem]">
              <div className="flex justify-between items-start mb-10">
                <div className="p-5 glass-card rounded-2xl text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                  {p.icon}
                </div>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card text-slate-500 hover:text-white hover:bg-indigo-600 transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : (
                  <div className="p-3 rounded-xl glass-card text-slate-700">
                    <Lock className="w-5 h-5" />
                  </div>
                )}
              </div>
              
              <h3 className="text-3xl font-bold text-slate-100 mb-6 group-hover:text-indigo-300 transition-colors uppercase tracking-tight">{p.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-12 group-hover:text-slate-300 transition-colors">
                {p.desc}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-8 border-t border-white/5">
                {p.tags.map((tag, t) => (
                  <span key={t} className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400/60 px-4 py-2 glass-card">
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
