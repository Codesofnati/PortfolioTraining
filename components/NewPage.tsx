import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewPage = () => {
  return (
    <>
      <div
        className="w-full h-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('main-bg.webp')" }}
      >
        <div className="flex flex-col pl-10 pr-10  md:pl-40 md:pr-0 pb-66 md:pb-50 max-w-[750px]">
          <h1 className="text-white font-semibold max-w-[250px] md:max-w-[800px] text-[40px] md:text-[50px] ">
            Hi, I&apos;m Nathnael
            <span className="text-transparent text-[20px] md:text-[50px] block bg-gradient-to-r bg-clip-text from-purple-500 to-cyan-500">
              {" "}
              I&apos;m a Software Developer
            </span>
          </h1>
          <p className="text-gray-200  text-[20px] md:block">
            I&apos;m looking for a fast-growing technology company or startup to
            which i can help and contribute as a front-end developer, back-end
            developer, or full-stuck developer. I would love to learn about your
            company, feel free to connect
          </p>{" "}
          <div className=" mt-2 gap-5 z-[20] hidden md:block ">
            <Link
              href=""
              className="text-white bg-gradient-to-r from-purple-800 to-black-500 rounded-[5px] font-semibold text-[18px] px-4 py-1"
            >
              Learn
            </Link>
            <Link
              href=""
              className="text-white bg-gradient-to-r from-purple-800 to-black-500 rounded-[5px] font-semibold text-[18px] px-4 py-1"
            >
              Learn
            </Link>
            <Link
              href=""
              className="text-white bg-gradient-to-r from-purple-800 to-black-500 rounded-[5px] font-semibold text-[18px] px-4 py-1"
            >
              Learn
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 right-5 z-[20] lex-row md:hidden gap-5 ">
        <Link
          href=""
          className="text-white bg-gradient-to-r from-purple-800 to-black-500 rounded-[5px] font-semibold text-[18px] px-4 py-1"
        >
          Learn
        </Link>
        <Link
          href=""
          className="text-white bg-gradient-to-r from-purple-800 to-black-500 rounded-[5px] font-semibold text-[18px] px-4 py-1"
        >
          Learn
        </Link>
        <Link
          href=""
          className="text-white bg-gradient-to-r from-purple-800 to-black-500 rounded-[5px] font-semibold text-[18px] px-4 py-1"
        >
          Learn
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          alt="horse"
          src={"/horse.png"}
          width={300}
          height={300}
          className="absolute right-27 top-23 w-50 md:right-35 md:top-30 md:w-60 lg:w-80 lg:right-50 lg:top-40"
        />
        <Image
          alt="cliff"
          src={"/cliff.webp"}
          width={485}
          height={485}
          className=" w-full h-120 md:h-150 lg:h-200"
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
        src={"/stars.png"}
        alt="stars"
        width={300}
        height={300}
        className="absolute left-10 top-10 z-[10]"
      />
    </>
  );
};

export default NewPage;
