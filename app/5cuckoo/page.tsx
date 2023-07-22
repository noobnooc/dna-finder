import { Card } from "@/components/card";
import { Completion } from "@/components/completion";
import { validateLevel } from "@/lib/level-checker";
import { Level5PageForm } from "./form";

export const revalidate = 0;

export default function Level5() {
  validateLevel(5);

  return (
    <>
      <Card label="恭喜">
        恭喜你已不再是萌新游民，再次欢迎你加入DNA社区，留下一句你对公社的期待吧或其他想分享的任何内容！
        {/* <Level5PageForm /> */}
      </Card>
      <Card label="礼物">
        你会获得一份随机的礼物，请联系三秋，小茗或者LV在晚上八点于咖啡厅饮水机处抽取你的大奖。
      </Card>
      <Completion level={5} />
    </>
  );
}
