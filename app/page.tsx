import { Continue } from "@/components/continue-card";
import { MessagesCard } from "@/components/messages-card";
import { validateLevel } from "@/lib/level-checker";
import Link from "next/link";
import finderImage from "../public/finder.jpg";
import Image from "next/image";

export const revalidate = 0;

const available = true;

export default function Home() {
  const level = validateLevel(0);

  if (!available) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center font-bold text-lg">
        <Image
          className="aspect-square rounded-full mx-10 mb-10 object-cover"
          src={finderImage}
          alt="钥匙图片"
        />
        游民传说之社区寻宝
        <div className="my-5 opacity-60">时间7月23日17：00～20：00开始寻宝</div>
        <div className="">
          参与游戏的条件是，每人准备一份自己觉得有意义的小礼物（可以是实物，也可以是给对方做一顿饭、唱一首歌…），并在礼物登记表上写上你的编号和名字。如果你能成功通过所有关卡，就可以在明晚8点于咖啡厅抽取一份连我们都不知道的神秘礼品。如果你想参与的话，就赶紧来咖啡厅登记吧！
        </div>
      </div>
    );
  }

  return (
    <>
      {level > 0 ? (
        <>
          <Continue currentLevel={0} pastLevel={level} onlyInprogress={false} />
          {/* <Link
            className="mt-5 p-3 text-center rounded-xl bg-red-500 text-white"
            href="/reset"
          >
            重新开始
          </Link> */}
        </>
      ) : (
        <>
          <div className="mt-10">
            <Image
              className="aspect-square rounded-full mx-10 mb-10 object-cover"
              src={finderImage}
              alt="钥匙图片"
            />
            欢迎新游民来到 DNA
            公社，这是一个你的先辈们创造的通关小游戏，希望你能通过这个游戏对 DNA
            进行一些探索。别担心，你可以随时大胆求助在地的小伙伴，他们都会热心的帮助你，并且安吉同乡会的先辈们也会与你同在。请开始你的探险，祝你好运!
          </div>
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
