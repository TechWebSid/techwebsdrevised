"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Smartphone, 
  Sparkles, 
  TrendingUp, 
  AlertCircle, 
  Search,
  PhoneCall,
  Activity,
  CheckCircle2,
  Users
} from "lucide-react";

export default function ArchitectureFlow() {
  const [activePillarId, setActivePillarId] = useState("p1");
  const [pulseCount, setPulseCount] = useState(0);

  const commonTraps = [
    "Sluggish 5s+ Loading Speed",
    "Broken & Clunky on Mobile Phones",
    "Complex Forms That Visitors Abandon",
    "Zero Google Local Search Visibility",
    "Hidden Monthly Agency Retainers",
    "3-Month Delivery Delays & Excuses"
  ];

  const corePillars = [
    {
      id: "p1",
      title: "Flawless Mobile Experience",
      desc: "Designed mobile-first to look stunning on every iPhone and Android device.",
      specs: "Instant touch response • Crystal-clear readable text • Silky smooth natural scrolling",
      icon: Smartphone,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200/90",
      activeGlow: "ring-2 ring-purple-500 shadow-[0_10px_35px_rgba(105,56,239,0.18)]"
    },
    {
      id: "p2",
      title: "Instant <1s Page Load Speed",
      desc: "Never lose an impatient customer because your website takes forever to open.",
      specs: "Opens under 1 second on mobile data • 5x faster than old sites • Zero waiting",
      icon: Zap,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200/90",
      activeGlow: "ring-2 ring-amber-500 shadow-[0_10px_35px_rgba(245,158,11,0.18)]"
    },
    {
      id: "p3",
      title: "Google Local Search Setup",
      desc: "Built with search optimization so people in your area find you when looking for services.",
      specs: "Google Maps integration • Local search ranking tags • Optimized for nearby customers",
      icon: Search,
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-200/90",
      activeGlow: "ring-2 ring-sky-500 shadow-[0_10px_35px_rgba(56,189,248,0.18)]"
    },
    {
      id: "p4",
      title: "1-Click Customer Inquiries",
      desc: "Strategically placed buttons that make it effortless for customers to call or WhatsApp you.",
      specs: "1-Tap WhatsApp chat • Direct phone calling • No long complicated forms required",
      icon: PhoneCall,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200/90",
      activeGlow: "ring-2 ring-emerald-500 shadow-[0_10px_35px_rgba(16,185,129,0.18)]"
    }
  ];

  const activePillar = corePillars.find(p => p.id === activePillarId) || corePillars[0];

  const triggerDiagnosticPulse = () => {
    setPulseCount(prev => prev + 1);
  };

  return (
    <section id="flow" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#f8f6ff] via-[#faf8fe] to-[#ffffff] text-slate-900 overflow-hidden selection:bg-[#6938ef] selection:text-white">
      
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[650px] bg-[radial-gradient(circle,_rgba(216,180,254,0.35)_0%,_rgba(243,232,255,0.2)_45%,_transparent_75%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-sky-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(105,56,239,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(105,56,239,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 border border-purple-200 text-[#6938ef] text-xs font-black uppercase tracking-widest mb-4 shadow-[0_2px_12px_rgba(105,56,239,0.06)]">
            <Activity className="w-3.5 h-3.5" /> What Makes A High-Performing Website
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f111a] leading-tight">
            The 4 Essential Pillars of Every <br />
            <span className="text-[#6938ef]">TechWebSid Website.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Click on any pillar below to see how it protects your business and helps you win more clients.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE FLOW STAGE                                                    */}
        {/* ========================================================================= */}
        <div className="relative w-full max-w-5xl py-4 flex flex-col items-center">

          {/* SVG ELECTRIC CURRENT PIPELINES */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="flowGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Main Vertical Spine */}
              <line x1="500" y1="680" x2="500" y2="100" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="6 6" />

              {/* Animated Electric Pulse */}
              <motion.circle
                key={`p1-${pulseCount}`}
                r="5"
                fill="#9333ea"
                filter="url(#flowGlow)"
                animate={{
                  cx: [500, 500],
                  cy: [680, 100],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </div>

          {/* 1. THE OUTCOME LAUNCHPAD */}
          <div className="relative z-20 flex flex-col items-center mb-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-100/90 px-3.5 py-1 rounded-full mb-3 border border-emerald-200 shadow-sm">
              The Real Business Outcome
            </span>

            <div className="p-1 rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-400 shadow-[0_20px_50px_rgba(105,56,239,0.18)]">
              <div className="px-7 sm:px-10 py-4 rounded-[22px] bg-white text-center flex flex-col sm:flex-row items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md">
                  <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    What You Get For Your Business
                  </span>
                  <div className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                    More Paying Customers • Top Local Google Visibility • 100% Full Ownership
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. THE 4 PILLARS & CENTER HUB */}
          <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-12 gap-5 items-center my-4">

            {/* Left 2 Pillars */}
            <div className="md:col-span-4 flex flex-col gap-5">
              {[corePillars[0], corePillars[1]].map((pillar) => {
                const Icon = pillar.icon;
                const isSelected = activePillarId === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`text-left p-5 rounded-2xl bg-white/95 backdrop-blur-md border ${pillar.border} transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
                      isSelected ? pillar.activeGlow : "shadow-[0_8px_25px_rgba(0,0,0,0.04)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center shadow-sm`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-extrabold text-base text-slate-950 tracking-tight">
                          {pillar.title}
                        </h4>
                      </div>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />}
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* CENTER: TechWebSid Hub Engine (Clickable) */}
            <div className="md:col-span-4 flex flex-col items-center justify-center py-4 sm:py-0">
              <button
                onClick={triggerDiagnosticPulse}
                className="relative group focus:outline-none cursor-pointer"
                aria-label="Trigger Diagnostic Wave"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-300 animate-pulse" />
                
                <div className="relative px-7 py-7 rounded-3xl bg-[#111319] text-white border border-purple-500/50 shadow-2xl flex flex-col items-center text-center group-hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6938ef] to-purple-400 flex items-center justify-center text-white mb-3 shadow-lg shadow-purple-500/30">
                    <Sparkles className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  
                  <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-0.5">
                    Direct Founder Build
                  </span>
                  
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    TechWeb<span className="text-purple-400">Sid</span>
                  </h3>
                  
                  <p className="mt-1.5 text-xs text-slate-300 max-w-[190px] leading-relaxed">
                    Siddharth Srivastava builds & tests every screen personally.
                  </p>

                  <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-semibold border border-purple-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Click To Test Flow
                  </div>
                </div>
              </button>
            </div>

            {/* Right 2 Pillars */}
            <div className="md:col-span-4 flex flex-col gap-5">
              {[corePillars[2], corePillars[3]].map((pillar) => {
                const Icon = pillar.icon;
                const isSelected = activePillarId === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`text-left p-5 rounded-2xl bg-white/95 backdrop-blur-md border ${pillar.border} transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
                      isSelected ? pillar.activeGlow : "shadow-[0_8px_25px_rgba(0,0,0,0.04)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center shadow-sm`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-extrabold text-base text-slate-950 tracking-tight">
                          {pillar.title}
                        </h4>
                      </div>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />}
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Active Node Callout */}
          <div className="relative z-20 w-full max-w-2xl mt-4 p-4 rounded-2xl bg-purple-50/90 border border-purple-200 text-center shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#6938ef] block mb-0.5">
              Selected Feature Standard:
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              {activePillar.specs}
            </span>
          </div>

          {/* 3. THE COMMON AGENCY TRAP */}
          <div className="relative z-20 flex flex-col items-center mt-12 text-center">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <AlertCircle className="w-3.5 h-3.5" />
              Common Issues We Fix On Other Websites
            </div>

            <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
              {commonTraps.map((point, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs font-medium shadow-sm hover:border-rose-300 transition-colors"
                >
                  <span className="text-rose-500 font-bold">✕</span>
                  <span className="line-through decoration-rose-400/80 text-slate-500">{point}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}