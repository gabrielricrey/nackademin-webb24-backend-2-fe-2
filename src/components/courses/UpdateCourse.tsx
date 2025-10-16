"use client"

import CourseForm from "./CourseForm"

type UpdateCourseProps = {
    course: Course,
}


export default function UpdateCourse({ course }: UpdateCourseProps) {

    const onCreate = (course: Partial<Course>) => {
        console.log("Course updated:", course)
    }
    return (
        <>
            <CourseForm formTitle={"Update course"} course={course} onSave={onCreate} />
        </>
    )
}