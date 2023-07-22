import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function Card({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="">
      <label className="mt-4 mb-1 text-sm opacity-60 block">{label}</label>
      <div className={twMerge("mt-4 rounded-xl indent-8", className)}>
        {children}
      </div>
    </div>
  );
}
