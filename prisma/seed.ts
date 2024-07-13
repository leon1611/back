import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Pet 1
  const pet1 = await prisma.pet.upsert({
    where: {Name: 'Buddy' }, // Asegúrate de usar un id único o existente
    update: {},
    create: {
      Name: 'Buddy',
      Species: 'Dog',
      Breed: 'Golden Retriever',
      Age: 3,
      Owner: 'John Doe',
      hireDate: new Date('2021-05-20'),
      status: 'Healthy',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Seed Pet 2
  const pet2 = await prisma.pet.upsert({
    where: { Name: 'Whiskers' }, // Asegúrate de usar un id único o existente
    update: {},
    create: {
      Name: 'Whiskers',
      Species: 'Cat',
      Breed: 'Siamese',
      Age: 2,
      Owner: 'Jane Smith',
      hireDate: new Date('2022-08-15'),
      status: 'Healthy',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  console.log({ pet1, pet2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
