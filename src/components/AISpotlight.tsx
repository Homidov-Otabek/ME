"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrainCircuit, Cpu, Database, Zap } from "lucide-react";

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
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#ai-core",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );

      // Cards reveal
      gsap.fromTo(".ai-card-anim", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".ai-grid",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );
    });
    
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section id="ai-core" className="py-40 px-6 bg-[#030305] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
          <div className="ai-reveal-title opacity-0">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-5 h-5 text-indigo-400 animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-[0.4em] text-indigo-400 uppercase">Intelligence_Layer</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase leading-none">AI SYSTEMS</h2>
          </div>
          <p className="ai-reveal-title opacity-0 text-slate-400 max-w-lg text-xl leading-relaxed border-l-2 border-indigo-500/30 pl-8">
            Интеграция когнитивных вычислений и машинного зрения в архитектуру современных приложений.
          </p>
        </div>

        <div className="ai-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              title: "LLM Orchestration",
              icon: <BrainCircuit className="w-14 h-14" />,
              desc: "Глубокая работа с Gemini, Codex и Deepseek. Создание RAG-систем для обработки корпоративных данных.",
              tags: ["Prompt Engineering", "RAG", "Vector DB"]
            },
            {
              title: "Computer Vision",
              icon: <Cpu className="w-14 h-14" />,
              desc: "Автоматизация на базе DAHUA SDK. Анализ видеопотоков для контроля логистики в реальном времени.",
              tags: ["Object Detection", "DAHUA", "IoT"]
            },
            {
              title: "ML Analytics",
              icon: <Database className="w-14 h-14" />,
              desc: "Прогнозные модели для StockFlow. Анализ временных рядов для оптимизации товарных запасов.",
              tags: ["Predictive ML", "Time Series", "Big Data"]
            }
          ].map((item, idx) => (
            <div key={idx} className="ai-card-anim opacity-0 group relative p-12 glass-card glass-card-hover">
              <div className="mb-12 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-100 mb-8 tracking-tight uppercase">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-base mb-12 group-hover:text-slate-300 transition-colors">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag, t) => (
                  <span key={t} className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400/60 px-3 py-1.5 glass-card">
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
