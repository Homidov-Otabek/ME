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
        { scaleX: 1, duration: 1.5, ease: "expo.inOut" }
      )
      .fromTo(".main-name", 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, 
        "-=0.8"
      )
      .fromTo(".hero-stat", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, 
        "-=0.6"
      )
      .fromTo(".hero-tag", 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.2)" },
        "-=0.4"
      );

      // Subtle pulse for ambient glows
      gsap.to(".bg-glow-1", {
        scale: 1.2,
        opacity: 0.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".bg-glow-2", {
        scale: 1.1,
        opacity: 0.15,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#030305] grid-bg py-20">
      {/* Ambient Background Glows */}
      <div className="bg-glow-1 absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
      <div className="bg-glow-2 absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent -z-10" />

      <div className="w-full max-w-7xl relative z-10">
        <div className="hero-line w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mb-16 origin-left" />
        
        <div className="relative mb-20 md:mb-32 text-center md:text-left">
          <span className="hero-stat inline-block mb-6 text-[11px] font-mono tracking-[0.4em] text-indigo-400 uppercase font-bold">
            Full-Stack Developer & AI Architect
          </span>
          <h1 className="main-name text-6xl sm:text-8xl md:text-[10rem] font-bold tracking-tighter leading-tight md:leading-[0.85] text-white select-none">
            OTABEK<br />
            <span className="text-slate-400">HOMIDOV</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Engineering", value: "Modern Web", icon: <Terminal className="w-5 h-5" /> },
            { label: "Architecture", value: "Scalable Systems", icon: <Database className="w-5 h-5" /> },
            { label: "Intelligence", value: "AI Integration", icon: <Zap className="w-5 h-5" /> },
            { label: "Security", value: "Robust Auth", icon: <Shield className="w-5 h-5" /> },
          ].map((stat, i) => (
            <div key={i} className="hero-stat glass-card glass-card-hover p-8 group cursor-default">
              <div className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-2">{stat.label}</div>
              <div className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 md:mt-32 flex flex-col items-center gap-8">
        <div className="hero-tag flex items-center gap-4 px-8 py-4 rounded-full glass-card">
          <MapPin className="w-4 h-4 text-indigo-400" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-300 uppercase">Dushanbe, TJ • 21 Years</span>
        </div>
        <div className="hero-tag w-px h-20 bg-gradient-to-b from-indigo-500/40 via-indigo-500/10 to-transparent" />
      </div>
    </section>
  );
}
