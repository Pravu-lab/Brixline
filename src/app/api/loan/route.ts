import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, phone, city } = await req.json();

    const submission = await prisma.loan.create({
      data: { name, phone, city },
    });

    return NextResponse.json(submission);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
