import { Card } from "@/components/card";
import { Completion } from "@/components/completion";
import { Continue } from "@/components/continue-card";
import { validateLevel } from "@/lib/level-checker";
import Image from "next/image";
import keyImage from "../../public/key.jpg";
import { Content } from "./content";

export const revalidate = 0;

export default function Level2() {
  const level = validateLevel(2);

  return (
    <>
      <Continue currentLevel={2} pastLevel={level} onlyInprogress />
      <Content />
      <Completion level={2} />
    </>
  );
}
