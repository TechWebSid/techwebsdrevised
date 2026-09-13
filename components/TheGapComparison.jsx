"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, ShieldAlert, Sparkles, Scale, Zap } from "lucide-react";
import Link from "next/link";

export default function TheGapComparison() {
  const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'agency' | 'techwebsid'

  const comparisonData = [
    {
      feature: "Who Builds Your Website",
      agency: "Passed down to inexperienced junior interns or outsourced trainees",
      techwebsid: "100% personally designed & coded by Siddharth Srivastava",
    },
    {
      feature: "Communication & Updates",
      agency: "Account managers, formal ticket queues, and 3-day email delays",
      techwebsid: "Direct WhatsApp chat with Siddharth for quick answers & updates",
    },
    {
      feature: "Delivery Timeline",
      agency: "3 to 6 months of bureaucracy, endless meetings, and delay excuses",
      techwebsid: "Fast 2 to 3 week turnaround with guaranteed launch on time",
    },
    {
      feature: "Mobile Loading Speed",
      agency: "Clunky, bloated templates taking 4+ seconds to open on phones",
      techwebsid: "Handcrafted clean build loading in under 1 second on any phone",
    },
    {
      feature: "Client Inquiries & Leads",
      agency: "Generic brochure websites with long forms that visitors abandon",
      techwebsid: "Strategic 1-click WhatsApp & call triggers that drive real calls",
    },
    {
      feature: "Website Ownership",
      agency: "Trapped in proprietary systems with expensive monthly lock-in retainers",
      techwebsid: "100% complete ownership of your site, domain, and files — zero lock-in",
    },
  ];

  return (
    <section id="advantage" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#141525] via-[#10111f] to-[#0d0e1a] text-white overflow-hidden selection:bg-purple-500 selection:text-white">
      
      {/* Soft Ambient Lilac & Violet Lighting Gradients */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Concentric Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-purple-400/[0.05] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Pill & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 text-xs font-black uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" /> The Honest Difference
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            The Traditional Agency Trap <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-200">
              vs. Direct Founder Collaboration.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
            Eliminate agency overhead, surprise invoices, and endless miscommunications. Work directly with someone who genuinely cares about your business results.
          </p>

          {/* Perspective View Switcher */}
          <div className="mt-8 inline-flex items-center gap-1 p-1 bg-[#1a1b2d] rounded-full border border-slate-800 shadow-lg">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === "all"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setActiveFilter("techwebsid")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === "techwebsid"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              TechWebSid Only
            </button>
            <button
              onClick={() => setActiveFilter("agency")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === "agency"
                  ? "bg-rose-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              The Agency Trap
            </button>
          </div>
        </div>

        {/* Two-Column Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Traditional Agencies */}
          {(activeFilter === "all" || activeFilter === "agency") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-3xl p-7 sm:p-9 bg-[#161726]/80 border border-slate-800/80 backdrop-blur-xl flex flex-col justify-between shadow-2xl ${
                activeFilter === "agency" ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-rose-400">The Usual Experience</span>
                    <h3 className="text-2xl font-black text-slate-300 mt-1">Typical Agencies</h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                <ul className="mt-7 space-y-5">
                  {comparisonData.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">{item.feature}</span>
                        <span className="text-sm font-medium text-slate-300 leading-snug">{item.agency}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-800/80 text-xs text-slate-400 font-medium">
                High markups, junior trainees, and constant delay excuses.
              </div>
            </motion.div>
          )}

          {/* Card 2: TechWebSid */}
          {(activeFilter === "all" || activeFilter === "techwebsid") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#221f45] via-[#1b1937] to-[#15132c] border-2 border-purple-400/60 shadow-[0_15px_60px_rgba(147,51,234,0.25)] backdrop-blur-xl flex flex-col justify-between ${
                activeFilter === "techwebsid" ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
              }`}
            >
              <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-[11px] uppercase tracking-wider shadow-lg shadow-purple-500/30">
                Direct Founder Guarantee
              </div>

              <div>
                <div className="flex items-center justify-between pb-6 border-b border-purple-400/20">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-300">The Better Way</span>
                    <h3 className="text-2xl font-black text-white mt-1">TechWebSid</h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/30 border border-purple-400/50 flex items-center justify-center text-purple-200 shadow-md shadow-purple-500/20">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                </div>

                <ul className="mt-7 space-y-5">
                  {comparisonData.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-purple-500/40 border border-purple-400 flex items-center justify-center text-purple-200 flex-shrink-0 mt-0.5 shadow-sm shadow-purple-500/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-purple-300">{item.feature}</span>
                        <span className="text-sm font-semibold text-white leading-snug">{item.techwebsid}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-purple-400/20">
                <Link
                  href="/contact"
                  prefetch={true}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-slate-950 hover:bg-purple-400 hover:text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-white/10"
                >
                  <span>Work Directly With Siddharth</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}