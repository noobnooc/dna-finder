import Link from "next/link";
import { Card } from "./card";

export function Continue({
  currentLevel,
  pastLevel,
}: {
  currentLevel: number;
  pastLevel: number;
}) {
  if (pastLevel <= 0 || currentLevel >= pastLevel) {
    return <></>;
  }

  if (pastLevel >= 5) {
    return <Card label="恭喜🎉">你已经成功通关啦！</Card>;
  }

  const href = ["/0", "/1clatter", "/2totora", "/3dainty", "/4fiddler"][
    pastLevel
  ];

  return (
    <Card label={`继续`}>
      当前已进行到{" "}
      <Link className="underline" href={href}>
        第{pastLevel}关
      </Link>
    </Card>
  );
}
