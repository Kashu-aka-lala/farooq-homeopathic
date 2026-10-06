"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Video, MessageSquare } from "lucide-react";

export default function VisitInfo() {
  return (
    <section id="visit" className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Column 1: Consultation Hours */}
        <div className="bg-blue-50/70 py-14 sm:py-20 px-5 sm:px-12 lg:px-20 flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100/80 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-blue-600">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Consultation Hours</h2>
                <span className="inline-block px-2.5 py-0.5 text-xs font-bold text-blue-800 bg-blue-100 rounded-md">
                  PKT (UTC+5)
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Pakistan Standard Time</p>
            </div>
            
            <ul className="space-y-4 sm:space-y-6 text-base sm:text-lg">
              <li className="flex flex-col xs:flex-row justify-between xs:items-center gap-1 border-b border-blue-100 pb-3.5 sm:pb-4">
                <span className="font-medium text-slate-700">Monday - Friday</span>
                <span className="text-slate-900 font-bold">4:00 PM - 9:00 PM</span>
              </li>
              <li className="flex flex-col xs:flex-row justify-between xs:items-center gap-1 border-b border-blue-100 pb-3.5 sm:pb-4">
                <span className="font-medium text-slate-700">Saturday</span>
                <span className="text-slate-900 font-bold">10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex flex-col xs:flex-row justify-between xs:items-center gap-1 pb-2 sm:pb-4">
                <span className="font-medium text-slate-700">Sunday</span>
                <span className="text-red-500 font-bold">Closed</span>
              </li>
            </ul>
            
            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed bg-blue-100/70 p-3.5 sm:p-4 rounded-xl border border-blue-200/60">
              All consultations are conducted online via WhatsApp Video or Audio call. Please book in advance.
            </p>
          </motion.div>
        </div>

        {/* Column 2: Digital Access & Contact */}
        <div className="bg-slate-900 py-14 sm:py-20 px-5 sm:px-12 lg:px-20 flex items-center justify-center lg:justify-start text-white relative overflow-hidden">
          {/* Abstract background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md relative z-10"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 tracking-tight">Get in Touch</h2>
            
            <div className="space-y-6 sm:space-y-8">
              {/* Based In */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </div>
                <div className="ml-3.5 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold">Based In</h3>
                  <p className="mt-0.5 text-sm sm:text-base text-slate-300 leading-relaxed">Islamabad, Pakistan</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </div>
                <div className="ml-3.5 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold">Phone / WhatsApp</h3>
                  <a href="tel:03455496698" className="mt-0.5 block text-slate-300 hover:text-white transition-colors text-sm sm:text-base font-medium">
                    0345 5496698
                  </a>
                </div>
              </div>

              {/* Online Session Card */}
              <div className="mt-8 sm:mt-10 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 rounded-2xl p-5 sm:p-6 border border-blue-500/30 shadow-xl">
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mr-3 border border-blue-400/20 flex-shrink-0">
                    <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Book an Online Session</h3>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                  Consult with Dr. Umar Farooq from anywhere in the world. Secure, private, and effective homeopathic care straight to your phone.
                </p>

                <a
                  href="https://wa.me/923455496698?text=Hello%20Dr.%20Umar%20Farooq,%20I%20would%20like%20to%20book%20an%20online%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 sm:mt-5 inline-flex items-center justify-center px-5 py-3.5 text-sm font-bold rounded-xl text-white bg-green-600 hover:bg-green-700 active:scale-[0.98] shadow-md hover:shadow-lg transition-all duration-300 gap-2 group"
                >
                  <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Message to Book
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
