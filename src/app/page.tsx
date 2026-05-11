import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ec]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <Footer />
    </main>
  );
}