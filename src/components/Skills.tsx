"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Terminal, Smartphone, BrainCircuit, Activity, Database, Shield, Layout } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  { name: "React / Next.js", level: 95, icon: <Code2 className="w-5 h-5" /> },
  { name: "Python / PHP", level: 90, icon: <Terminal className="w-5 h-5" /> },
  { name: "Android / Kotlin", level: 85, icon: <Smartphone className="w-5 h-5" /> },
  { name: "LLM APIs (Gemini/Kimi)", level: 92, icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "SQL / Firebase", level: 88, icon: <Database className="w-5 h-5" /> },
  { name: "Auth / Security", level: 80, icon: <Shield className="w-5 h-5" /> },
  { name: "UI/UX / Tailwind", level: 94, icon: <Layout className="w-5 h-5" /> },
  { name: "Simulation / ML", level: 75, icon: <Activity className="w-5 h-5" /> },
];

export default function Skills() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".skill-bar", 
        { width: "0%" },
        { 
          width: (i, el) => el.getAttribute('data-level') + "%", 
          duration: 1.5, 
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#skills-grid",
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(".skill-item", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#skills-grid",
            start: "top 85%",
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-40 px-6 bg-[#030305] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <span className="text-[11px] font-mono font-bold tracking-[0.4em] text-indigo-400 uppercase">Technical_Capability</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-bold text-white mb-10 tracking-tighter uppercase leading-none">ARSENAL</h2>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed border-l-2 border-indigo-500/30 pl-8">
            Комплексный стек технологий для разработки высокопроизводительных веб-интерфейсов, мобильных систем и AI-решений.
          </p>
        </div>

        <div id="skills-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {skills.map((skill, i) => (
            <div key={i} className="skill-item opacity-0 group">
              <div className="flex items-center gap-4 mb-6 text-indigo-400 group-hover:translate-x-2 transition-transform duration-300">
                <div className="p-3 glass-card rounded-xl group-hover:bg-indigo-500/10 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-base font-bold uppercase tracking-widest text-slate-200 group-hover:text-white transition-colors">{skill.name}</span>
              </div>
              <div className="relative h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                <div 
                  className="skill-bar absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-600 to-violet-600 shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
                  data-level={skill.level}
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Efficiency</span>
                <span className="text-[10px] font-mono text-indigo-400 font-bold">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
