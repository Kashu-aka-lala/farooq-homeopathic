import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { User, Calendar, Clock, ArrowLeft, MessageSquare, BookOpen, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  date: string;
  readTime: string;
  author: string;
  category: string;
  image?: string;
  contentHtml: string;
}

// Mock database fetcher function
export async function getPostData(slug: string): Promise<BlogPost | null> {
  const mockPosts: Record<string, BlogPost> = {
    "arnica-montana-200-uses-benefits-dosage": {
      slug: "arnica-montana-200-uses-benefits-dosage",
      title: "Arnica Montana 200: Uses, Benefits & Dosage Guide",
      description:
        "Learn about Arnica Montana 200C in homeopathy. Understand key uses for tissue trauma, muscle soreness, post-surgery recovery, and correct dosage instructions.",
      keywords: [
        "Arnica Montana 200",
        "Homeopathy for Pain",
        "Muscle Recovery",
        "Arnica Dosage",
        "Homeopathic Medicine Islamabad",
        "Dr. Umar Farooq",
      ],
      date: "October 4, 2026",
      readTime: "4 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Remedy Profile",
      image: "/blog/arnica.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Arnica Montana is one of the most celebrated and widely recognized remedies in classical homeopathy. Commonly known as Mountain Daisy or Leopard's Bane, this botanical remedy possesses remarkable therapeutic properties for tissue trauma, muscular strains, and postoperative recovery.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">What is Arnica Montana 200C?</h2>
        <p class="text-slate-600 leading-relaxed mb-6">
          In homeopathic pharmacy, <strong>Arnica Montana 200C</strong> (or 200CH) represents a high-potency dilution prepared according to strict Hahnemannian pharmacopoeia standards. It acts deeply on the vascular and muscular systems to reduce extravasation of blood, diminish swelling, and relieve intense physical soreness.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Clinical Uses of Arnica Montana</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li><strong>Physical Trauma & Bruising:</strong> Rapidly reduces subcutaneous discoloration and localized swelling following blunt force injuries, falls, or sprains.</li>
          <li><strong>Post-Surgical Healing:</strong> Promotes faster soft-tissue repair and minimizes surgical site discomfort when prescribed post-procedure.</li>
          <li><strong>Muscle Overexertion:</strong> Relieves the classic "sore, beaten, bruised" sensation following strenuous physical labor or intense athletic training.</li>
          <li><strong>Dental Procedures:</strong> Soothes painful gums and nerve tissue inflammation following dental extractions or oral surgery.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Recommended Dosage & Administration</h2>
        <p class="text-slate-600 leading-relaxed mb-4">
          While exact posology must always be tailored during an individual homeopathic consultation, standard guidance for acute pain or soreness includes:
        </p>
        <ol class="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
          <li>Dissolve 3 to 4 Globules (sugar pellets) under the tongue away from food, drink, or strong aromatics (mint, coffee, camphor).</li>
          <li>For acute traumatic injuries, repeat dosage every 4 to 6 hours for the first 24 to 48 hours until symptoms improve.</li>
          <li>Always consult a qualified homeopathic medical practitioner (RHMP) for chronic conditions or high-potency repetitions.</li>
        </ol>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Choose Classical Homeopathy?</h2>
        <p class="text-slate-600 leading-relaxed mb-6">
          Classical homeopathy treats the patient as a whole individual, addressing underlying constitutional factors, temperament, and root causes rather than merely masking localized symptoms.
        </p>
      `,
    },
    "holistic-homeopathic-approach-to-chronic-eczema": {
      slug: "holistic-homeopathic-approach-to-chronic-eczema",
      title: "A Holistic Homeopathic Approach to Chronic Eczema",
      description:
        "Explore how constitutional homeopathic remedies target internal immune imbalances to provide lasting relief for eczema and psoriasis.",
      keywords: [
        "Homeopathy for Eczema",
        "Skin Disease Treatment",
        "Dr. Umar Farooq",
        "Holistic Eczema Cure",
        "Natural Skin Remedy",
      ],
      date: "September 28, 2026",
      readTime: "6 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Skin Health",
      image: "/blog/eczema.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Chronic skin conditions such as eczema, psoriasis, and allergic dermatitis are not merely superficial ailments; they are cutaneous reflections of deeper internal immune disharmonies. Classical homeopathy seeks to restore equilibrium from within.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Addressing the Root Cause of Eczema</h2>
        <p class="text-slate-600 leading-relaxed mb-6">
          Topical corticosteroid salves may temporarily suppress cutaneous flare-ups, but frequently result in rebound exacerbations once discontinued. Individualized homeopathy identifies specific constitutional triggers—such as digestive microflora imbalances, emotional stress, or environmental sensitivity.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Constitutional Skin Remedies</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li><strong>Sulphur:</strong> Indicated for dry, scaly skin with intense burning and nocturnal itching aggravated by warmth and washing.</li>
          <li><strong>Graphites:</strong> Highly effective for thick, cracked skin with honey-like sticky exudations in skin folds.</li>
          <li><strong>Arsenicum Album:</strong> Prescribed for dry, itching eruptions accompanied by systemic restlessness and anxiety.</li>
        </ul>
      `,
    },
    "nux-vomica-homeopathy-for-ibs-acid-reflux": {
      slug: "nux-vomica-homeopathy-for-ibs-acid-reflux",
      title: "Nux Vomica: Homeopathy for IBS & Acid Reflux Relief",
      description:
        "Discover how Nux Vomica addresses IBS, chronic heartburn, gastric spasms, and lifestyle digestive ailments naturally.",
      keywords: [
        "Nux Vomica Homeopathy",
        "IBS Treatment Islamabad",
        "Acid Reflux Cure",
        "Digestive Wellness",
        "Homeopathic Gastroenterology",
      ],
      date: "September 15, 2026",
      readTime: "5 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Digestive Wellness",
      image: "/blog/digestive.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Modern sedentary routines, high work stress, and spicy culinary habits frequently trigger gastrointestinal distress. Nux Vomica stands as the chief homeopathic remedy for restoring digestive harmony.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Indications for Nux Vomica</h2>
        <p class="text-slate-600 leading-relaxed mb-6">
          It is specifically indicated for individuals experiencing acid reflux, morning stomach heaviness, irritable bowel spasticity, and an ineffectual urge for bowel movements.
        </p>
      `,
    },
  };

  return mockPosts[slug] || null;
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate Dynamic SEO Metadata for Each Article Page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return {
      title: "Article Not Found | Farooq Homeopathic",
      description: "The requested homeopathic health article could not be found.",
    };
  }

  return {
    title: `${post.title} | Farooq Homeopathic`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | Farooq Homeopathic`,
      description: post.description,
      url: `https://farooqhomeopathic.com/blog/${post.slug}`,
      siteName: "Farooq Homeopathic",
      locale: "en_PK",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image, alt: post.title }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Back Navigation Link */}
          <div className="mb-8">
            <Link
              href="/#blog"
              className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs font-bold text-slate-500 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100/80 text-green-800 border border-green-200">
                <BookOpen className="w-3.5 h-3.5 text-green-600" />
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-green-600" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{post.date}</span>
              </div>
            </div>
          </header>

          {/* Featured Header Banner Image */}
          {post.image && (
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-10 border border-slate-200/80">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
              />
            </div>
          )}

          {/* Main Article Body */}
          <div
            className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-a:text-green-600 hover:prose-a:text-green-700 prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* In-Article Call to Action Box */}
          <div className="mt-12 sm:mt-16 bg-blue-50/90 rounded-2xl p-6 sm:p-8 border border-blue-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-md mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Certified Homeopathic Care</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Need a Personalized Prescription?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2">
                Consult directly with Dr. Umar Farooq (DHMS RMP) for a tailored homeopathic remedy protocol suited to your unique health needs.
              </p>
            </div>

            <a
              href={`https://wa.me/923455496698?text=Hello%20Dr.%20Umar%20Farooq,%20I%20read%20your%20article%20"${encodeURIComponent(
                post.title
              )}"%20and%20would%20like%20to%20book%20a%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl text-white bg-green-600 hover:bg-green-700 active:scale-95 shadow-md transition-all gap-2 flex-shrink-0 w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Consultation</span>
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
