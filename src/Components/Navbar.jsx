"use client"
import Link from "next/link"
import React, { useState } from 'react'
import {  AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from 'react-icons/rx'


const Navbar = () => {
 
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
  {/*  */}
  
  {/*  */}
   <div className='bg-white py-4 sticky top-0 z-10 border-2 h-16  xs:h-24'>
    <div className="container flex justify-between items-center ">

        <RxHamburgerMenu className='sm:hidden text-[26px] ' onClick={toggleMenu}/>
        <Link href="/" className="text-4xl font font-medium hover:text-accent no-underline">Patwa Utensils</Link>
      
      <ul className="gap-6 hidden sm:flex">
        <Link href="/" className="no-underline">Home</Link>
        <li className="navLink">Shop</li>
        <li className="navLink">Blog</li>
        <li className="navLink">Pages</li>
        <li className="navLink">Contact</li>

      </ul>

      <div className="flex gap-6 text-[26px]">
        <div className="relative cursor-pointer">
            <AiOutlineShoppingCart/>
            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center ">0</div>
        </div>
        <AiOutlineSearch/>
        <CgProfile/>
      </div>

    </div>
   </div>
   
    </>
  );
};

export default Navbar
