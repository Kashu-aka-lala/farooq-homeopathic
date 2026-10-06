import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 sm:py-12 border-t border-slate-900 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 mb-2">
              <Image
                src="/logo.jpeg"
                alt="Farooq Homeopathic Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shadow-xs bg-white p-0.5"
              />
              <span className="text-lg sm:text-xl font-bold text-slate-200 tracking-tight">
                Farooq <span className="text-green-500">Homeopathic</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-500">© 2026 Farooq Homeopathic. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-slate-400">
            <Link href="#about" className="hover:text-green-400 py-1 transition-colors">
              About
            </Link>
            <Link href="#treatments" className="hover:text-green-400 py-1 transition-colors">
              Treatments
            </Link>
            <Link href="#reviews" className="hover:text-green-400 py-1 transition-colors">
              Patient Stories
            </Link>
            <Link href="#visit" className="hover:text-green-400 py-1 transition-colors">
              Consultation & Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
