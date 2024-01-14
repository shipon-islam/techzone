"use server";
import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";
export const getCards = async () => {
  const cardlist = await prisma.cardList.findMany();
  return cardlist;
};
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
    revalidatePath("/products/*");
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
  revalidatePath("/products/*");
  return "added";
};

export const cardQuantityAction = async (
  name: string,
  quantity: number,
  id: string
) => {
  const count = name === "plus" ? quantity + 1 : quantity - 1;
  const cardData = await prisma.cardList.update({
    where: {
      id,
    },
    data: {
      quantity: count,
    },
  });
  revalidatePath("/card-list");
  return cardData;
};
export const cardDeleteAction = async (cardId: string) => {
  const cardData = await prisma.cardList.delete({
    where: {
      id: cardId,
    },
  });
  revalidatePath("/card-list");
  return cardData;
};
