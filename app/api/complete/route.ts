import { PAST_LEVEL_KEY } from "@/lib/level-checker";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const json = await request.json();
  const level: number = json.level;

  console.log("complete level", level);

  const passedLevel = Number(cookies().get(PAST_LEVEL_KEY)?.value);

  if (level > passedLevel) {
    cookies().set(PAST_LEVEL_KEY, level.toString());
  }

  return NextResponse.json({ success: true });
}
