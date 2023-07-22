import { PAST_LEVEL_KEY } from "@/lib/level-checker";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  cookies().set(PAST_LEVEL_KEY, "0".toString());

  redirect("/0");
}
