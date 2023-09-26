/*
  Warnings:

  - You are about to drop the column `line` on the `Code` table. All the data in the column will be lost.
  - Added the required column `code` to the `Code` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Code" DROP COLUMN "line",
ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" DROP NOT NULL;
