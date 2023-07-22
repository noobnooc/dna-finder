import { Card } from "@/components/card";
import { Completion } from "@/components/completion";
import { Continue } from "@/components/continue-card";
import { completeLevel } from "@/lib/complete-level";
import { validateLevel } from "@/lib/level-checker";
import { useEffect } from "react";

export const dynamic = "force-dynamic";

export default function Level1() {
  const level = validateLevel(1);

  return (
    <>
      <Continue currentLevel={1} pastLevel={level} />
      <Card label="恭喜">
        恭喜你激活了第一把钥匙！下面你需要解锁（请向DNA公众号AI提问）你的生存技能二：找到生命之泉和神秘零食。水源和共享食物都可以在阶梯神殿找到，第二把钥匙就隐藏在生命之泉。大胆享用这里的食物和水。
      </Card>
      <Completion level={1} />
    </>
  );
}
