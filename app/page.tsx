import { Card } from "@/components/card";
import { Continue } from "@/components/continue-card";
import { MessagesCard } from "@/components/messages-card";
import { validateLevel } from "@/lib/level-checker";
import Link from "next/link";

export const revalidate = 0;

export default function Home() {
  const level = validateLevel(0);

  return (
    <>
      {level > 1 ? (
        <>
          <Continue currentLevel={0} pastLevel={level} onlyInprogress={false} />
          <Link
            className="mt-5 p-3 text-center rounded-xl bg-amber-500 text-white"
            href="/reset"
          >
            重新开始
          </Link>
        </>
      ) : (
        <>
          <Card label="开始">
            欢迎新游民来到 Anji DNA 公社，你的先辈们（对，就是比你早 n
            期）给你留下了一份巨额（也许）的宝藏。只有成功解锁五个关卡才能拿到最终的实体宝藏。别担心，你可以随时大胆求助在地的小伙伴，他们都会热心的帮助你，并且安吉同乡会的先辈们也会与你同在。请开始你的探险，祝你好运!
          </Card>
          <Link
            className="mt-5 p-3 text-center rounded-xl bg-amber-500 text-white"
            href="/0"
          >
            开始
          </Link>
        </>
      )}
      <MessagesCard />
    </>
  );
}
