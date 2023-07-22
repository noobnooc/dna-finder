import Link from "next/link";
import { Card } from "./card";

const HREFS = ["/0", "/1clatter", "/2totora", "/3dainty", "/4fiddler"];

export function Continue({
  currentLevel,
  pastLevel,
}: {
  currentLevel: number;
  pastLevel: number;
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
    return <Card label="恭喜🎉">你已经成功通关啦！</Card>;
  }

  const href = HREFS[pastLevel];

  return (
    <Card label={`继续`}>
      当前已进行到
      <Link className="underline mx-2" href={href}>
        第{pastLevel}关
      </Link>
    </Card>
  );
}
