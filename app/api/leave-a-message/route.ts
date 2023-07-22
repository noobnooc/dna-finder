import { redis } from "@/lib/upstash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const json = await request.json();
  const message: string = json.message;
  const nickname: string = json.nickname;

  let messages = await redis.get(redis.MESSAGES);

  if (Array.isArray(messages)) {
    messages.push({
      message,
      nickname,
    });
  } else {
    messages = [
      {
        message,
        nickname,
      },
    ];
  }

  await redis.set(redis.MESSAGES, messages);

  cookies().set("message-leaved", "true");

  redirect("/");
}
