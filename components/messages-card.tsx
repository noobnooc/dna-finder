import { redis } from "@/lib/upstash";
import { Card } from "./card";

export async function MessagesCard() {
  const messages = await redis.get<
    {
      message: string;
      nickname: string;
    }[]
  >(redis.MESSAGES);

  return (
    <Card label="他们的留言">
      {messages?.map(({ message, nickname }, index) => {
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
  );
}
