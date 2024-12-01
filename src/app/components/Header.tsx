"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#044E83] text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
      <div className='absolute left-5 top-6'>
        <img src='image/GSLogo.png' className='w-20 h-25 text-white p-2  rounded-full'/>

      </div>
      <span className="ml-8 pl-10 pt-4 pb-4 text-xl text-white font-bold">Tuition Free Education Program on Latest Technologies</span>
    </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex font-bold space-x-6 text-white">
            <Link href="/"
               className="hover:text-gray-400 cursor-pointer hover:animate-bounce ">Home
            </Link>
            <Link href="/"
                className="hover:text-gray-400 cursor-pointer hover:animate-bounce">Apply 
            </Link>
            <Link href="/"
                className="hover:text-gray-400 cursor-pointer hover:animate-bounce">Jobs
            </Link>
            <Link href="/"
                className="hover:text-gray-400 cursor-pointer hover:animate-bounce ">Results 
            </Link>
            <Link href="/"
                className="hover:text-gray-400 cursor-pointer hover:animate-bounce ">Courses 
            </Link>
           
            
          </div>

          

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black">
          <div className="space-y-2 px-4 py-4">
            <Link href="/"
                className="block  cursor-pointer logo duration-150 ease-linear">Home 
            </Link>
            <Link href="/"
                className="block  cursor-pointer logo duration-150 ease-linear">Apply 
            </Link>
            <Link href="/"
                className="block  cursor-pointer logo duration-150 ease-linear">Jobs 
            </Link>
            <Link href="/"
                className="block  cursor-pointer logo duration-150 ease-linear">Results 
            </Link>
            <Link href="/"
                className="block  cursor-pointer logo duration-150 ease-linear">Courses 
            </Link>
           
          </div>
        </div>
      )}
    </nav>
  );
}
