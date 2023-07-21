import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const PAST_LEVEL_KEY = "passed-level";

export function validateLevel(currentLevel: number) {
  const passedLevel = Number(cookies().get(PAST_LEVEL_KEY)?.value) ?? 0;
  console.log("currentLevel", currentLevel, passedLevel);

  if (!passedLevel || currentLevel > passedLevel + 1) {
    redirect("/");
  }
}
