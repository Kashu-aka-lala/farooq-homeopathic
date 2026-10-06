"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DoctorProfile() {
  const credentials = [
    "Registered Homeopathic Medical Practitioner (DHMS)",
    "Registration No: RHMP012245",
    "Serving Islamabad & Rawalpindi Community",
  ];

  return (
    <section id="about" className="py-14 sm:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl bg-white aspect-[4/5] group border border-slate-100">
              <Image
                src="/doctor.png"
                alt="Dr. Umar Farooq (DHMS RMP) - Classical Homeopathic Practitioner"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 backdrop-blur-md bg-white/90 p-3 sm:p-4 rounded-xl border border-white/60 shadow-md">
                <p className="text-sm sm:text-base font-bold text-slate-900">Dr. Umar Farooq</p>
                <p className="text-xs font-semibold text-green-700">DHMS RMP • Lead Homeopathic Physician</p>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 sm:w-32 sm:h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meet Dr. Umar Farooq
            </h2>
            <div className="mt-2 w-16 sm:w-20 h-1.5 bg-green-500 rounded-full"></div>
            
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              With extensive experience in classical homeopathy, Dr. Farooq specializes in treating chronic illnesses, skin conditions, and digestive disorders using highly individualized remedy protocols aimed at the root cause of disease.
            </p>

            <ul className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-4">
              {credentials.map((credential, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.4 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <p className="ml-3 text-sm sm:text-base font-medium text-slate-700">
                    {credential}
                  </p>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-8 sm:mt-10">
              <a
                href="#treatments"
                className="text-green-600 font-bold hover:text-green-700 transition-colors inline-flex items-center text-sm sm:text-base group"
              >
                Learn about our treatments
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
