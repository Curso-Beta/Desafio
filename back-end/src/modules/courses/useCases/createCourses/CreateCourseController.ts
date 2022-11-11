import { Request, Response } from 'express';
import { CreateCourseUseCase } from './CreateCourseUseCase';

export class CreateCourseController {
  async handle(request: Request, response: Response) {
    const { name, description, category, url } = request.body;

    const createCourseUseCase = new CreateCourseUseCase();
    const result = await createCourseUseCase.execute({
      name,
      description,
      category,
      url,
    });

    return response.json(result);
  }
}
