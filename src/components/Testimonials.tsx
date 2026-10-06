"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ahmed R.",
    location: "Islamabad",
    avatar: "/avatars/avatar-1.png",
    quote: "The chronic migraines I suffered from for years have completely stopped after a few months of treatment.",
  },
  {
    name: "Fatima S.",
    location: "Rawalpindi",
    avatar: "/avatars/avatar-2.png",
    quote: "Dr. Farooq is highly professional. His remedy for my daughter's eczema worked wonders when nothing else did.",
  },
  {
    name: "Usman A.",
    location: "Islamabad",
    avatar: "/avatars/avatar-3.png",
    quote: "Excellent experience. The consultation was detailed and the medication for my digestive issues provided quick relief.",
  },
  {
    name: "Ayesha M.",
    location: "Rawalpindi",
    avatar: "/avatars/avatar-4.png",
    quote: "I highly recommend Farooq Homeopathic. The holistic approach has greatly improved my overall energy levels and health.",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="reviews" className="py-14 sm:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Patient Stories
            </h2>
            <div className="mt-3 sm:mt-4 mx-auto w-14 sm:w-16 h-1.5 bg-green-500 rounded-full"></div>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 py-2 sm:py-4">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-slate-100 h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                    <div>
                      <div className="flex gap-1 mb-4 sm:mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <blockquote className="min-h-[70px]">
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>
                    </div>
                    <div className="mt-6 pt-5 sm:pt-6 border-t border-slate-100 flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 shadow-xs"
                      />
                      <div>
                        <p className="font-bold text-slate-900 text-sm sm:text-base leading-tight">{testimonial.name}</p>
                        <p className="text-xs text-slate-500 font-medium">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls & Pagination Dots */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-green-600 hover:border-slate-300 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2 px-2">
                {testimonials.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => scrollTo(dotIndex)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      selectedIndex === dotIndex
                        ? "w-7 bg-green-600"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-green-600 hover:border-slate-300 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
