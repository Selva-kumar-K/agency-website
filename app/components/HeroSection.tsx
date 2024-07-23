import React from "react";
import Button from "./Button";
import Image from "next/image";
import Hero from "../../public/hero.svg"

export default function HeroSection() {
  return (
    <div className="w-[85%] mx-auto flex flex-col space-y-10 mt-8 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10">
      <div className="lg:w-2/3 xl:w-1/3">
        <h1 className="text-3xl font-bold leading-snug lg:text-4xl lg:leading-normal">
          Exploring Innovative Paths to Cultivate Your Business
        </h1>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          dignissimos voluptatum id, similique cum aliquid culpa illo maxime,
          rerum iusto eveniet eius earum vel unde quas tempore.
        </p>
        <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
          <Button
            className="px-6 py-2 text-white bg-blue-700/80 rounded-md hover:bg-blue-800"
            text="Get Started"
          />
          <Button
            className="px-6 py-2 text-white bg-red-500/90 rounded-md hover:bg-red-600 hover:translate-y-2"
            text="Explore Features"
          />
        </div>
      </div>

      <div className="lg:w-3/3">
        <Image src={Hero} alt="HeroSection SVG"/>
      </div>
    </div>
  );
}
