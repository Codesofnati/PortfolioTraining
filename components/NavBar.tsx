import React from 'react'
import Image from "next/image";
import { Socials } from '@/constants';


const NavBar = () => {
  return (
    <div className="fixed top-0 z-[40] justify-between w-full flex item-center jestify-between px-10 md:px-20">
      <div className="flex flex-row gap-3 item-center">
        <div className="max-w-[55px]">
          <Image
            src="./horseLogo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full w-full object-contain"
          />
        </div>

        <h1 className="text-white text-[25px] font-semibold">Nathnael Asefa</h1>
      </div>
      <div className="flex flex-row gap-3">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
}

export default NavBar