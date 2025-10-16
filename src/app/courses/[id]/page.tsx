
import Link from "next/link";

type CourseDetailPageProps = {
    params: { id: string }
}
export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
    const { id } = params
    const baseUrl = process.env.BACKEND_BASE_URL;
    const url = `${baseUrl}/courses/${id}`

    const response = await fetch(url);
    if (!response.ok) {
        return (
            <>
                <h2>No course found with existing id</h2>
            </>
        )
    }

    const course: Course = await response.json();
    console.log(course);
    return (
        <>
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            {course.title}
                        </h2>
                        <p className="text-gray-600">{course.instructor}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                        {course.credits} credit{course.credits !== 1 && "s"}
                    </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-500">
                    {course.department && (
                        <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-700">
                            {course.department}
                        </span>
                    )}
                    {course.start_date && (
                        <span>
                            {new Date(course.start_date).toLocaleDateString()} →{" "}
                            {course.end_date
                                ? new Date(course.end_date).toLocaleDateString()
                                : "TBD"}
                        </span>
                    )}
                </div>

                {course.description && (
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        {course.description}
                    </p>
                )}

                <div className="mt-6 flex gap-3">
                    <Link
                        href={`/courses/${course.course_id}/update`}
                        className="inline-block text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md border-1 px-2 py-1"
                    >
                        Update course
                    </Link>
                </div>
            </div>
        </>
    );

}