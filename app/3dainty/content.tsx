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
      酒足饭饱后，抬头便能看到公社的至高点上写着 “全世界有趣的人联合起来”
      ，或许有一股神秘的力量吸引你去二楼KTV区高歌一曲。有趣才是关键，不用担心跑调。第四把钥匙就藏在声音发出的地方（设备）。加油，你就要通关了！
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
