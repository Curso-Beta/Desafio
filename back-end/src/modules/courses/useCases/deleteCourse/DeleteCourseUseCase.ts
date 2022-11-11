import { prisma } from '../../../../database/prismaClient';

interface IDeleteCourseUseCase {
  courseId: string;
}

export class DeleteCourseUseCase {
  async execute({ courseId }: IDeleteCourseUseCase) {
    const course = await prisma.course.delete({
      where: {
        id: courseId,
      },
    });

    return course;
  }
}
