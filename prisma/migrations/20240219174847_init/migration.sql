/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Jeu" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "dateSortie" DATE NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Jeu_pkey" PRIMARY KEY ("id")
);
