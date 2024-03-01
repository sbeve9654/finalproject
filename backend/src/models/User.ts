import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    password: t.exposeString("password"),
    files: t.relation("files"),
  }),
});

builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: async (query) => {
      return prisma.user.findMany({ ...query });
    },
  })
);

builder.queryField("oneuser", (t) =>
  t.prismaField({
    type: ["User"],
    nullable: true,
    args: {
      name: t.arg.string({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      return prisma.user.findMany({ where: { name: args.name }, ...query });
    },
  })
);

builder.mutationField("createOneUser", (t) =>
  t.prismaField({
    type: "User",
    args: {
      name: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
    },
    resolve: async (_query, _root, args) => {
      return prisma.user.create({
        data: {
          name: args.name,
          password: args.password,
        },
      });
    },
  })
);
