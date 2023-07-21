import { ReactNode } from "react";

export function Card({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="">
      <label className="mx-4 text-sm opacity-60">{label}</label>
      <div className="mt-1 p-4 bg-white dark:bg-black border rounded-xl">
        {children}
      </div>
    </div>
  );
}
