"use client";

import { leaveAMessage } from "@/lib/leave-a-message";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Level5PageForm() {
  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState("");
  const [committing, setCommitting] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <textarea
        className="mt-1 px-4 py-2 bg-white dark:bg-black border rounded-xl"
        placeholder="在这里留下想说的话"
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
      />
      <input
        className="mt-1 px-4 py-2 bg-white dark:bg-black border rounded-xl"
        placeholder="你的昵称（可选）"
        value={nickname}
        onChange={(event) => setNickname(event.currentTarget.value)}
      />
      <button
        className="mt-5 p-2 text-center rounded-xl disabled:bg-gray-700 bg-amber-500 text-white"
        disabled={committing}
        onClick={async () => {
          setCommitting(true);
          await leaveAMessage(message, nickname);
          alert("留言成功啦！");
          router.push("/");
        }}
      >
        {committing ? "正在提交" : "好啦！"}
      </button>
    </div>
  );
}
