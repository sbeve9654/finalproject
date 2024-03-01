import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Enemies", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    health: t.exposeInt("health"),
  }),
});

builder.queryField("oneenemy", (t) =>
  t.prismaField({
    type: ["Enemies"],
    nullable: true,
    args: {
      name: t.arg.string({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      return prisma.enemies.findMany({ where: { name: args.name }, ...query });
    },
  })
);
