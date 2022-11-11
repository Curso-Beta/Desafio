import { prisma } from '../../../../database/prismaClient';

interface ICreateCourse {
  name: string;
  description: string;
  category: string;
  url: string;
}

export class CreateCourseUseCase {
  async execute({ name, description, category, url }: ICreateCourse) {
    const course = await prisma.course.create({
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
