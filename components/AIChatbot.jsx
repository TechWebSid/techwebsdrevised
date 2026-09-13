"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Sparkles,
  X,
  Send,
  RotateCcw,
  MessageCircle,
  ChevronDown,
  Zap,
  ArrowUpRight,
} from "lucide-react";

// Suggested interactive prompt pills
const SUGGESTED_QUERIES = [
  { id: "cost", label: "💰 How much does a website cost?", query: "How much does a website cost?" },
  { id: "timeline", label: "⏱️ What is the delivery timeline?", query: "What is your project turnaround time?" },
  { id: "clinic", label: "🏪 I need a site for a clinic / local business", query: "Can you build a website for my clinic or local business?" },
  { id: "store", label: "🛍️ Can you build an online store?", query: "Can you build an online e-commerce store with payments?" },
  { id: "why", label: "🚀 Why hire Siddharth vs an agency?", query: "Why should I choose Siddharth instead of a big agency?" },
  { id: "whatsapp", label: "💬 Chat with Siddharth directly", query: "How do I speak with Siddharth directly on WhatsApp?" },
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Hello there! 👋 I'm **TechWebSid AI** — your direct guide to Siddharth's web studio in Lucknow.\n\nI can instantly answer anything about our **website packages, pricing, timelines, or recommend the best setup** for your business. What are you looking to build?",
      time: "Just now",
      suggestions: SUGGESTED_QUERIES.slice(0, 4),
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of chat when new messages appear
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowTeaser(false);
      // Auto focus input on desktop
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [isOpen, messages, isTyping]);

  // Dismiss teaser bubble after 12 seconds or on interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  // Format current timestamp
  const getNowTime = () => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Comprehensive Knowledge Engine Matcher
  const generateBotReply = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    // 1. Pricing / Cost / Quote / Budget
    if (
      q.includes("cost") ||
      q.includes("price") ||
      q.includes("pricing") ||
      q.includes("rate") ||
      q.includes("budget") ||
      q.includes("charge") ||
      q.includes("quote") ||
      q.includes("how much")
    ) {
      return {
        text: "We believe in **100% transparent, fixed pricing** with zero surprise invoices or monthly lock-ins:\n\n• **Complete Business Website**: Custom-tailored for local businesses, clinics, salons, and professionals. Includes mobile-first design, <1s load speed, Google Local SEO, and direct WhatsApp buttons.\n• **E-Commerce & Online Store**: Fast product catalogs, instant UPI / Card payments, and real-time WhatsApp order alerts.\n• **Custom Platforms & Portals**: Custom client portals, booking systems, or web applications.\n\nEvery project includes 100% code & domain ownership, free deployment, and post-launch support.",
        action: {
          label: "💬 Get an Instant WhatsApp Quote",
          url: "https://wa.me/918957035412?text=Hi%20Siddharth,%20I%20would%20like%20to%20get%20a%20price%20quote%20for%20my%20website.",
        },
      };
    }

    // 2. Timeline / Turnaround / Duration / Fast
    if (
      q.includes("timeline") ||
      q.includes("turnaround") ||
      q.includes("how long") ||
      q.includes("days") ||
      q.includes("weeks") ||
      q.includes("time") ||
      q.includes("fast") ||
      q.includes("delivery")
    ) {
      return {
        text: "⏱️ **Fast, Guaranteed Turnaround**:\n\n• **Business Websites**: Usually ready in **2 to 3 weeks** from kickoff to live launch.\n• **Online Stores & E-Commerce**: Delivered in **3 to 4 weeks** including payments and product setup.\n• **Custom Systems & Portals**: Typically **4 to 6 weeks** depending on complexity.\n\nUnlike big agencies that drag projects out for 3 to 6 months with slow ticket queues, Siddharth shares live interactive preview links every 48 hours so you see real progress.",
        action: {
          label: "🚀 Check Availability for Your Dates",
          url: "https://wa.me/918957035412?text=Hi%20Siddharth,%20can%20you%20share%20your%20current%20project%20availability?",
        },
      };
    }

    // Real Projects & Portfolio Works
    if (
      q.includes("project") ||
      q.includes("work") ||
      q.includes("portfolio") ||
      q.includes("case stud") ||
      q.includes("example") ||
      q.includes("past work") ||
      q.includes("live") ||
      q.includes("samples")
    ) {
      return {
        text: "🌟 **Siddharth's Featured Live Projects**:\n\n1. **Astro Ashutosh Divyadarshi**: Astrologer & spiritual consultancy platform ([astroashutoshdivyadarshi.com](https://www.astroashutoshdivyadarshi.com/))\n2. **Obys Agency Interactive**: Awwwards-inspired creative studio with kinetic motion design ([obys2.vercel.app](https://obys2.vercel.app/))\n3. **Sid-Port**: Siddharth's creative full-stack developer portfolio ([sid-port.vercel.app](https://sid-port.vercel.app))\n4. **VisionTalk**: Real-time video conferencing & meeting platform ([vision-talk-unxe.vercel.app](https://vision-talk-unxe.vercel.app))\n5. **Shree Shyam Sales**: B2B & retail commercial e-commerce catalog ([shreeshyamsales.vercel.app](https://shreeshyamsales.vercel.app))\n\nEvery project is live and verified!",
        action: {
          label: "🚀 View All 5 Live Projects",
          url: "/work",
        },
      };
    }

    // 3. Clinic / Doctor / Healthcare / Hospital / Astrologer
    if (
      q.includes("clinic") ||
      q.includes("doctor") ||
      q.includes("hospital") ||
      q.includes("health") ||
      q.includes("patient") ||
      q.includes("astrolog") ||
      q.includes("medical")
    ) {
      return {
        text: "🏥 **Clinics, Doctors & Professional Practices**:\n\nWe build high-trust websites for consultants and practices (such as *Astro Ashutosh Divyadarshi* - https://www.astroashutoshdivyadarshi.com/). Key benefits:\n\n• **1-Click WhatsApp & Phone Appointment Booking**: Direct calls from mobile clients in seconds.\n• **Google Maps Local SEO**: Your business ranks when clients search locally in Lucknow and beyond.\n• **High-Trust Reviews & Credentials**: Reassures new visitors instantly.\n• **Under 1s Page Loading**: Never lose an anxious patient or client to a slow, frozen website.",
        action: {
          label: "📱 Discuss Your Website with Siddharth",
          url: "https://wa.me/918957035412?text=Hi%20Siddharth,%20I'd%20like%20to%20discuss%20a%20website%20for%20my%20practice/business.",
        },
      };
    }

    // 4. Local Business / Shop / Salon / Restaurant / Real Estate / Contractor
    if (
      q.includes("local") ||
      q.includes("shop") ||
      q.includes("salon") ||
      q.includes("restaurant") ||
      q.includes("real estate") ||
      q.includes("contractor") ||
      q.includes("small business")
    ) {
      return {
        text: "🏪 **Websites for Local Business Owners**:\n\nMost local businesses don't need overly complicated tech — you need a **clean, fast website that brings in local customers**!\n\n• **Thumb-Reach Phone & WhatsApp Buttons**: Immediate customer inquiries.\n• **Google Maps & Local Search Setup**: Rank locally so nearby customers find you first.\n• **Showcase Photos, Hours & Pricing**: Give people clear reasons to choose you.\n• **Zero Monthly Lock-in Fees**: You own your website completely.",
        action: {
          label: "📱 Get Started for Your Local Business",
          url: "https://wa.me/918957035412?text=Hi%20Siddharth,%20I%20have%20a%20local%20business%20and%20want%20to%20discuss%20a%20website.",
        },
      };
    }

    // 5. E-Commerce / Online Store / Sell Products / UPI Payments
    if (
      q.includes("store") ||
      q.includes("ecommerce") ||
      q.includes("e-commerce") ||
      q.includes("shop") ||
      q.includes("product") ||
      q.includes("sell") ||
      q.includes("payment") ||
      q.includes("upi") ||
      q.includes("razorpay")
    ) {
      return {
        text: "🛍️ **High-Converting Online Stores**:\n\nWe build lightning-fast online stores engineered to convert mobile shoppers:\n\n• **Instant UPI & Card Checkout**: Fast payments via PhonePe, GPay, Paytm, Cards, and Net Banking.\n• **WhatsApp Order Notifications**: Get pinged on your phone instantly whenever an order is placed.\n• **Sub-Second Product Catalog**: Smooth mobile browsing so buyers don't bounce.\n• **Simple Admin Panel**: Easily add new products, adjust prices, and track orders without technical hassle.",
        action: {
          label: "🛍️ Build Your Online Store",
          url: "https://wa.me/918957035412?text=Hi%20Siddharth,%20I%20want%20to%20build%20an%20online%20e-commerce%20store.",
        },
      };
    }

    // 6. Why Siddharth vs Agency / Interns / Trainees
    if (
      q.includes("why") ||
      q.includes("agency") ||
      q.includes("siddharth") ||
      q.includes("different") ||
      q.includes("compare") ||
      q.includes("hire")
    ) {
      return {
        text: "👤 **Why Work Directly with Siddharth Srivastava?**:\n\n• **Zero Junior Trainees**: Traditional agencies sell you with seniors, then hand your website to untrained interns. Siddharth personally designs and codes your website from start to finish.\n• **Direct WhatsApp Access**: No support tickets or 3-day email delays — chat directly with your developer.\n• **Custom & Fast**: No bloated, sluggish WordPress templates. Clean, modern code loading in <1 second.\n• **100% Ownership**: You own your domain, code, and content. Zero monthly hostage fees.",
        action: {
          label: "⚡ Connect with Siddharth Directly",
          url: "https://wa.me/918957035412?text=Hi%20Siddharth,%20I'd%20like%20to%20collaborate%20directly%20with%20you.",
        },
      };
    }

    // 7. WhatsApp / Phone / Contact / Call / Email
    if (
      q.includes("whatsapp") ||
      q.includes("contact") ||
      q.includes("phone") ||
      q.includes("call") ||
      q.includes("email") ||
      q.includes("number") ||
      q.includes("speak") ||
      q.includes("talk")
    ) {
      return {
        text: "📞 **Direct Contact Details for Siddharth**:\n\n• **WhatsApp & Phone**: [+91 89570 35412](https://wa.me/918957035412)\n• **Email**: [techwebsid@gmail.com](mailto:techwebsid@gmail.com)\n• **Location**: Lucknow, Uttar Pradesh, India\n• **Typical Reply Time**: Within 30 minutes on WhatsApp!\n\nClick the button below to start a quick chat right now:",
        action: {
          label: "💬 Open WhatsApp Chat (+91 89570 35412)",
          url: "https://wa.me/918957035412?text=Hi%20Siddharth,%20I%20found%20your%20website%20and%20would%20like%20to%20chat.",
        },
      };
    }

    // 8. Location / Where / Lucknow / Meet / In person
    if (
      q.includes("lucknow") ||
      q.includes("location") ||
      q.includes("where") ||
      q.includes("office") ||
      q.includes("meet") ||
      q.includes("city") ||
      q.includes("state")
    ) {
      return {
        text: "📍 **Studio Headquarters & Service Area**:\n\nTechWebSid is based in **Lucknow, Uttar Pradesh, India**.\n\nWe collaborate with clients locally across Lucknow, Kanpur, and UP, as well as businesses across India (Delhi NCR, Mumbai, Bangalore) and worldwide (USA, UK, UAE, Australia). We communicate smoothly via WhatsApp, Google Meet, and phone.",
        action: {
          label: "☕ Schedule a Quick Intro Call",
          url: "https://wa.me/918957035412?text=Hi%20Siddharth,%20can%20we%20schedule%20a%20quick%20intro%20call%20about%20my%20project?",
        },
      };
    }

    // 9. Speed / SEO / Google / Mobile / Responsive
    if (
      q.includes("speed") ||
      q.includes("fast") ||
      q.includes("mobile") ||
      q.includes("seo") ||
      q.includes("google") ||
      q.includes("rank") ||
      q.includes("phone")
    ) {
      return {
        text: "⚡ **Speed & Google Visibility Guarantee**:\n\n• **Sub-1s Mobile Speed**: Over 70% of visitors browse on phones — our websites load instantly without annoying lag.\n• **Google Local SEO Included**: Proper heading hierarchy, structured schema, fast server response, and sitemaps so Google finds and ranks your business.\n• **100% Mobile Responsive**: Rigorously tested on iPhones, Android devices, iPads, and high-res desktops.",
      };
    }

    // 10. Payment Terms / Advance / Installments
    if (
      q.includes("payment terms") ||
      q.includes("advance") ||
      q.includes("installment") ||
      q.includes("deposit") ||
      q.includes("milestone")
    ) {
      return {
        text: "💳 **Fair & Milestone-Based Payment**:\n\n• **50% Deposit** to secure your spot and start design/prototyping.\n• **50% Final Balance** only after you review the completed website, test everything, and give 100% signoff.\n• No surprise invoices or hidden maintenance fees.",
        action: {
          label: "💬 Talk Payment Terms on WhatsApp",
          url: "https://wa.me/918957035412?text=Hi%20Siddharth,%20what%20are%20the%20payment%20milestones%20for%20my%20project?",
        },
      };
    }

    // 11. Greetings / Hi / Hello
    if (
      q === "hi" ||
      q === "hello" ||
      q === "hey" ||
      q === "namaste" ||
      q.startsWith("hi ") ||
      q.startsWith("hello ")
    ) {
      return {
        text: "Hello! 👋 Great to meet you! How can I help you today? Are you looking to launch a new website, redesign an old slow one, or get a quick price estimate for your business?",
        suggestions: SUGGESTED_QUERIES.slice(0, 3),
      };
    }

    // 12. Fallback / Custom queries
    return {
      text: `Thanks for asking! That's a great question about **"${userQuery}"**.\n\nWhile I am TechWebSid's AI assistant, Siddharth can give you a personalized recommendation, exact quote, and answer any specific details for your project directly on WhatsApp in just a few minutes!`,
      action: {
        label: `💬 Ask Siddharth on WhatsApp`,
        url: `https://wa.me/918957035412?text=Hi%20Siddharth,%20I%20have%20a%20question:%20${encodeURIComponent(
          userQuery
        )}`,
      },
    };
  };

  // Handle message sending
  const handleSendMessage = (textToSend) => {
    const text = typeof textToSend === "string" ? textToSend : inputValue;
    if (!text.trim() || isTyping) return;

    const userMsg = {
      id: "usr-" + Date.now(),
      sender: "user",
      text: text.trim(),
      time: getNowTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Natural simulated AI thinking & reply delay
    const delay = Math.min(1000, Math.max(500, text.length * 15));
    setTimeout(() => {
      const replyData = generateBotReply(text);
      const botMsg = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: replyData.text,
        action: replyData.action,
        suggestions: replyData.suggestions,
        time: getNowTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Chat cleared! ⚡ I'm ready to answer any new questions about websites, pricing, timelines, or services.",
        time: getNowTime(),
        suggestions: SUGGESTED_QUERIES.slice(0, 4),
      },
    ]);
  };

  return (
    <aside aria-label="AI Assistant" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 select-none">
      {/* 1. Sleek Floating Speech Bubble Teaser (when closed) */}
      <AnimatePresence>
        {!isOpen && showTeaser && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-64 sm:w-72 p-3.5 rounded-2xl bg-[#0c0f1d]/95 backdrop-blur-xl border border-purple-500/30 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6),0_0_20px_rgba(105,56,239,0.3)] text-white pointer-events-auto"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shrink-0 shadow-md shadow-violet-500/30">
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-purple-300">
                    TechWebSid AI
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTeaser(false);
                    }}
                    className="text-slate-400 hover:text-white p-0.5 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Need an instant website price or advice for your business?
                </p>
                <button
                  onClick={() => setIsOpen(true)}
                  className="mt-2 text-[11px] font-semibold text-purple-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  Ask AI Assistant <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Futuristic Chat Window (when expanded) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 25, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.85, y: 20, filter: "blur(8px)" }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[82vh] rounded-[28px] overflow-hidden bg-[#0c0f1d]/95 backdrop-blur-2xl border border-white/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85),0_0_50px_rgba(105,56,239,0.25)] flex flex-col mb-4 origin-bottom-right"
          >
            {/* Top Futuristic Neon Energy Bar */}
            <div className="h-[2.5px] w-full bg-gradient-to-r from-violet-500 via-indigo-400 via-purple-500 to-cyan-400" />

            {/* Header */}
            <div className="px-4 py-3.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-600/40">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  {/* Glowing live beacon */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0c0f1d] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-sm font-bold text-white tracking-tight">TechWebSid AI</h2>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      Copilot
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                    Online • Direct with Siddharth
                  </p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-1">
                {/* 1-Tap WhatsApp Shortcut */}
                <a
                  href="https://wa.me/918957035412?text=Hi%20Siddharth,%20I'm%20chatting%20with%20your%20website%20AI%20and%20want%20to%20talk%20to%20you%20directly."
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Direct WhatsApp with Siddharth"
                  className="p-2 rounded-xl text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* Reset Chat */}
                <button
                  onClick={resetChat}
                  title="Clear conversation"
                  className="p-2 rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Close / Minimize */}
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  className="p-2 rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 no-scrollbar scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                >
                  <div
                    className={`max-w-[88%] text-xs sm:text-[13px] leading-relaxed p-3.5 rounded-2xl ${msg.sender === "user"
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-tr-sm shadow-md shadow-violet-600/20"
                        : "bg-white/[0.06] border border-white/10 text-slate-200 rounded-tl-sm backdrop-blur-sm"
                      }`}
                  >
                    {/* Render message text with simple bold formatting */}
                    <div className="whitespace-pre-line">
                      {msg.text.split("\n\n").map((paragraph, i) => (
                        <p key={i} className={i > 0 ? "mt-2" : ""}>
                          {paragraph.split("**").map((chunk, j) =>
                            j % 2 === 1 ? (
                              <strong key={j} className="text-white font-semibold">
                                {chunk}
                              </strong>
                            ) : (
                              chunk
                            )
                          )}
                        </p>
                      ))}
                    </div>

                    {/* Rich Action Button if attached */}
                    {msg.action && (
                      <div className="mt-3 pt-2.5 border-t border-white/10">
                        {msg.action.url.startsWith("/") ? (
                          <Link
                            href={msg.action.url}
                            prefetch={true}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-semibold shadow-md shadow-emerald-500/25 transition-all transform hover:scale-[1.02]"
                          >
                            {msg.action.label}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        ) : (
                          <a
                            href={msg.action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-semibold shadow-md shadow-emerald-500/25 transition-all transform hover:scale-[1.02]"
                          >
                            {msg.action.label}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Suggested pills underneath bot welcome or specific replies */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                      {msg.suggestions.map((pill) => (
                        <button
                          key={pill.id}
                          onClick={() => handleSendMessage(pill.query)}
                          className="text-[11px] font-medium px-2.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-violet-500/20 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/40 transition-all text-left"
                        >
                          {pill.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.time}</span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 p-3 max-w-[130px] rounded-2xl rounded-tl-sm bg-white/[0.05] border border-white/10 text-slate-400">
                  <span className="text-[11px] font-medium text-slate-300">Thinking</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar & Footer */}
            <div className="p-3 bg-white/[0.02] border-t border-white/10">
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about website pricing, timeline, setup..."
                  className="w-full bg-white/[0.05] hover:bg-white/[0.08] focus:bg-white/[0.08] border border-white/10 focus:border-violet-500/60 text-white placeholder-slate-400 text-xs sm:text-[13px] rounded-2xl pl-3.5 pr-11 py-3 outline-none transition-all"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1.5 p-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-30 disabled:pointer-events-none text-white transition-all shadow-md shadow-violet-600/30"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-2 flex items-center justify-between px-1 text-[10px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" />
                  Instant AI Answers
                </span>
                <a
                  href="https://wa.me/918957035412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  Prefer WhatsApp? Chat here <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Sexy Futuristic Floating Trigger Button */}
      <div className="relative flex items-center justify-end">
        {/* Orbital ambient ping wave */}
        <span className="absolute -inset-2 rounded-full bg-violet-600/20 blur-md pointer-events-none animate-pulse" />
        <span className="absolute -inset-1 rounded-full border border-purple-500/40 pointer-events-none animate-ping opacity-40" />

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close AI Chatbot" : "Open AI Chatbot"}
          className={`relative w-14 h-14 sm:w-15 sm:h-15 rounded-full flex items-center justify-center text-white transition-all shadow-[0_10px_35px_-5px_rgba(105,56,239,0.5),0_0_20px_rgba(105,56,239,0.3)] ${isOpen
              ? "bg-[#181d2f] border border-white/20"
              : "bg-gradient-to-br from-[#0e1222] via-[#1a1438] to-[#2a1352] border border-purple-400/50 hover:border-purple-300"
            }`}
        >
          {/* Animated icon morph */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-slate-300 hover:text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="bot"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <Bot className="w-6 h-6 text-purple-200" />
                {/* Micro spark aura */}
                <Sparkles className="w-3 h-3 text-amber-300 absolute -top-1.5 -right-1.5 animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Green online beacon */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0c0f1d]" />
            </span>
          )}
        </motion.button>
      </div>
    </aside>
  );
}
