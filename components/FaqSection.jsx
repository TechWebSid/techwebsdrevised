"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Getting Started", "Pricing & Ownership", "Timeline & Process"];

  const faqs = [
    {
      category: "Getting Started",
      q: "I run a small local business. Is my project too simple or small for you?",
      a: "Not at all! Whether you need a clean 3-page website for your clinic, a local store showcase, a salon booking site, or a custom company platform, every client gets the exact same care, polish, and direct founder attention. No project is 'too small'.",
    },
    {
      category: "Timeline & Process",
      q: "How fast will my website be completed and launched?",
      a: "Most business websites are designed, built, and launched in 2 to 3 weeks. Online stores and custom booking platforms typically take 3 to 5 weeks. You will receive direct updates on WhatsApp every few days as progress happens.",
    },
    {
      category: "Pricing & Ownership",
      q: "Do I own my website completely, or are there hidden monthly agency fees?",
      a: "You own 100% of your website, your domain name, and all your content. There are zero hidden monthly retainers or lock-ins. Once final payment is made, everything is transferred to your full ownership.",
    },
    {
      category: "Getting Started",
      q: "Will my website load fast on mobile phones and rank on Google?",
      a: "Yes, guaranteed. Over 75% of your customers visit from phones, so we build mobile-first to ensure your site opens in under 1 second on mobile data. We also configure local Google SEO tags and Google Maps details so customers searching in your area can discover you easily.",
    },
    {
      category: "Timeline & Process",
      q: "Who will I be talking to during the project?",
      a: "You communicate 100% directly with Siddharth Srivastava (founder & engineer) via WhatsApp, phone calls, or Google Meet. There are no account managers, no confusing telephone games, and no delays in getting answers.",
    },
    {
      category: "Pricing & Ownership",
      q: "What if I need changes or help after the website goes live?",
      a: "Every project comes with 30 days of free post-launch support for any tweaks, minor text updates, and guidance. Even after that, I am always just a quick WhatsApp message away whenever your business grows and needs new pages.",
    },
    {
      category: "Pricing & Ownership",
      q: "How does payment work?",
      a: "We work on a fair, risk-free milestone model: 50% upfront to begin work and reserve your sprint, and the remaining 50% only when the website is finished, tested, and you are 100% satisfied with the outcome. We accept UPI (GPay, PhonePe, Paytm), bank wire, and international cards.",
    },
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#fafafa] text-slate-900 overflow-hidden selection:bg-[#6938ef] selection:text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-purple-200/35 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#6938ef] text-xs font-black uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> Plain Answers
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Frequently Asked <br />
            <span className="text-[#6938ef]">Questions.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about working with Siddharth at TechWebSid.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#111319] text-white shadow-md shadow-slate-900/15"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-purple-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white/95 border-purple-300 shadow-[0_10px_35px_rgba(105,56,239,0.08)]"
                    : "bg-white/70 border-slate-200/90 hover:border-slate-300 hover:bg-white/90"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-extrabold text-base sm:text-lg text-slate-950 tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#6938ef] text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Touchpoint */}
        <div className="mt-10 text-center p-6 rounded-3xl bg-purple-50/90 border border-purple-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-black text-slate-900">Have a specific question about your business website?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Siddharth responds directly within a few hours on WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/918957035412?text=Hi%20Siddharth,%20I%20have%20a%20question%20about%20getting%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Chat on WhatsApp (+91 89570 35412)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
