"use client";
import {
  Braces,
  Code,
  Files,
  Github,
  Settings,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    Icon: Files,
    path: "/about",
  },
  {
    Icon: Github,
    path: "/github",
  },
  {
    Icon: Braces,
    path: "/projects",
  },
];

const sidebarBottomItems = [
  {
    Icon: UserCircle2,
    path: "/about",
  },
  {
    Icon: Settings,
    path: "/settings",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="flex flex-col justify-between w-[4.5vw] min-w-[40px] h-[calc(100vh-30px-25px)] bg-backgroundSidebar">
      <div className="">
        {sidebarItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`hover:bg-background ${
                pathname === path && "border-l-2 border-solid bg-background"
              }`}
            >
              <Icon className="h-[48px] w-[48px] py-3 px-0 block my-0 mx-auto text-slate-600" />
            </div>
          </Link>
        ))}
      </div>
      <div className="">
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div key={path} className="cursor-pointer w-full">
            <Link href={path} key={path}>
              <Icon className="h-[48px] w-[48px] py-3 px-0 block my-0 mx-auto text-slate-600" />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};
