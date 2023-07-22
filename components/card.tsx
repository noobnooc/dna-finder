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
      <label className="mx-4 mt-4 mb-1 text-sm opacity-60 block">{label}</label>
      <div className="mt-1 p-4 bg-white dark:bg-black border rounded-xl">
        {children}
      </div>
    </div>
  );
}
