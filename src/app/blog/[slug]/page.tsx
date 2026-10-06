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

// Complete mock database for 10 SEO-optimized blog posts
export async function getPostData(slug: string): Promise<BlogPost | null> {
  const mockPosts: Record<string, BlogPost> = {
    "berberis-vulgaris-kidney-stones": {
      slug: "berberis-vulgaris-kidney-stones",
      title: "Berberis Vulgaris Mother Tincture (Q): Ultimate Guide for Kidney Stones",
      description:
        "Complete guide on Berberis Vulgaris Q for kidney stones in Pakistan. Learn effective dosage, benefits, and how it dissolves renal calculi naturally.",
      keywords: [
        "Berberis Vulgaris uses in Urdu",
        "homeopathic medicine for kidney stones in Pakistan",
        "how to use Berberis Vulgaris Q",
        "renal calculi homeopathic cure",
      ],
      date: "October 5, 2026",
      readTime: "5 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Renal Health",
      image: "/blog/kidney.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Renal calculi (kidney stones) cause excruciating flank pain, burning urination, and recurrent urinary infections. <strong>Berberis Vulgaris Mother Tincture (Q)</strong> is widely considered the primary homeopathic remedy for dissolving kidney stones and flushing out renal gravel naturally.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">How Berberis Vulgaris Works for Kidney Stones</h2>
        <p class="text-slate-600 leading-relaxed mb-6">
          Berberis Vulgaris possesses powerful lithontriptic and diuretic properties. It softens the hard crystalline borders of calcium oxalate and uric acid stones, allowing them to break into finer particles and pass painlessly through the ureter.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Symptoms Indicating Berberis Vulgaris</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li>Sharp, radiant pain originating in the kidney region and radiating down into the bladder, thighs, or groin.</li>
          <li>Bubbling or tearing sensation in the lumbar region.</li>
          <li>Burning sensation in the urethra during and after urination.</li>
          <li>Urinary sediment containing reddish-yellow uric acid crystals or cloudy mucus.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Dosage and How to Take Berberis Vulgaris Q</h2>
        <ol class="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
          <li>Mix 10 to 15 drops of Berberis Vulgaris Q in half a glass of lukewarm water.</li>
          <li>Take 3 times daily before meals.</li>
          <li>Maintain high daily fluid intake (3 to 4 liters of clean water daily) to assist renal flushing.</li>
        </ol>
      `,
    },
    "piles-bawaseer-treatment-homeopathy": {
      slug: "piles-bawaseer-treatment-homeopathy",
      title: "Homeopathic Treatment for Piles (Bawaseer) Without Surgery",
      description:
        "Effective homeopathic medicine for Bawaseer in Pakistan. Learn how Aesculus Hippocastanum and Nux Vomica treat hemorrhoids and bleeding piles naturally.",
      keywords: [
        "Bawaseer homeopathic medicine",
        "Aesculus Hippocastanum uses",
        "bleeding piles treatment in homeopathy",
        "hemorrhoids cure Pakistan",
      ],
      date: "October 3, 2026",
      readTime: "6 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Anorectal Health",
      image: "/blog/arnica.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Piles (Hemorrhoids or Bawaseer) cause intense discomfort, pain, rectal swelling, and bleeding. Homeopathy offers a non-surgical cure by relieving venous congestion in the pelvic circulation.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Top Homeopathic Remedies for Piles</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li><strong>Aesculus Hippocastanum:</strong> Ideal for dry, painful piles with a sensation of small sticks filling the rectum.</li>
          <li><strong>Hamamelis Virginica:</strong> The top choice for dark, profuse bleeding piles accompanied by soreness.</li>
          <li><strong>Nux Vomica:</strong> Prescribed for piles caused by chronic constipation, sedentary habits, or spicy foods.</li>
          <li><strong>Collinsonia Canadensis:</strong> Excellent for obstinate constipation and painful vascular hemorrhoids during pregnancy.</li>
        </ul>
      `,
    },
    "uric-acid-homeopathic-medicine": {
      slug: "uric-acid-homeopathic-medicine",
      title: "Best Homeopathic Medicine for Uric Acid & Joint Pain Relief",
      description:
        "Lower uric acid levels naturally with homeopathic drops in Pakistan. Discover Colchicum and Urtica Urens benefits for severe gout and joint pain relief.",
      keywords: [
        "Uric acid homeopathic drops in Pakistan",
        "Colchicum uses",
        "gout treatment naturally",
        "joint pain relief homeopathy",
      ],
      date: "September 30, 2026",
      readTime: "4 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Metabolic Health",
      image: "/blog/digestive.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Elevated serum uric acid causes severe joint inflammation, sharp big toe pain, and stiffness (Gout). Homeopathy regulates purine metabolism and accelerates renal excretion of uric acid.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Top Remedies for Hyperuricemia & Gout</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li><strong>Colchicum Autumnale:</strong> Essential for acute gouty arthritis where the joint is red, hot, swollen, and cannot tolerate touch.</li>
          <li><strong>Urtica Urens Q:</strong> Helps dissolve uric acid crystal deposits and flush them through urine.</li>
          <li><strong>Benzoic Acid:</strong> Best suited when urine has an intensely strong, pungent odor and joints crack painfully.</li>
        </ul>
      `,
    },
    "phytolacca-berry-weight-loss": {
      slug: "phytolacca-berry-weight-loss",
      title: "Phytolacca Berry Tablets: Uses for Weight Loss & Fat Reduction",
      description:
        "Natural weight loss with Phytolacca Berry homeopathic tablets in Pakistan. Learn correct dosage, side effects, and effective fat burning tips.",
      keywords: [
        "Homeopathic weight loss medicine in Pakistan",
        "Phytolacca Berry side effects",
        "how to lose weight with homeopathy",
        "fat reduction drops",
      ],
      date: "September 26, 2026",
      readTime: "5 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Weight Management",
      image: "/blog/eczema.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Obesity and stubborn fat accumulation increase metabolic risks. <strong>Phytolacca Berry</strong> is a renowned homeopathic remedy designed to regulate digestion and stimulate metabolic fat reduction.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Benefits of Phytolacca Berry</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li>Reduces excessive appetite and unwholesome cravings.</li>
          <li>Improves basal metabolic rate (BMR) without chemical stimulants.</li>
          <li>Safe and free from harmful side effects associated with synthetic fat burners.</li>
        </ul>
      `,
    },
    "pcos-treatment-homeopathy": {
      slug: "pcos-treatment-homeopathy",
      title: "PCOS Homeopathic Treatment: Regulate Periods Naturally",
      description:
        "Holistic PCOS treatment in homeopathy. Discover Pulsatilla 30 and Sepia uses to balance female hormones and cure irregular periods naturally.",
      keywords: [
        "PCOS cure in homeopathy",
        "Pulsatilla 30 uses",
        "irregular periods homeopathic medicine",
        "female hormone balance",
      ],
      date: "September 22, 2026",
      readTime: "6 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Women's Health",
      image: "/blog/arnica.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Polycystic Ovarian Syndrome (PCOS) triggers hormonal imbalance, irregular menstruation, weight gain, and facial hair growth. Homeopathy provides constitutional balance without synthetic hormones.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Remedies for PCOS</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li><strong>Pulsatilla Nigricans 30:</strong> The leading remedy for delayed or suppressed menses in mild, gentle temperaments.</li>
          <li><strong>Sepia Officinalis:</strong> Indicated for irregular cycles, pelvic bearing-down sensations, and hormonal mood swings.</li>
          <li><strong>Calcarea Carbonica:</strong> Prescribed for PCOS accompanied by weight gain, profuse sweating, and fatigue.</li>
        </ul>
      `,
    },
    "berberis-aquifolium-acne-glowing-skin": {
      slug: "berberis-aquifolium-acne-glowing-skin",
      title: "Berberis Aquifolium Q: The Best Homeopathic Medicine for Glowing Skin & Acne",
      description:
        "Achieve glowing, pimple-free skin with Berberis Aquifolium Q. Learn gel application, dark spot reduction, and skin whitening homeopathy tips.",
      keywords: [
        "Berberis Aquifolium gel uses",
        "homeopathic medicine for pimples and dark spots",
        "skin whitening homeopathy",
        "acne treatment Pakistan",
      ],
      date: "September 18, 2026",
      readTime: "4 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Dermatology",
      image: "/blog/acne.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Facial acne, dark spots, hyperpigmentation, and dull complexions respond wonderfully to <strong>Berberis Aquifolium Mother Tincture (Q)</strong>—often referred to as the herbal gold for radiant skin in homeopathy.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Benefits of Berberis Aquifolium</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li>Clears stubborn acne blemishes and hyperpigmentation marks.</li>
          <li>Improves skin tone and enhances natural facial glow.</li>
          <li>Purifies blood and detoxifies facial pores.</li>
        </ul>
      `,
    },
    "jaborandi-hair-fall-regrowth": {
      slug: "jaborandi-hair-fall-regrowth",
      title: "Jaborandi & Wiesbaden for Extreme Hair Fall and Hair Regrowth",
      description:
        "Stop hair loss and promote new follicle regrowth with Jaborandi hair oil and Wiesbaden 30. Proven homeopathic baldness solution in Pakistan.",
      keywords: [
        "Best homeopathic hair oil in Pakistan",
        "Jaborandi mother tincture uses",
        "baldness treatment homeopathy",
        "hair regrowth drops",
      ],
      date: "September 14, 2026",
      readTime: "5 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Hair Care",
      image: "/blog/hair.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Excessive hair shedding, thinning scalp, and premature balding can cause immense distress. <strong>Jaborandi (Pilocarpus Microphyllus)</strong> nourishes hair roots and stimulates dormant hair follicles.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Effective Homeopathic Hair Protocol</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li><strong>Jaborandi Mother Tincture:</strong> Mix with coconut or almond oil and massage into scalp 2–3 times weekly.</li>
          <li><strong>Wiesbaden 30C:</strong> Strengthens hair shaft texture and promotes rapid new growth.</li>
          <li><strong>Acidum Phosphoricum:</strong> Prescribed when hair loss is triggered by grief, mental stress, or illness.</li>
        </ul>
      `,
    },
    "sciatica-pain-relief-homeopathy": {
      slug: "sciatica-pain-relief-homeopathy",
      title: "Sciatica Pain Relief: Fast-Acting Homeopathic Remedies for Nerve Pain",
      description:
        "Relieve severe sciatica nerve pain and lower back aches quickly with Colocynthis 200 and Hypericum. Safe, non-habit forming treatment in Pakistan.",
      keywords: [
        "Sciatica homeopathic medicine",
        "Colocynthis 200 uses",
        "lower back pain treatment in Urdu",
        "sciatica nerve pain cure",
      ],
      date: "September 10, 2026",
      readTime: "5 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Pain Management",
      image: "/blog/digestive.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Sciatica causes shooting, electric pain originating from the lower back down through the sciatic nerve into the legs. Homeopathy offers fast nerve pain relief without heavy painkiller dependency.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Leading Sciatica Remedies</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li><strong>Colocynthis 200:</strong> The primary remedy for left-sided sciatica pain relieved by hard pressure and bending double.</li>
          <li><strong>Gnaphalium Polycephalum:</strong> Best for sciatica pain alternating with numbness in legs.</li>
          <li><strong>Hypericum Perforatum:</strong> Unmatched for nerve damage, spinal trauma, and radiating neuropathic pain.</li>
        </ul>
      `,
    },
    "tonsils-medicine-kids-homeopathy": {
      slug: "tonsils-medicine-kids-homeopathy",
      title: "Homeopathic Medicine for Tonsils in Kids (No Antibiotics Needed)",
      description:
        "Gentle homeopathic treatment for enlarged tonsils in children. Learn Baryta Carb 30 and Belladonna uses to avoid surgery and antibiotics.",
      keywords: [
        "Enlarged tonsils homeopathic cure",
        "Baryta Carb 30 uses",
        "Belladonna for fever in children",
        "pediatric tonsillitis remedy",
      ],
      date: "September 05, 2026",
      readTime: "4 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Pediatrics",
      image: "/blog/arnica.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Recurrent tonsillitis, throat swelling, and high fever in children often lead parents to repeated antibiotic courses or tonsillectomy. Homeopathy safely strengthens pediatric immunity to prevent surgery.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Top Pediatric Tonsil Remedies</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li><strong>Baryta Carbonica 30:</strong> The premiere remedy for chronic enlargement of tonsils in sensitive children.</li>
          <li><strong>Belladonna 30:</strong> Prescribed for acute redness, rapid fever, and throat pain with difficulty swallowing.</li>
          <li><strong>Hepar Sulphuris:</strong> Effective when throat pain feels like a splinter sticking in the tonsil.</li>
        </ul>
      `,
    },
    "dust-allergy-asthma-homeopathy": {
      slug: "dust-allergy-asthma-homeopathy",
      title: "Histaminum & Arsenicum Album for Dust Allergy and Asthma Relief",
      description:
        "Long-term relief from dust allergy, chronic sneezing, and bronchial asthma in Pakistan using Histaminum 30 and Arsenicum Album.",
      keywords: [
        "Dust allergy treatment in Pakistan",
        "homeopathic medicine for asthma",
        "sneezing and runny nose remedy",
        "allergic rhinitis cure",
      ],
      date: "September 01, 2026",
      readTime: "6 min read",
      author: "Dr. Umar Farooq (DHMS RMP)",
      category: "Respiratory Care",
      image: "/blog/eczema.jpg",
      contentHtml: `
        <p class="lead font-medium text-slate-700 text-lg leading-relaxed mb-6">
          Dust allergies, allergic rhinitis, and asthma cause frequent morning sneezing bursts, watery eyes, and breathing tightness. Homeopathy desensitizes the respiratory system naturally.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Top Allergy Remedies</h2>
        <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6">
          <li><strong>Histaminum Hydrochloricum 30:</strong> Acts as a natural antihistamine against dust mite and pollen flare-ups.</li>
          <li><strong>Arsenicum Album 30:</strong> Excellent for watery nasal discharge, burning eyes, and nocturnal asthma breathlessness.</li>
          <li><strong>Sabadilla:</strong> Specific for violent paroxysms of sneezing triggered by dust or strong smells.</li>
        </ul>
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
