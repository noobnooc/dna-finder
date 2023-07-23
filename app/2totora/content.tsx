"use client";

import { useState } from "react";
import Image from "next/image";
import keyImage from "../../public/key.jpg";
import image1 from "./1.jpg";

export function Content() {
  const [showingNextLevel, setShowingNextLevel] = useState(false);

  return showingNextLevel ? (
    <div>
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={image1}
        alt="图片 1"
      />
      你可以走出阶梯神殿，来到户外大棚下，欣赏漂亮的田野与邻近的水池，休憩的同时听一下先辈们的故事：随着公社的壮大，游民之间碰撞出了精彩的火花。其中有三兄弟，他们给DNA公社引进了自助酒柜。游民们可以在这里自助购买饮料酒水，我们的第三把钥匙也在苕溪三兄弟招牌旁的桌子上。
      <div className="indent-0 opacity-80 mt-5">
        💡 记住繁忙的工作之后小酌一杯也许会有答案。
      </div>
    </div>
  ) : (
    <div className="font-bold mb-5 text-xl flex flex-col">
      <div className="text-lg font-bold text-center mt-10">阶梯神殿</div>
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={keyImage}
        alt="钥匙图片"
      />
      <div className="font-bold mb-5 indent-0 text-xl text-center">
        恭喜你激活了第二把钥匙！
      </div>
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
