import Image from "next/image";
import dogImage from "./dog.png";
import Link from "next/link";

export default function FakePage() {
  return (
    <div className="flex flex-col">
      <Image
        className="aspect-square rounded-full p-10 object-cover"
        src={dogImage}
        alt="狗狗照片"
      />
      <div className="text-2xl mb-4 font-bold text-center mt-10 text-red-500">
        ⚠️ 很遗憾！
      </div>
      <div className="font-bold text-lg text-center">
        这是一个假的碎片，你离真相已经很接近了，加油！就在附近！
      </div>
      <Link className="mt-20 opacity-60 text-center underline" href="/">
        这是什么？
      </Link>
    </div>
  );
}
