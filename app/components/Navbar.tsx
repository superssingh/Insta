"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex  w-full h-fit p-4 bg-slate-500 shadow-sm place-items-center font-semibold text-base">
      <Image
        alt="InstaApp"
        src={"/vercel.svg"}
        width={100}
        height={30}
        priority
        className="mx-5"
      />

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Post</NavigationMenuTrigger>
            <NavigationMenuContent className="grid w-full">
              <NavigationMenuLink className="p-3 hover:bg-black/10">
                Add
              </NavigationMenuLink>
              <NavigationMenuLink className="p-3 hover:bg-black/10 ">
                Posts
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar
