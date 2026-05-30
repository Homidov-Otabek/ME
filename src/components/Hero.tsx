"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Zap, Database, Terminal, MapPin } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(".hero-line", 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1.5, ease: "power4.inOut" }
      )
      .fromTo(".main-name", 
        { y: 150, skewY: 10, opacity: 0 }, 
        { y: 0, skewY: 0, opacity: 1, duration: 1, ease: "power4.out" }, 
        "-=0.5"
      )
      .fromTo(".hero-stat", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 
        "-=0.5"
      )
      .fromTo(".hero-tag", 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.2"
      );

      gsap.to(".scanner", {
        top: "100%",
        duration: 3,
        repeat: -1,
        ease: "none"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-black grid-bg py-20">
      <div className="scanner absolute top-0 left-0 w-full h-[2px] bg-cyan-500/30 blur-[2px] -z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px] -z-20" />

      <div className="w-full max-w-7xl relative z-10">
        <div className="hero-line w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-12 origin-left" />
        
        <div className="relative mb-16 md:mb-24">
          <span className="hero-stat absolute -top-8 left-0 text-[10px] font-mono tracking-[0.5em] text-cyan-500/70 uppercase">
            Protocol: Identity_Secure
          </span>
          <h1 className="main-name text-5xl sm:text-7xl md:text-[11rem] font-black tracking-tighter leading-tight md:leading-[0.8] text-white select-none">
            OTABEK<br />
            <span className="text-transparent stroke-text">HOMIDOV</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: "Engineering", value: "Full-Stack", icon: <Terminal className="w-4 h-4" /> },
            { label: "Architecture", value: "ML & Systems", icon: <Database className="w-4 h-4" /> },
            { label: "Intelligence", value: "LLM Specialist", icon: <Zap className="w-4 h-4" /> },
            { label: "Security", value: "JWT / Auth", icon: <Shield className="w-4 h-4" /> },
          ].map((stat, i) => (
            <div key={i} className="hero-stat group p-6 bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/[0.02] transition-all cursor-default backdrop-blur-sm">
              <div className="text-cyan-500 mb-4">{stat.icon}</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-24 flex flex-col items-center gap-6">
        <div className="hero-tag flex items-center gap-4 px-6 py-3 rounded-full bg-cyan-500/5 border border-cyan-500/20">
          <MapPin className="w-4 h-4 text-cyan-500" />
          <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">Dushanbe, TJ • 21 Years</span>
        </div>
        <div className="hero-tag w-px h-16 bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent" />
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          }
        }
      `}</style>
    </section>
  );
}
