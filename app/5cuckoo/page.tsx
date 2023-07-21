import { Card } from "@/components/card";
import { validateLevel } from "@/lib/level-checker";

export const dynamic = "force-dynamic";

export default function Level5() {
  validateLevel(5);

  return (
    <>
      <Card label="第五关">吧啦啦</Card>
    </>
  );
}
