import Image from "next/image"
import { UserButton, SignIn } from "@clerk/nextjs"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="grid relative place-content-center bg-slate-100 text-white">
          {/* <UserButton afterSignOutUrl="/" /> */}
        </div>
      </div>
    </main>
  )
}
