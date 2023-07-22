"use client";

export async function leaveAMessage(message: string, nickname: string) {
  await fetch("/api/leave-a-message", {
    method: "POST",
    body: JSON.stringify({
      message,
      nickname,
    }),
  });
}
