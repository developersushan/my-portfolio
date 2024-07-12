"use client"
import { headerData } from "@/app/utils/headerData"
import Link from "next/link"
import { useState } from "react";
import { FiAlignJustify,FiX } from "react-icons/fi";

const Header = () => {
    const [open,setOpen] =useState(false)
    
  return (
    <div className=" sticky top-0 bg-black z-50 py-4 w-[calc(100%_-_12px)] xl:w-[1200px] mx-auto ">
      <div className="flex items-center justify-between">
        <div>
            <a href="/" className="cursor-pointer text-3xl font-bold ">Dev<span className="text-xl italic text-green-400">Sushan</span> <span>.</span></a>
        </div>
        {/* mobile version */}
        <div className="md:hidden relative ">
            <div className="relative">
            <span onClick={()=>setOpen(true)} className={`text-3xl text-green-400 ${open?'hidden':''}`}><FiAlignJustify /></span>
            <span onClick={()=>setOpen(false)} className={`text-3xl text-slate-400  ${open?'':'hidden'}`}><FiX /></span>
            </div>
            <div className={`flex flex-col gap-10 absolute top-10 p-3 overflow-hidden rounded w-[200px] right-0 ${open?'-translate-x-2 duration-300 delay-100':'translate-x-2 opacity-0 invisible  absolute duration-300 delay-100'} bg-slate-800/65 backdrop-opacity-20 backdrop-invert  shadow-xl`}>
            <ul className="flex flex-col gap-2 ">
                {headerData.map((item)=>(
                    <Link href={`/${item.link}`} className={`${item.id==1?'text-green-400 home-custom':''} underline-custom text-base font-medium hover:text-green-400`} key={item.id}>{item.name}</Link>
                ))}
                
            </ul>
            <button className="btn-custom py-1 px-5 rounded ">Hire Me !</button>
        </div>
        </div>
        <div className="md:flex gap-10 hidden">
            <ul className="flex gap-10">
                {headerData.map((item)=>(
                    <Link href={`/${item.link}`} className={`${item.id==1?'text-green-400 home-custom':''} underline-custom text-base font-medium hover:text-green-400`} key={item.id}>{item.name}</Link>
                ))}
                
            </ul>
            <button className="btn-custom py-1 px-5 rounded ">Hire Me !</button>
        </div>
      </div>
    </div>
  )
}

export default Header
