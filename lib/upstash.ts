import { Redis } from "@upstash/redis";

export const redis = Object.assign(
  new Redis({
    url: process.env.UPSTASH_REDIS_URL,
    token: process.env.UPSTASH_REDIS_TOKEN,
  }),
  {
    KEY_TOTAL_VISITS: "total-visits",
    KEY_LAST_VISITOR: "last-visitor",
  }
);
