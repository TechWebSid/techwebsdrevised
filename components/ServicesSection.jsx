"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Building2, 
  ShoppingBag, 
  RefreshCw, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  Calendar,
  Zap,
  MessageCircle,
  CreditCard,
  Gauge
} from "lucide-react";

// Interactive Bento Card Component with Cursor Spotlight Tracker
function BentoServiceCard({ svc }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [interactiveState, setInteractiveState] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = svc.icon;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setInteractiveState(null);
      }}
      className="group relative rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-7 sm:p-9 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(105,56,239,0.12)] hover:border-purple-300 transition-all duration-300 overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(105, 56, 239, 0.08), transparent 70%)`,
          }}
        />
      )}

      {/* DUAL CONTINUOUS MARQUEE RIBBONS */}
      <div className="w-full relative overflow-hidden mb-7 border-b border-slate-100 pb-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Top Ribbon */}
        <div className="flex w-max animate-marquee group-hover:[animation-duration:14s] gap-3 text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">
          <div className="flex gap-3 items-center">
            {svc.topTicker.map((item, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 hover:text-purple-600 transition-colors">
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            {svc.topTicker.map((item, i) => (
              <span key={`dup-${i}`} className="px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 hover:text-purple-600 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Ribbon */}
        <div className="flex w-max animate-marquee-reverse group-hover:[animation-duration:14s] gap-3 text-xs font-bold tracking-wider text-slate-500 uppercase">
          <div className="flex gap-3 items-center">
            {svc.bottomTicker.map((item, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 hover:text-purple-950 transition-colors">
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            {svc.bottomTicker.map((item, i) => (
              <span key={`dup2-${i}`} className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 hover:text-purple-950 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Service Number & Category Badge */}
        <div className="lg:col-span-3 flex lg:flex-col justify-between items-baseline lg:items-start gap-3">
          <span className="text-3xl sm:text-4xl font-black text-slate-300 group-hover:text-purple-600 transition-colors">
            {svc.id}
          </span>
          
          {/* Gradient Icon Badge */}
          <div className="flex items-center gap-2.5">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.iconGradient} flex items-center justify-center text-white shadow-md shadow-purple-600/20 group-hover:scale-105 transition-transform`}>
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6938ef] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              {svc.category}
            </span>
          </div>

          <span className="hidden lg:block text-[11px] font-bold text-slate-400 mt-2">
            Ideal for: {svc.bestFor}
          </span>
        </div>

        {/* Title, Description & Interactive Micro-Widget */}
        <div className="lg:col-span-6">
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#6938ef] transition-colors">
            {svc.title}
          </h3>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {svc.description}
          </p>

          {/* Interactive Bento Micro-Features */}
          {svc.id === "{01}" && (
            <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live WhatsApp Lead Trigger:</span>
              </div>
              <a
                href="https://wa.me/918957035412?text=Hi%20Siddharth,%20I'd%20like%20to%20get%20a%20website%20quote%20for%20my%20local%20business."
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Test 1-Tap Connect</span>
              </a>
            </div>
          )}

          {svc.id === "{02}" && (
            <div className="mt-4 p-3 rounded-2xl bg-purple-50/60 border border-purple-200/80 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-purple-900">
                <CreditCard className="w-3.5 h-3.5 text-purple-600" />
                <span>Instant UPI • GPay • PhonePe • Cards</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-white text-emerald-700 font-black border border-emerald-200 text-[11px]">
                0.3s Checkout
              </span>
            </div>
          )}

          {svc.id === "{03}" && (
            <div className="mt-4 p-3 rounded-2xl bg-sky-50/70 border border-sky-200/80 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-sky-950">
                <Gauge className="w-3.5 h-3.5 text-sky-600" />
                <span>Speed Boost: 4.8s (Old Site) ➔ 0.68s (TechWebSid)</span>
              </div>
              <span className="text-[11px] font-black text-sky-700 bg-white px-2 py-0.5 rounded-md border border-sky-200">
                99/100 Mobile
              </span>
            </div>
          )}

          {svc.id === "{04}" && (
            <div className="mt-4 p-3 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-indigo-950">
                <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                <span>Automated Booking Sync:</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="px-2 py-0.5 rounded-md bg-white border border-indigo-200 text-indigo-800 font-bold">10:00 AM</span>
                <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-bold">2:30 PM</span>
                <span className="px-2 py-0.5 rounded-md bg-white border border-indigo-200 text-indigo-800 font-bold">5:00 PM</span>
              </div>
            </div>
          )}

          {/* Benefit Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {svc.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link Button */}
        <div className="lg:col-span-3 flex lg:justify-end items-center h-full">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-900 group-hover:bg-[#111319] group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
          >
            <span>Get Free Estimate</span>
            <ArrowUpRight className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      id: "{01}",
      category: "Local & Professional",
      title: "High-Trust Websites That Bring Direct Calls & Inquiries",
      description:
        "Designed to make your business look credible, established, and premium. Comes with 1-click WhatsApp buttons, direct phone call triggers, customer reviews, and local Google SEO so nearby customers find you first.",
      icon: Building2,
      tags: ["Local Google SEO", "1-Click WhatsApp", "Direct Call Buttons", "Mobile Optimized", "Customer Reviews"],
      topTicker: ["Google Local Search", "Direct WhatsApp Leads", "Mobile First", "Doctor & Clinic Websites", "Salon & Spa Websites", "Real Estate Portals"],
      bottomTicker: ["Instant Phone Calls", "100% Satisfaction", "Loads Under 1s", "Customer Trust Proof", "Clean Modern Layout", "No Monthly Fees"],
      iconGradient: "from-indigo-600 to-purple-600",
      bestFor: "Clinics, Doctors, Salons, Law Firms, Contractors & Local Services",
    },
    {
      id: "{02}",
      category: "E-Commerce & Retail",
      title: "Fast Online Stores That Turn Browsers Into Paying Customers",
      description:
        "Clean, mobile-first shopping experience with frictionless checkout. Supports instant UPI (GPay, PhonePe, Paytm), debit/credit cards, and Cash on Delivery with instant WhatsApp order notifications.",
      icon: ShoppingBag,
      tags: ["Instant UPI & Card Checkout", "Product Catalog", "WhatsApp Order Alerts", "Mobile Shopping", "Fast Search"],
      topTicker: ["Instant UPI Payments", "Fast Product Search", "Zero Checkout Friction", "Automated WhatsApp Alerts", "Mobile Shopping", "Discount Codes"],
      bottomTicker: ["Higher Order Conversion", "Smooth Mobile Cart", "Secure Transactions", "Easy Catalog Updates", "Order Tracking", "No Monthly Commission"],
      iconGradient: "from-purple-600 to-fuchsia-600",
      bestFor: "Clothing Brands, Food & Dining, Retail Shops & Product Sellers",
    },
    {
      id: "{03}",
      category: "Redesign & Speed",
      title: "Modern Facelift for Slow, Outdated, or Broken Websites",
      description:
        "If your current website looks 10 years old or takes 4+ seconds to load on a phone, visitors leave before even reading your phone number. We transform your site into a fast, modern masterpiece with zero downtime.",
      icon: RefreshCw,
      tags: ["Loads Under 1 Second", "Modern Fresh Look", "Mobile Friendly", "Higher Google Ranking", "Zero Downtime"],
      topTicker: ["Sub-1s Loading Speed", "Modern Visual Refresh", "Flawless on iPhones & Android", "No Downtime Migration", "Better Google Ranking"],
      bottomTicker: ["Lower Bounce Rate", "More Inquiries", "Clean Modern Typography", "Retain Existing Content", "Instant Speed Boost", "Free Speed Audit"],
      iconGradient: "from-sky-600 to-indigo-600",
      bestFor: "Any Business With An Outdated, Clunky or Sluggish Existing Site",
    },
    {
      id: "{04}",
      category: "Custom Systems",
      title: "Custom Booking Systems, Portals & Business Automation",
      description:
        "Stop answering the same manual questions and booking calls by hand. We build automated appointment schedulers, lead inquiry routing, and custom customer portals to save you hours every week.",
      icon: Calendar,
      tags: ["Automated Bookings", "WhatsApp Notifications", "Customer Dashboards", "Lead Forms", "Custom Workflows"],
      topTicker: ["Automated Appointment Booking", "Calendar Synchronization", "Instant WhatsApp Alerts", "Zero Manual Paperwork", "Lead Tracking"],
      bottomTicker: ["Customer Dashboards", "Save 10+ Hours Weekly", "Custom Inquiry Forms", "Instant Lead Notifications", "Reliable Uptime", "Secure Data"],
      iconGradient: "from-violet-700 to-purple-900",
      bestFor: "Consultants, Service Companies, Agencies & Growing Brands",
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#fafafa] text-slate-900 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-purple-200/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-sky-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-200/80 pb-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-[#6938ef] mb-3">
              Services Tailored For Your Growth
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
              Websites Built To Solve Real Problems &{" "}
              <span className="text-[#6938ef]">Win More Clients.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-3">
              No generic templates. Every website is designed from scratch to match your brand, build trust, and make it easy for customers to hire or buy from you.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6938ef] hover:text-purple-700 transition-colors"
            >
              <span>View All Service Options</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bento Services Cards List */}
        <div className="space-y-8">
          {services.map((svc) => (
            <BentoServiceCard key={svc.id} svc={svc} />
          ))}
        </div>

      </div>
    </section>
  );
}