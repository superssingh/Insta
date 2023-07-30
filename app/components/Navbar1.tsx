"use client"

import Link from "next/link"

const menus = [
  { name: "home", path: "/" },
  { name: "clog", path: "/blog" },
  { name: "course", path: "/course" },
  { name: "todo", path: "/todo" },
]

export const Navbar1 = () => {
  return (
    <div className="flex  ">
      {menus.map((m) => (
        <Link
          href={m.path}
          key={m.name}
          className="p-2 mx-2 bg-white rounded-sm text-base hover:bg-slate-200"
        >
          {m.name}
        </Link>
      ))}
    </div>
  )
}
