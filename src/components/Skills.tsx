"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { Code2, Terminal, Smartphone, BrainCircuit, Activity, Database, Shield, Layout } from "lucide-react";

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
    gsap.fromTo(".skill-bar", 
      { width: "0%" },
      { 
        width: (i, el) => el.dataset.level + "%", 
        duration: 1.5, 
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#skills-grid",
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic underline decoration-cyan-500/50 underline-offset-8">Arsenal</h2>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em]">Integrated Technical Stack</p>
        </div>

        <div id="skills-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skill, i) => (
            <div key={i} className="group">
              <div className="flex items-center gap-3 mb-4 text-cyan-500">
                {skill.icon}
                <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-cyan-400 transition-colors">{skill.name}</span>
              </div>
              <div className="relative h-[2px] w-full bg-white/5 overflow-hidden">
                <div 
                  className="skill-bar absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
                  data-level={skill.level}
                />
              </div>
              <div className="mt-2 text-[10px] font-mono text-slate-600 text-right">{skill.level}% Optimized</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
