"use client";
import { Braces, Files, Github, Settings, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { createContext, useContext } from "react";
import { ExplorerToggleContext } from "../context/explorer-toggle-context";

const sidebarItems = [
  {
    Icon: Files,
    title: "Files",
  },
  {
    Icon: Github,
    title: "Github",
  },
  {
    Icon: Braces,
    title: "Braces",
  },
];

const sidebarBottomItems = [
  {
    Icon: UserCircle2,
    title: "User",
  },
  {
    Icon: Settings,
    title: "Settings",
  },
];

export const Sidebar = () => {
  const { state, dispatch } = useContext(ExplorerToggleContext);
  const handleToggle = (title: string) => {
    if (title !== "Files") return;
    dispatch({ type: "toggle" });
  };
  return (
    <aside className="flex flex-col justify-between w-[4.5vw] h-[calc(100vh-7rem)] bg-sidebarBg border-r border-solid border-sidebarBorder">
      <div>
        {sidebarItems.map(({ Icon, title }, index) => (
          <button
            key={index}
            onClick={() => handleToggle(title)}
            className={`${
              !state.isHidden && title === "Files" && "bg-sidebarHoverBg"
            } hover:bg-sidebarHoverBg`}
          >
            <Icon className="h-[48px] w-[48px] py-3 px-0 block my-0 mx-auto text-accentText" />
          </button>
        ))}
      </div>
      <div className="">
        {sidebarBottomItems.map(({ Icon }, index) => (
          <div key={index} className="cursor-pointer w-full">
            <button>
              <Icon className="h-[48px] w-[48px] py-3 px-0 block my-0 mx-auto text-accentText" />
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};
