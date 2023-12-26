import { prisma } from "@/prisma/db";
import bcrypt from "bcrypt";
import { writeFile } from "fs/promises";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await prisma.user.findMany();
  return NextResponse.json({ status: "successfull", data: user });
}
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  //get find from formdata
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const file: File = formData.get("file") as unknown as File;
  if (!file) {
    throw new Error("something went wrong");
  }
  //get host and protocol from request header
  const headersList = headers();
  const host = headersList.get("x-forwarded-host");
  const protocol = headersList.get("x-forwarded-proto");
  const existUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (existUser)
    return NextResponse.json({
      status: "fail",
      message: "user already exist",
    });

  //photo makes buffer and store in local
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${new Date().getTime().toString()}_${file.name}`;
  const path = `./public/${fileName}`;
  await writeFile(path, buffer);
  const photo_url = `${protocol}://${host}/${fileName}`;
  const hashPassword = await bcrypt.hash(password, 10);
  const userInfo = {
    firstname,
    lastname,
    email,
    password: hashPassword,
    avatar: photo_url,
  };
  const userData = await prisma.user.create({
    data: userInfo,
  });

  return NextResponse.json({
    status: "successfull",
    data: userData,
  });
}
