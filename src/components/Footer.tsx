"use client";
import { Mail, Send, Terminal, Cpu, Heart, MessageSquare, ExternalLink, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-12 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-black font-black shadow-[0_0_20px_rgba(6,182,212,0.4)]">H</div>
              <span className="text-xl font-black tracking-widest text-white uppercase">Otabek.Systems</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Ready to build <br />
              <span className="text-cyan-500">the next big thing?</span>
            </h2>
            <p className="text-slate-500 max-w-md text-lg leading-relaxed mb-10">
              Я всегда открыт для новых вызовов и интересных проектов. Давайте создадим что-то невероятное вместе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:kaumov.otabek@example.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-400 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                Email Me <Mail className="w-5 h-5" />
              </a>
              <div className="flex gap-2">
                <a href="#" className="flex-1 sm:w-14 sm:h-14 glass-card border border-white/10 rounded-2xl flex items-center justify-center text-white hover:border-cyan-500/50 hover:text-cyan-400 transition-all p-4 sm:p-0">
                  <MessageSquare className="w-6 h-6" />
                </a>
                <a href="#" className="flex-1 sm:w-14 sm:h-14 glass-card border border-white/10 rounded-2xl flex items-center justify-center text-white hover:border-cyan-500/50 hover:text-cyan-400 transition-all p-4 sm:p-0">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors font-medium flex items-center gap-2 group">
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-8">Location</h4>
              <p className="text-slate-400 font-medium mb-4">Dushanbe, Tajikistan</p>
              <div className="p-6 glass-card border border-white/5 rounded-3xl">
                <div className="flex items-center gap-3 text-cyan-500 mb-2">
                  <Cpu className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest">System Status</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Available for new projects
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-slate-600 text-[10px] font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} Otabek Homidov. All systems operational.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            Developed with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> & <Terminal className="w-3 h-3" />
          </div>
        </div>
      </div>
    </footer>
  );
}
