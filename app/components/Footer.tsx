import {
  AlertTriangle,
  GitBranch,
  Info,
  RefreshCw,
  XCircle,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bottombarBg h-8 border-t border-solid border-bottombarBorder text-accentText px-2 flex items-center justify-between text-sm">
      <div className="flex items-center">
        <Link
          href="https://github.com/rbrtj/rbrtj-portfolio"
          className="flex mr-2 h-6 items-center px-1 cursor-pointer ml-3 gap-1"
        >
          <GitBranch className="w-4 h-4" />
          <p>main</p>
        </Link>
        <div className="flex mr-2 h-6 items-center px-1 cursor-pointer ml-3 gap-1">
          <XCircle className="w-4 h-4" />
          <p>0</p>
          <AlertTriangle className="w-4 h-4" />
          <p>0</p>
          <Info className="w-4 h-4" />
          <p>0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
