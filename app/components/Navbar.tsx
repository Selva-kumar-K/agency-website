'use client'

import React, { useState } from "react";
import { menus } from "../libs/constant";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [state, setState] = useState(false)
    const result = state ? "block" : "hidden"
  return (
    <div className="relative py-3 shadow-md">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <h1 className="text-[28px] text-red-600 font-bold lg:text-[35px]">
          W<span className="text-[16px] text-black lg:text-[25px]">ebdev.</span>
        </h1>
        <div className="lg:hidden">
          <svg onClick={() => setState(!state)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>

        <ul className="hidden lg:flex space-x-10">
            {menus.map((menu,index) => (
               <li key={index} className={`${index === 0 ? 'text-red-500' : ""} text-[17px] transition-all duration-200 hover:text-red-500`}>{menu}</li>
            ))}
        </ul>

        <div className="hidden lg:block space-x-5">
            <Button className="px-6 py-2 text-white bg-blue-700/80 rounded-md hover:bg-blue-800" text="Login"/>
            <Button className="px-6 py-2 text-white bg-red-500/90 rounded-md hover:bg-red-600" text="Signup"/>
        </div>
      </div>
      <MobileMenu className={result} setState={setState}/>
    </div>
  );
}
