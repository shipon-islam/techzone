"use server";

import prisma from "@/prisma/db";

export const fetchUser = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data");
  }
};
export const todoAction = async (formData: { get: (arg0: string) => any }) => {
  const todo = formData.get("todo");
  const todos = await prisma.todos.create({
    data: {
      name: todo,
    },
  });
};
