import { Request, Response } from 'express';
import { GetUserAuthenticatedUseCase } from './GetUserAuthenticatedUseCase';

export class GetUserAuthenticatedController {
  async handle(request: Request, response: Response) {
    const userId = request.userId;

    const getUserAuthenticatedUseCase = new GetUserAuthenticatedUseCase();
    const user = await getUserAuthenticatedUseCase.execute({
      userId,
    });

    return response.json(user);
  }
}
