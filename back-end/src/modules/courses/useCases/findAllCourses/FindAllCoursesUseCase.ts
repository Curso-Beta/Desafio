import { prisma } from '../../../../database/prismaClient';

export class FindAllCoursesUseCase {
  async execute() {
    const courses = await prisma.course.findMany();

    return courses;
  }
}
