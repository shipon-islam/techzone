import { prisma } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const todos = await prisma.todos.delete({
      where: {
        id: id,
      },
    });

    if (!todos)
      return NextResponse.json({
        success: false,
        error: "todo not deleted",
      });
    return NextResponse.json({
      success: true,
      data: "todo deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      error: "something went wrong",
      success: false,
    });
  }
}
