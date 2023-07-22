import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DNA 寻宝",
  description: "DNA 寻宝",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "bg-white text-amber-900 dark:bg-neutral-900 dark:text-amber-50"
        )}
      >
        <main className="flex flex-col p-4">{children}</main>
      </body>
    </html>
  );
}
