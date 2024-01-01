"use server";
import prisma from "@/prisma/db";
export const addCardAction = async (userId: string, productId: string) => {
  const isExistCard = await prisma.cardList.findFirst({
    where: {
      productId: productId,
    },
  });
  if (isExistCard) {
    await prisma.cardList.delete({
      where: {
        id: isExistCard.id,
      },
    });
    return "removed";
  }
  await prisma.cardList.create({
    data: {
      quantity: 1,
      product: {
        connect: { id: productId },
      },
      user: {
        connect: { id: userId },
      },
    },
  });

  return "added";
};
