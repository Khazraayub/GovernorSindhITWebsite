import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { CiMail } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="text-black bg-slate-100 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow  flex flex-wrap md:flex-nowrap gap-32 md:pr-20 -mb-10 md:text-left text-center order-first">
        
          <div className="lg:w-[25%] md:w-1/2 w-full px-4  space-y-4">
            <h2 className="title-font font-bold text-black  text-lg mb-3">
              {" "}
              Core Courses
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li>
                <a className="text-gray-700 cursor-pointer hover:text-gray-800">
                  Programming Fundamentals
                </a>
              </li>
              <li>
                <a className="text-gray-700 cursor-pointer hover:text-gray-800">
                  Web2 Using NextJS
                </a>
              </li>
              <li>
                <a className="text-gray-700 cursor-pointer hover:text-gray-800">
                  Earn as You Learn
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-[50%] md:w-1/2 w-full px-4 space-y-4">
            <h2 className="title-font font-bold text-black  text-lg mb-3">
              Advanced Courses
            </h2>
            <nav className="list-none mb-10 space-y-2 ">
              <li>
                <a className="text-gray-700 cursor-pointer hover:text-gray-800">
                  Web 3 and Metaverse
                </a>
              </li>
              <li>
                <a className="text-gray-700 cursor-pointer hover:text-gray-800">
                  Cloud-Native Computing
                </a>
              </li>
              <li>
                <a className="text-gray-700 cursor-pointer hover:text-gray-800">
                  Artificial Intelligence (AI) and Deep Learning
                </a>
              </li>
              <li>
                <a className="text-gray-700 cursor-pointer hover:text-gray-800">
                  Ambient Computing and IoT
                </a>
              </li>
              <li>
                <a className="text-gray-700 cursor-pointer hover:text-gray-800">
                  Genomics and Bioinformatics
                </a>
              </li>
              <li>
                <a className="text-gray-700 cursor-pointer hover:text-gray-800">
                  Network Programmability and Automation
                </a>
              </li>
            </nav>
          </div>

          <div className="container mt-2 lg:w-[25%] md:w-1/2 w-full px-4 space-y-4 mx-auto ">
                <p className="font-bold text-xl text-zinc-800 mx-auto text-center">Social Links</p>
                <div className="flex gap-4 container px-2 justify-center sm:px-4 mx-auto items-center w-[100%] ">
                    <Link href={"/"}>
                        <FaFacebook className="icon1 text-blue-700 bg-white size-8 rounded-full flex justify-center gap-14 mt-2" />
                    </Link>
                    <Link href={"/"}>
                        <FaYoutube className="icon3 text-white p-1 bg-red-500 size-8 rounded-full flex justify-center gap-14 mt-2" />
                    </Link>
                    
                    <Link href={"/"}>
                        <FaTwitter className="icon3 text-white p-1 bg-sky-500 size-8 rounded-full flex justify-center gap-14 mt-2" />
                    </Link>
                    
                    <Link href={"/"}>
                        <FaInstagram className="icon2 text-white p-1 bg-pink-600 size-8 rounded-full flex justify-center gap-14 mt-2" />
                    </Link>

                    <Link href={"/"}>
                        <FaTiktok className="icon3 text-white p-1 bg-black size-8 rounded-full flex justify-center gap-14 mt-2" />
                    </Link>
                </div>
            
                <div className="mt-5 flex container px-2 justify-center sm:px-4 mx-auto items-center w-[100%] ">
                <CiMail className=" text-blue-600 flex text-2xl"/> 
                <Link className="text-blue-600 underline" href="{/}">
                    education@governorsindh.com
                 </Link>
                 </div>
                 

            </div>
        </div>
      </div>
    </footer>
  );
}
