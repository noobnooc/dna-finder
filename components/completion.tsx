"use client";

import { completeLevel } from "@/lib/complete-level";
import { useEffect } from "react";

export function Completion({ level }: { level: number }) {
  useEffect(() => {
    completeLevel(level);
  }, [level]);

  return <></>;
}
