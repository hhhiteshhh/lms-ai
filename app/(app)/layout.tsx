import { ClerkProvider } from "@clerk/nextjs";
import { AnimatedBackground } from "@/components/pages/landing_page/AnimatedBackground";
import { NoiseOverlay } from "@/components/pages/landing_page/NoiseOverlay";
import { SanityLive } from "@/sanity/lib/live";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <div>
        <AnimatedBackground />
        <NoiseOverlay />
        {children}
      </div>
      <SanityLive />
    </ClerkProvider>
  );
}

export default AppLayout;
