import { PAST_LEVEL_KEY } from "@/lib/level-checker";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const json = await request.json();
  const message: string = json.message;
  const nickname: string = json.nickname;

  return NextResponse.json({ success: true });
}
