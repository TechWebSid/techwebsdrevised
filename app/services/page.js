"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Rocket, 
  Check, 
  ArrowUpRight, 
  Zap, 
  Layers, 
  Cpu, 
  Sparkles,
  ShieldCheck,
  Activity
} from "lucide-react";

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: "01",
      title: "Bespoke Next.js Platform & SaaS Engineering",
      tagline: "Ultra-fast full-stack web applications engineered for scale and speed.",
      desc: "We build custom web architectures on Next.js 16 with React Server Components, serverless functions, and relational databases. No bloated plugins or fragile third-party themes — pure, modular engineering built to handle millions of requests.",
      icon: Code2,
      deliverables: [
        "Clean, typed Next.js App Router repository with modular structure",
        "Sub-second TTFB & guaranteed 98+ PageSpeed scores",
        "Edge API endpoints, webhooks, and secure authentication",
        "Real-time database integration (PostgreSQL / Supabase / Redis)",
        "Zero Layout Shift (CLS) and automated SEO schema markup",
      ],
      tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Serverless", "PostgreSQL"],
    },
    {
      id: "02",
      title: "Cinematic Motion & WebGL 3D Experiences",
      tagline: "Immersive interaction design that captivates visitors and leaves competitors behind.",
      desc: "Stand out in a world of boring templates. We create custom WebGL shaders, Three.js 3D environments, and silky 60fps micro-animations that turn casual page visits into memorable digital experiences.",
      icon: Palette,
      deliverables: [
        "Custom 3D model integration & Three.js canvas optimizations",
        "Fluid Framer Motion micro-interactions & scroll-linked triggers",
        "Hardware-accelerated CSS GPU rendering with zero jank",
        "Custom SVG fluid gradients, glow filters, and interactive cursors",
        "Full mobile touch responsiveness and fallback modes",
      ],
      tags: ["Three.js", "WebGL", "Framer Motion", "GSAP", "GPU Shaders"],
    },
    {
      id: "03",
      title: "Conversion UI/UX Systems & Design Tokens",
      tagline: "Pixel-perfect interfaces designed strictly to drive visitor revenue.",
      desc: "Design is not just decoration; it is psychology and conversion architecture. We construct complete Figma design systems and reusable component libraries that give your product brand authority.",
      icon: Layers,
      deliverables: [
        "Full Figma design tokens (Typography, Spacing, Color meshes)",
        "High-fidelity interactive prototype with realistic user flows",
        "Frictionless onboarding and checkout conversion funnels",
        "Responsive cross-device layouts (Mobile, Tablet, Desktop, Ultrawide)",
        "Design system documentation and asset handoff",
      ],
      tags: ["Figma Systems", "Conversion UI", "Design Tokens", "Design Audit"],
    },
    {
      id: "04",
      title: "AI Workflows, Automations & Speed Tuning",
      tagline: "Autonomous backend pipelines and extreme Core Web Vitals optimization.",
      desc: "Eliminate manual operational drag and sluggish page loads. We integrate cutting-edge LLM API pipelines (OpenAI & Gemini), asynchronous webhooks, and comprehensive speed tuning that propels your site to #1 search rankings.",
      icon: Rocket,
      deliverables: [
        "OpenAI / Gemini API prompt engineering & asynchronous pipelines",
        "Core Web Vitals audit & sub-second performance overhaul",
        "Automated lead capture, email dispatch, and CRM sync",
        "Static page prerendering (ISR/SSG) for instant navigation",
        "Comprehensive SEO technical audit and structured data injection",
      ],
      tags: ["AI API Pipelines", "Performance Audit", "Technical SEO", "Automations"],
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      name: "Discover & Scope",
      desc: "Direct interview with Siddharth to dissect your business objectives, competitor landscape, and technical specifications.",
    },
    {
      step: "02",
      name: "Architect & Wireframe",
      desc: "System structure, database schema, and conversion wireframes designed before a single line of code is committed.",
    },
    {
      step: "03",
      name: "Engineered Sprint",
      desc: "Rapid, agile Next.js development with cinematic micro-interactions, responsive design, and daily code commits.",
    },
    {
      step: "04",
      name: "Performance Tuning",
      desc: "Rigorous GPU optimization, Lighthouse Core Web Vitals auditing, and security hardening.",
    },
    {
      step: "05",
      name: "Deploy & IP Handoff",
      desc: "Live launch to global edge infrastructure, complete repository transfer, and 30-day post-launch warranty.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 sm:pt-48 pb-20 flex flex-col items-center">
        {/* Soft Ambient Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-purple-200/50 via-violet-100/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-purple-200 text-[#6938ef] text-xs font-black uppercase tracking-widest mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" /> Capabilities & Deliverables
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 leading-[1.04]"
          >
            Capabilities Designed To <br />
            <span className="text-[#6938ef]">Outclass The Competition.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            We don't deliver generic designs or sluggish codebases. Every capability is engineered from first principles for sub-second speeds and verified revenue conversions.
          </motion.p>
        </div>
      </section>

      {/* Services Detailed Breakdown */}
      <section className="relative py-12 max-w-7xl mx-auto px-6 sm:px-10 z-10">
        <div className="space-y-12">
          {serviceDetails.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="group relative rounded-3xl p-8 sm:p-14 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(105,56,239,0.08)] hover:border-purple-300 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left Column: Index & Meta */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl font-black text-purple-600">
                          {svc.id}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#6938ef] flex items-center justify-center border border-purple-100 shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
                        {svc.title}
                      </h2>
                      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#6938ef]">
                        {svc.tagline}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {svc.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Description & Deliverables */}
                  <div className="lg:col-span-8 space-y-6">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {svc.desc}
                    </p>

                    <div className="rounded-2xl p-6 sm:p-7 bg-[#fafafa] border border-slate-200/80 space-y-3">
                      <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Tangible Production Deliverables
                      </h3>
                      <ul className="space-y-2.5">
                        {svc.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                            <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <Link
                        href="/contact"
                        prefetch={true}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111319] text-white hover:bg-[#6938ef] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                      >
                        <span>Inquire for {svc.title.split(" ")[0]}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5-Step Sprint Workflow */}
      <section className="relative py-28 sm:py-36 bg-[#0e1019] text-white border-t border-slate-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-black uppercase tracking-widest text-purple-400 mb-3 inline-block">
              Battle-Tested Pipeline
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              The 5-Step Agile Sprint Methodology
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              How we take your product from raw idea to sub-second production deployment in weeks, not quarters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workflowSteps.map((w) => (
              <div
                key={w.step}
                className="p-6 rounded-2xl bg-[#161826] border border-slate-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-purple-400 mb-4 block">
                    {w.step}
                  </span>
                  <h3 className="text-base font-extrabold text-white mb-2">
                    {w.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              prefetch={true}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-slate-950 hover:bg-purple-400 hover:text-slate-950 font-bold text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-xl"
            >
              <span>Book Your Sprint Slot</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
