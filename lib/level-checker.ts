import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const PAST_LEVEL_KEY = "passed-level";

export function validateLevel(currentLevel: number): number {
  let passedLevel = Number(cookies().get(PAST_LEVEL_KEY)?.value) ?? 0;
  passedLevel = Number.isNaN(passedLevel) ? 0 : passedLevel;
  console.log("validating level", currentLevel, passedLevel);

  if (currentLevel <= 0) {
    return passedLevel ?? 0;
  }

  if (
    passedLevel === undefined ||
    Number.isNaN(passedLevel) ||
    currentLevel > passedLevel + 1
  ) {
    console.log("redirecting", !passedLevel, currentLevel > passedLevel + 1);
    redirect("/");
  }

  return passedLevel;
}
