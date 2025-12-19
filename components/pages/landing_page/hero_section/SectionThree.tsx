import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CourseCard } from "@/components/courses";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { FEATURED_COURSES_QUERY } from "@/sanity/lib/queries";
import type { FEATURED_COURSES_QUERYResult } from "@/sanity.types";

export async function SectionThree() {
  const { data: courses } = await sanityFetch({
    query: FEATURED_COURSES_QUERY,
  });

  return (
    <section id="courses" className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Courses built for{" "}
          <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            real results
          </span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Each course is packed with modules and lessons designed to take you
          from zero to job-ready.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {courses?.map((course: FEATURED_COURSES_QUERYResult[number]) => (
          <CourseCard
            key={course._id}
            slug={
              course.slug?.current ? { current: course.slug.current } : null
            }
            title={course.title}
            description={course.description}
            tier={course.tier}
            thumbnail={course.thumbnail}
            moduleCount={course.moduleCount}
            lessonCount={course.lessonCount}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/dashboard">
          <Button
            variant="outline"
            className="border-zinc-700 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            View All Courses
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
