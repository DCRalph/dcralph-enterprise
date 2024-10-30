// import UserMenu from "./UserMenu";
import Link from "next/link";

import type { inferRouterOutputs } from "@trpc/server";
import { type AppRouter } from "~/server/api/root";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { IconMenu } from "@tabler/icons-react";

type NavProps = {
  user?: inferRouterOutputs<AppRouter>["user"]["getUser"];
};

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Nav({ user }: NavProps) {
  return (
    <>
      <nav className="fixed top-0 z-50 flex h-20 w-full items-center bg-black/90 px-8 py-2 backdrop-blur-lg sm:px-20">
        <Link
          href={"/"}
          className="absolute flex items-center gap-2 text-xl font-bold text-white"
        >
          <Image
            src="/dcralph.png"
            alt="DCRalph Enterprise"
            className="aspect-square w-12"
            width={1000}
            height={1000}
          />
          <span className="hidden lg:block">DCRalph Enterprise</span>
        </Link>

        <div className="mx-auto hidden gap-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="sora text-base font-bold text-white md:text-xl"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex gap-4 lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <IconMenu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* <div className="ml-auto flex gap-4">
          <UserMenu user={user} />
        </div> */}
      </nav>
      <div className="h-20"></div>
    </>
  );
}
