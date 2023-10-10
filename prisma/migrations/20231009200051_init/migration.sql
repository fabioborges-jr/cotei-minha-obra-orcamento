/*
  Warnings:

  - You are about to drop the column `subgroupId` on the `Code` table. All the data in the column will be lost.
  - You are about to drop the `Subgroup` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `projectId` to the `Code` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Code" DROP CONSTRAINT "Code_subgroupId_fkey";

-- DropForeignKey
ALTER TABLE "Subgroup" DROP CONSTRAINT "Subgroup_projectId_fkey";

-- AlterTable
ALTER TABLE "Code" DROP COLUMN "subgroupId",
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Subgroup";

-- CreateTable
CREATE TABLE "ReferenceCode" (
    "id" SERIAL NOT NULL,
    "font" TEXT NOT NULL,
    "codeReference" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "dateReference" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReferenceCode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Code" ADD CONSTRAINT "Code_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
