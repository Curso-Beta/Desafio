import { Request, Response } from 'express';
import { FindCourseByIdUseCase } from './FindCourseByIdUseCase';

export class FindCourseByIdController {
  async handle(request: Request, response: Response) {
    const { id: courseId } = request.params;

    const findCourseByIdUseCase = new FindCourseByIdUseCase();
    const course = await findCourseByIdUseCase.execute({
      courseId,
    });

    return response.json(course);
  }
}
