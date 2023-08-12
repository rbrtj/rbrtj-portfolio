"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { fileItems } from "../constants";
import { ExplorerToggleContext } from "../context/explorer-toggle-context";

const Explorer = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const {
    state: { isHidden: isExplorerHidden },
  } = useContext(ExplorerToggleContext);

  const pathname = usePathname();
  return (
    <>
      {isExplorerHidden ? null : (
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
          {isExpanded ? (
            <div className="py-2 cursor-pointer">
              {fileItems.map((item, index) => (
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
          ) : null}
        </div>
      )}
    </>
  );
};

export default Explorer;
