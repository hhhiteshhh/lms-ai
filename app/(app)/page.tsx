import { HeroSection } from "@/components/pages/landing_page/HeroSection";
import { Header } from "@/components/shared/Header";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
      <Header />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
