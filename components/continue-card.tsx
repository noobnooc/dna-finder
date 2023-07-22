import Link from "next/link";
import { Card } from "./card";

const HREFS = ["/0", "/1clatter", "/2totora", "/3dainty", "/4fiddler"];

export function Continue({
  currentLevel,
  pastLevel,
  onlyInprogress,
}: {
  currentLevel: number;
  pastLevel: number;
  onlyInprogress: boolean;
}) {
  console.log("hello ", pastLevel);
  if (
    pastLevel === undefined ||
    Number.isNaN(pastLevel) ||
    pastLevel <= 0 ||
    currentLevel >= pastLevel
  ) {
    return <></>;
  }

  if (pastLevel >= 5) {
    if (onlyInprogress) {
      return <></>;
    }

    return (
      <div className="text-lg font-bold text-center p-10">
        🎉 你已经成功通关啦！
      </div>
    );
  }

  const href = HREFS[pastLevel];

  return (
    <Card className="bg-amber-100 dark:bg-amber-200/20" label={`继续`}>
      当前已进行到
      <Link className="underline mx-2" href={href}>
        第{pastLevel}关
      </Link>
    </Card>
  );
}
