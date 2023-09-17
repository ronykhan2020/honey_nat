import React from "react";
import Image3 from '../Image/1.png'

export const Hero = () => {
  return (
    <div className="max-w-[1640] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex  flex-col justify-center ">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>{" "}
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Foods <span className="text-orange-500">Delivered</span>
          </h1>
        </div>
        <img className="w-full max-h-[500px] object-cover"
          src={Image3}
          alt=""
        />
       
      </div>
    </div>
  );
};
