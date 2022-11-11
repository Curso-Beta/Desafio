import { useQuery } from "react-query";
import { api } from "../api";

type Course = {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
};

export async function getCourses(): Promise<Course[]> {
  const { data } = await api.get("courses");

  const courses = data.map((course: Course) => {
    return {
      id: course.id,
      name: course.name,
      description: course.description,
      category: course.category,
      url: course.url,
    };
  });

  return courses;
}

export function useCourses() {
  return useQuery("Courses", getCourses, {
    staleTime: 1000 * 60 * 10,
  });
}
