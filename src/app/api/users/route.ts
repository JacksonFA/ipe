import { NextResponse } from "next/server";
import { db } from "@/database/db";

type User = {
  name: string
  email: string
}

export async function GET() {
  await db.connect()
  const { rows } = await db.sql<User>`SELECT name, email FROM users`
  await db.end()
  return NextResponse.json(
    { message: 'Users list.', data: rows },
    { status: 200 }
  )
}
