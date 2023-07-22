import { Card } from "@/components/card";
import { Completion } from "@/components/completion";
import { Continue } from "@/components/continue-card";
import { validateLevel } from "@/lib/level-checker";
import Image from "next/image";
import keyImage from "../../public/key.jpg";

import image1 from "./1.jpg";

export const revalidate = 0;

export default function Level1() {
  const level = validateLevel(1);

  return (
    <>
      <Continue currentLevel={1} pastLevel={level} onlyInprogress />
      <Card label="恭喜">
        恭喜你激活了第一把钥匙！
        <Image
          className="aspect-square rounded-full p-10 object-cover"
          src={keyImage}
          alt="钥匙图片"
        />
        在这里，你可以弹吉他、电子琴，也可以打桌球，做咖啡，除了这些寻常活动，还有可能出现各种快闪和新奇活动。参与这些活动的秘诀就是大胆出击！
        <Image
          className="aspect-square rounded-full p-10 object-cover"
          src={image1}
          alt="图片 1"
        />
      </Card>
      <Card label="下一关">
        下面你需要解锁你的生存技能二：找到生命之泉和神秘零食。水源和共享食物都可以在阶梯神殿找到，第二把钥匙就隐藏在生命之泉。大胆享用这里的食物和水。
      </Card>
      <Completion level={1} />
    </>
  );
}
