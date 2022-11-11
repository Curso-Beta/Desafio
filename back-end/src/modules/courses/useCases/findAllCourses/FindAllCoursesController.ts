import { Request, Response } from 'express';
import { FindAllCoursesUseCase } from './FindAllCoursesUseCase';

export class FindAllCoursesController {
  async handle(request: Request, response: Response) {
    const findAllCoursesUseCase = new FindAllCoursesUseCase();

    const courses = await findAllCoursesUseCase.execute();

    return response.json(courses);
  }
}
