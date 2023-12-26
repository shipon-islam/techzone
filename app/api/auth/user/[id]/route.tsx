import { utapi } from "@/lib/utapi";
import { prisma } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    const splitUrl = deletedUser.avatar.split("/");
    const utKey = splitUrl[splitUrl.length - 1];
    const dltImage = await utapi.deleteFiles(utKey);
    if (!dltImage)
      return NextResponse.json({
        success: false,
        error: "uploadthing can't delete",
      });
    return NextResponse.json({
      success: true,
      data: "user deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      error: "something went wrong",
      success: false,
    });
  }
}
