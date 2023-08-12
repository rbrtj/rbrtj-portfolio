"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
const explorerItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "css_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "markdown_icon.svg",
  },
];

const Explorer = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();
  return (
    <div className="bg-explorerBg w-64 text-accentText border-r border-explorerBorder border-solid">
      <p className="py-2 px-3 font-light text-sm tracking-wide mb-3">
        EXPLORER
      </p>
      <button
        className="bg-transparent flex font-bold w-full text-left px-3"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <ChevronDown /> : <ChevronUp />}
        rbrtj-portfolio
      </button>
      <div className="py-2 cursor-pointer">
        {explorerItems.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`py-1 px-4 flex items-center text-sm ${
                pathname === item.path && "bg-explorerActiveBg"
              } hover:bg-explorerHoverBg`}
            >
              <Image
                src={`/${item.icon}`}
                alt={item.name}
                height={18}
                width={18}
              />
              <p className="ml-2">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explorer;
