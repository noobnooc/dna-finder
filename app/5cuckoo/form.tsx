"use client";

import { useState } from "react";

export function Level5PageForm() {
  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState("");

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
        className="mt-5 p-2 text-center rounded-xl bg-amber-500 text-white"
        onClick={() => {}}
      >
        好了
      </button>
    </div>
  );
}
