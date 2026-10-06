import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DoctorProfile from "@/components/DoctorProfile";
import Treatments from "@/components/Treatments";
import Testimonials from "@/components/Testimonials";
import VisitInfo from "@/components/VisitInfo";
import Footer from "@/components/Footer";
import FloatingMobileCTA from "@/components/FloatingMobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <DoctorProfile />
      <Treatments />
      <Testimonials />
      <VisitInfo />
      <Footer />
      <FloatingMobileCTA />
    </main>
  );
}
