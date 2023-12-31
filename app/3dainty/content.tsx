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
        src={image1}
        alt="图片 1"
      />
      美酒需要配佳肴，在 DNA
      的厨房和餐厅里，你可以自己动手做任何想吃的东西。吃完便能在健身角里消耗刚摄入的卡路里，简直是安排得明明白白！下一步，你需要去到餐厅，在第
      3/4 个门处藏着通往下一处的钥匙。
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={image2}
        alt="图片 2"
      />
    </div>
  ) : (
    <div className="font-bold mb-5 text-xl flex flex-col">
      <div className="text-lg font-bold text-center mt-10">夜未央酒棚</div>
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={keyImage}
        alt="钥匙图片"
      />
      <div className="font-bold mb-5 indent-0 text-xl text-center">
        恭喜你激活了第三把钥匙！
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
