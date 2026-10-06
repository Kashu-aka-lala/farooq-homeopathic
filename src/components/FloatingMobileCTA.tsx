"use client";

import { useState, useEffect } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (100px)
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-4 z-40 md:hidden flex flex-col gap-2 items-end"
        >
          {/* Quick Call Pill */}
          <a
            href="tel:03455496698"
            className="flex items-center gap-2 bg-slate-900/90 text-white backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg text-xs font-semibold border border-slate-700/60 active:scale-95 transition-all"
            aria-label="Call Dr. Umar Farooq"
          >
            <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
            <span>Call 0345 5496698</span>
          </a>

          {/* Floating WhatsApp CTA */}
          <a
            href="https://wa.me/923455496698?text=Hello%20Dr.%20Umar%20Farooq,%20I%20would%20like%20to%20book%20an%20online%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 bg-emerald-600 text-white px-4 py-3 rounded-full shadow-xl hover:bg-emerald-700 active:scale-95 transition-all duration-300 ring-4 ring-emerald-500/20"
            aria-label="Book Online Consultation on WhatsApp"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span className="text-sm font-bold tracking-tight">Book Consultation</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
