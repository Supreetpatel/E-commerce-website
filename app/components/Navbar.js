/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-white py-5 px-10">
        <div className="flex items-center">
          <div className="mr-2 ">
            <img src="" className="" alt="" />
          </div>
          <div >
            <span className="font-semibold text-xl tracking-wide ml-1">
              RAD
            </span>
            <sapn className="text-xl ml-1">PLANTS</sapn>
          </div>
        </div>
        <div className="flex sticky z-50 text-sm space-x-10">
          <a href="#" className="text-black  hover:text-gray-700">
            Home
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Catalogue
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Contact
          </a>
        </div>
        <div className="space-x-2">
        <button className="sticky z-50 px-4 py-2 text-black rounded-full text-sm border-[1.5px] border-[#D9D9D9] bg-white hover:bg-gray-100">
          Search
          </button>
          <button className="sticky z-50 px-4 py-2 text-black rounded-full text-sm border-[1.5px] border-[#D9D9D9] bg-white hover:bg-gray-100">
            Cart (0)
          </button>
        </div>
      </nav>
    </>
  );
}