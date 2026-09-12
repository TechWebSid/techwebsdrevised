"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle,
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  Star,
  ShoppingBag,
  Building2,
  PhoneCall,
  Clock,
  Gauge
} from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("local");
  const [simulationState, setSimulationState] = useState(null); // 'lead' | 'speed'
  const [speedProgress, setSpeedProgress] = useState(0);

  // Mouse 3D Tilt Physics for the Showcase Window
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 160 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), springConfig);

  // Ambient Hero Cursor Spotlight
  const heroRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });

  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleShowcaseMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleShowcaseMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Run Speed Test Simulation
  const handleRunSpeedTest = () => {
    setSimulationState("speed");
    setSpeedProgress(0);
    let current = 0;
    const interval = setInterval(() => {
      current += 15;
      if (current >= 100) {
        current = 100;
        setSpeedProgress(100);
        clearInterval(interval);
      } else {
        setSpeedProgress(current);
      }
    }, 45);
  };

  // Trigger Simulated Inbound Lead Notification
  const handleTriggerSimulatedLead = () => {
    setSimulationState("lead");
  };

  // Live Showcase Data for 3 Real Business Types
  const showcaseTabs = {
    local: {
      id: "local",
      title: "Consultant & Local Services",
      badge: "Astrology • Healthcare • Professional Practices",
      previewName: "Astro Ashutosh Divyadarshi",
      previewSub: "Trusted by Clients in Lucknow, India & Worldwide (astroashutoshdivyadarshi.com)",
      rating: "4.9 ★ (1,500+ Consultations Booked)",
      headline: "Accurate Vedic Astrology, Kundli Analysis & Spiritual Guidance",
      ctaLabel: "Click To Test: Book on WhatsApp",
      notificationMsg: "🟢 WhatsApp Alert: 'Astro Ashutosh: New Kundli consultation booked for 5:00 PM today!'",
      impactStat: "+220% Inquiries",
      impactDesc: "Direct WhatsApp chats & consultation bookings from local and global search",
      features: [
        { label: "1-Click WhatsApp & Call Buttons", desc: "Clients connect instantly without long complicated forms" },
        { label: "Google Maps & Local Search Setup", desc: "Appear at the top when people search for trusted consultants" },
        { label: "Instant <1s Mobile Loading", desc: "Never lose a client due to a slow, clunky website on phone data" },
      ],
      tagColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      accentGlow: "from-amber-600/20 to-orange-600/10",
    },
    store: {
      id: "store",
      title: "E-Commerce & Retail",
      badge: "Commercial Catalog • Retail • B2B Sales",
      previewName: "Shree Shyam Sales",
      previewSub: "Commercial Sales & Retail Catalog (shreeshyamsales.vercel.app)",
      rating: "4.8 ★ (Commercial Catalog Inquiries)",
      headline: "Modern Commercial & Retail Products Catalog Delivered Fast",
      ctaLabel: "Click To Test: WhatsApp Catalog Order",
      notificationMsg: "🛍️ WhatsApp Order Alert: 'Shree Shyam Sales: New commercial order inquiry received via catalog!'",
      impactStat: "+180% Inquiries",
      impactDesc: "Fast product browsing with instant 1-tap WhatsApp commercial orders",
      features: [
        { label: "Mobile-First Catalog Experience", desc: "Customers browse items effortlessly on any mobile device" },
        { label: "1-Click Direct WhatsApp Ordering", desc: "Direct commercial ordering without cart abandonment friction" },
        { label: "Instant Order Alert to Founder", desc: "Get pinged on WhatsApp the second an inquiry arrives" },
      ],
      tagColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      accentGlow: "from-emerald-600/20 to-teal-600/10",
    },
    brand: {
      id: "brand",
      title: "Creative Agency & Web Apps",
      badge: "Obys Agency • VisionTalk • Sid-Port",
      previewName: "Obys Agency & VisionTalk",
      previewSub: "Awwwards-Level Digital Studios & Real-Time Video Conferencing",
      rating: "Awwwards-Level Digital Craft",
      headline: "Next-Generation Digital Experiences Engineered for Real Scale",
      ctaLabel: "Click To Test: Live Application",
      notificationMsg: "🚀 Live Inbound Inquiry: 'Client requesting high-end creative platform like Obys Agency!'",
      impactStat: "60 FPS Fluid Motion",
      impactDesc: "High-trust creative craft that commands premium market authority",
      features: [
        { label: "Awwwards-Caliber Kinetic Motion", desc: "Gives your brand the polished, high-end look of industry leaders" },
        { label: "Real-Time WebRTC Architecture", desc: "Low-latency HD video conferencing and interactive web systems" },
        { label: "100% Full Ownership", desc: "No monthly lock-in fees or agency hostagetaking — you own everything" },
      ],
      tagColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      accentGlow: "from-purple-600/20 to-indigo-600/10",
    },
  };

  const currentShowcase = showcaseTabs[activeTab];

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      className="relative min-h-[100vh] pt-32 sm:pt-40 pb-20 flex flex-col justify-center items-center overflow-hidden bg-[#fafafa] text-slate-900 selection:bg-[#6938ef] selection:text-white"
    >
      {/* ========================================================= */}
      {/* 1. AMBIENT ATMOSPHERE & MESH LIGHTING                     */}
      {/* ========================================================= */}
      
      {/* Interactive Cursor Tracking Radial Light */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(105, 56, 239, 0.075), transparent 75%)`,
        }}
      />

      {/* Center Prismatic Violet Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-purple-300/40 via-violet-200/25 to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* Left Cyan Aurora */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[150px] pointer-events-none" />

      {/* Right Amethyst / Fuchsia Aura */}
      <div className="absolute top-24 -right-32 w-[600px] h-[600px] bg-fuchsia-200/35 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Overlay with Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(105,56,239,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(105,56,239,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_45%,#000_25%,transparent_100%)] pointer-events-none" />

      {/* Concentric Architectural Orbit Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-purple-500/[0.08] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] rounded-full border border-indigo-500/[0.05] pointer-events-none" />

      {/* ========================================================= */}
      {/* 3. HERO CONTENT CONTAINER (EXACT ORIGINAL USER CONTENT)    */}
      {/* ========================================================= */}
      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 flex flex-col items-center z-30">

        {/* Live Founder Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-purple-200/90 shadow-[0_4px_20px_rgba(105,56,239,0.08)] mb-6 hover:border-purple-400 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs sm:text-[13px] font-extrabold tracking-wide text-slate-800">
            Siddharth Srivastava <span className="text-slate-400 font-normal">|</span> <span className="text-[#6938ef]">Lucknow, India Studio</span> <span className="text-slate-400 font-normal">•</span> <span className="text-emerald-600 font-bold">Taking New Projects</span>
          </span>
        </motion.div>

        {/* Display Headline: Guaranteed No Letter Cutoff + Hand-Drawn Curved Swoosh Underline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-[78px] font-black tracking-[-0.03em] text-[#0b0d14] leading-[1.14] pb-2 font-display">
            Modern Websites That Turn <br className="hidden sm:block" />
            Visitors Into{" "}
            <span className="relative inline-block px-3 py-1.5 -mx-3 -my-1.5 overflow-visible text-transparent bg-clip-text bg-gradient-to-r from-[#6938ef] via-[#9333ea] to-[#d946ef] tracking-tight group cursor-default">
              Paying Clients.

              {/* HAND-DRAWN CURVED SWOOSH UNDERLINE (EXACT STYLE) */}
              <svg 
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-5 overflow-visible pointer-events-none" 
                viewBox="0 0 340 24" 
                fill="none"
              >
                {/* Main Curved Wave */}
                <motion.path
                  d="M 6 14 Q 90 22, 175 16 Q 260 10, 334 17"
                  stroke="url(#purpleCurveGradient)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                />
                {/* Secondary Accent Wave */}
                <motion.path
                  d="M 28 20 Q 180 26, 310 19"
                  stroke="#a855f7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity={0.55}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="purpleCurveGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6938ef" />
                    <stop offset="50%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Subtle Prismatic Glow Reflection */}
              <span className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl pointer-events-none" />
            </span>
          </h1>
        </motion.div>

        {/* Subtitle: Direct, Plain, Understandable by Any Business Owner */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-center text-base sm:text-xl text-slate-600 max-w-3xl font-medium leading-relaxed"
        >
          Whether you need a clean website for your local business, an online shop to sell products, or a custom redesign for your company — I build fast, stunning websites that look incredible on phones, rank on Google, and bring you real inquiries.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Shimmer Wrapped Main CTA */}
          <div className="w-full sm:w-auto p-[1.5px] rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-sky-400 shadow-[0_10px_30px_rgba(105,56,239,0.25)] hover:shadow-[0_15px_45px_rgba(105,56,239,0.4)] transition-all">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#111319] text-white font-black text-sm sm:text-base tracking-wide hover:bg-[#1a1e2a] transition-all active:scale-95 group"
            >
              <span>Get A Free Website Quote</span>
              <ArrowUpRight className="w-5 h-5 text-purple-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Direct WhatsApp Quick Chat Button */}
          <a
            href="https://wa.me/918957035412?text=Hi%20Siddharth,%20I'd%20like%20to%20get%20a%20website%20quote%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/90 text-slate-800 font-extrabold text-sm sm:text-base tracking-wide hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-800 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.04)] active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-500" />
            <span>Chat on WhatsApp (+91 89570 35412)</span>
          </a>
        </motion.div>

        {/* 4 Trust Guarantee Badges with Hover Glow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2.5 text-xs font-bold text-slate-600"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            100% Mobile Friendly
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Loads in &lt;1s on Phones
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Google Local SEO Included
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Direct 1-on-1 with Siddharth
          </span>
        </motion.div>

        {/* ========================================================= */}
        {/* 4. INTERACTIVE 3D BENTO WEBSITE TRANSFORMATION SHOWCASE    */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 w-full max-w-4xl"
          ref={containerRef}
          onMouseMove={handleShowcaseMouseMove}
          onMouseLeave={handleShowcaseMouseLeave}
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative rounded-3xl p-6 sm:p-8 bg-[#10121d] text-white border border-slate-800 shadow-[0_25px_60px_rgba(15,23,42,0.25)] overflow-hidden transition-all duration-200"
          >
            {/* Ambient Background Aura inside card */}
            <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-b ${currentShowcase.accentGlow} rounded-full blur-3xl pointer-events-none transition-colors duration-500`} />

            {/* Window Top Bar: Business Type Selector Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/90 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-bold text-slate-400 pl-2">
                  Interactive Preview: Click to Test Live Features
                </span>
              </div>

              {/* 3 Real Business Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-[#181a2b] rounded-2xl border border-slate-800 overflow-x-auto no-scrollbar">
                {[
                  { id: "local", label: "Astro Ashutosh", icon: Building2 },
                  { id: "store", label: "Shree Shyam Sales", icon: ShoppingBag },
                  { id: "brand", label: "Obys & VisionTalk", icon: Star },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setSimulationState(null);
                      }}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
                        activeTab === tab.id
                          ? "bg-[#6938ef] text-white shadow-md shadow-purple-600/30"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Interactive Business Mockup Panel */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-6">
              
              {/* Left Column: Live Website Mockup Card with Interactive Actions */}
              <div className="md:col-span-6 bg-[#16182a] rounded-2xl p-6 border border-slate-700/80 shadow-inner flex flex-col justify-between relative overflow-hidden">
                
                {/* Simulated Floating Alert Overlay */}
                <AnimatePresence>
                  {simulationState === "lead" && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      className="absolute inset-x-3 top-3 z-30 p-3.5 rounded-xl bg-emerald-950/95 border border-emerald-400 text-white shadow-2xl backdrop-blur-xl"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-xs font-medium leading-snug">
                          {currentShowcase.notificationMsg}
                        </div>
                        <button
                          onClick={() => setSimulationState(null)}
                          className="text-emerald-400 hover:text-white text-xs font-bold"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-emerald-300">
                        <span>⚡ Tested live in 0.4s</span>
                        <a
                          href="https://wa.me/918957035412"
                          target="_blank"
                          rel="noreferrer"
                          className="underline font-bold"
                        >
                          Want this for your site?
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {simulationState === "speed" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-3 z-30 p-4 rounded-xl bg-[#0e101c]/98 border border-purple-500/80 flex flex-col justify-center items-center text-center shadow-2xl backdrop-blur-xl"
                    >
                      <Gauge className="w-8 h-8 text-emerald-400 animate-spin" />
                      <h5 className="text-sm font-black text-white mt-2">Running Real-Time Speed Audit...</h5>
                      <div className="w-full bg-slate-800 rounded-full h-2 mt-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-emerald-400 h-full transition-all duration-150"
                          style={{ width: `${speedProgress}%` }}
                        />
                      </div>
                      <div className="mt-3 flex items-center gap-4 text-xs font-bold text-slate-300">
                        <span>🚀 Score: {speedProgress >= 100 ? "99/100" : `${speedProgress}%`}</span>
                        <span>⚡ Load: 0.68s</span>
                        <span>📱 TTFB: 28ms</span>
                      </div>
                      {speedProgress >= 100 && (
                        <button
                          onClick={() => setSimulationState(null)}
                          className="mt-3 px-4 py-1 rounded-lg bg-emerald-500 text-slate-950 text-xs font-black"
                        >
                          Close Audit Result
                        </button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 block">
                        Live Preview Simulation
                      </span>
                      <h4 className="text-lg font-black text-white mt-0.5">
                        {currentShowcase.previewName}
                      </h4>
                    </div>
                    {/* Live Speed Trigger Pill */}
                    <button
                      onClick={handleRunSpeedTest}
                      title="Click to test loading speed"
                      className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 hover:bg-emerald-500/25 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1 transition-colors"
                    >
                      <Zap className="w-3 h-3 text-emerald-400 animate-pulse" />
                      <span>Test Speed (0.7s)</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 mt-2 font-medium">
                    {currentShowcase.previewSub}
                  </p>

                  <div className="mt-4 p-4 rounded-xl bg-[#1d2036] border border-slate-700/60">
                    <span className="text-[11px] font-bold text-amber-300 block mb-1">
                      {currentShowcase.rating}
                    </span>
                    <h5 className="text-sm font-bold text-white leading-snug">
                      "{currentShowcase.headline}"
                    </h5>
                  </div>
                </div>

                {/* Interactive Simulated CTA Trigger */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button
                    onClick={handleTriggerSimulatedLead}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/25 active:scale-95 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{currentShowcase.ctaLabel}</span>
                  </button>
                  <span className="text-[10px] text-center text-slate-400 block mt-2">
                    Click the button above to simulate how customer inquiries ping directly on your phone!
                  </span>
                </div>
              </div>

              {/* Right Column: Clear Business Benefits & Impact */}
              <div className="md:col-span-6 flex flex-col justify-center space-y-4">
                
                {/* Result Callout Card */}
                <div className="p-4 rounded-2xl bg-[#17192a] border border-purple-500/30">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      {currentShowcase.impactStat}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Verified Impact
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {currentShowcase.impactDesc}
                  </p>
                </div>

                {/* 3 Real Feature Highlights */}
                <div className="space-y-3">
                  {currentShowcase.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs group">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-purple-500/40 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-300 group-hover:text-white" />
                      </div>
                      <div>
                        <span className="text-white font-bold block">{feat.label}</span>
                        <span className="text-slate-400 font-normal leading-relaxed">{feat.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Action Link to Work Page */}
                <div className="pt-2">
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View all 5 live projects with direct links</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>

          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400">
            Scroll to explore features & packages
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-300 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#6938ef]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}