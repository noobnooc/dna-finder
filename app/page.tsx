import { Card } from "@/components/card";
import { Continue } from "@/components/continue-card";
import { MessagesCard } from "@/components/messages-card";
import { validateLevel } from "@/lib/level-checker";
import Link from "next/link";
import finderImage from "../public/finder.jpg";
import Image from "next/image";

export const revalidate = 0;

const available = false;

export default function Home() {
  const level = validateLevel(0);

  if (!available) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center font-bold text-lg">
        <Image
          className="aspect-square rounded-full p-10 object-cover"
          src={finderImage}
          alt="钥匙图片"
        />
        游民传说之社区寻宝
        <div className="my-5 opacity-60">时间6月23日17：00～20：00开始寻宝</div>
        <div className="">
          首次内测15人～参与游戏的条件是，每人准备一份自己觉得有意义的小礼物（可以是实物也可以是给对方做一顿饭、唱一首歌…），并在礼物登记表上写上你的编号和名字。如果你能成功通过所以关卡，就可以在明晚8点于咖啡厅抽取一份连我们都不知道的神秘礼品。如果你想参与的话，就赶紧来咖啡厅登记吧！
        </div>
      </div>
    );
  }

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
