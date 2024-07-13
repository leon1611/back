-- CreateTable
CREATE TABLE "Pet" (
    "Id" UUID NOT NULL,
    "Name" TEXT NOT NULL,
    "Species" TEXT NOT NULL,
    "Breed" TEXT,
    "Age" INTEGER NOT NULL,
    "Owner" TEXT,
    "hireDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("Id")
);
