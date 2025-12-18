import { auth } from "@clerk/nextjs/server";
// @ts-expect-error - redirect exists at runtime in Next.js, but types may be missing
import { notFound } from "next/navigation";
import { CourseContent } from "@/components/courses";
import { sanityFetch } from "@/sanity/lib/live";
import { COURSE_WITH_MODULES_QUERY } from "@/sanity/lib/queries";
import type { COURSE_WITH_MODULES_QUERYResult } from "@/sanity.types";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const { userId } = await auth();

  const { data: course } = await sanityFetch({
    query: COURSE_WITH_MODULES_QUERY,
    params: { slug, userId: userId },
  });

  if (!course) {
    notFound();
  }

  // TypeScript doesn't know that notFound() throws, so we need to assert non-null
  const courseData = course as NonNullable<COURSE_WITH_MODULES_QUERYResult>;

  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
      {/* Main Content */}
      <main className="relative z-10 px-6 lg:px-12 py-12 max-w-7xl mx-auto">
        <CourseContent course={courseData} userId={userId} />
      </main>
    </div>
  );
}
