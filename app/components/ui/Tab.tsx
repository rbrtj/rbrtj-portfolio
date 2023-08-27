'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileItem } from '@/app/Types';

interface TabProps {
  item: FileItem;
}

function Tab({ item: { name, path, icon } }: TabProps) {
  const pathname = usePathname();
  return (
    <Link href={path}>
      <div
        className={`py-2 px-5 bg-tabBg text-accentText flex items-center border border-solid border-tabBorder text-sm cursor-pointer ${
          pathname === path && 'bg-tabActiveBg'
        }`}
      >
        <Image src={icon} alt={name} height={18} width={18} />
        <p className="ml-1">{name}</p>
      </div>
    </Link>
  );
}

export default Tab;
