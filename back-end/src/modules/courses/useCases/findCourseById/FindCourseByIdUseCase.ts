import { prisma } from '../../../../database/prismaClient';

interface IFindCourseByIdUseCase {
  courseId: string;
}

export class FindCourseByIdUseCase {
  async execute({ courseId }: IFindCourseByIdUseCase) {
    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });

    return course;
  }
}
