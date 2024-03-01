import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("MyEquipments", {
  fields: (t) => ({
    id: t.exposeID("id"),
    fileid: t.exposeInt("fileid"),
    name: t.exposeString("name"),
    disabled: t.exposeBoolean("disabled"),
    itemxpos: t.exposeFloat("itemxpos"),
    itemypos: t.exposeFloat("itemypos"),
    rotation: t.exposeInt("rotation"),
    values: t.exposeIntList("values"),
  }),
});

builder.queryField("myequipments", (t) =>
  t.prismaField({
    type: ["MyEquipments"],
    resolve: async (query) => {
      return prisma.myEquipments.findMany({ ...query });
    },
  })
);

builder.mutationField("updatemyequipments", (t) =>
  t.prismaField({
    type: "MyEquipments",
    args: {
      id: t.arg.int({ required: true }),
      itemxpos: t.arg.int({ required: true }),
      itemypos: t.arg.int({ required: true }),
      rotation: t.arg.int({ required: true }),
    },
    resolve: async (_query, _root, args) => {
      return prisma.myEquipments.update({
        where: {
          id: args.id,
        },
        data: {
          itemxpos: args.itemxpos,
          itemypos: args.itemypos,
          rotation: args.rotation,
        },
      });
    },
  })
);
