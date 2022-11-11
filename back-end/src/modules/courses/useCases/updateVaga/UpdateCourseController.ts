import { Request, Response } from 'express';
import { UpdateCourseUseCase } from './UpdateCourseUseCase';

export class UpdateCourseController {
  async handle(request: Request, response: Response) {
    const { courseId } = request;
    const { name, description, category, url } = request.body;

    const updateCourseUseCase = new UpdateCourseUseCase();
    const course = await updateCourseUseCase.execute({
      courseId,
      name,
      description,
      category,
      url,
    });

    return response.json(course);
  }
}
