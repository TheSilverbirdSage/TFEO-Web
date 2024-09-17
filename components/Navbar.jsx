"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import image from "@/images/TF.png";
import Link from 'next/link';

function Navbar() {
    const[isOpen, setIsOpen] = useState(false);
    return (
      <nav className='bg-white p-8'>
         <div className="flex items-center mx-auto container">
         <Image src={image} height={70} alt="image"/>
         <div className="hidden md:flex space-x-20 text-black text-sm pr-10">
       <Link href='/' className='link'>
          Home
       </Link>
       <Link href='/' className='link'>
          About Us
       </Link>
       <Link href='/' className='link'>
          Services 
       </Link>
         </div>
         <button className='bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg ml-auto'>Get In Touch</button>
         <div className="md:hidden">
          <button className='text-black focus:outline-none'onClick={() => setIsOpen((prev) => !prev) }>
              <svg 
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              >
              <path 
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6L12 12" : "M4 6h16M4 12h16M4 18h16"}
              /> 
              
              </svg>
          </button>
         </div>
         <div className={`md:hidden ${isOpen ? "block": "hidden"} transition-transform ${isOpen ? 'translate-y-0': 'translate-y-full'}`}> 
          <div className="flex flex-col bg-white text-black p-4 space-y-2">
          <Link href='/' className='link'>
          Home
       </Link>
       <Link href='/' className='link'>
          About Us
       </Link>
       <Link href='/' className='link'>
          Services  
       </Link>
       <button className='bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded'>Get In Touch</button>
          </div>
         </div>
         </div>
        
      </nav>
    )
}

export default Navbar