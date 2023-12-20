import Link from "next/link";
import { Card } from "./card";

const HREFS = [
  "/0",
  "/1clatter",
  "/2totora",
  "/3dainty",
  "/4wee",
  "/5fiddler",
  "/6cuckoo",
];

export function Continue({
  currentLevel,
  pastLevel,
  onlyInprogress,
}: {
  currentLevel: number;
  pastLevel: number;
  onlyInprogress: boolean;
}) {
  if (
    pastLevel === undefined ||
    Number.isNaN(pastLevel) ||
    pastLevel <= 0 ||
    currentLevel >= pastLevel
  ) {
    return <></>;
  }

  const href = HREFS[pastLevel];

  if (pastLevel >= 6) {
    if (onlyInprogress) {
      return <></>;
    }

    return (
      <div className="text-lg font-bold text-center p-10">
        🎉 你已经成功通关啦！
        <Link className="underline mx-2" href={href}>
          去留言 →
        </Link>
      </div>
    );
  }

  return (
    <Card className="bg-amber-100 dark:bg-amber-200/20 py-5" label={`继续`}>
      当前已进行到第{pastLevel}关。
      <Link className="underline mx-2" href={href}>
        下一关 →
      </Link>
    </Card>
  );
}
