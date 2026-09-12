"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Cpu, 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Award, 
  MapPin, 
  ArrowUpRight, 
  Code2, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  const principles = [
    {
      number: "01",
      title: "Direct Founder Engineering",
      desc: "Traditional agencies sell you with senior pitchmen, then delegate your mission-critical code to entry-level trainees. At TechWebSid, Siddharth Srivastava personally architects and writes every single line.",
      accent: "from-purple-600 to-indigo-600",
    },
    {
      number: "02",
      title: "Sub-Second Performance Guarantee",
      desc: "Page speed is not an afterthought or an upsell — it is the bedrock of revenue conversion. We target 98+ Core Web Vitals, zero layout shift (CLS), and sub-800ms initial server response times on every build.",
      accent: "from-fuchsia-600 to-pink-600",
    },
    {
      number: "03",
      title: "Cinematic Motion & WebGL Logic",
      desc: "We believe software should feel tactile, responsive, and alive. We blend Three.js shaders, GSAP timelines, and Framer Motion micro-interactions to create memorable, award-winning user journeys.",
      accent: "from-sky-600 to-teal-500",
    },
    {
      number: "04",
      title: "Total IP & Codebase Autonomy",
      desc: "You receive clean, documented, modular TypeScript code with 100% intellectual property ownership. No proprietary CMS locks, no hidden dependencies, and no hostage hosting fees.",
      accent: "from-violet-600 to-purple-800",
    },
  ];

  const techStack = [
    { name: "Next.js 16 (App Router)", category: "Core Framework", level: "Expert" },
    { name: "React 19 & TypeScript", category: "Language & Runtime", level: "Native" },
    { name: "Tailwind CSS v4", category: "Design Architecture", level: "Mastery" },
    { name: "Three.js & WebGL", category: "3D Motion", level: "Advanced" },
    { name: "Framer Motion & GSAP", category: "Micro-Interactions", level: "Fluid" },
    { name: "PostgreSQL & Supabase", category: "Relational Data", level: "Production" },
    { name: "Serverless & Edge APIs", category: "Infrastructure", level: "Global" },
    { name: "Gemini & OpenAI APIs", category: "AI Orchestration", level: "Autonomous" },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 sm:pt-48 pb-24 flex flex-col items-center">
        {/* Ambient Aurora */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-purple-200/50 via-violet-100/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-purple-200 text-[#6938ef] text-xs font-black uppercase tracking-widest mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" /> The Studio Story
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 leading-[1.04]"
          >
            One Mind. Zero Fluff. <br />
            <span className="text-[#6938ef]">Engineering What Others Can't.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            TechWebSid was founded by Siddharth Srivastava in Lucknow, India, out of frustration with bloated, bureaucratic agencies that charge enterprise fees for mediocre WordPress templates. We bridge brutal full-stack software logic with cinematic, revenue-driving aesthetics.
          </motion.p>
        </div>
      </section>

      {/* Founder Spotlight Card */}
      <section className="relative py-16 max-w-6xl mx-auto px-6 sm:px-10 z-10">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#111319] via-[#161824] to-[#12141f] text-white border border-slate-700/80 shadow-2xl overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr from-[#6938ef] to-purple-400 p-1 shadow-2xl shadow-purple-600/30">
                  <div className="w-full h-full rounded-[22px] bg-[#111319] flex items-center justify-center text-white text-5xl font-black">
                    S
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-md">
                  Active Founder
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Siddharth Srivastava
              </h2>
              <span className="text-purple-400 font-semibold text-sm mt-1">
                Principal Engineer & Digital Architect
              </span>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Lucknow, Uttar Pradesh, India • Global Client Delivery</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                "I started building websites over six years ago with a simple realization: the web had gotten slow, bloated, and generic. Companies were paying tens of thousands of dollars for agencies with dozens of project managers, while the actual code was outsourced to juniors."
              </p>
              <p>
                "At TechWebSid, I operate as a dedicated engineering partner for ambitious founders. You get direct WhatsApp/Slack communication, lightning-fast turnaround, and an uncompromising obsession with performance."
              </p>
              
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-700/60">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">45+</div>
                  <div className="text-xs text-slate-400 font-medium">Platforms Shipped</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">99</div>
                  <div className="text-xs text-slate-400 font-medium">PageSpeed Target</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-xs text-slate-400 font-medium">Direct Founder Contact</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Studio Principles */}
      <section className="relative py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#6938ef] mb-3 inline-block">
            Foundational Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
            The TechWebSid Manifesto
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            The non-negotiable standards that distinguish our work from commodity agency production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item) => (
            <div
              key={item.number}
              className="p-8 sm:p-10 rounded-3xl bg-white/90 border border-slate-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(105,56,239,0.08)] hover:border-purple-300 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="text-3xl sm:text-4xl font-black text-purple-600">
                  {item.number}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Tech Arsenal */}
      <section className="relative py-24 bg-[#0d0e17] text-white border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-purple-400 mb-2 inline-block">
                Production-Tested Tools
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                The Engineering Arsenal
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              We exclusively deploy modern, scalable technologies that give your brand a lasting competitive speed advantage.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#161826] border border-slate-800 hover:border-purple-500/50 hover:bg-[#1a1c2e] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                    {tech.category}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300">
                    {tech.level}
                  </span>
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-white group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/50 to-indigo-950/50 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-black text-white">Ready to collaborate directly with Siddharth?</h3>
              <p className="text-sm text-slate-400 mt-1">Reserve a dedicated sprint slot before Q2 bookings close.</p>
            </div>
            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-purple-400 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 shadow-lg flex-shrink-0"
            >
              Request Proposal
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
