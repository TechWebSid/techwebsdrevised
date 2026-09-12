"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import { Sparkles, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f111a] text-white selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Hero Intro */}
      <section className="relative pt-40 sm:pt-48 pb-12 flex flex-col items-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 text-xs font-black uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Direct Founder Access
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.04] max-w-5xl">
          Let's Architect Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-200">
            Digital Advantage.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
          Zero account managers. Zero automated rejection emails. Tell us what you need and get a detailed architectural response from Siddharth within 12 hours.
        </p>

        {/* Guarantees Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Strict Non-Disclosure (NDA) Protected</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>Direct Principal Engineer Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Transparent Milestone Pricing</span>
          </div>
        </div>
      </section>

      {/* Mount Contact Section */}
      <div className="-mt-16">
        <ContactSection />
      </div>

      {/* Light FAQ Block on Dark Page */}
      <div className="bg-[#fafafa]">
        <FaqSection />
      </div>

      <Footer />
    </main>
  );
}
