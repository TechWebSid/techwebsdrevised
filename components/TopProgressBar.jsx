"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function TopProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef(null);

  // Complete progress on route change
  useEffect(() => {
    if (isVisible) {
      setProgress(100);
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(hideTimeout);
    }
  }, [pathname]);

  // Intercept internal link clicks to trigger instant visual feedback
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Only handle internal links that are different from the current path
      if (
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !href.startsWith("/#") &&
        href !== pathname
      ) {
        // Start progress bar immediately
        setIsVisible(true);
        setProgress(30);

        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setProgress(75);
        }, 80);
      }
    };

    document.addEventListener("click", handleDocumentClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname]);

  if (!isVisible && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[2.5px] overflow-hidden bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-[#6938ef] via-[#9333ea] to-[#c084fc] shadow-[0_0_12px_rgba(105,56,239,0.8)] transition-all ease-out"
        style={{
          width: `${progress}%`,
          transitionDuration: progress === 100 ? "200ms" : "350ms",
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}
