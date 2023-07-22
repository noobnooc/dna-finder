import { Card } from "@/components/card";
import { Completion } from "@/components/completion";
import { validateLevel } from "@/lib/level-checker";
import { Level5PageForm } from "./form";
import { MessagesCard } from "@/components/messages-card";
import { cookies } from "next/headers";
import Image from "next/image";
import cupImage from "../../public/cup.jpg";

export const revalidate = 0;

export default function Level5() {
  validateLevel(5);

  const messageLeaved = Boolean(cookies().get("message-leaved"));

  return (
    <>
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={cupImage}
        alt="奖杯图片"
      />
      {messageLeaved ? undefined : (
        <div>
          <div className="mb-5">
            恭喜你已不再是萌新游民，再次欢迎你加入DNA社区，留下一句你对公社的期待吧或其他想分享的任何内容！
          </div>
          <Level5PageForm />
        </div>
      )}
      <div className="mt-5">
        🎉
        你会获得一份随机的礼物，请联系三秋，小茗或者LV在晚上八点于咖啡厅饮水机处抽取你的大奖。
      </div>
      <MessagesCard />
      <Completion level={5} />
    </>
  );
}
