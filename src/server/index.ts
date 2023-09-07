import { publicProcedure, router } from "./trpc"

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30]
  }),
  getPosts: publicProcedure.query(async () => {
    return ["post 1", "post 2", "post 3"]
  }),
})

export type AppRouter = typeof appRouter
