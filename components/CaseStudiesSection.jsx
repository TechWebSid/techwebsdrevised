"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Zap, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  ShoppingBag, 
  Star,
  Globe,
  Video,
  Compass,
  Code2,
  Layers
} from "lucide-react";
import Link from "next/link";

export default function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Client Websites", "E-Commerce & Retail", "Web Applications", "Creative Studios"];

  const projects = [
    {
      id: "astro-ashutosh",
      title: "Astro Ashutosh Divyadarshi",
      clientType: "Astrologer & Spiritual Consultancy",
      category: "Client Websites",
      liveUrl: "https://www.astroashutoshdivyadarshi.com/",
      displayUrl: "astroashutoshdivyadarshi.com",
      tagline: "High-trust astrology and spiritual consultancy platform with 1-click WhatsApp consultation booking, horoscope readings, and client testimonials.",
      metrics: "1,500+ Bookings",
      speed: "0.7s Mobile Load",
      tags: ["Astrology Platform", "WhatsApp Booking", "Kundli Analysis", "Mobile First", "Google SEO"],
      cardBg: "from-[#22170b] via-[#1a1106] to-[#0d0903]",
      accentColor: "text-amber-400",
      accentBorder: "group-hover:border-amber-400/60",
      badgeBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      glow: "bg-amber-500/20",
      icon: Compass,
    },
    {
      id: "obys-agency",
      title: "Obys Agency Interactive Studio",
      clientType: "Design Agency & Motion Studio",
      category: "Creative Studios",
      liveUrl: "https://obys2.vercel.app/",
      displayUrl: "obys2.vercel.app",
      tagline: "Awwwards-inspired creative digital agency experience featuring typography motion, kinetic transitions, brutalist design aesthetics, and interactive layouts.",
      metrics: "Awwwards-Style Motion",
      speed: "60 FPS Render",
      tags: ["Creative Direction", "Kinetic Typography", "Awwwards Style", "Motion Design", "Interactive Art"],
      cardBg: "from-[#1b1530] via-[#140e24] to-[#0c0817]",
      accentColor: "text-purple-300",
      accentBorder: "group-hover:border-purple-400/60",
      badgeBg: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      glow: "bg-purple-500/25",
      icon: Layers,
    },
    {
      id: "sid-port",
      title: "Sid-Port — Creative Portfolio",
      clientType: "Personal Creative Portfolio",
      category: "Creative Studios",
      liveUrl: "https://sid-port.vercel.app",
      displayUrl: "sid-port.vercel.app",
      tagline: "Siddharth Srivastava's official developer portfolio showcasing creative frontend experiments, modern web craft, and interactive 3D physics.",
      metrics: "Direct Founder Craft",
      speed: "Sub-Second Load",
      tags: ["Portfolio", "Full-Stack", "Creative Frontend", "Sub-1s Speed", "Clean Minimalist"],
      cardBg: "from-[#0e192e] via-[#0a1120] to-[#050912]",
      accentColor: "text-sky-400",
      accentBorder: "group-hover:border-sky-400/60",
      badgeBg: "bg-sky-500/15 text-sky-300 border-sky-500/30",
      glow: "bg-sky-500/25",
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
      metrics: "Zero-Download HD Video",
      speed: "Ultra-Low Latency",
      tags: ["WebRTC Video", "Real-Time App", "Peer-to-Peer", "Instant Meetings", "Screen Sharing"],
      cardBg: "from-[#0a232b] via-[#07181e] to-[#040c0f]",
      accentColor: "text-cyan-400",
      accentBorder: "group-hover:border-cyan-400/60",
      badgeBg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
      glow: "bg-cyan-500/25",
      icon: Video,
    },
    {
      id: "shree-shyam-sales",
      title: "Shree Shyam Sales E-Commerce",
      clientType: "Commercial & Retail Catalog",
      category: "E-Commerce & Retail",
      liveUrl: "https://shreeshyamsales.vercel.app",
      displayUrl: "shreeshyamsales.vercel.app",
      tagline: "Modern B2B and retail commercial sales platform featuring categorized product catalogs, bulk inquiry workflows, and direct WhatsApp customer ordering.",
      metrics: "+180% Inquiries",
      speed: "Fast Mobile Catalog",
      tags: ["E-Commerce", "Commercial Catalog", "WhatsApp Orders", "Fast Browsing", "Product Showcase"],
      cardBg: "from-[#122615] via-[#0c1a0e] to-[#060e07]",
      accentColor: "text-emerald-400",
      accentBorder: "group-hover:border-emerald-400/60",
      badgeBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      glow: "bg-emerald-500/25",
      icon: ShoppingBag,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0d0e1a] via-[#111222] to-[#141528] text-white overflow-hidden selection:bg-purple-500 selection:text-white">
      
      {/* Ambient Lighting Mesh */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6 border-b border-slate-800/80 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-purple-300 mb-3">
              <Zap className="w-3.5 h-3.5 text-purple-400" /> Real Verified Works
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Real Websites Built For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-200">
                Real Clients & Products.
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-slate-300 max-w-md text-sm sm:text-base font-normal leading-relaxed text-left md:text-right">
              Explore Siddharth's live verified client websites and applications. Every single project below is live and active.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 hover:text-white transition-colors"
            >
              <span>View All 5 Projects with Details</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all active:scale-95 ${
                activeFilter === cat
                  ? "bg-white text-slate-950 shadow-md shadow-white/10"
                  : "bg-[#1d1f33] text-slate-300 border border-slate-800 hover:text-white hover:border-purple-400/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              const Icon = proj.icon;
              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className={`group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br ${proj.cardBg} border border-slate-800/80 ${proj.accentBorder} shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Ambient Glow */}
                  <div className={`absolute top-0 right-0 w-44 h-44 ${proj.glow} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                  <div className="relative z-10">
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                          <Icon className={`w-4 h-4 ${proj.accentColor}`} />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-300">
                          {proj.clientType}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {proj.speed}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mt-4">
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug group-hover:text-purple-300 transition-colors">
                        {proj.title}
                      </h3>
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono font-semibold text-slate-400 hover:text-white transition-colors mt-0.5 inline-flex items-center gap-1"
                      >
                        <Globe className="w-3 h-3 text-slate-500" />
                        <span>{proj.displayUrl}</span>
                      </a>
                    </div>

                    {/* Tagline */}
                    <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                      {proj.tagline}
                    </p>

                    {/* Metrics Banner */}
                    <div className="mt-4 p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400">Verified Result</span>
                      <span className={`text-xs font-black ${proj.accentColor}`}>{proj.metrics}</span>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {proj.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-300 text-[10px] font-semibold border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Live Link Button */}
                  <div className="mt-6 pt-4 border-t border-white/10 relative z-10">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-slate-950 font-black text-xs hover:bg-slate-200 transition-all shadow-md group-hover:scale-[1.02] active:scale-98"
                    >
                      <span>Visit Live Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-purple-700" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All Projects Strip */}
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-purple-600/30 transition-all active:scale-95"
          >
            <span>See Full Case Studies & Live Links on Work Page</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}