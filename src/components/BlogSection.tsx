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
    slug: "arnica-montana-200-uses-benefits-dosage",
    title: "Arnica Montana 200: Uses, Benefits & Dosage Guide",
    excerpt:
      "Discover how classical homeopathic Arnica Montana accelerates soft tissue recovery, relieves muscle soreness, and speeds natural healing.",
    category: "Remedy Profile",
    readTime: "4 min read",
    date: "Oct 4, 2026",
    image: "/blog/arnica.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "2",
    slug: "holistic-homeopathic-approach-to-chronic-eczema",
    title: "A Holistic Homeopathic Approach to Chronic Eczema",
    excerpt:
      "Explore constitutional homeopathic remedies that target internal inflammation and provide lasting relief for eczema and psoriasis.",
    category: "Skin Health",
    readTime: "6 min read",
    date: "Sep 28, 2026",
    image: "/blog/eczema.jpg",
    author: "Dr. Umar Farooq",
  },
  {
    id: "3",
    slug: "nux-vomica-homeopathy-for-ibs-acid-reflux",
    title: "Nux Vomica: Homeopathy for IBS & Acid Reflux Relief",
    excerpt:
      "How individual constitutional remedies restore gut health, reduce gastric bloating, and soothe chronic acidity without side effects.",
    category: "Digestive Wellness",
    readTime: "5 min read",
    date: "Sep 15, 2026",
    image: "/blog/digestive.jpg",
    author: "Dr. Umar Farooq",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-14 sm:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
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

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Thumbnail Image Container */}
              <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors leading-snug mb-3">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
