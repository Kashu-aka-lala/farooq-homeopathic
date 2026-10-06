import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Configure a clean, modern sans-serif font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

// Configure viewport and theme color for mobile browsers
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Optimized SEO Metadata for Local Search
export const metadata: Metadata = {
  title: "Farooq Homeopathic | Dr. Umar Farooq | Homeopathy in Islamabad",
  description:
    "Expert holistic care and homeopathic treatments by Dr. Umar Farooq (DHMS RMP) in Islamabad. Book your consultation today.",
  keywords: [
    "Homeopathy Islamabad",
    "Dr. Umar Farooq",
    "Homeopathic Clinic",
    "Holistic Care",
    "Natural Remedies",
    "Best Homeopath in Islamabad",
  ],
  authors: [{ name: "Dr. Umar Farooq" }],
  openGraph: {
    title: "Farooq Homeopathic | Dr. Umar Farooq",
    description: "Expert holistic care and homeopathic treatments in Islamabad.",
    url: "https://farooqhomeopathic.com",
    siteName: "Farooq Homeopathic",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
