"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Ananya Sen",
      role: "Clinic Director",
      company: "Sen Aesthetic Healthcare",
      avatar: "https://images.unsplash.com/photo-1594824813681-30477b7899b1?auto=format&fit=crop&q=80&w=200",
      content:
        "Siddharth completely transformed our clinic's online presence. Within two weeks of launch, our WhatsApp patient inquiries doubled because visitors can now book in a single tap from their phones. Working directly with him was effortless and fast.",
      metric: "+210% Patient Inquiries",
      industry: "Healthcare & Clinic",
      rating: 5,
    },
    {
      name: "Rahul Mehra",
      role: "Co-Founder",
      company: "CraftLore Lifestyle Goods",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      content:
        "Our previous online shop took 5 seconds to open on phones and customers kept abandoning their carts. Siddharth rebuilt our store so it loads instantly with 1-tap UPI payments. Our sales jumped by 140% in the very first month.",
      metric: "+140% Online Sales",
      industry: "E-Commerce & Retail",
      rating: 5,
    },
    {
      name: "Aman Singhania",
      role: "Managing Director",
      company: "Kuro Corporate Ventures",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      content:
        "We had burned two months and significant budget with a traditional agency that kept delaying. Siddharth took over and delivered our complete company website in three weeks flat with zero excuses, fixed pricing, and world-class design.",
      metric: "3-Week On-Time Delivery",
      industry: "Corporate & B2B",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#fafafa] text-slate-900 overflow-hidden">
      {/* Soft Ambient Lilac Gradients */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-purple-200/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-slate-200/80 pb-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-[#6938ef] mb-3">
              Client Feedback & Social Proof
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
              Trusted By Real Business Owners. <br />
              <span className="text-[#6938ef]">Here's What They Experience.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
              ))}
            </div>
            <div className="text-left leading-tight pl-1">
              <div className="text-sm font-black text-slate-900">4.9 / 5.0 Rating</div>
              <div className="text-xs text-slate-500 font-medium">Verified by 45+ Clients</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-3xl p-7 sm:p-8 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(105,56,239,0.08)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Metric Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-50 text-[#6938ef] border border-purple-100">
                    <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
                    {item.metric}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed font-normal">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-2xl object-cover border border-purple-100 shadow-sm"
                />
                <div>
                  <div className="text-sm font-extrabold text-slate-950 flex items-center gap-1">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-50" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
                    {item.role} • <span className="text-slate-800 font-semibold">{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
