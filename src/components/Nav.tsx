// import UserMenu from "./UserMenu";
import Link from "next/link";

import type { inferRouterOutputs } from "@trpc/server";
import { type AppRouter } from "~/server/api/root";
import Image from "next/image";

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
          DCRalph Enterprise
        </Link>

        <div className="mx-auto flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="sora text-xl font-bold text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* <div className="ml-auto flex gap-4">
          <UserMenu user={user} />
        </div> */}
      </nav>
      <div className="h-20"></div>
    </>
  );
}
