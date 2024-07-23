import React from "react";
import { images } from "../libs/constant";
import Image from "next/image";

export default function CardSection() {
  return (
    <div className="w-[85%] mx-auto space-y-16">
      <div className="text-center mt-24">
        <p className="text-blue-500">Ideal Solution for you</p>
        <h1 className="text-3xl font-bold mt-3">Explore Ultimate Features</h1>
      </div>

      <div className="grid place-content-center lg:grid-cols-3 gap-6 md:grid-cols-2">
        {images.map((image, index) => (
          <div className="max-w-sm bg-slate-200/40 flex flex-col justify-center items-center place-content-center px-8 py-4 gap-5 rounded-md transition-all duration-500 hover:scale-105" key={index}>
            <div className="">
              <Image src={image} alt="icons" width="60" height="60" />
            </div>
            <h1 className="text-xl font-semibold text-blue-800/80">Email Subscription</h1>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quaerat esse ducimus expedita voluptatum tempore autem rem
              accusantium qui eligendi.
            </p>
            <button className="text-red-500 font-semibold">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
}
