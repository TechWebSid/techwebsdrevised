"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Clock, Sparkles, MessageCircle } from "lucide-react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Siddharth", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Client Work", href: "/work" },
    { label: "Get Free Quote", href: "/contact" },
  ];

  const capabilities = [
    "Modern Business Websites",
    "Online Stores & E-Commerce",
    "Website Speed & Redesign",
    "1-Click WhatsApp & Call Setup",
    "Google Maps & Local SEO",
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/techwebsid",
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/techwebsid",
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      label: "Twitter / X",
      href: "https://twitter.com/techwebsid",
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/918957035412?text=Hi%20Siddharth,%20I'd%20like%20to%20chat%20about%20a%20website%20project.",
      svg: (
        <MessageCircle className="w-4 h-4" />
      ),
    },
  ];

  return (
    <footer className="relative bg-[#080910] text-white border-t border-slate-800 overflow-hidden pt-16 pb-12">
      {/* Background Soft Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Top Pitch Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-14 border-b border-slate-800/80 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available For New Projects
              </span>
              {currentTime && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-xs font-mono font-medium border border-slate-700">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  Lucknow, India: {currentTime} IST
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Ready to grow your business online?
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              prefetch={true}
              className="px-7 py-3.5 rounded-full bg-white text-slate-950 hover:bg-purple-400 hover:text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-lg shadow-white/10"
            >
              Get A Free Quote
            </Link>
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-purple-600 hover:border-purple-500 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-14 border-b border-slate-800/80 text-sm">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <Link href="/" prefetch={true} className="text-2xl font-black tracking-tight text-white">
              TechWeb<span className="text-[#6938ef]">Sid</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Modern websites built directly by Siddharth Srivastava in Lucknow, UP. Delivering fast, beautiful, high-converting digital experiences for clients worldwide.
            </p>
            <div className="text-xs text-slate-400 pt-1 font-medium">
              Siddharth Srivastava • Founder & Lead Engineer
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400">Navigation</div>
            <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} prefetch={true} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Capabilities */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400">What We Build</div>
            <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
              {capabilities.map((c, i) => (
                <li key={i} className="hover:text-white transition-colors">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Direct Channels */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400">Direct Contact</div>
            <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="text-slate-400 hover:text-purple-400 transition-colors">
                      {s.svg}
                    </span>
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:techwebsid@gmail.com"
                  className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <span>techwebsid@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TechWebSid®. Built with care in Lucknow, Uttar Pradesh.
          </div>
          <div className="flex items-center gap-6">
            <span>Loads in &lt;1s on Phones</span>
            <span>100% Direct Founder Collaboration</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
