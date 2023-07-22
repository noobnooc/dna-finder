declare global {
  namespace NodeJS {
    interface ProcessEnv {
      UPSTASH_REDIS_URL: string;
      UPSTASH_REDIS_TOKEN: string;
    }
  }
}

export {};
