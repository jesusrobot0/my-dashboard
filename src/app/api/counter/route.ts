export const dynamic = "force-dynamic"; // defaults to auto
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    count: 100,
  });
}
