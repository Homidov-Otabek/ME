"use client";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Fullstack Developer & AI Engineer",
    company: "Ieram (Logistic Sphere)",
    period: "2023 - Present",
    description: "Автоматизация логистики, интеграция ИИ (Claude, Gemini, Codex, Deepseek) и разработка систем мониторинга с использованием DAHUA.",
    stack: ["Next.js", "Python", "Computer Vision", "LLM APIs"]
  },
  {
    role: "Web & Mobile Developer",
    company: "Freelance Projects",
    period: "2021 - 2023",
    description: "Разработка Paribeuty (фронтенд + бэкенд + мобильное приложение), Paykar и Tessmarket. Переход от фронтенда к полноценному Fullstack.",
    stack: ["React", "Kotlin", "PHP", "Firebase"]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-40 px-6 bg-[#030305] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            <span className="text-[11px] font-mono font-bold tracking-[0.4em] text-indigo-400 uppercase">Professional_Timeline</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-bold text-white mb-10 tracking-tighter uppercase leading-none">EXPERIENCE</h2>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed border-l-2 border-indigo-500/30 pl-8">
            Путь от разработки интерфейсов до архитектуры сложных распределенных систем и внедрения ИИ-технологий.
          </p>
        </div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative pl-16 md:pl-24 border-l-2 border-indigo-500/10 hover:border-indigo-500/40 transition-colors duration-700">
              <div className="absolute w-4 h-4 bg-[#030305] border-2 border-indigo-500/30 rounded-full -left-[9px] top-4 group-hover:border-indigo-400 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-500" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 gap-6">
                <div>
                  <h3 className="text-4xl font-bold text-slate-100 mb-4 group-hover:text-indigo-300 transition-colors uppercase tracking-tight">{exp.role}</h3>
                  <p className="text-indigo-400/90 font-mono text-sm uppercase tracking-[0.2em] font-bold">{exp.company}</p>
                </div>
                <span className="px-6 py-2 glass-card text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] self-start md:self-auto">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-3xl group-hover:text-slate-300 transition-colors">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {exp.stack.map((tech, idx) => (
                  <span key={idx} className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400/60 px-4 py-2 glass-card">
                    {tech}
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
