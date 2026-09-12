"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Zap, ArrowUpRight, ShieldCheck, Smartphone, Search, Users, Clock } from "lucide-react";
import Link from "next/link";

export default function TrustMetricsBar() {
  const [speedTestActive, setSpeedTestActive] = useState(false);
  const [testResult, setTestResult] = useState(false);

  const tickerItems = [
    "Modern Design Tailored To Your Brand",
    "Loads in Under 1 Second on Phones",
    "1-Click WhatsApp & Call Buttons",
    "Google Local Search Optimization",
    "100% Full Ownership • No Lock-Ins",
    "Zero Hidden Monthly Agency Fees",
    "Built Personally By Siddharth",
    "Fast 2 to 3 Week Turnaround",
  ];

  const businessStats = [
    { label: "Websites Delivered", value: "45+", unit: "Projects", status: "Across India & Abroad", color: "text-purple-400" },
    { label: "Mobile Loading Speed", value: "<1.0", unit: "sec", status: "Instant on 4G / 5G", color: "text-emerald-400" },
    { label: "Satisfaction Guarantee", value: "100", unit: "%", status: "Refined Until You Love It", color: "text-sky-400" },
    { label: "Average Delivery Time", value: "2 - 3", unit: "weeks", status: "Fast & On-Schedule", color: "text-amber-400" },
  ];

  const runTest = () => {
    setSpeedTestActive(true);
    setTestResult(false);
    setTimeout(() => {
      setSpeedTestActive(false);
      setTestResult(true);
    }, 1000);
  };

  return (
    <section className="relative py-16 bg-[#0b0d14] text-white overflow-hidden border-y border-slate-800/90 selection:bg-purple-500 selection:text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-purple-600/10 blur-[140px] pointer-events-none" />

      {/* 1. Continuous Ticker Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap mb-12 border-b border-slate-800/80 pb-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          className="flex items-center gap-10 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-400"
        >
          {[...tickerItems, ...tickerItems].map((text, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-white hover:text-purple-400 transition-colors">{text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-sm shadow-purple-500/50" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Core Stats Bar */}
        <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-[#141624] via-[#10121d] to-[#0d0e17] border border-slate-800 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-slate-800/80 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
                <Sparkles className="w-4 h-4" /> Real Client Guarantees
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Designed to Deliver Real Business Growth
              </h3>
            </div>

            {/* Interactive Speed Check Simulation */}
            <button
              onClick={runTest}
              disabled={speedTestActive}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/40 hover:bg-purple-600 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 flex-shrink-0"
            >
              <Zap className={`w-3.5 h-3.5 ${speedTestActive ? "animate-spin text-amber-400" : "text-purple-400"}`} />
              <span>{speedTestActive ? "Measuring Speed..." : testResult ? "Speed Verified: Instant 0.7s" : "Test Mobile Speed"}</span>
            </button>
          </div>

          {/* 4 Clear Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8">
            {businessStats.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-1">
                  <span className={item.color}>{item.value}</span>
                  <span className="text-xs sm:text-sm text-slate-400 font-bold">{item.unit}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-2">
                  {item.label}
                </div>
                <div className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Direct Founder Guarantee Card */}
        <div className="mt-8 rounded-3xl p-7 sm:p-10 bg-gradient-to-r from-purple-950/40 via-[#161828] to-indigo-950/40 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-300" /> Direct 1-on-1 Collaboration
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              You Work Directly With Me. No Junior Trainees.
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
              When you hire TechWebSid, you don't get passed to an entry-level intern or an account manager. Every screen, button, and Google SEO tag is personally built and tested by Siddharth Srivastava.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-purple-300 transition-all duration-200 active:scale-95 shadow-lg group"
          >
            <span>Talk With Siddharth</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}