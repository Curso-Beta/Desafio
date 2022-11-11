import { prisma } from '../src/database/prismaClient';
import { faker } from '@faker-js/faker';
import { hash } from 'bcrypt';

const Category = [
  'DIREITO',
  'PERICIA_JUDICIAL',
  'DESENVOLVIMENTO_PESSOAL',
  'GESTAO_DE_PESSOAS',
  'CALCULOS',
];

async function main() {
  await prisma.user.upsert({
    where: { email: 'admin@cursobeta.com' },
    update: {},
    create: {
      email: 'admin@cursobeta.com',
      name: 'Admin Exemplo',
      password: await hash('123456', 10),
      role: 'ADMIN',
    },
  });
  await prisma.user.upsert({
    where: { email: 'client@cursobeta.com' },
    update: {},
    create: {
      email: 'client@cursobeta.com',
      name: 'Cliente Exemplo',
      password: await hash('123456', 10),
    },
  });

  for (let i = 0; i < 10; i++) {
    await prisma.course.upsert({
      where: { name: faker.name.jobTitle() },
      update: {},
      create: {
        name: faker.name.jobTitle(),
        description: faker.lorem.paragraph(),
        category: Category[(Math.random() * Category.length) | 0],
        url: faker.internet.url(),
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
