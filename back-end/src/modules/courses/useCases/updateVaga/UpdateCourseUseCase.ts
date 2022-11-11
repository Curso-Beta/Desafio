import { prisma } from '../../../../database/prismaClient';

interface IUpdateCourseUseCase {
  courseId: string;
  name: string;
  description: string;
  category: string;
  url: string;
}

export class UpdateCourseUseCase {
  async execute({
    courseId,
    name,
    description,
    category,
    url,
  }: IUpdateCourseUseCase) {
    const course = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        name,
        description,
        category,
        url,
      },
    });

    return course;
  }
}
