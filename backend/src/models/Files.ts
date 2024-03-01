import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Files", {
  fields: (t) => ({
    id: t.exposeID("id"),
    playerId: t.exposeInt("playerId"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("createdAt", {
      type: "Date",
    }),
    level: t.exposeInt("level"),
    mapxpos: t.exposeInt("mapxpos"),
    mapypos: t.exposeInt("mapypos"),
    health: t.exposeInt("health"),
    maxhealth: t.exposeInt("maxhealth"),
    map: t.exposeInt("map"),
    backpack: t.exposeString("backpack"),
    equipment: t.relation("equipment"),
  }),
});

builder.queryField("files", (t) =>
  t.prismaField({
    type: ["Files"],
    resolve: async (query) => {
      return prisma.files.findMany({ ...query });
    },
  })
);

builder.queryField("onefile", (t) =>
  t.prismaField({
    type: ["Files"],
    nullable: true,
    args: {
      filenum: t.arg.int({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      return prisma.files.findMany({ where: { id: args.filenum }, ...query });
    },
  })
);

builder.mutationField("createOneFile", (t) =>
  t.prismaField({
    type: "Files",
    args: {
      playerId: t.arg.int({ required: true }),
    },
    resolve: async (_query, _root, args) => {
      return prisma.files.create({
        data: {
          playerId: args.playerId,
          level: 1,
          mapxpos: 0,
          mapypos: 0,
          health: 40,
          maxhealth: 40,
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
      });
    },
  })
);

builder.mutationField("updatefile", (t) =>
  t.prismaField({
    type: "Files",
    args: {
      id: t.arg.int({ required: true }),
      level: t.arg.int({ required: true }),
      health: t.arg.int({ required: true }),
    },
    resolve: async (_query, _root, args) => {
      return prisma.files.update({
        where: {
          id: args.id,
        },
        data: {
          level: args.health,
          health: args.health,
        },
      });
    },
  })
);
