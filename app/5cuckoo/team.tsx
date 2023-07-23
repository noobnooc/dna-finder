"use client";

import { useState } from "react";
import Image from "next/image";
import photo from "./photo.png";

export function Team() {
  const [showingTeam, setShowingTeam] = useState(false);

  return showingTeam ? (
    <div>
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={photo}
        alt="团队照片"
      />
      <div className="">
        <span className="font-bold">「创造游民传说的传说」团队</span>
        （从左向右）：
        <ul className="list-disc indent-4 list-inside">
          <li>太阳照常升起（苦逼的程序员）</li>
          <li>Wendy（Carry 全场的进度 Push 员）</li>
          <li>三秋（本想躺平的策划人）</li>
          <li>小茗（中途K歌的文案）</li>
          <li>LV（强迫症爆发的创意总监）</li>
        </ul>
      </div>
    </div>
  ) : (
    <button
      className="mt-10"
      onClick={() => {
        setShowingTeam(true);
      }}
    >
      这里有一个彩蛋，快点我！🫣
    </button>
  );
}
