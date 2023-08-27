'use client';

import {
  Braces, Files, Github, Settings, UserCircle2,
} from 'lucide-react';
import { useContext } from 'react';
import { ExplorerToggleContext } from '../context/explorer-toggle-context';

const sidebarItems = [
  {
    Icon: Files,
    title: 'Files',
  },
  {
    Icon: Github,
    title: 'Github',
  },
  {
    Icon: Braces,
    title: 'Braces',
  },
];

const sidebarBottomItems = [
  {
    Icon: UserCircle2,
    title: 'User',
  },
  {
    Icon: Settings,
    title: 'Settings',
  },
];
export default function Sidebar() {
  const { state, dispatch } = useContext(ExplorerToggleContext);
  const handleToggle = (title: string) => {
    if (title !== 'Files') return;
    dispatch({ type: 'toggle' });
  };
  return (
    <aside className="flex flex-col justify-between h-[calc(100vh-7rem)] bg-sidebarBg border-r border-solid border-sidebarBorder">
      <div className="flex flex-col">
        {sidebarItems.map(({ Icon, title }) => (
          <button
            type="button"
            key={title}
            onClick={() => handleToggle(title)}
            className={`${
              !state.isHidden && title === 'Files' && 'bg-sidebarHoverBg'
            } hover:bg-sidebarHoverBg`}
          >
            <Icon className="h-[48px] w-[48px] py-3 px-0 block my-0 mx-auto text-accentText" />
          </button>
        ))}
      </div>
      <div className="">
        {sidebarBottomItems.map(({ Icon, title }) => (
          <div key={title} className="cursor-pointer w-full">
            <button
              type="button"
            >
              <Icon className="h-[48px] w-[48px] py-3 px-0 block my-0 mx-auto text-accentText" />
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}
