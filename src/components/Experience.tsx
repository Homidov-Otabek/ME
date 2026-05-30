"use client";

const experiences = [
  {
    role: "Fullstack Developer & AI Engineer",
    company: "Ieram (Logistic Sphere)",
    period: "2023 - Настоящее время",
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
    <section id="experience" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">EXPERIENCE</h2>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em]">Professional_Timeline</p>
        </div>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative pl-12 border-l border-white/10 hover:border-cyan-500 transition-colors duration-700">
              <div className="absolute w-2 h-2 bg-white/20 rounded-full -left-[4.5px] top-4 group-hover:bg-cyan-500 group-hover:scale-150 transition-all duration-500" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{exp.role}</h3>
                  <p className="text-cyan-500/80 font-mono text-sm uppercase tracking-widest">{exp.company}</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl group-hover:text-slate-300 transition-colors">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech, idx) => (
                  <span key={idx} className="text-[9px] font-mono font-bold uppercase tracking-[0.1em] text-slate-600 px-3 py-1 rounded-md bg-white/5 border border-white/5">
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
