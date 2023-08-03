import Image from "next/image"
import { UserButton, SignIn } from "@clerk/nextjs"
import { BeakerIcon } from "@heroicons/react/24/solid"
const list = [
  { name: "Youtube", path: "/youtube" },
  { name: "Linkedin", path: "/youtube" },
  { name: "Twitter", path: "/youtube" },
  { name: "Google", path: "/youtube" },
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="grid relative place-content-center text-white">
          {/* <UserButton afterSignOutUrl="/" /> */}
          <ul>
            {list.map((l) => (
              <li
                key={l.name}
                className="flex p-1 font-bold text-base text-slate-600 align-middle hover:bg-slate-500 "
              >
                <BeakerIcon className="h-6 w-6 mr-2" />
                <span>{l.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
