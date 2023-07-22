import { Card } from "@/components/card";
import { Completion } from "@/components/completion";
import { Continue } from "@/components/continue-card";
import { validateLevel } from "@/lib/level-checker";
import Image from "next/image";
import keyImage from "../../public/key.jpg";

export const revalidate = 0;

export default function Level2() {
  const level = validateLevel(2);

  return (
    <>
      <Continue currentLevel={2} pastLevel={level} onlyInprogress />
      <div className="font-bold mb-5 text-xl flex flex-col items-center">
        <Image
          className="aspect-square rounded-full p-10 object-cover"
          src={keyImage}
          alt="钥匙图片"
        />
        恭喜你解锁了第二把钥匙！
      </div>
      <Card label="下一关">
        你可以走出阶梯神殿，来到户外大棚下，欣赏漂亮的田野与邻近的水池，休憩的同时听一下先辈们的故事：随着公社的壮大，游民之间碰撞出了精彩的火花。其中有三兄弟，他们给DNA公社引进了自助酒柜。游民们可以在这里自助购买饮料酒水，我们的第三把钥匙也在苕溪三兄弟招牌旁的桌子上，它被分成了三份碎片藏匿在此处。记住繁忙的工作之后小酌一杯也许会有答案。
      </Card>
      <Completion level={2} />
    </>
  );
}
