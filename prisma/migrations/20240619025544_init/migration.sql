/*
  Warnings:

  - The primary key for the `Pet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `Pet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Name]` on the table `Pet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_pkey",
DROP COLUMN "Id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Pet_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pet_Name_key" ON "Pet"("Name");
