import { utapi } from "@/lib/utapi";
import { prisma } from "@/prisma/db";
import { Gallery } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const { image }: Gallery = await prisma.gallery.delete({
      where: {
        id: id,
      },
    });

    const dltImage = await utapi.deleteFiles(image.key);
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
