"use client"

import CourseForm from "@/components/courses/CourseForm";

export default function NewCourse() {

  const onCreate = (courseData: Partial<Course>) => {
    console.log("CREATE NEW COURSE", courseData)
  }

  return (
    <div className="p-16">
      <CourseForm formTitle="Add New Course" onSave={onCreate}/>
    </div>
  );
}
