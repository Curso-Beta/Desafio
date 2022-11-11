import { Request, Response } from 'express';
import { DeleteCourseUseCase } from './DeleteCourseUseCase';

export class DeleteCourseController {
  async handle(request: Request, response: Response) {
    const { id: courseId } = request.params;

    const deleteCourseUseCase = new DeleteCourseUseCase();
    const course = await deleteCourseUseCase.execute({
      courseId,
    });

    return response.json(course);
  }
}
