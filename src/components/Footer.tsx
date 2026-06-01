"use client";
import { Mail, Terminal, Cpu, Heart, MessageSquare, ExternalLink, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-40 pb-16 px-6 bg-[#030305] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-indigo-400 font-bold border-indigo-500/20">H</div>
              <span className="text-2xl font-bold tracking-[0.2em] text-white uppercase">Otabek.Systems</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter uppercase leading-none">
              Ready to build <br />
              <span className="text-indigo-400">the next big thing?</span>
            </h2>
            <p className="text-slate-400 max-w-md text-xl leading-relaxed mb-12">
              Я всегда открыт для новых вызовов и интересных проектов. Давайте создадим что-то невероятное вместе.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="mailto:kaumov.otabek@example.com" className="flex items-center justify-center gap-4 px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-500 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                Email Me <Mail className="w-5 h-5" />
              </a>
              <div className="flex gap-4">
                <a href="#" className="flex-1 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all p-5 sm:p-0">
                  <MessageSquare className="w-6 h-6" />
                </a>
                <a href="#" className="flex-1 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all p-5 sm:p-0">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-400 mb-10">Navigation</h4>
              <ul className="space-y-6">
                {["Arsenal", "Projects", "Experience", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors font-medium flex items-center gap-3 group">
                      <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span className="text-base">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-400 mb-10">Location</h4>
              <p className="text-slate-200 text-lg font-medium mb-6">Dushanbe, Tajikistan</p>
              <div className="p-8 glass-card rounded-[2rem] border-white/5">
                <div className="flex items-center gap-4 text-indigo-400 mb-4">
                  <Cpu className="w-5 h-5" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em]">System Status</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  Available for new projects
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <p className="text-slate-500 text-[11px] font-mono tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Otabek Homidov. All systems operational.
          </p>
          <div className="flex items-center gap-3 text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em]">
            Developed with <Heart className="w-4 h-4 text-indigo-500 fill-indigo-500" /> & <Terminal className="w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
