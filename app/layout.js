import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import AIChatbot from "@/components/AIChatbot";

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
    default: "TechWebSid® — Website Developer in Lucknow | Modern Websites That Grow Your Business",
    template: "%s | TechWebSid®",
  },
  description:
    "TechWebSid is a digital studio founded by Siddharth Srivastava in Lucknow, UP. We design and build fast, modern websites, online stores, and portals that help local businesses and companies win more paying clients.",
  keywords: [
    "techwebsid",
    "TechWebSid",
    "techwebsid.in",
    "Siddharth Srivastava",
    "Website Developer in Lucknow",
    "Best Website Developer in Lucknow",
    "Small Business Website Developer",
    "Clinic Website Developer Lucknow",
    "Ecommerce Website Developer Lucknow",
    "Web Designer in Lucknow",
    "Digital Agency in Lucknow",
    "Web Developer Uttar Pradesh",
    "Freelance Web Developer Lucknow",
    "Affordable Website Design Lucknow",
    "Mobile Friendly Websites",
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
    title: "TechWebSid® — Modern Websites That Turn Visitors Into Paying Clients",
    description:
      "Whether you need a clean website for your local business or an online store, I design fast, stunning websites that bring real customers. Partner directly with Siddharth Srivastava in Lucknow.",
    url: "https://techwebsid.in",
    siteName: "TechWebSid",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechWebSid® — Website Developer in Lucknow | Siddharth Srivastava",
    description:
      "Modern, fast business websites, online stores, and booking portals built directly by Siddharth Srivastava with zero agency runaround.",
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
        name: "TechWebSid - Website Developer in Lucknow",
        url: "https://techwebsid.in",
        image: "https://techwebsid.in/favicon.ico",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.8467,
          longitude: 80.9462,
        },
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
        <SmoothScroll>
          {children}
          <AIChatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
