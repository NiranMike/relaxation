import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.png"
import { AiOutlineSearch, AiOutlineGlobal, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi"

const Header = () => {
  return (
    <header className='sticky top-0 z-50  grid grid-cols-3
      bg-white py-5 md:px-10 shadow-md'>
      <div className='relative items-center cursor-pointer h-10 my-auto flex'>
        <Image 
          src={logo}
          
          alt='logo'
          height={80}
          width={80}
          
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      {/* Middle */}
      <div className='flex items-center md:border-2 rounded-full md:shadow-sm py-2'>
        <input className='px-4 md:px-5 text-sm w-[145px] text-gray-600 placeholder-gray-400 md:flex-grow bg-transparent outline-none' type="text" placeholder='Start your search' />
        <AiOutlineSearch className=' hidden md:inline-flex text-[32px] text-white 
        rounded-full p-2 md:mx-2 cursor-pointer bg-red-400' />
      </div>

      {/* Right */}
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden cursor-pointer md:inline'>Become a host</p>
        <AiOutlineGlobal className='text-[24px] cursor-pointer' />

        <div className='flex gap-2 items-center border-2 p-2 rounded-full'>
          <AiOutlineMenu  className='text-[24px] cursor-pointer'/>
          <BiUserCircle  className='text-[24px] cursor-pointer'/>
        </div>
      </div>
      
    </header>
  )
}



export default Header