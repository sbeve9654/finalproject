import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.equipments.deleteMany({});
  await prisma.enemies.deleteMany({});
  await prisma.enemylayouts.deleteMany({});
  await prisma.user.create({
    data: {
      name: "Mark",
      password: "1234",
      files: {
        create: [
          {
            level: 1,
            mapxpos: 1,
            mapypos: 1,
            health: 40,
            maxhealth: 45,
            map: 1,
            backpack:
              '{"0":[0,0,0,0,0,0,0],"1":[0,0,1,1,1,0,0],"2":[0,0,1,1,1,0,0],"3":[0,0,1,1,1,0,0],"4":[0,0,0,0,0,0,0]}',
            equipment: {
              create: [
                {
                  name: "wooden sword",
                  disabled: false,
                  itemxpos: 4,
                  itemypos: 1,
                  rotation: 2,
                },
                {
                  name: "wooden shield",
                  disabled: false,
                  itemxpos: 2,
                  itemypos: 2,
                  rotation: 0,
                },
              ],
            },
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "xdd",
      password: "xdd",
      files: {
        create: [
          {
            level: 3,
            mapxpos: 3,
            mapypos: 4,
            health: 30,
            maxhealth: 40,
            map: 3,
            backpack:
              '{"0":[0,0,1,0,0,0,0],"1":[0,0,1,1,1,0,0],"2":[0,0,1,1,1,0,0],"3":[0,0,1,1,1,0,0],"4":[0,0,0,0,0,0,0]}',
            equipment: {
              create: [
                {
                  name: "wooden sword",
                  disabled: false,
                  itemxpos: 4,
                  itemypos: 1,
                  rotation: 2,
                },
                {
                  name: "wooden shield",
                  disabled: false,
                  itemxpos: 2,
                  itemypos: 2,
                  rotation: 0,
                },
                {
                  name: "sapphire",
                  disabled: false,
                  itemxpos: 3,
                  itemypos: 1,
                  rotation: 0,
                },
              ],
            },
          },
        ],
      },
    },
  });
  await prisma.equipments.create({
    data: {
      category: ["melee"],
      name: "wooden sword",
      desc: "Just a normal sword",
      dimension: [1, 3],
      disabled: false,
      cost: 1,
      rarity: "common",
      values: [7],
    },
  });
  await prisma.equipments.create({
    data: {
      category: ["shield"],
      name: "wooden shield",
      desc: "Just a normal shield",
      dimension: [2, 2],
      disabled: false,
      cost: 1,
      rarity: "common",
      values: [8],
    },
  });
  await prisma.equipments.create({
    data: {
      category: ["accessory"],
      name: "sapphire",
      desc: "Adjacent weapons gain +1 damage",
      dimension: [1, 1],
      disabled: false,
      rarity: "common",
      values: [1],
    },
  });
  await prisma.enemies.createMany({
    data: [
      { name: "snail", health: 20 },
      { name: "crab", health: 40 },
      { name: "rat", health: 30 },
    ],
  });
  await prisma.enemylayouts.createMany({
    data: [
      { layoutid: 0, enemies: [] },
      { layoutid: 1, enemies: ["snail", "snail"] },
      { layoutid: 2, enemies: ["crab", "snail"] },
      { layoutid: 3, enemies: ["rat"] },
    ],
  });
}
main();
