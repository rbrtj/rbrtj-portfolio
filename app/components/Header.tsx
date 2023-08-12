import {
  Columns,
  Search,
  SplitSquareHorizontal,
  SplitSquareVertical,
} from "lucide-react";

const Header = () => {
  return (
    <div className="bg-headerBg border border-headerBorder text-headerText flex justify-between items-center h-12 py-2 px-4">
      <div className="flex items-center gap-2">
        {/* Color Indicators */}
        <span className="h-3 w-3 rounded-lg cursor-pointer bg-red-500"></span>
        <span className="h-3 w-3 rounded-lg cursor-pointer bg-yellow-500"></span>
        <span className="h-3 w-3 rounded-lg cursor-pointer bg-green-500"></span>
      </div>
      {/* Search Bar */}
      <div className="text-center py-1 px-24 text-activityBarSearchText border border-headerBorder rounded-lg bg-headerSearchboxBg">
        <div className="flex gap-2 items-center">
          <Search className="w-4 h-4" />
          <span>Robert Jaszczurek</span>
        </div>
      </div>
      {/* Action Icons */}
      <div className="flex gap-4 text-icon cursor-pointer">
        <SplitSquareHorizontal />
        <SplitSquareVertical />
        <Columns />
      </div>
    </div>
  );
};
export default Header;
