import { Redis } from "@upstash/redis";

export const redis = Object.assign(
  new Redis({
    url: process.env.UPSTASH_REDIS_URL,
    token: process.env.UPSTASH_REDIS_TOKEN,
  }),
  {
    MESSAGES: "messages",
  }
);
