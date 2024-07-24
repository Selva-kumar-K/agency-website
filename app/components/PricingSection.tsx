import React from "react";
import Button from "./Button";

export default function PricingSection() {
  return (
    <div className="w-[85%] mx-auto">
      <div className="text-center mt-24">
        <p className="text-blue-500">Deal for your business</p>
        <h1 className="text-3xl font-bold mt-3">
          Meet our pricing plan that suit you
        </h1>
      </div>

      <div className="my-20 w-full flex flex-col space-y-8 md:flex-row md:items-center md:space-y-0 md:space-x-2">
        <div className="md:w-1/3 h-[90vh] rounded-md overflow-hidden bg-slate-100 shadow-md">
          <div className="flex flex-col justify-center items-center space-y-5 bg-[#961d47] text-white py-16 ">
            <h1 className="text-2xl font-semibold">Starter</h1>
            <p className="font-bold text-yellow-400 text-3xl">
              $19.99/<span className="text-sm text-white font-normal">per month</span>
            </p>
          </div>
          <ul className="text-center space-y-5 mt-5">
            <li className="border-b border-b-slate-300 w-full py-1">Full Access Library</li>
            <li className="border-b border-b-slate-300 w-full py-1">Multiple Website</li>
            <li className="border-b border-b-slate-300 w-full py-1">Next js Project</li>
            <li className="border-b border-b-slate-300 w-full py-1">Mern Stack Project</li>
            <li className="border-b border-b-slate-300 w-full py-1">TypeScript Project</li>
          </ul>
          <div className="text-center my-5">
            <Button className="px-6 py-2 text-white bg-blue-700/80 rounded-md hover:bg-blue-800" text="Choose Plan"/>
          </div>
        </div>

        <div className="md:w-1/3 h-[90vh] lg:h-[100vh] rounded-md overflow-hidden bg-slate-100 shadow-md">
          <div className="flex flex-col justify-center items-center space-y-5 bg-[#42941f] text-white py-16 ">
            <h1 className="text-2xl font-semibold">Premium Pack</h1>
            <p className="font-bold text-yellow-400 text-3xl">
              $29.99/<span className="text-sm text-white font-normal">per month</span>
            </p>
          </div>
          <ul className="text-center space-y-5 mt-5">
            <li className="border-b border-b-slate-300 w-full py-1">Full Access Library</li>
            <li className="border-b border-b-slate-300 w-full py-1">Multiple Website</li>
            <li className="border-b border-b-slate-300 w-full py-1">Next js Project</li>
            <li className="border-b border-b-slate-300 w-full py-1">Mern Stack Project</li>
            <li className="border-b border-b-slate-300 w-full py-1">TypeScript Project</li>
          </ul>
          <div className="text-center my-5">
            <Button className="px-6 py-2 text-white bg-red-500/90 rounded-md hover:bg-red-600" text="Choose Plan"/>
          </div>
        </div>
        <div className="md:w-1/3 h-[90vh] rounded-md overflow-hidden bg-slate-100 shadow-md">
          <div className="flex flex-col justify-center items-center space-y-5 bg-[#2134ac] text-white py-16 ">
            <h1 className="text-2xl font-semibold">Ultimate</h1>
            <p className="font-bold text-yellow-400 text-3xl">
              $39.99/<span className="text-sm text-white font-normal">per month</span>
            </p>
          </div>
          <ul className="text-center space-y-5 mt-5">
            <li className="border-b border-b-slate-300 w-full py-1">Full Access Library</li>
            <li className="border-b border-b-slate-300 w-full py-1">Multiple Website</li>
            <li className="border-b border-b-slate-300 w-full py-1">Next js Project</li>
            <li className="border-b border-b-slate-300 w-full py-1">Mern Stack Project</li>
            <li className="border-b border-b-slate-300 w-full py-1">TypeScript Project</li>
          </ul>
          <div className="text-center my-5">
            <Button className="px-6 py-2 text-white bg-blue-700/80 rounded-md hover:bg-blue-800" text="Choose Plan"/>
          </div>
        </div>
      </div>
    </div>
  );
}
