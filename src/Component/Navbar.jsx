import React from "react";
import { useState } from "react";
import Image1 from "../Image/2.png";
export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-24 mx-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#FFC0CB] flex">
          BD Honey.
          <span>
            <img className="h-[40px] w-[34px] ml-[20px] " src={Image1} />
          </span>
        </h1>
        <ul className="  text-black md:flex sm:flex-p-5  lg:flex  font-bold  font-sans  ">
          <li className="p-4">Home</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};
