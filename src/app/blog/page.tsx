import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import FloatingMobileCTA from "@/components/FloatingMobileCTA";

export const metadata: Metadata = {
  title: "Health Insights & Homeopathic Remedy Articles | Farooq Homeopathic",
  description:
    "Explore expert medical articles and holistic remedy guides written by Dr. Umar Farooq (DHMS RMP) on classical homeopathy, chronic skin care, and digestive health.",
  keywords: [
    "Homeopathy Articles",
    "Dr. Umar Farooq Blog",
    "Homeopathic Remedies Islamabad",
    "Natural Health Insights",
  ],
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <div className="flex-1 pt-12">
        <BlogSection />
      </div>
      <Footer />
      <FloatingMobileCTA />
    </main>
  );
}
