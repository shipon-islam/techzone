import prisma from "@/prisma/db";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  body.forEach(async (img: any) => {
    const images = await prisma.gallery.create({
      data: { image: img },
    });
  });
  return Response.json({ success: true });
}
export async function GET(req: NextRequest) {
  const images = await prisma.gallery.findMany();
  return Response.json({ succes: true, data: images });
}
