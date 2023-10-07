/*
  Warnings:

  - You are about to drop the column `projectId` on the `Code` table. All the data in the column will be lost.
  - Made the column `subgroupId` on table `Code` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `projectId` to the `Subgroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Code" DROP CONSTRAINT "Code_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Code" DROP CONSTRAINT "Code_subgroupId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userId_fkey";

-- AlterTable
ALTER TABLE "Code" DROP COLUMN "projectId",
ALTER COLUMN "subgroupId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Subgroup" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subgroup" ADD CONSTRAINT "Subgroup_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Code" ADD CONSTRAINT "Code_subgroupId_fkey" FOREIGN KEY ("subgroupId") REFERENCES "Subgroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
