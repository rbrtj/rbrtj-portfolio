import Image from "next/image";
const Titlebar = () => {
  return (
    <section className="bg-blue-800 h-8 py-0 px-2 flex items-center justify-center text-text text-sm border-b border-solid border-slate-700">
      <Image src="/vscode_icon.svg" alt="vscode icon" height={15} width={15} />
      <div className="flex-1 flex mr-auto ml-4 cursor-pointer">
        <p className="">File</p>
        <p className="px-2">Edit</p>
        <p className="px-2">View</p>
        <p className="px-2">Go</p>
        <p className="px-2">Run</p>
        <p className="px-2">Terminal</p>
        <p className="px-2">Help</p>
      </div>
    </section>
  );
};
export default Titlebar;
