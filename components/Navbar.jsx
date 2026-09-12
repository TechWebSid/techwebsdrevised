"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 pointer-events-none">
      <div className="relative w-full max-w-5xl pointer-events-auto">
        
        {/* Crisp Luxury White Glass Capsule inspired by Vedonyx */}
        <div className="relative rounded-full bg-white/90 backdrop-blur-2xl border border-slate-200/70 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_50px_rgba(105,56,239,0.12)] transition-all duration-300">
          
          <div className="relative z-10 flex items-center justify-between px-6 sm:px-8 py-3">
            
            {/* Logo: TechWebSid Custom Web & Tech Mark */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-[#6938ef] via-[#7c3aed] to-[#9333ea] flex items-center justify-center text-white shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
                {/* TechWebSid Digital Web Code Mark (< / >) */}
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="13.5" y1="4.5" x2="10.5" y2="19.5" />
                </svg>
                {/* Live Availability Beacon */}
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border-2 border-white" />
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-xl font-black tracking-tight text-[#0f111a] font-display">
                  TechWeb<span className="text-[#6938ef]">Sid</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links: Clean, Spaced, Airy Typography */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative transition-colors duration-200 hover:text-slate-950 py-1 ${
                      isActive ? "text-[#6938ef] font-bold" : ""
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#6938ef]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: WhatsApp Pill & Request Proposal Button */}
            <div className="hidden sm:flex items-center gap-3">
              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/918957035412?text=Hi%20Siddharth,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full text-emerald-600 hover:bg-emerald-50 border border-transparent hover:border-emerald-200 transition-all active:scale-95"
                title="Chat with Siddharth on WhatsApp (+91 89570 35412)"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              </a>

              {/* Vedonyx-Inspired Dark Pill CTA Button */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#11131a] hover:bg-[#1f2333] text-white shadow-md shadow-slate-900/10 hover:shadow-purple-500/20 active:scale-95 transition-all duration-300"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="https://wa.me/918957035412"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-emerald-50 text-emerald-700"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Reading Progress Line */}
          <div className="absolute inset-x-6 bottom-0 h-[1.5px] overflow-hidden pointer-events-none rounded-full">
            <motion.div
              style={{ scaleX }}
              className="h-full w-full origin-left bg-gradient-to-r from-[#6938ef] via-[#9333ea] to-[#c084fc]"
            />
          </div>

          {/* Mobile Glass Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="sm:hidden border-t border-slate-100 px-6 py-5 flex flex-col gap-3 bg-white/98 backdrop-blur-2xl rounded-b-[2rem]"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 text-sm font-bold transition-colors ${
                      pathname === link.href ? "text-[#6938ef]" : "text-slate-800 hover:text-[#6938ef]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                ))}

                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href="https://wa.me/918957035412?text=Hi%20Siddharth,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                    <span>WhatsApp (+91 89570 35412)</span>
                  </a>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#11131a] text-white font-bold text-xs shadow-md"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-purple-300" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </header>
  );
}