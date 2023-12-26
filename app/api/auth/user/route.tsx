import { prisma } from "@/prisma/db";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await prisma.user.findMany();
  return NextResponse.json({ success: true, data: user });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  const existUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (existUser)
    return NextResponse.json({
      success: false,
      error: "user already exist",
    });
  const hashPassword = await bcrypt.hash(body.password, 10);
  const userData = await prisma.user.create({
    data: { ...body, password: hashPassword },
  });

  return NextResponse.json({
    success: true,
    data: userData,
  });
}
