"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  PhoneCall,
  Phone
} from "lucide-react";

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState("New Business Website");
  const [selectedBudget, setSelectedBudget] = useState("Flexible / Need Advice");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "New Business Website",
    "Online Store (E-Commerce)",
    "Website Redesign & Speedup",
    "Custom Booking / Portal",
    "Other Project",
  ];

  const budgets = [
    "Flexible / Need Advice",
    "₹20k - ₹45k ($300 - $600)",
    "₹45k - ₹95k ($600 - $1,200)",
    "₹95k+ ($1,200+)",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Inquiry: ${selectedService} (${selectedBudget})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone / WhatsApp: ${formData.phone || "Not provided"}\nService Needed: ${selectedService}\nBudget Tier: ${selectedBudget}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:techwebsid@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0c0e17] text-white overflow-hidden selection:bg-purple-500 selection:text-white">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Start Your Project
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Let's Build A Website That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-200">
              Brings You Real Customers.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Tell me about your business. Every inquiry is personally reviewed and quoted by Siddharth Srivastava with zero sales pressure.
          </p>
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Founder Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 h-full">
            <div className="rounded-3xl p-7 sm:p-8 bg-[#151726] border border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col gap-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Direct Founder Channel</span>
                <h3 className="text-2xl font-black text-white mt-0.5">Siddharth Srivastava</h3>
                <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Founder & Full-Stack Engineer. Based in Lucknow, UP — building high-performing websites for clients worldwide.
                </p>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-slate-800">
                <a
                  href="mailto:techwebsid@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">techwebsid@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/918957035412?text=Hi%20Siddharth,%20I'd%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">+91 89570 35412</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Studio Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">Lucknow, Uttar Pradesh • Working Remotely Worldwide</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Response Time</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">Within 4 - 8 Hours on WhatsApp / Email</div>
                  </div>
                </div>
              </div>

              {/* Founder Availability Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-xs font-semibold text-purple-200">
                  Currently accepting 2 new website projects this month.
                </span>
              </div>
            </div>

            {/* Quick Instant WhatsApp Box */}
            <div className="rounded-3xl p-6 bg-gradient-to-r from-emerald-950/40 to-[#131522] border border-emerald-500/30 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">Prefer a fast chat on WhatsApp?</h4>
                <p className="text-xs text-slate-300 mt-0.5">+91 89570 35412 • Quick direct replies.</p>
              </div>
              <a
                href="https://wa.me/918957035412?text=Hi%20Siddharth,%20I'd%20like%20to%20get%20a%20free%20website%20quote%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-500 text-slate-950 font-black text-xs hover:bg-emerald-400 transition-all flex-shrink-0 active:scale-95 shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-b from-[#181a2b] to-[#121320] border border-slate-700/80 backdrop-blur-xl shadow-2xl">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Service Selection Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2.5">
                    1. What kind of website do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => setSelectedService(svc)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                          selectedService === svc
                            ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-400"
                            : "bg-[#1f2237] text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white"
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Budget Selection Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2.5">
                    2. Approximate Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setSelectedBudget(b)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                          selectedBudget === b
                            ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md border border-purple-300"
                            : "bg-[#1f2237] text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#0e101b] border border-slate-700/80 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#0e101b] border border-slate-700/80 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-400 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Phone / WhatsApp Number (Optional for faster reply)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#0e101b] border border-slate-700/80 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Tell me about your business & what you need
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="e.g. I run a dental clinic in Gomti Nagar and need a modern website with 1-click WhatsApp booking..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#0e101b] border border-slate-700/80 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-400 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white text-slate-950 hover:bg-purple-300 hover:text-slate-950 font-black text-sm uppercase tracking-wider transition-all duration-200 active:scale-98 shadow-xl shadow-white/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message to Siddharth</span>
                    <Send className="w-4 h-4" />
                  </button>
                  {submitted && (
                    <p className="mt-3 text-center text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Email client opened! Siddharth will get back to you shortly.
                    </p>
                  )}
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
