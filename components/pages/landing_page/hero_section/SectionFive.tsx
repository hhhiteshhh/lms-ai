import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SectionFive() {
  return (
    <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-linear-to-br from-violet-600/20 via-fuchsia-600/10 to-cyan-600/20 border border-white/10 p-12 md:p-20 text-center overflow-hidden">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-xl" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/30">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to level up your skills?
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
            Start with free courses or unlock everything with Pro and Ultra.
            Your coding journey begins now.
          </p>
          <Link href="/pricing">
            <Button
              size="lg"
              className="bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-xl shadow-violet-600/30 px-10 h-14 text-lg font-semibold"
            >
              View Pricing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
