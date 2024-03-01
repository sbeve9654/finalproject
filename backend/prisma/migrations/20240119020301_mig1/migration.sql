/*
  Warnings:

  - The `dimension` column on the `Equipments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `equipment` on the `MyEquipments` table. All the data in the column will be lost.
  - Added the required column `name` to the `MyEquipments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Equipments" DROP COLUMN "dimension",
ADD COLUMN     "dimension" INTEGER[];

-- AlterTable
ALTER TABLE "MyEquipments" DROP COLUMN "equipment",
ADD COLUMN     "name" TEXT NOT NULL;
