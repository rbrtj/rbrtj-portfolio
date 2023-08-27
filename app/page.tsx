import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-[75vh] relative">
      {/* <div className="text-3xl absolute z-10">
      Background text
      </div> */}
      <div className="z-20 flex justify-between items-center">
        <div className="md:px-12">
          <h1 className="text-8xl mb-2">Robert Jaszczurek</h1>
          <h6 className="max-w-fit text-5xl mb-12 relative">Full Stack Web Developer</h6>
          <Link href="/projects">
            <button type="button" className="text-xl bg-buttonBg text-buttonText py-2 px-4 mr-6 font-bold cursor-pointer">View Work</button>
          </Link>
          <Link href="/contact">
            <button type="button" className="text-xl py-2 border text-buttonText border-buttonBg px-4 mr-6 font-bold">Contact Me</button>
          </Link>
        </div>
        {/* ADD BG IMAGE */}
      </div>
    </div>
  );
}
