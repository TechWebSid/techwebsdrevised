import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import AIChatbot from "@/components/AIChatbot";
import TopProgressBar from "@/components/TopProgressBar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://techwebsid.in"),
  title: {
    default: "TechWebSid — Premium Web Design & Full-Stack Development Studio | India",
    template: "%s | TechWebSid",
  },
  description:
    "TechWebSid is a boutique digital studio founded by Siddharth Srivastava in India. We design and engineer lightning-fast Next.js websites, high-converting online stores, and bespoke web platforms for ambitious businesses and startups worldwide.",
  keywords: [
    "techwebsid",
    "TechWebSid",
    "techwebsid.in",
    "Siddharth Srivastava",
    "Web Developer India",
    "Hire Web Developer India",
    "Next.js Developer India",
    "Full Stack Developer India",
    "Custom Web Design Studio",
    "Freelance Web Developer India",
    "Remote Web Developer for Global Clients",
    "High Performance Website Design",
    "E-commerce Website Developer",
    "Fast Business Websites",
    "React Web Developer India",
    "Modern Web Design India",
  ],
  authors: [{ name: "Siddharth Srivastava", url: "https://techwebsid.in" }],
  creator: "Siddharth Srivastava",
  publisher: "TechWebSid",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://techwebsid.in",
  },
  openGraph: {
    title: "TechWebSid — High-Performance Web Design & Engineering Studio | India",
    description:
      "Modern, ultra-fast business websites, e-commerce stores, and custom web platforms built directly by Siddharth Srivastava for clients worldwide.",
    url: "https://techwebsid.in",
    siteName: "TechWebSid",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechWebSid — Web Design & Full-Stack Development Studio | India",
    description:
      "High-converting Next.js websites, online stores, and digital products engineered directly by Siddharth Srivastava for clients worldwide with zero agency overhead.",
    creator: "@techwebsid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  // Comprehensive Structured Data (JSON-LD) for Search Engine Dominance
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://techwebsid.in/#organization",
        name: "TechWebSid",
        alternateName: ["TechWebSid Digital Studio", "TechWebSid Agency"],
        url: "https://techwebsid.in",
        logo: {
          "@type": "ImageObject",
          url: "https://techwebsid.in/favicon.ico",
        },
        founder: {
          "@type": "Person",
          "@id": "https://techwebsid.in/#person",
          name: "Siddharth Srivastava",
          jobTitle: "Principal Software Architect & Full-Stack Developer",
          sameAs: [
            "https://linkedin.com/in/techwebsid",
            "https://github.com/techwebsid",
            "https://twitter.com/techwebsid",
          ],
        },
        sameAs: [
          "https://linkedin.com/in/techwebsid",
          "https://github.com/techwebsid",
          "https://twitter.com/techwebsid",
          "https://instagram.com/techwebsid",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://techwebsid.in/#service",
        name: "TechWebSid — Web Design & Development Studio",
        url: "https://techwebsid.in",
        image: "https://techwebsid.in/favicon.ico",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "United Arab Emirates" },
        ],
        priceRange: "$$",
        openingHours: "Mo-Sa 09:00-20:00",
        telephone: "+91-8957035412",
        email: "techwebsid@gmail.com",
        founder: {
          "@id": "https://techwebsid.in/#person",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://techwebsid.in/#website",
        url: "https://techwebsid.in",
        name: "TechWebSid",
        publisher: {
          "@id": "https://techwebsid.in/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://techwebsid.in/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#fafafa] text-[#0f111a] selection:bg-[#6938ef] selection:text-white">
        <TopProgressBar />
        <SmoothScroll>
          {children}
          <AIChatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
