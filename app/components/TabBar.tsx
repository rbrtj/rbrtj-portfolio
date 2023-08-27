import fileItems from '../constants';
import Tab from './ui/Tab';

function TabBar() {
  return (
    <div className="flex bg-tabBg overflow-x-auto">
      {fileItems.map((item) => (
        <Tab item={item} key={item.name} />
      ))}
    </div>
  );
}
export default TabBar;
