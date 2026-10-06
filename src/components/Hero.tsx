"use client";

import { motion, Variants } from "framer-motion";
import { Phone, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative bg-slate-50 pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[260px] w-[260px] sm:h-[310px] sm:w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-left"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
            >
              Natural, Effective Healing at{" "}
              <span className="text-green-600 block mt-1.5 sm:mt-2">Farooq Homeopathic.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-600 leading-relaxed"
            >
              Expert holistic care by Dr. Umar Farooq (DHMS RMP). We treat the root cause, not just the symptoms.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4"
            >
              <a
                href="https://wa.me/923455496698?text=Hello%20Dr.%20Umar%20Farooq,%20I%20would%20like%20to%20book%20an%20online%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-base font-bold rounded-xl text-white bg-green-600 hover:bg-green-700 active:scale-95 shadow-md hover:shadow-lg transition-all duration-300 gap-2.5 w-full sm:w-auto group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Online Consultation
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-base font-semibold rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-green-600 hover:text-green-600 active:scale-95 shadow-xs hover:shadow-md transition-all duration-300 w-full sm:w-auto group"
              >
                Explore Treatments
                <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 sm:mt-10 flex flex-wrap sm:flex-nowrap items-center gap-4 text-sm font-medium"
            >
              <div className="flex -space-x-3 overflow-hidden p-0.5">
                {[1, 2, 3, 4].map((num) => (
                  <Image
                    key={num}
                    src={`/avatars/avatar-${num}.png`}
                    alt={`Patient Avatar ${num}`}
                    width={44}
                    height={44}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-white shadow-md inline-block"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-800 ml-1">5.0</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">Join <span className="text-slate-900 font-bold">1000+</span> healed patients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 },
              scale: { duration: 0.6, delay: 0.2 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 },
            }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none mt-4 lg:mt-0"
          >
            {/* Glowing background blob */}
            <div className="absolute -inset-4 bg-green-500/10 rounded-3xl blur-3xl -z-10"></div>

            {/* Frosted Glass Frame Card */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-white/70 backdrop-blur-xl border border-white/40 ring-1 ring-white/20 aspect-[4/3] group">
              <Image
                src="/remedies.png"
                alt="Natural Homeopathic Remedies, Amber Glass Vials and Herbs"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-6 sm:left-6 sm:right-6 backdrop-blur-md bg-white/90 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">100% Natural & Holistic Care</p>
                  <p className="text-[11px] sm:text-xs text-slate-600">Individualized Remedy Protocols</p>
                </div>
                <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3 relative flex-shrink-0 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
                </span>
              </div>
            </div>

            {/* Additional decorative glow blobs */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 sm:w-36 sm:h-36 bg-green-200/50 rounded-full filter blur-2xl opacity-70 animate-pulse -z-10"></div>
            <div className="absolute -top-6 -right-6 w-28 h-28 sm:w-36 sm:h-36 bg-teal-200/50 rounded-full filter blur-2xl opacity-70 animate-pulse -z-10" style={{ animationDelay: "2s" }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
