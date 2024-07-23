import React from "react";
import { menus } from "../libs/constant";

type Props = {
    className : string,
    setState : React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileMenu({className,setState} : Props) {
  return (
    <div className={`absolute top-0 h-[100vh] w-full bg-purple-900 p-5 ${className}  transform transition-all duration-300`}>
      <div className="flex justify-end">
        <svg onClick={() => setState(prev => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-8 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="mt-20">
        <ul className="flex flex-col items-center space-y-10">
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`${
                index === 0 ? "text-orange-500" : ""
              } text-[25px] text-white transition-all duration-200 hover:text-orange-500`}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
