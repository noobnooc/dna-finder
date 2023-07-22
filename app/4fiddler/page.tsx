import { Card } from "@/components/card";
import { Completion } from "@/components/completion";
import { validateLevel } from "@/lib/level-checker";

export const dynamic = "force-dynamic";

export default function Level4() {
  validateLevel(4);

  return (
    <>
      <Card label="恭喜">
        恭喜你来到了最后一关！作为数字游民，拥有一个强健的体魄是工作和娱乐的根本，所以你的最后一道神秘关卡就在DNA奥体中心（篮球场）。神秘石洞是独处的好地方，就是蚊子有点多，最后一把钥匙就在这里。
      </Card>
      <Completion level={4} />
    </>
  );
}
