'use client'
import { NavLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect } from "react";

const Navigation = () => {
  
  
  const [isRouting, setIsRouting] = React.useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = React.useState("/")

  useEffect(() => {
      if (prevPath!== path){
        setIsRouting(true);
      }
  }, [path, prevPath])

  useEffect(() => {
    if(isRouting){
      setPrevPath(path);
      const timout = setTimeout(() => {
      setIsRouting(false)},1200)
      return () => clearTimeout(timout)}

    }, [isRouting]
  )

  return (
    <div className=' absolute z-[50] rounded-full max-h-[150px] border border-white -bottom-20 w-[50%] flex items-center justify-between py-7'>
      {NavLinks.map((nav)=>
        (<Link
        key={nav.name}
        href={nav.link}
        className='mb-16 pl-4 min-w-[20%]'
        >
          <nav.icon className={`w-[24] h-[24] ${path === nav.name? "text-purple-800": "text-white"}`}/>
        </Link>)

      )}
    </div>
  )
}

export default Navigation