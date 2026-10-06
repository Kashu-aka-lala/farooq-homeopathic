"use client";

import { motion } from "framer-motion";
import { Wind, Activity, Brain, Baby, HeartPulse } from "lucide-react";
import React from "react";

type Treatment = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const treatments: Treatment[] = [
  {
    title: "Allergies & Asthma",
    description: "Natural remedies to strengthen the immune system and reduce hypersensitivity without drowsy side effects.",
    icon: Wind,
  },
  {
    title: "Skin Conditions",
    description: "Effective holistic treatment for eczema, psoriasis, acne, and other chronic dermatological issues.",
    icon: Activity,
  },
  {
    title: "Digestive Disorders",
    description: "Addressing the root causes of IBS, acidity, bloating, and other gastric issues for lasting relief.",
    icon: Activity,
  },
  {
    title: "Chronic Pain & Migraines",
    description: "Safe, non-habit forming homeopathic care for recurring headaches, joint pain, and arthritis.",
    icon: Brain,
  },
  {
    title: "Pediatric Care",
    description: "Gentle and safe treatments for children, building natural immunity against recurrent infections.",
    icon: Baby,
  },
  {
    title: "Stress & Anxiety",
    description: "Restoring mental and emotional balance with customized constitutional remedies.",
    icon: HeartPulse,
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-14 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Conditions We Treat
            </h2>
            <div className="mt-3 sm:mt-4 mx-auto w-14 sm:w-16 h-1.5 bg-green-500 rounded-full"></div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Our holistic approach focuses on stimulating your body's natural healing processes to provide lasting relief from acute and chronic conditions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs hover:shadow-xl hover:border-green-100 active:scale-[0.99] transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-green-500 group-hover:text-white text-green-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 sm:mb-3 group-hover:text-green-700 transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {treatment.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
