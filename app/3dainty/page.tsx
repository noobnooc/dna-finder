import { Card } from "@/components/card";
import { Completion } from "@/components/completion";
import { Continue } from "@/components/continue-card";
import { validateLevel } from "@/lib/level-checker";

export const revalidate = 0;

export default function Level3() {
  const level = validateLevel(3);

  return (
    <>
      <Continue currentLevel={3} pastLevel={level} />
      <Card label="恭喜">
        恭喜你解锁了第三把钥匙！酒足饭饱后，登上公社的至高点，上面写着公社精神之一“全世界有趣的人联合起来”，在二楼KTV区高歌一曲，不用担心跑调，第四把钥匙就藏在声音发出的地方（设备）。加油，你就要通关了！
      </Card>
      <Completion level={3} />
    </>
  );
}
