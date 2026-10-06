"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, User, Stethoscope, Star, MapPin, MessageCircle, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Treatments", href: "#treatments", icon: Stethoscope },
    { name: "Blog", href: "#blog", icon: BookOpen },
    { name: "Reviews", href: "#reviews", icon: Star },
    { name: "Visit Us", href: "#visit", icon: MapPin },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
              <Image
                src="/logo.jpeg"
                alt="Farooq Homeopathic Logo"
                width={48}
                height={48}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm border border-slate-100"
              />
              <span className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
                Farooq <span className="text-green-600">Homeopathic</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/923455496698?text=Hello%20Dr.%20Umar%20Farooq,%20I%20would%20like%20to%20book%20an%20online%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 active:scale-95 shadow-sm transition-all"
            >
              Book Online Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600 active:bg-slate-200 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer & Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[64px] bg-slate-900/40 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Menu Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-50 md:hidden bg-white border-b border-slate-200 shadow-xl rounded-b-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="px-4 pt-3 pb-6 space-y-1.5 sm:px-6">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-green-600 hover:bg-slate-50 active:bg-slate-100 transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-green-600" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
                <div className="pt-4 pb-1">
                  <a
                    href="https://wa.me/923455496698?text=Hello%20Dr.%20Umar%20Farooq,%20I%20would%20like%20to%20book%20an%20online%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-green-600 hover:bg-green-700 active:scale-[0.98] shadow-md gap-2 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Online Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
