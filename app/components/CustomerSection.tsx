import React from "react";
import Support from "../../public/support.jpg";
import Image from "next/image";

export default function CustomerSection() {
  return (
    <div className="my-20 w-[85%] mx-auto flex flex-col-reverse gap-20 md:gap-10 lg:flex-row items-center lg:space-y-0">
      <div className="w-full md:w-2/3">
        <Image src={Support} alt="Service image" />
      </div>
      <div className="w-full lg:w-2/3">
        <h1 className="text-xl lg:text-3xl font-bold">
        Customer support is our main priority with their hundred percent satisfaction.
        </h1>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          dignissimos voluptatum id, similique cum aliquid culpa illo maxime,
          rerum iusto eveniet eius earum vel unde quas tempore.
        </p>

        <ul className="space-y-4">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 text-red-500 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <li>Medical and Vision</li>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <li>Life Insurance</li>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <li>400(k) Savingsn</li>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <li>HSAs and FSAs</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
