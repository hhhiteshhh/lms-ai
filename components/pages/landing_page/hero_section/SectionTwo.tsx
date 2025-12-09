import { CheckCircle2, Crown, Rocket, Trophy } from "lucide-react";

export function SectionTwo() {
  const pricingPlans = [
    {
      tier: "Free",
      icon: Rocket,
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      bgGlow: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      description: "Start your journey with foundational courses",
      features: ["Core fundamentals", "Community access", "Basic projects"],
    },
    {
      tier: "Pro",
      icon: Crown,
      color: "violet",
      gradient: "from-violet-500 to-fuchsia-600",
      bgGlow: "bg-violet-500/10",
      borderColor: "border-violet-500/30",
      description: "Level up with advanced, production-ready content",
      features: [
        "All Free content",
        "Advanced courses",
        "Priority support",
        "Certificates",
      ],
      popular: true,
    },
    {
      tier: "Ultra",
      icon: Trophy,
      color: "cyan",
      gradient: "from-cyan-400 to-blue-600",
      bgGlow: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      description: "Unlock the real gems - AI tutor & exclusive content",
      features: [
        "Everything in Pro",
        "AI Learning Assistant",
        "Exclusive content",
        "1-on-1 sessions",
      ],
    },
  ];
  return (
    <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.tier}
            className={`relative p-8 rounded-2xl ${plan.bgGlow} border ${plan.borderColor} ${plan.popular ? "ring-2 ring-violet-500/50" : ""} transition-all duration-300 hover:scale-[1.02]`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 text-xs font-semibold">
                Most Popular
              </div>
            )}
            <div
              className={`w-12 h-12 rounded-xl bg-linear-to-br ${plan.gradient} flex items-center justify-center mb-4 shadow-lg`}
            >
              <plan.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
            <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-zinc-300"
                >
                  <CheckCircle2
                    className={`w-4 h-4 ${plan.color === "emerald" ? "text-emerald-400" : plan.color === "violet" ? "text-violet-400" : "text-cyan-400"}`}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
