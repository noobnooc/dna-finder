import { redis } from "@/lib/upstash";
import { Card } from "./card";

export const revalidate = 0;

export async function MessagesCard() {
  const messages = await redis.get<
    {
      message: string;
      nickname: string;
    }[]
  >(redis.MESSAGES);

  return (
    <div className="mt-10">
      <Card className="indent-0 flex flex-col gap-2" label="他们的留言">
        {messages?.reverse()?.map(({ message, nickname }, index) => {
          return (
            <div key={index}>
              {message}
              {nickname ? (
                <span className="opacity-50"> - {nickname}</span>
              ) : undefined}
            </div>
          );
        })}
      </Card>
    </div>
  );
}
