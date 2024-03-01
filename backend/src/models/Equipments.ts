import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Equipments", {
  fields: (t) => ({
    id: t.exposeID("id"),
    category: t.exposeStringList("category"),
    name: t.exposeString("name"),
    desc: t.exposeString("desc"),
    dimension: t.exposeIntList("dimension"),
    disabled: t.exposeBoolean("disabled"),
    cost: t.exposeInt("cost", { nullable: true }),
    rarity: t.exposeString("rarity"),
    values: t.exposeIntList("values"),
  }),
});

builder.queryField("equipments", (t) =>
  t.prismaField({
    type: ["Equipments"],
    resolve: async (query) => {
      return prisma.equipments.findMany({ ...query });
    },
  })
);

builder.queryField("oneequipment", (t) =>
  t.prismaField({
    type: ["Equipments"],
    nullable: true,
    args: {
      name: t.arg.string({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      return prisma.equipments.findMany({
        where: { name: args.name },
        ...query,
      });
    },
  })
);
