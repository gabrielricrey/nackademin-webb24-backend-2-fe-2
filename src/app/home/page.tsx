import CourseList from "@/components/courses/CourseList";

export default async function Home() {
  const baseUrl = process.env.BACKEND_BASE_URL
  const url = `${baseUrl}/courses/?offset=50`
  const response = await fetch(url)
  const courses: PaginatedListResponse<Course>= await response.json()
  console.log(courses)

  return (
    <div className="p-16">
      <h1 className="text-2xl font-bold">Kurser</h1>
      <CourseList courses={courses.data} />
    </div>
  );
}
