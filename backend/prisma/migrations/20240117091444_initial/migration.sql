-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('common', 'uncommon', 'rare', 'legendary');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Files" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "level" INTEGER NOT NULL,
    "mapxpos" INTEGER NOT NULL,
    "mapypos" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,
    "maxhealth" INTEGER NOT NULL,
    "map" INTEGER NOT NULL,
    "backpack" TEXT NOT NULL,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyEquipments" (
    "id" SERIAL NOT NULL,
    "fileid" INTEGER NOT NULL,
    "equipment" TEXT[],
    "itemxpos" INTEGER NOT NULL,
    "itemypos" INTEGER NOT NULL,
    "rotation" INTEGER NOT NULL,

    CONSTRAINT "MyEquipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipments" (
    "id" SERIAL NOT NULL,
    "category" TEXT[],
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "dimension" TEXT[],
    "disabled" BOOLEAN NOT NULL,
    "cost" INTEGER,
    "sprite" TEXT NOT NULL,
    "rarity" "Rarity" NOT NULL,
    "values" TEXT[],

    CONSTRAINT "Equipments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Equipments_name_key" ON "Equipments"("name");

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyEquipments" ADD CONSTRAINT "MyEquipments_fileid_fkey" FOREIGN KEY ("fileid") REFERENCES "Files"("id") ON DELETE CASCADE ON UPDATE CASCADE;
