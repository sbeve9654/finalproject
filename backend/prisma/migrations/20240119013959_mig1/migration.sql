/*
  Warnings:

  - Added the required column `disabled` to the `MyEquipments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MyEquipments" ADD COLUMN     "disabled" BOOLEAN NOT NULL,
ADD COLUMN     "values" INTEGER[];
