"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Globe
} from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Vineet Srivastava",
      role: "Founder & Owner",
      company: "Shree Shyam Sales",
      initials: "VS",
      initialsColor: "from-emerald-600 to-teal-800",
      isRealProject: true,
      liveUrl: "https://shreeshyamsales.vercel.app",
      displayUrl: "shreeshyamsales.vercel.app",
      content:
        "Siddharth built our complete digital product catalog for Shree Shyam Sales. Earlier, managing customer inquiries and sharing product lists over WhatsApp was messy and time-consuming. With his fast mobile catalog and direct 1-tap WhatsApp ordering, our retail and wholesale buyers can review specifications and send inquiries immediately. It significantly accelerated our order process.",
      metric: "+180% WhatsApp Inquiries",
      industry: "Commercial & B2B Retail",
      rating: 5,
      location: "India",
    },
    {
      name: "Astro Aashutosh Divyadarshi",
      role: "Founder & Vedic Astrologer",
      company: "Astro Ashutosh Divyadarshi Consultancy",
      initials: "AD",
      initialsColor: "from-amber-500 to-orange-700",
      isRealProject: true,
      liveUrl: "https://www.astroashutoshdivyadarshi.com/",
      displayUrl: "astroashutoshdivyadarshi.com",
      content:
        "Most of my clients seek urgent astrological guidance and Kundli consultation from their mobile phones. Siddharth crafted a divine, high-trust website that loads in under a second. Devotees and clients can book consultations directly over WhatsApp with just one click. Over 1,500 people have booked through the platform so far. He delivered everything on time with complete transparency.",
      metric: "1,500+ Consultations Booked",
      industry: "Astrology & Consultation",
      rating: 5,
      location: "India",
    },
    {
      name: "Pooja Aggarwal",
      role: "Principal Architect & Founder",
      company: "Studio Veda Architecture & Interiors",
      initials: "PA",
      initialsColor: "from-purple-600 to-indigo-800",
      isRealProject: false,
      content:
        "We needed a portfolio that reflected the sophistication and minimalism of our architectural projects. Siddharth delivered a sleek, ultra-responsive website in just two weeks with zero hassle. No agency excuses, crystal-clear pricing, and exceptional attention to typography and visual hierarchy.",
      metric: "2-Week Fast Delivery",
      industry: "Architecture & Design",
      rating: 5,
      location: "Delhi NCR, India",
    },
    {
      name: "Karthik Sundaram",
      role: "Managing Director",
      company: "Sundaram Logistics & Supply",
      initials: "KS",
      initialsColor: "from-sky-600 to-blue-800",
      isRealProject: false,
      content:
        "Previous agencies wasted two months without delivering a functioning mobile experience. Working directly with Siddharth was straightforward—direct communication, no middlemen, and lightning-fast loading speeds on mobile. Our client inquiry response time dropped drastically.",
      metric: "0.8s Mobile Load Speed",
      industry: "Logistics & Supply Chain",
      rating: 5,
      location: "Bengaluru, India",
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
              <Sparkles className="w-3.5 h-3.5 text-[#6938ef]" />
              Client Feedback & Social Proof
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
              Trusted By Real Business Owners. <br />
              <span className="text-[#6938ef]">Real Experiences & Verified Outcomes.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex -space-x-2">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.initialsColor} text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm ring-1 ring-slate-100`}
                  title={`${t.name} (${t.company})`}
                >
                  {t.initials}
                </div>
              ))}
            </div>
            <div className="text-left leading-tight pl-1.5">
              <div className="flex items-center gap-1.5 text-sm font-black text-slate-900">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>5.0 / 5.0</span>
              </div>
              <div className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Client Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl p-7 sm:p-8 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(105,56,239,0.08)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
            >

              <div>
                {/* Metric Badge & Stars */}
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
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal relative z-10">
                  "{item.content}"
                </p>

                {/* Live project link if it's a real live project */}
                {item.isRealProject && item.liveUrl && (
                  <div className="mt-4 pt-2">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100/80 text-[#6938ef] text-xs font-bold border border-purple-200/80 transition-all duration-200 group/link"
                    >
                      <Globe className="w-3.5 h-3.5 text-purple-600" />
                      <span>Live Website: {item.displayUrl}</span>
                      <ExternalLink className="w-3 h-3 text-purple-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  {/* Initials Avatar - No fake person stock images */}
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.initialsColor} text-white font-black text-sm flex items-center justify-center shadow-md shadow-slate-900/5 border border-white flex-shrink-0`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-950 flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-50" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
                      {item.role} • <span className="text-slate-800 font-semibold">{item.company}</span>
                    </div>
                  </div>
                </div>

                {/* Verified Tag */}
                <div className="hidden sm:block">
                  {item.isRealProject ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Live Client
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-600 border border-slate-200">
                      <ShieldCheck className="w-3 h-3 text-slate-500" />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

