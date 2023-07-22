import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const PAST_LEVEL_KEY = "passed-level";

export function validateLevel(currentLevel: number): number {
  const passedLevel = Number(cookies().get(PAST_LEVEL_KEY)?.value) ?? 0;
  console.log("validating level", currentLevel, passedLevel);

  if (passedLevel === undefined || currentLevel > passedLevel + 1) {
    console.log("redirecting", !passedLevel, currentLevel > passedLevel + 1);
    redirect("/");
  }

  return passedLevel;
}
