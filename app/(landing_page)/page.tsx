import { AnimatedBackground } from "@/components/pages/landing_page/AnimatedBackground";
import { NoiseOverlay } from "@/components/pages/landing_page/NoiseOverlay";
import { Header } from "@/components/shared/Header";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
      <AnimatedBackground />
      <NoiseOverlay />
      <Header />
    </div>
  );
}

export default LandingPage;
