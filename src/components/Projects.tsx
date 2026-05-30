"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Globe, Smartphone, Lock, Briefcase, Boxes, Layout, Layers, Terminal, ArrowUpRight, Search, Zap, Code, Database } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const detailedProjects = [
  {
    id: "apps-tj",
    title: "Apps.tj Marketplace",
    category: "Fullstack Ecosystem",
    year: "2024",
    description: "Полномасштабный маркетплейс приложений и сервисов. Разработал архитектуру фронтенда на Next.js и сложную логику взаимодействия с бэкендом. Система поддерживает сотни транзакций и имеет продвинутый поиск.",
    url: "https://apps.tj/",
    tags: ["React", "Next.js", "Fullstack", "High-Load"],
    role: "Lead Frontend & Architecture",
    color: "cyan"
  },
  {
    id: "paykar-dist",
    title: "Paykar Distribution",
    category: "Enterprise ERP",
    year: "2024",
    description: "Промышленная система управления дистрибуцией. Включает в себя модули логистики, складского учета и финансовой аналитики. Построена на базе SQL с использованием защищенных API-протоколов.",
    url: "https://paykardist.tj/",
    tags: ["SQL", "ERP", "Enterprise", "Security"],
    role: "Fullstack Developer",
    color: "purple"
  },
  {
    id: "paribeauty",
    title: "Paribeauty Ecosystem",
    category: "Mobile & Web",
    year: "2023",
    description: "Экосистема для индустрии красоты. Включает в себя веб-портал, систему подарков и нативное Android приложение на Kotlin. Интегрировал LLM для автоматизированных рекомендаций клиентам.",
    url: "https://gift.paribeauty.tj/",
    tags: ["Android", "Kotlin", "React", "LLM APIs"],
    role: "Core Developer (Front/Back/Mobile)",
    color: "emerald"
  },
  {
    id: "seller-market",
    title: "Seller Market Dash",
    category: "E-commerce Tools",
    year: "2024",
    description: "Инструментарий для продавцов маркетплейсов. Продвинутая аналитика продаж, управление складскими остатками и автоматизация отчетности на базе Python.",
    tags: ["Python", "Dashboard", "E-commerce"],
    role: "Backend & Data Engineering",
    color: "orange"
  }
];

const otherSystems = [
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
    title: "Dex.tj", 
    url: "https://dex.tj/", 
    desc: "Обучение немецкому языку.",
    tags: ["Crypto", "Web3", "Platform"],
    icon: <Boxes className="w-4 h-4" />
  },
  { 
    title: "Seller TessMarket", 
    url: "https://seller-tessmarket.ru/", 
    desc: "Платформа для продажи и покупки товаров.",
    tags: ["Crypto", "Web3", "Platform"],
    icon: <Boxes className="w-4 h-4" />
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
    url: "https://play.google.com/store/apps/details?id=tj.apps.stockflow&pcampaignid=web_share_target",
    desc: "Мобильное приложение для складской логистики и сканирования товаров.",
    tags: ["Android", "Kotlin", "Logistics"],
    icon: <Smartphone className="w-4 h-4" />
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(".projects-title", 
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#projects-section",
            start: "top 85%",
            once: true
          }
        }
      );

      // Large project cards animation
      gsap.utils.toArray(".large-p-card").forEach((card: any) => {
        gsap.fromTo(card, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true
            }
          }
        );
      });

      // Small grid animation
      gsap.fromTo(".small-p-card", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".small-projects-grid",
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
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-900/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="projects-title opacity-0 mb-32 border-b border-white/5 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-5 h-5 text-cyan-500" />
            <span className="text-[10px] font-mono font-bold tracking-[0.6em] text-cyan-500 uppercase">Production_Vault</span>
          </div>
          <h2 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter uppercase leading-[0.8] mb-8">
            Project<br />Hub
          </h2>
          <p className="text-slate-500 max-w-xl text-lg font-medium leading-relaxed">
            Подробный разбор ключевых архитектурных решений и реализованных систем. Каждый проект — это отдельная история инженерии.
          </p>
        </div>

        <div className="space-y-40 mb-40">
          {detailedProjects.map((p, i) => (
            <div key={p.id} className="large-p-card opacity-0 group relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="relative aspect-video bg-white/[0.03] border border-white/10 overflow-hidden rounded-[2rem] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Terminal className="w-20 h-20 text-white/5 group-hover:scale-125 group-hover:text-cyan-500/10 transition-all duration-700" />
                    </div>
                    <div className="absolute bottom-8 left-8 flex flex-wrap gap-3">
                      {p.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl text-[10px] font-bold text-white uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-cyan-500 font-mono text-xs font-bold">{p.year}</span>
                    <div className="w-8 h-px bg-white/10" />
                    <span className="text-slate-500 font-mono text-xs font-bold uppercase tracking-widest">{p.category}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight group-hover:text-cyan-400 transition-colors uppercase leading-none">
                    {p.title}
                  </h3>
                  
                  <p className="text-slate-400 text-lg leading-relaxed mb-10 border-l-2 border-cyan-500/20 pl-6 italic">
                    {p.description}
                  </p>

                  <div className="flex flex-col gap-6 w-full">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                      <span className="text-xs font-bold uppercase tracking-widest">Role: {p.role}</span>
                    </div>
                    
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all group-hover:translate-x-2">
                        Inspect System <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-3 px-8 py-4 border border-white/10 text-slate-500 text-xs font-black uppercase tracking-widest cursor-not-allowed">
                        Internal Protocol <Lock className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Boxes className="w-4 h-4 text-cyan-500" />
                <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-cyan-500 uppercase">Auxiliary_Systems</span>
              </div>
              <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Other Systems</h4>
            </div>
            <p className="text-slate-500 max-w-sm text-sm">Дополнительные коммерческие проекты и инструменты автоматизации.</p>
          </div>
          
          <div className="small-projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSystems.map((p, i) => (
              <div key={i} className="small-p-card opacity-0 group p-8 glass-card border border-white/5 hover:border-cyan-500/30 transition-all duration-500 bg-white/[0.01]">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-white/5 text-cyan-500 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-500 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="p-2 rounded-lg bg-white/5 text-slate-800">
                      <Lock className="w-4 h-4" />
                    </div>
                  )}
                </div>
                
                <h5 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{p.title}</h5>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-400 transition-colors">
                  {p.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, idx) => (
                    <span key={idx} className="text-[9px] font-mono font-bold text-cyan-500/50 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
