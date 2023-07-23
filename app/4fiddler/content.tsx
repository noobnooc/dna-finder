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
      作为数字游民，拥有一个强健的体魄是工作和娱乐的根本，所以你的最后一道神秘关卡就在DNA奥体中心（篮球场）。神秘石洞是独处的好地方，就是蚊子有点多，最后一把钥匙就在这里。
    </div>
  ) : (
    <div className="font-bold mb-5 text-xl flex flex-col">
      <div className="text-lg font-bold text-center mt-10">小巨蛋</div>
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={keyImage}
        alt="钥匙图片"
      />
      <div className="font-bold mb-5 indent-0 text-xl text-center">
        恭喜你激活了第四把钥匙！
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
