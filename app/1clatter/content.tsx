"use client";

import { useState } from "react";
import Image from "next/image";
import keyImage from "../../public/key.jpg";
import image1 from "./1.jpg";
import image2 from "./2.jpg";

export function Content() {
  const [showingNextLevel, setShowingNextLevel] = useState(false);

  return showingNextLevel ? (
    <div>
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={image2}
        alt="钥匙图片"
      />
      下面你需要解锁你的生存技能二：找到生命之泉和神秘零食。水源和共享食物都可以在阶梯神殿找到，第二把钥匙就隐藏在生命之泉。请大胆享用这里的食物和水吧！
    </div>
  ) : (
    <div className="flex flex-col">
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={keyImage}
        alt="钥匙图片"
      />
      <div className="font-bold mb-5 indent-0 text-xl text-center">
        恭喜你激活了第一把钥匙！
      </div>
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={image1}
        alt="图片 1"
      />
      在这里，你可以弹吉他、电子琴，也可以打桌球，做咖啡，除了这些寻常活动，还有可能出现各种快闪和新奇活动。参与这些活动的秘诀就是大胆出击！
      <button
        className="block mt-10 mb-20 p-2 text-center rounded-xl bg-amber-500 text-white"
        onClick={() => {
          setShowingNextLevel(true);
        }}
      >
        继续下一关
      </button>
    </div>
  );
}
