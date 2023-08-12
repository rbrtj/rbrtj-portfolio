import { fileItems } from "../constants";
import Tab from "./ui/Tab";

const TabBar = () => {
  return (
    <div className="flex bg-tabBg overflow-x-auto">
      {fileItems.map((item, index) => (
        <Tab item={item} key={index} />
      ))}
    </div>
  );
};
export default TabBar;
