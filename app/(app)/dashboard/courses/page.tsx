import { currentUser } from "@clerk/nextjs/server";
import { BookOpen } from "lucide-react";
import { redirect } from "next/navigation";
import { CourseCard } from "@/components/courses";
import { Header } from "@/components/shared/Header";
import { sanityFetch } from "@/sanity/lib/live";
import { DASHBOARD_COURSES_QUERY } from "@/sanity/lib/queries";
import type { DASHBOARD_COURSES_QUERYResult } from "@/sanity.types";

export default async function MyCoursesPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const { data: courses } = await sanityFetch({
    query: DASHBOARD_COURSES_QUERY,
    params: { userId: user.id },
  });

  // Calculate completion for each course and filter to started ones
  type Course = DASHBOARD_COURSES_QUERYResult[number];
  type CourseWithProgress = Course & {
    totalLessons: number;
    completedLessons: number;
  };

  const coursesArray: DASHBOARD_COURSES_QUERYResult = courses ?? [];
  const startedCourses: CourseWithProgress[] = coursesArray.reduce(
    (acc: CourseWithProgress[], course: Course) => {
      const { total, completed } = (course.modules ?? []).reduce(
        (
          stats: { total: number; completed: number },
          m: NonNullable<Course["modules"]>[number],
        ) =>
          (m?.lessons ?? []).reduce(
            (
              s: { total: number; completed: number },
              l: NonNullable<
                NonNullable<Course["modules"]>[number]["lessons"]
              >[number],
            ) => ({
              total: s.total + 1,
              completed:
                s.completed + (l?.completedBy?.includes(user.id) ? 1 : 0),
            }),
            stats,
          ),
        { total: 0, completed: 0 },
      );

      if (completed > 0) {
        acc.push({
          ...course,
          totalLessons: total,
          completedLessons: completed,
        });
      }
      return acc;
    },
    [],
  );

  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 px-6 lg:px-12 py-12 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Courses</h1>
          <p className="text-zinc-400">
            Courses you&apos;ve started learning. Pick up where you left off.
          </p>
        </div>

        {startedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startedCourses.map((course: CourseWithProgress) => (
              <CourseCard
                key={course._id}
                slug={
                  course.slug?.current
                    ? { current: course.slug.current }
                    : { current: "asd" }
                }
                title={course.title}
                description={course.description}
                tier={course.tier}
                thumbnail={course.thumbnail}
                moduleCount={course.moduleCount}
                lessonCount={course.totalLessons}
                completedLessonCount={course.completedLessons}
                isCompleted={course.completedBy?.includes(user.id) ?? false}
                showProgress
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-zinc-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              No courses started yet
            </h3>
            <p className="text-zinc-400 max-w-md mx-auto">
              Browse our course catalog and start learning. Your progress will
              appear here once you complete your first lesson.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
