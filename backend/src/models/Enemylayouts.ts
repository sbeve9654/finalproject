import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Enemylayouts", {
  fields: (t) => ({
    id: t.exposeID("id"),
    layoutid: t.exposeInt("layoutid"),
    enemies: t.exposeStringList("enemies"),
  }),
});

builder.queryField("oneenemylayout", (t) =>
  t.prismaField({
    type: ["Enemylayouts"],
    nullable: true,
    args: {
      layoutid: t.arg.int({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      return prisma.enemylayouts.findMany({
        where: { layoutid: args.layoutid },
        ...query,
      });
    },
  })
);
