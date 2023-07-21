"use client";

import { Card } from "@/components/card";
import { DATA } from "@/data/data";
import { completeLevel } from "@/lib/complete-level";
import { useState } from "react";

export default function Level0Page() {
  const [checked, setChecked] = useState(false);

  return checked ? (
    <NextLevelPrompt />
  ) : (
    <CheckingView complete={() => setChecked(true)} />
  );
}

export function NextLevelPrompt() {
  return (
    <>
      <Card label="开始下一步">
        公社精神之一是活在当下，绝不内卷。因此你探索的第一站是咖啡厅。这是DNA先辈给你留的第一片宝藏碎片/灵魂碎片（插入图片）
        找到此碎片中的圣物，激活下一关的钥匙（二维码）。记住当你躺平用一种轻松的姿态来观察这个世界，往往能有新的发现。
      </Card>
    </>
  );
}

export function CheckingView({ complete }: { complete(): void }) {
  const [password, setPassword] = useState("");

  return (
    <>
      <Card label="开始的开始">
        作为公社里的数字游民，你的第一生存技能是获得WIFI密码 请输入 DNA 的 WIFI
        密码以解锁下一关：
      </Card>
      <Card label="Wi-Fi 密码">
        <div className="flex flex-col">
          <input
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <button
            className="mt-5 p-2 text-center rounded-xl bg-blue-500 text-white"
            onClick={() => {
              if (password !== DATA.wifiPassword) {
                alert("密码错误");
                return;
              }

              completeLevel(1);
              complete();
            }}
          >
            好了
          </button>
        </div>
      </Card>
    </>
  );
}
