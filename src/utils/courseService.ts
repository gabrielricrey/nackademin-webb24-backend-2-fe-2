

class CourseService {
    baseUrl: string;
    courseUrl: string;
    constructor() {
        this.baseUrl = process.env.BACKEND_BASE_URL || process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "";
        this.courseUrl = `${this.baseUrl}/courses`
    }

    //TODO: Add get list
    //TODO: extra add pagination options
    
    //TODO: get single course

    async createCourse(courseData: Partial<Course>) {
        const url = `${this.courseUrl}/`
        return await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(courseData)
      })
    }

    //TODO: Update course

    //TODO: delete course
}

export default CourseService