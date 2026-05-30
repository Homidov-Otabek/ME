"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrainCircuit, Cpu, Database, Activity, Target, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AISpotlight() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(".ai-reveal-title", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#ai-core",
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );

      // Cards reveal
      gsap.fromTo(".ai-card-anim", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ai-grid",
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );
    });
    
    // Refresh ScrollTrigger to catch correct positions after layout
    ScrollTrigger.refresh();
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="ai-core" className="py-32 px-6 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="ai-reveal-title opacity-0">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-4 h-4 text-cyan-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-cyan-500 uppercase">Intelligence_Layer</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">AI SYSTEMS</h2>
          </div>
          <p className="ai-reveal-title opacity-0 text-slate-500 max-w-lg text-lg leading-relaxed border-l border-cyan-500/20 pl-6">
            Интеграция когнитивных вычислений и машинного зрения в архитектуру современных приложений.
          </p>
        </div>

        <div className="ai-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: "LLM Orchestration",
              icon: <BrainCircuit className="w-12 h-12" />,
              desc: "Глубокая работа с Gemini, Codex и Deepseek. Создание RAG-систем для обработки корпоративных данных.",
              tags: ["Prompt Engineering", "RAG", "Vector DB"]
            },
            {
              title: "Computer Vision",
              icon: <Cpu className="w-12 h-12" />,
              desc: "Автоматизация на базе DAHUA SDK. Анализ видеопотоков для контроля логистики в реальном времени.",
              tags: ["Object Detection", "DAHUA", "IoT"]
            },
            {
              title: "ML Analytics",
              icon: <Database className="w-12 h-12" />,
              desc: "Прогнозные модели для StockFlow. Анализ временных рядов для оптимизации товарных запасов.",
              tags: ["Predictive ML", "Time Series", "Big Data"]
            }
          ].map((item, idx) => (
            <div key={idx} className="ai-card-anim opacity-0 group relative p-10 bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 transition-all duration-700">
              <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-cyan-500/0 group-hover:border-cyan-500/50 transition-all" />
              <div className="mb-10 text-cyan-500 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-10 group-hover:text-slate-300 transition-colors">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, t) => (
                  <span key={t} className="text-[9px] font-mono font-bold uppercase tracking-widest text-cyan-500/40 px-2 py-1 border border-cyan-500/10">
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
