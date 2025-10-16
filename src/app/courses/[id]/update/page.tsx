import UpdateCourse from "@/components/courses/UpdateCourse";

type UpdateCoursePageProps = {
  params: { id: string }
}

export default async function UpdateCoursePage({ params }: UpdateCoursePageProps) {
  const { id } = params;
  const baseUrl = process.env.BACKEND_BASE_URL;
  const url = `${baseUrl}/courses/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    return (
      <>
        <h2>No course with existing id</h2>
      </>
    )
  }

  const course: Course = await response.json();
  console.log(course);

  return (
    <UpdateCourse course={course} />
  );
}
