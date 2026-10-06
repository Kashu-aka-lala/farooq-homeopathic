"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Sparkles } from "lucide-react";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
}

const mockArticles: Article[] = [
  {
    id: "1",
    slug: "berberis-vulgaris-kidney-stones",
    title: "Berberis Vulgaris Mother Tincture (Q): Ultimate Guide for Kidney Stones",
    excerpt:
      "Learn how Berberis Vulgaris Q dissolves renal calculi, relieves flank pain, and clears kidney stone gravel naturally.",
    category: "Renal Health",
    readTime: "5 min read",
    date: "Oct 5, 2026",
    image: "/blog/kidney.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "2",
    slug: "piles-bawaseer-treatment-homeopathy",
    title: "Homeopathic Treatment for Piles (Bawaseer) Without Surgery",
    excerpt:
      "Discover effective homeopathic remedies for bleeding piles and hemorrhoids using Aesculus, Hamamelis, and Nux Vomica.",
    category: "Anorectal Health",
    readTime: "6 min read",
    date: "Oct 3, 2026",
    image: "/blog/arnica.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "3",
    slug: "uric-acid-homeopathic-medicine",
    title: "Best Homeopathic Medicine for Uric Acid & Joint Pain Relief",
    excerpt:
      "Lower serum uric acid levels and cure acute gout joint pain naturally with Colchicum Autumnale and Urtica Urens.",
    category: "Metabolic Health",
    readTime: "4 min read",
    date: "Sep 30, 2026",
    image: "/blog/digestive.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "4",
    slug: "phytolacca-berry-weight-loss",
    title: "Phytolacca Berry Tablets: Uses for Weight Loss & Fat Reduction",
    excerpt:
      "Stimulate metabolic fat reduction and curb unwholesome cravings with Phytolacca Berry homeopathic tablets.",
    category: "Weight Management",
    readTime: "5 min read",
    date: "Sep 26, 2026",
    image: "/blog/eczema.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "5",
    slug: "pcos-treatment-homeopathy",
    title: "PCOS Homeopathic Treatment: Regulate Periods Naturally",
    excerpt:
      "Holistic PCOS treatment to balance female hormones, cure irregular periods, and reduce ovarian cysts naturally.",
    category: "Women's Health",
    readTime: "6 min read",
    date: "Sep 22, 2026",
    image: "/blog/arnica.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "6",
    slug: "berberis-aquifolium-acne-glowing-skin",
    title: "Berberis Aquifolium Q: Best Homeopathic Medicine for Glowing Skin & Acne",
    excerpt:
      "Achieve pimple-free, glowing skin and clear dark spots using Berberis Aquifolium Mother Tincture.",
    category: "Dermatology",
    readTime: "4 min read",
    date: "Sep 18, 2026",
    image: "/blog/acne.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "7",
    slug: "jaborandi-hair-fall-regrowth",
    title: "Jaborandi & Wiesbaden for Extreme Hair Fall and Hair Regrowth",
    excerpt:
      "Stop hair loss and stimulate new follicle growth using Jaborandi hair oil and Wiesbaden 30C remedies.",
    category: "Hair Care",
    readTime: "5 min read",
    date: "Sep 14, 2026",
    image: "/blog/hair.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "8",
    slug: "sciatica-pain-relief-homeopathy",
    title: "Sciatica Pain Relief: Fast-Acting Homeopathic Remedies for Nerve Pain",
    excerpt:
      "Relieve intense sciatic nerve pain, shooting leg aches, and spinal stiffness using Colocynthis 200.",
    category: "Pain Management",
    readTime: "5 min read",
    date: "Sep 10, 2026",
    image: "/blog/digestive.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "9",
    slug: "tonsils-medicine-kids-homeopathy",
    title: "Homeopathic Medicine for Tonsils in Kids (No Antibiotics Needed)",
    excerpt:
      "Safe, gentler pediatric remedies for enlarged tonsils, throat pain, and fever without surgical intervention.",
    category: "Pediatrics",
    readTime: "4 min read",
    date: "Sep 05, 2026",
    image: "/blog/arnica.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "10",
    slug: "dust-allergy-asthma-homeopathy",
    title: "Histaminum & Arsenicum Album for Dust Allergy and Asthma Relief",
    excerpt:
      "Desensitize respiratory allergies, morning sneezing bursts, and bronchial asthma using Histaminum and Arsenicum.",
    category: "Respiratory Care",
    readTime: "6 min read",
    date: "Sep 01, 2026",
    image: "/blog/eczema.jpg",
    author: "Dr. Umar Farooq",
  },
];

// Duplicate mock articles for seamless infinite horizontal scrolling marquee
const duplicatedPosts = [...mockArticles, ...mockArticles];

export default function BlogSection() {
  return (
    <section id="blog" className="py-14 sm:py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/80 border border-green-200 text-green-800 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-green-600" />
              <span>Medical Knowledge Base</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Health Insights & Remedy Guides
            </h2>
            <div className="mt-3 w-16 h-1.5 bg-green-500 rounded-full"></div>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Expert articles on homeopathic treatments by Dr. Umar Farooq.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-green-700 bg-green-50 hover:bg-green-100 rounded-xl border border-green-200/60 active:scale-95 transition-all group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        {/* Marquee Motion Track */}
        <div className="flex w-max gap-6 sm:gap-8 animate-marquee pause-on-hover py-4 px-4">
          {duplicatedPosts.map((article, index) => (
            <article
              key={`${article.id}-${index}`}
              className="w-[320px] md:w-[400px] flex-shrink-0 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Thumbnail Image Container */}
              <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 320px, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/60 text-xs font-bold text-slate-800 shadow-xs flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-green-600" />
                  <span>{article.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta Details */}
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readTime}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors leading-snug mb-3 line-clamp-2">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read Article Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    By {article.author}
                  </span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-sm font-bold text-green-600 hover:text-green-700 group-hover:translate-x-0.5 transition-all gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
