/*
  Warnings:

  - You are about to drop the column `sprite` on the `Equipments` table. All the data in the column will be lost.
  - The `values` column on the `Equipments` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Equipments" DROP COLUMN "sprite",
DROP COLUMN "values",
ADD COLUMN     "values" INTEGER[];
