import UpdateCourse from "@/components/courses/UpdateCourse";
import { notFound } from "next/navigation";

export default async function UpdateCoursePage({params}: PageProps<"/courses/[id]/update">) {
    const { id } = await params
    try {

      const baseUrl = process.env.BACKEND_BASE_URL
      const url = `${baseUrl}/courses/${id}/`
      const response = await fetch(url)
      
      if(!response.ok) {
        throw new Error("Course not found")
      }
      const course: Course | null = await response.json()
      if(!course) {
        throw new Error("Course not found")
      }
      return (
        <UpdateCourse course={course}/>
      );
    } catch(err) {
      return notFound()
    } 
}
