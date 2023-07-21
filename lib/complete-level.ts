"use client";

export async function completeLevel(level: number) {
  await fetch("/api/complete", {
    method: "POST",
    body: JSON.stringify({
      level,
    }),
  });
}
