"use client"

import CourseForm from "@/components/courses/CourseForm";
import CourseService from "@/utils/courseService";
import { useRouter } from "next/navigation";

export default function NewCourse() {
  const router = useRouter()

  const onCreate = async (courseData: Partial<Course>) => {
    console.log("CREATE NEW COURSE", courseData)
    try {
      const response = await new CourseService().createCourse(courseData)
      if(!response.ok){
        throw new Error("Course could not be created")
      }
      const newCourse: Course = await response.json()
      router.push(`/courses/${newCourse.course_id}/update/`)

    } catch (err) {
      console.warn("Error in creating course", err)
    }
  }

  return (
    <div className="p-16">
      <CourseForm formTitle="Add New Course" onSave={onCreate}/>
    </div>
  );
}
