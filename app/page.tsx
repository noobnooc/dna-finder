"use client";

import { Card } from "@/components/card";
import { completeLevel } from "@/lib/complete-level";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Card label="开始">
        欢迎新游民来到AnjiDNA公社，你的先辈们（对，就是比你早n期）给你留下了一份巨额（也许）的宝藏。只有成功解锁五个关卡才能拿到最终的实体宝藏。别担心，你可以随时大胆求助在地的小伙伴，他们都会热心的帮助你，并且安吉同乡会的先辈们也会与你同在。请开始你的探险，祝你好运!
      </Card>
      <Link
        className="mt-5 p-3 text-center rounded-xl bg-blue-500 text-white"
        href="/0"
      >
        开始
      </Link>
    </>
  );
}
