import { Star } from "lucide-react";

export function SectionFour() {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Junior Developer",
      content:
        "Sonny's teaching style is incredible. I went from knowing nothing to landing my first dev job in 6 months!",
      avatar: "🧑‍💻",
    },
    {
      name: "Sarah Miller",
      role: "Freelancer",
      content:
        "The Ultra tier is worth every penny. The exclusive content and 1-on-1 sessions transformed my career.",
      avatar: "👩‍💼",
    },
    {
      name: "James Wilson",
      role: "CS Student",
      content:
        "Best investment I've made. The Pro courses filled gaps my university courses never covered.",
      avatar: "🎓",
    },
  ];

  return (
    <section
      id="testimonials"
      className="px-6 lg:px-12 py-20 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Students{" "}
          <span className="bg-linear-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            love it
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={`star-${testimonial.name}-${i}`}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <p className="text-zinc-300 mb-6 leading-relaxed">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-zinc-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
