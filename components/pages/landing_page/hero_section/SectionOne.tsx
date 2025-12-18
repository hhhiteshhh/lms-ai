import { currentUser } from "@clerk/nextjs/server";
import { BookOpen, LayoutDashboard, Play, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { STATS_QUERY } from "@/sanity/lib/queries";
export async function SectionOne() {
  const user = await currentUser();
  const isSignedIn = !!user;
  const { data: stats } = await sanityFetch({ query: STATS_QUERY });

  return (
    <section className="px-6 lg:px-12 pt-16 pb-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm text-violet-300">
            Learn to code with real-world projects
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-white">Master coding</span>
          <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            the modern way
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Join LMS AI and learn from expertly crafted courses, modules, and
          hands-on lessons. From free fundamentals to{" "}
          <span className="text-fuchsia-400">Pro exclusives</span> and{" "}
          <span className="text-cyan-400">Ultra gems</span>.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {isSignedIn ? (
            <>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-xl shadow-violet-600/30 px-8 h-12 text-base font-semibold"
                >
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Go to Dashboard
                </Button>
              </Link>
              <Link href="/dashboard/courses">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-700 bg-white/5 text-white px-8 h-12 text-base hover:bg-white/10 hover:text-white"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  My Courses
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-xl shadow-violet-600/30 px-8 h-12 text-base font-semibold"
                >
                  <Play className="w-4 h-4 mr-2 fill-white" />
                  Start Learning Free
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-700 bg-white/5 text-white px-8 h-12 text-base hover:bg-white/10 hover:text-white"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse Courses
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 md:gap-16 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            {
              value: stats?.courseCount ?? 0,
              label: "Courses",
              icon: BookOpen,
            },
            {
              value: stats?.lessonCount ?? 0,
              label: "Lessons",
              icon: Play,
            },
            { value: "10K+", label: "Students", icon: Users },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <stat.icon className="w-4 h-4 text-violet-400" />
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </span>
              </div>
              <span className="text-sm text-zinc-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
