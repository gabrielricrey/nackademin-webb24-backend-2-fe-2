
type CourseListProps = {
    courses: Course[]
}

export default function CourseList({courses}: CourseListProps) {
    return (
    <div className="grid gap-4">
      {courses.map((course) => (
        <div
          key={course.course_id}
          className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow bg-white"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {course.title}
              </h3>
              <p className="text-gray-600">{course.instructor}</p>
            </div>
            <span className="text-sm text-gray-500">
              {course.credits} credit{course.credits !== 1 && "s"}
            </span>
          </div>

          <div className="mt-2 text-sm text-gray-500 flex gap-2 flex-wrap">
            {course.department && (
              <span className="px-2 py-1 bg-gray-100 rounded-md">
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
          {/* //TODO Add link to courses/[id] */}
        </div>
      ))}
    </div>
  )
}