import type { Config } from "drizzle-kit"

export default {
  schema: "./db/schema.ts",
  out: "",
  driver: "pg",
  dbCredentials: {
    connectionURL: process.env.DB_URL,
  },
} satisfies Config
