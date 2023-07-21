"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Number(localStorage.getItem("count")) ?? 0);
  }, []);

  const tickCounter = useCallback(() => {
    const newCount = count + 1;

    setCount(newCount);
    localStorage.setItem("count", newCount.toString());
  }, [count]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {count}

      <button onClick={tickCounter}>Click Me</button>
    </main>
  );
}
