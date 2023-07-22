"use client";

export async function reset() {
  await fetch("/api/reset", {
    method: "POST",
  });
}
