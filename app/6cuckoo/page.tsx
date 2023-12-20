import { Completion } from "@/components/completion";
import { validateLevel } from "@/lib/level-checker";
import { Level5PageForm } from "./form";
import { MessagesCard } from "@/components/messages-card";
import { cookies } from "next/headers";
import Image from "next/image";
import cupImage from "../../public/cup.jpg";
import photo from "./photo.png";
import { Team } from "./team";

export const revalidate = 0;

export default function Level5() {
  validateLevel(6);

  const messageLeaved = Boolean(cookies().get("message-leaved"));

  return (
    <>
      <div className="text-lg font-bold text-center mt-10">奥体中心</div>
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={cupImage}
        alt="奖杯图片"
      />
      <div className="font-bold mb-5 indent-0 text-xl text-center">
        恭喜你已通关！
      </div>
      {messageLeaved ? undefined : (
        <div>
          <div className="mb-5">
            恭喜你已不再是萌新游民，再次欢迎你加入DNA社区，留下一句你对公社的期待吧或其他想分享的任何内容！
          </div>
          <Level5PageForm />
        </div>
      )}
      {/* <div className="mt-5">
        🎉
        你会获得一份随机的礼物，请在咖啡厅抽奖箱处抽取接龙号码，凭抽到的号码向对应接龙号码的玩家自助索取你的神秘大奖。
      </div> */}
      <Team />
      <MessagesCard />
      <Completion level={6} />
    </>
  );
}
