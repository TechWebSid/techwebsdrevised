"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2,
  Globe,
  Video,
  ShoppingBag,
  Compass,
  Code2,
  MessageCircle,
  Zap,
  Eye,
  Layers
} from "lucide-react";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Client Websites",
    "E-Commerce & Retail",
    "Web Applications",
    "Creative & Motion",
  ];

  const projects = [
    {
      id: "astro-ashutosh",
      title: "Astro Ashutosh Divyadarshi",
      clientType: "Astrologer & Spiritual Consultancy",
      category: "Client Websites",
      liveUrl: "https://www.astroashutoshdivyadarshi.com/",
      displayUrl: "astroashutoshdivyadarshi.com",
      tagline: "High-trust astrology and spiritual consultancy platform with 1-click WhatsApp consultation booking, horoscope readings, and client testimonials.",
      impact: "1,500+ Consultations Booked",
      speed: "0.7s Mobile Load",
      highlights: [
        "1-Click WhatsApp appointment booking for instant horoscopes",
        "Kundli analysis, gemstones, matchmaking & Vastu service showcases",
        "High-trust sacred aesthetic with golden celestial styling",
        "Ranked on Google Local Search for astrological consultations"
      ],
      tags: ["Astrology Platform", "WhatsApp Booking", "Kundli Analysis", "Mobile First", "Google SEO"],
      gradient: "from-[#20150a] via-[#2c1d0d] to-[#140e06]",
      accentColor: "text-amber-400",
      accentBg: "bg-amber-500/15 border-amber-500/30",
      accentBorder: "group-hover:border-amber-400/60",
      icon: Compass,
    },
    {
      id: "obys-agency",
      title: "Obys Agency Interactive Studio",
      clientType: "Design Agency & Creative Motion",
      category: "Creative & Motion",
      liveUrl: "https://obys2.vercel.app/",
      displayUrl: "obys2.vercel.app",
      tagline: "Awwwards-inspired creative digital agency experience featuring typography motion, kinetic transitions, brutalist design aesthetics, and interactive layouts.",
      impact: "Awwwards-Level Motion",
      speed: "60 FPS Fluid Animation",
      highlights: [
        "Kinetic typography animations and smooth continuous scrolling",
        "Bespoke creative direction with high-fashion brutalist aesthetics",
        "Ultra-smooth physics and micro-interactions on every element",
        "Silky responsive performance across all mobile and desktop screens"
      ],
      tags: ["Creative Direction", "Kinetic Typography", "Awwwards Style", "Motion Design", "Interactive Art"],
      gradient: "from-[#171328] via-[#221b3d] to-[#0e0b1c]",
      accentColor: "text-purple-300",
      accentBg: "bg-purple-500/15 border-purple-500/30",
      accentBorder: "group-hover:border-purple-400/60",
      icon: Layers,
    },
    {
      id: "sid-port",
      title: "Sid-Port — Creative Portfolio",
      clientType: "Personal Creative Portfolio",
      category: "Creative & Motion",
      liveUrl: "https://sid-port.vercel.app",
      displayUrl: "sid-port.vercel.app",
      tagline: "Siddharth Srivastava's official developer portfolio showcasing creative frontend experiments, modern web craft, and interactive 3D physics.",
      impact: "Direct Founder Showcase",
      speed: "Sub-Second Delivery",
      highlights: [
        "Interactive digital craft showcase with magnetic cursor physics",
        "Fluid smooth scrolling with zero jank or frame drops",
        "Curated project case studies and interactive design components",
        "Direct inquiry routing to Siddharth via WhatsApp and email"
      ],
      tags: ["Portfolio", "Full-Stack", "Creative Frontend", "Sub-1s Speed", "Clean Minimalist"],
      gradient: "from-[#0d1628] via-[#142340] to-[#070d18]",
      accentColor: "text-sky-400",
      accentBg: "bg-sky-500/15 border-sky-500/30",
      accentBorder: "group-hover:border-sky-400/60",
      icon: Code2,
    },
    {
      id: "vision-talk",
      title: "VisionTalk Video Conferencing",
      clientType: "Real-Time Web Application",
      category: "Web Applications",
      liveUrl: "https://vision-talk-unxe.vercel.app",
      displayUrl: "vision-talk-unxe.vercel.app",
      tagline: "Next-generation real-time video conferencing web application. Instant meetings, crystal-clear HD video/audio streaming, in-call chat, and peer-to-peer screen sharing.",
      impact: "Zero-Download HD Video",
      speed: "Ultra-Low Latency",
      highlights: [
        "Instant room creation without software downloads or signup friction",
        "Crystal-clear peer-to-peer HD video and high-fidelity audio streams",
        "Interactive meeting features: screen share, mute/unmute, live in-call chat",
        "Responsive glassmorphic UI engineered for phones and laptops"
      ],
      tags: ["WebRTC Video", "Real-Time App", "Peer-to-Peer", "Instant Meetings", "Screen Sharing"],
      gradient: "from-[#081e24] via-[#0d2e38] to-[#051317]",
      accentColor: "text-cyan-400",
      accentBg: "bg-cyan-500/15 border-cyan-500/30",
      accentBorder: "group-hover:border-cyan-400/60",
      icon: Video,
    },
    {
      id: "shree-shyam-sales",
      title: "Shree Shyam Sales E-Commerce",
      clientType: "E-Commerce & Commercial Distribution",
      category: "E-Commerce & Retail",
      liveUrl: "https://shreeshyamsales.vercel.app",
      displayUrl: "shreeshyamsales.vercel.app",
      tagline: "Modern B2B and retail commercial sales platform featuring categorized product catalogs, bulk inquiry workflows, and direct WhatsApp customer ordering.",
      impact: "+180% Commercial Inquiries",
      speed: "Fast Mobile Catalog",
      highlights: [
        "Fast mobile-first product catalog with clear categorization",
        "1-Tap direct WhatsApp inquiry buttons on every single item",
        "Zero-friction customer connection for retail and wholesale buyers",
        "Clean, reliable layout that builds high commercial trust"
      ],
      tags: ["E-Commerce", "Commercial Catalog", "WhatsApp Orders", "Fast Browsing", "Product Showcase"],
      gradient: "from-[#112211] via-[#1b361b] to-[#091409]",
      accentColor: "text-emerald-400",
      accentBg: "bg-emerald-500/15 border-emerald-500/30",
      accentBorder: "group-hover:border-emerald-400/60",
      icon: ShoppingBag,
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#090b14] text-white selection:bg-[#6938ef] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-44 pb-16 px-6 sm:px-10 flex flex-col items-center text-center overflow-hidden">
        {/* Ambient Aura */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Real Work • Live Verified Projects
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Selected Works & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-200">
              Live Projects.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real websites and high-performance applications designed and engineered directly by Siddharth Srivastava. Click on any project to experience the live site in action.
          </p>

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 max-w-2xl mx-auto backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#6938ef] text-white shadow-lg shadow-purple-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Container */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              const Icon = proj.icon;
              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`group relative rounded-[28px] p-7 sm:p-9 bg-gradient-to-br ${proj.gradient} border border-white/10 ${proj.accentBorder} shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(105,56,239,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Subtle Sub-Surface Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                  <div>
                    {/* Card Header: Category & Live Indicator */}
                    <div className="flex items-center justify-between gap-3 pb-5 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-xl ${proj.accentBg}`}>
                          <Icon className={`w-4 h-4 ${proj.accentColor}`} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                          {proj.clientType}
                        </span>
                      </div>

                      {/* Live Link Indicator Pill */}
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all group-hover:scale-105"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3 text-purple-300" />
                      </a>
                    </div>

                    {/* Title & Display URL */}
                    <div className="mt-5">
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-purple-300 transition-colors">
                        {proj.title}
                      </h3>
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-medium text-slate-400 hover:text-white transition-colors mt-1 inline-flex items-center gap-1"
                      >
                        <Globe className="w-3 h-3 text-slate-500" />
                        <span>{proj.displayUrl}</span>
                      </a>
                    </div>

                    {/* Tagline */}
                    <p className="mt-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {proj.tagline}
                    </p>

                    {/* Metrics Banner */}
                    <div className="mt-5 grid grid-cols-2 gap-3 p-3 rounded-2xl bg-black/40 border border-white/10">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Key Metric
                        </span>
                        <span className={`text-sm font-black ${proj.accentColor}`}>
                          {proj.impact}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Performance
                        </span>
                        <span className="text-sm font-black text-emerald-400">
                          {proj.speed}
                        </span>
                      </div>
                    </div>

                    {/* Key Highlights List */}
                    <div className="mt-5 space-y-2">
                      {proj.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${proj.accentColor} shrink-0 mt-0.5`} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Feature Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.06] text-slate-300 text-[11px] font-semibold border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Direct Live Link CTA */}
                  <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-slate-950 font-black text-xs sm:text-sm hover:bg-slate-200 transition-all shadow-md group-hover:scale-[1.02] active:scale-98"
                    >
                      <span>Explore Live Website ({proj.displayUrl})</span>
                      <ArrowUpRight className="w-4 h-4 text-purple-700" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Direct Founder Pitch Box */}
        <div className="mt-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-purple-950/70 via-[#16122c] to-indigo-950/70 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Taking 2 Projects This Month
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Want a high-converting website like these for your business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Work 1-on-1 directly with Siddharth in Lucknow. Fast 2 to 3 weeks delivery with zero agency runaround.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/918957035412?text=Hi%20Siddharth,%20I%20saw%20your%20live%20projects%20and%20want%20to%20discuss%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 text-slate-950 font-black text-xs sm:text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Chat on WhatsApp (+91 89570 35412)</span>
            </a>

            <Link
              href="/contact"
              prefetch={true}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm hover:bg-slate-200 transition-all"
            >
              <span>Get Free Estimate</span>
              <ArrowUpRight className="w-4 h-4 text-purple-700" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
