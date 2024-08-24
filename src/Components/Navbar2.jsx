"use client"
import Image from "next/image";
import Link from "next/link";
import React, {  useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {  AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
// import useCart from '@/hooks/useCart'; // Update the import statement



// import { useSelector } from "react-redux";

const Navbar2 = () => {

  const [count, setCount] = useState(0);
    const [nav, setNav] = useState(false);

    console.log("catrt");
    // /////////////////////////////////////////////////////////////////////
    useEffect(() => {
      const initialCount = parseInt(localStorage.getItem("counterValue")) || 0;
      setCount(initialCount); 
  
      const handleStorageChange = () => {
        const newCount = parseInt(localStorage.getItem("counterValue")) || 0;
        setCount(newCount);
      };
      
      window.addEventListener("storage", handleStorageChange); // Listen for storage change events
  
      return () => {
        window.removeEventListener("storage", handleStorageChange); // Remove event listener when component is unmounted
      };
    }, []);
//  //////////////////////////////////////////////////////////////////////


console.log("sarthak");
  const links = [
    {
      id: 1,
      link: "/",
      nam:"Home",
    },
    {
      id: 2,
      link: "/about",
      nam:"About",
    },
    
    {
      id: 3,
      link: "/contact",
      nam:"Contact",
    },
 
  ];
  // const [count, setCount] = useState(parseInt(localStorage.getItem('counterValue')) || 0);
  return (
    <div className="flex justify-between items-center w-full sm:h-25 md:h-25 h-20 px-4 text-white bg-slate-200 fixed  nav top-0 z-10 ">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="no-underline text-black font-extrabold"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
          <Image src="/logo-2.jpeg" height={500} width={200}/>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link ,nam}) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize  hover:scale-105 hover:text-red-600 duration-200 no-underline text-black font-extrabold"
          >
            <Link href={link} className="no-underline text-dark">{nam}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
         

        <div className="flex justify-between">
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent no-underline to-gray-800 text-gray-500">
     


          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl no-underline"
            >
              <Link onClick={() => setNav(!nav)} href={link} className="no-underline">
                {link}
              </Link>
              
            </li>
          
          ))}
      
        </ul>
<div>

<div className="flex gap-6 text-[26px]">
            <div className="relative cursor-pointer">
                <AiOutlineShoppingCart/>
                <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center "></div>
            </div>
            <AiOutlineSearch/>
            <CgProfile/>
          </div>
  
</div>


        </div>
      )}
         <div className="flex gap-6 text-[26px]">
            <div className="relative cursor-pointer">
                <AiOutlineShoppingCart className="text-black font-extrabold" />
                <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center ">{count}</div>
            </div>
            <AiOutlineSearch className="text-black font-extrabold"/>
            <CgProfile className="text-black font-extrabold"/>
          </div>
    </div>
  );
};

export default Navbar2;