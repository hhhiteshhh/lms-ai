import { PricingTable } from "@clerk/nextjs";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { getTierColorClasses, TIER_FEATURES } from "@/lib/constants";
import { SectionSix } from "@/components/pages/landing_page/hero_section/SectionSix";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
      <Header />

      {/* Main Content */}
      <main className="relative z-10 px-6 lg:px-12 py-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300">
              Simple, transparent pricing
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              learning path
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Start free, upgrade when you&apos;re ready. Unlock Pro for advanced
            content or go Ultra for AI-powered learning, exclusive
            masterclasses, and 1-on-1 access.
          </p>
        </div>

        {/* What's Included Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {TIER_FEATURES.map((plan) => {
            const colorClasses = getTierColorClasses(plan.color);
            return (
              <div
                key={plan.tier}
                className={`p-6 rounded-xl bg-zinc-900/30 border ${colorClasses.border}`}
              >
                <h3 className={`text-lg font-bold mb-4 ${colorClasses.text}`}>
                  {plan.tier} includes:
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 ${colorClasses.text}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Clerk Pricing Table */}
        <div className="clerk-pricing-wrapper rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 md:p-10">
          <PricingTable
            appearance={{
              elements: {
                pricingTable: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.5rem",
                },
                pricingTableCard: {
                  borderRadius: "1rem",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  boxShadow: "0 10px 40px rgba(139, 92, 246, 0.1)",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  background: "rgba(24, 24, 27, 0.8)",
                  backdropFilter: "blur(10px)",
                },
                pricingTableCardHeader: {
                  background:
                    "linear-gradient(135deg, rgb(139 92 246), rgb(192 132 252))",
                  color: "white",
                  borderRadius: "1rem 1rem 0 0",
                  padding: "2rem",
                },
                pricingTableCardTitle: {
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  color: "white",
                  marginBottom: "0.25rem",
                },
                pricingTableCardDescription: {
                  fontSize: "0.9rem",
                  color: "rgba(255, 255, 255, 0.85)",
                  fontWeight: "500",
                },
                pricingTableCardFee: {
                  color: "white",
                  fontWeight: "800",
                  fontSize: "2.5rem",
                },
                pricingTableCardFeePeriod: {
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "1rem",
                },
                pricingTableCardBody: {
                  padding: "1.5rem",
                  background: "rgba(24, 24, 27, 0.9)",
                },
                pricingTableCardFeatures: {
                  marginTop: "1rem",
                  gap: "0.75rem",
                },
                pricingTableCardFeature: {
                  fontSize: "0.9rem",
                  padding: "0.5rem 0",
                  fontWeight: "500",
                  color: "rgba(255, 255, 255, 0.8)",
                },
                pricingTableCardButton: {
                  marginTop: "1.5rem",
                  borderRadius: "0.75rem",
                  fontWeight: "700",
                  padding: "0.875rem 2rem",
                  transition: "all 0.2s ease",
                  fontSize: "1rem",
                  background:
                    "linear-gradient(135deg, rgb(139 92 246), rgb(192 132 252))",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)",
                },
                pricingTableCardPeriodToggle: {
                  color: "white",
                },
              },
            }}
            fallback={
              <div className="flex items-center justify-center py-20">
                <div className="text-center space-y-4">
                  <Loader2 className="h-12 w-12 animate-spin text-violet-500 mx-auto" />
                  <p className="text-zinc-400 text-lg font-medium">
                    Loading pricing options...
                  </p>
                </div>
              </div>
            }
          />
        </div>

        {/* FAQ or extra info */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400">
            Questions?{" "}
            <Link
              href="#"
              className="text-violet-400 hover:text-violet-300 underline underline-offset-4"
            >
              Contact us
            </Link>{" "}
            or check out our{" "}
            <Link
              href="#"
              className="text-violet-400 hover:text-violet-300 underline underline-offset-4"
            >
              FAQ
            </Link>
          </p>
        </div>
      </main>

      <SectionSix />
    </div>
  );
}
