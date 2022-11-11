import { prisma } from '../../../../database/prismaClient';

interface IGetUserAuthenticatedUseCase {
  userId: string;
}

export class GetUserAuthenticatedUseCase {
  async execute({ userId }: IGetUserAuthenticatedUseCase) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }
}
