import prisma from "@/prisma/db";
import { Todos } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET() {
  const todos: Todos[] = await prisma.todos.findMany();
  return Response.json({ success: true, data: todos });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  const todos = await prisma.todos.create({
    data: {
      name: body.todo,
    },
  });
  return Response.json({ success: true, data: todos });
}
