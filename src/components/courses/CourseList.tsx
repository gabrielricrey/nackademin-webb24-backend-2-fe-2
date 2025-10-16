"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import LocalizedDate from "./LocalizedDate"

type CourseListProps = {
  initialData: PaginatedListResponse<Course>,
  url: string,
}

export default function CourseList({ initialData, url }: CourseListProps) {
  const [count, setCount] = useState<number>(initialData.count);
  const [limit, setLimit] = useState<number>(initialData.limit);
  const [courses, setCourses] = useState(initialData.data);
  const [page, setPage] = useState<number>(1);

  const maxPage = Math.ceil(count / limit);

  useEffect(() => {

    const fetchCourses = async () => {
      try {
        const response = await fetch(`${url}?offset=${(page - 1) * 10}`);
        const data: PaginatedListResponse<Course> = await response.json();
        setCourses(data.data);
        setCount(data.count);
        setLimit(data.limit);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    }

    fetchCourses();
  }, [page])

  return (
    <div className="grid gap-4">
      <div className="flex">
        <div className="flex">
          <button onClick={() => setPage(prev => (prev > 1 ? prev - 1 : prev))} disabled={page === 1}>-</button>
          <div className="border-1 p-1">
            <span>Page:</span>
            <input type="text" value={page} readOnly />
          </div>
          <button onClick={() => setPage(prev => (prev < maxPage ? prev + 1 : prev))}>+</button>
        </div>
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select id="sort">
            <option></option>
            <option></option>
          </select>
        </div>
      </div>
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
                <LocalizedDate date={course.start_date} /> →{" "}
                {course.end_date
                  ? <LocalizedDate date={course.end_date} />
                  : "TBD"}
              </span>
            )}
          </div>
          <Link
            href={`/courses/${course.course_id}`}
            className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md border-1 px-2 py-1"
          >
            View details
          </Link>

          <Link
            href={`/courses/${course.course_id}/update`}
            className="inline-block mt-3 ml-4 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md border-1 px-2 py-1"
          >
            Update course
          </Link>
        </div>
      ))}
    </div>
  )
}