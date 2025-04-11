import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center "
        style={{ backgroundImage: "url(/main-bg.webp" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">  {" "}Web Devlopment
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            This is my personal portfolio when you want to know about me you can
            check all about in this portfolio
          </p>
          <div className="flex-col md:flex-row hidden  md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[5px] group bg-blue-500 hover:bg-blue-400 px-4 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-skills"
              className="rounded-[5px] group bg-blue-500 hover:bg-blue-400 px-4 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-o opacity-1 group-hover:opacity-20" />
              My profile
            </Link>
            <Link
              href="/my-skills"
              className="rounded-[5px] group bg-blue-500 hover:bg-blue-400 px-4 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-o opacity-1 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-row md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[5px] group bg-blue-500 hover:bg-blue-400 px-4 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>
        <Link
          href="/my-skills"
          className="rounded-[5px] group bg-blue-500 hover:bg-blue-400 px-4 py-3 text-lg text-white max-w-[200px]"
        >
          My profile
        </Link>
        <Link
          href="/my-skills"
          className="rounded-[5px] group bg-blue-500 hover:bg-blue-400 px-4 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-[10] ">
        <Image
          src="/horse.png"
          height={300}
          width={300}
          alt={"horse"}
          className="absolute right-55 top-44"
        />
        <Image
          src="/cliff.webp"
          height={480}
          width={480}
          alt={"cliff"}
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-full">
        <Image
          src="/trees.webp"
          height={2000}
          width={2000}
          alt={"tress"}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        height={300}
        width={300}
        alt={"stars"}
        className="absolute top-10 left-10 z-[10]"
      />
    </main>
  );
}
