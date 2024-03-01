-- CreateTable
CREATE TABLE "Enemylayouts" (
    "id" SERIAL NOT NULL,
    "layoutid" INTEGER NOT NULL,
    "enemies" TEXT[],

    CONSTRAINT "Enemylayouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enemies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "health" INTEGER NOT NULL,

    CONSTRAINT "Enemies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Enemylayouts_layoutid_key" ON "Enemylayouts"("layoutid");
