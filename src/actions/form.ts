"use server";

import { UserNotFound } from "@/classes/error";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const GetFormState = async () => {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFound();
  }
  const state = await prisma.form.aggregate({
    where: { userId: user.id },
    _sum: {
      visits: true,
      submissions: true,
    },
  });
  const visits = state._sum.visits || 0;
  const submissions = state._sum.submissions || 0;
  const submissionsRate = visits > 0 ? (submissions / visits) * 100 : 0;
  const bounceRate = 100 - submissionsRate;
  return {
    visits,
    submissions,
    submissionsRate,
    bounceRate,
  };
};
