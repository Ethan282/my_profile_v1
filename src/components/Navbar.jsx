import React from "react";
import { navMenu } from "../assets/asstes.js";
import { FaArrowRight } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="fixed w-full py-4 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="text-2xl font-bold text-zinc-800">
            <span>THE-</span>
            <span className="text-teal-800 font-orbitron">TUFAN</span>
          </div>
          {/* Menu */}
          <div className="hidden md:flex space-x-6 border border-gray-200  rounded-full px-10 py-4 ">
            {navMenu.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* button */}
          <div className="">
            <button className='px-10 py-4 border border-zinc-800 hover:text-slate-800 rounded-full flex items-center gap-2 transition-all duration-300 text-slate-500 cursor-pointer hover:translate-y-1'>
              Resume
              <FaArrowRight className="text-gray-500 text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
