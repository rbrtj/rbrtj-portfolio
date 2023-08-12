import Image from "next/image";

const titlebarFields = [
  "File",
  "Edit",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

const Titlebar = () => {
  return (
    <section className="bg-titlebarBg h-8 py-0 px-2 flex items-center justify-center text-mainText text-sm border-b border-solid border-slate-700">
      <Image src="/vscode_icon.svg" alt="vscode icon" height={15} width={15} />
      <div className="flex-1 flex mr-auto ml-4 cursor-pointer">
        {titlebarFields.map((field, index) => (
          <span className="px-2" key={index}>
            {field}
          </span>
        ))}
      </div>
    </section>
  );
};
export default Titlebar;
