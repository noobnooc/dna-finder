import { Card } from "@/components/card";
import { Completion } from "@/components/completion";
import { Continue } from "@/components/continue-card";
import { validateLevel } from "@/lib/level-checker";
import Image from "next/image";
import keyImage from "../../public/key.jpg";
import { Content } from "./content";

export const revalidate = 0;

export default function Level3() {
  const level = validateLevel(3);

  return (
    <>
      <Continue currentLevel={3} pastLevel={level} onlyInprogress />
      <Content />
      <Completion level={3} />
    </>
  );
}
