"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, Zap, Award, Calculator, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PricingAndModels() {
  const [selectedFeatures, setSelectedFeatures] = useState([0, 1, 2, 5]);

  const featureOptions = [
    { title: "Mobile-Optimized Custom Design", weeks: 1 },
    { title: "1-Click WhatsApp & Direct Call Buttons", weeks: 0.5 },
    { title: "Google Local Search (SEO) & Maps Setup", weeks: 0.5 },
    { title: "Online Store & UPI / Card Checkout", weeks: 1.5 },
    { title: "Automated Appointment / Booking Form", weeks: 1 },
    { title: "Lightning-Fast Mobile Speed (<1s)", weeks: 0.5 },
  ];

  const toggleFeature = (index) => {
    if (selectedFeatures.includes(index)) {
      if (selectedFeatures.length > 1) {
        setSelectedFeatures(selectedFeatures.filter((i) => i !== index));
      }
    } else {
      setSelectedFeatures([...selectedFeatures, index]);
    }
  };

  const calculatedWeeks = Math.max(
    2,
    Math.round(selectedFeatures.reduce((acc, curr) => acc + featureOptions[curr].weeks, 0))
  );

  const models = [
    {
      title: "Complete Business Website",
      subtitle: "For Local Businesses, Clinics, Shops & Services",
      timeline: "2 - 3 Weeks Delivery",
      desc: "Everything your business needs to establish strong credibility, rank on Google, and convert visitors into direct phone calls and WhatsApp inquiries.",
      guarantee: "100% Satisfaction Guarantee: We refine and polish your website until you are 100% proud of how it represents your business.",
      features: [
        "Custom modern design tailored to your brand (No cookie-cutter templates)",
        "Instant <1s load time on iPhones & Android phones",
        "1-Click WhatsApp chat & direct phone call buttons",
        "Google Local Search (SEO) & Google Maps verification setup",
        "100% full ownership — your domain, your content, zero lock-ins",
        "30 days of free post-launch support and minor changes",
      ],
      cta: "Get Quote For This Package",
      highlight: false,
    },
    {
      title: "Custom Platform & Online Store",
      subtitle: "For E-Commerce, Custom Portals & Growing Brands",
      timeline: "3 - 5 Weeks Delivery",
      desc: "For businesses that need an online store to sell products, an automated booking portal, or custom software to streamline operations.",
      guarantee: "Founder Direct Guarantee: Zero junior coders. Siddharth personally designs, codes, and launches your platform with direct WhatsApp access.",
      features: [
        "Everything in Complete Business Website",
        "Full mobile-friendly online store with instant UPI & card checkout",
        "Automated appointment booking & customer reservation calendar",
        "Instant WhatsApp & email notifications for every new lead or order",
        "Google Analytics & sales conversion tracking",
        "Priority direct communication with Siddharth for continuous updates",
      ],
      cta: "Discuss Your Custom Project",
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#fafafa] text-slate-900 overflow-hidden selection:bg-[#6938ef] selection:text-white">
      {/* Background Soft Aurora */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-[#6938ef] text-xs font-black uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" /> Simple, Transparent Options
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Clear Packages Built For <br />
            <span className="text-[#6938ef]">Guaranteed Business Results.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            No confusing hourly bills or hidden recurring fees. You get a fixed quote, a guaranteed launch date, and direct founder collaboration.
          </p>
        </div>

        {/* INTERACTIVE SPRINT SCOPE ESTIMATOR CALCULATOR */}
        <div className="mb-14 p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121422] to-[#0b0c16] text-white border border-slate-800 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-7 border-b border-slate-800 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
                <Calculator className="w-3.5 h-3.5" /> Interactive Timeline Estimator
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Select What Your Business Needs
              </h3>
            </div>
            
            <div className="flex items-center gap-4 bg-[#1b1e32] px-6 py-3 rounded-2xl border border-slate-700">
              <Clock className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Estimated Timeline
                </span>
                <span className="text-lg font-black text-white">
                  {calculatedWeeks} - {calculatedWeeks + 1} Weeks
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
              Click to select the features you'd like included:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {featureOptions.map((opt, idx) => {
                const isChecked = selectedFeatures.includes(idx);
                return (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => toggleFeature(idx)}
                    className={`p-4 rounded-2xl text-left border text-xs font-bold transition-all flex items-center justify-between gap-3 active:scale-98 cursor-pointer ${
                      isChecked
                        ? "bg-purple-600/30 border-purple-500 text-white shadow-md shadow-purple-600/20"
                        : "bg-[#161828] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    <span>{opt.title}</span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${
                      isChecked ? "bg-purple-500 text-white" : "border border-slate-700 text-transparent"
                    }`}>
                      ✓
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {models.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between border ${
                model.highlight
                  ? "bg-[#0f1118] text-white border-purple-500/50 shadow-[0_20px_50px_rgba(105,56,239,0.18)]"
                  : "bg-white text-slate-900 border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
              }`}
            >
              {model.highlight && (
                <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#6938ef] to-pink-500 text-white font-black text-[11px] uppercase tracking-wider shadow-md">
                  Most Popular for Growth
                </div>
              )}

              <div>
                {/* Header */}
                <div className={`flex items-start justify-between gap-4 border-b pb-5 ${model.highlight ? 'border-slate-800' : 'border-slate-100'}`}>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${model.highlight ? 'text-purple-400' : 'text-purple-600'}`}>
                      {model.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                      {model.title}
                    </h3>
                  </div>
                  <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex-shrink-0 ${model.highlight ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                    {model.timeline}
                  </span>
                </div>

                <p className={`mt-4 text-sm sm:text-base leading-relaxed ${model.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                  {model.desc}
                </p>

                {/* Guarantee Banner */}
                <div className={`mt-5 p-4 rounded-2xl border ${
                  model.highlight
                    ? 'bg-purple-950/40 border-purple-500/30 text-purple-200'
                    : 'bg-purple-50 border-purple-200 text-purple-900'
                }`}>
                  <span className="text-xs font-black uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-500" /> Result Guarantee
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-normal mt-0.5">
                    {model.guarantee}
                  </p>
                </div>

                {/* Features List */}
                <ul className="mt-7 space-y-3.5">
                  {model.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        model.highlight
                          ? 'bg-purple-500/20 text-purple-400'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className={model.highlight ? 'text-slate-300 font-medium' : 'text-slate-700 font-medium'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className={`mt-8 pt-5 border-t ${model.highlight ? 'border-slate-800' : 'border-slate-100'}`}>
                <Link
                  href="/contact"
                  prefetch={true}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 shadow-md ${
                    model.highlight
                      ? 'bg-white text-slate-950 hover:bg-purple-400'
                      : 'bg-slate-950 text-white hover:bg-[#6938ef]'
                  }`}
                >
                  <span>{model.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}