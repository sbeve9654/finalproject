/*
  Warnings:

  - Made the column `playerId` on table `Files` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Files" ALTER COLUMN "playerId" SET NOT NULL;
