"use client";

import CourseForm from "./CourseForm";

type UpdateCourseProps = {
    course: Course;
}

export default function UpdateCourse({course}: UpdateCourseProps) {

    const onUpdate = () => {
        console.log("Updating course")
    }

    return (
        <div>
            <CourseForm formTitle="Update Course" onSave={onUpdate} course={course}/>
        </div>
    )
}