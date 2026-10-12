import React from "react";
import hand_icon from "./assets/hand_icon.png";
import arrow_icon from "./assets/arrow.png";
import hero_image from "./assets/hero_image.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="h-auto lg:h-screen 
      bg-[#fde1ff]
      dark:bg-[#080808]
      flex flex-col lg:flex-row text-black dark:text-white"
    >
      <div className="flex-1 flex flex-col justify-center gap-5 px-6 sm:px-10 md:px-16 lg:pl-44 py-10 leading-tight text-center lg:text-left">
        <h2 className="text-[#090909] dark:text-white text-lg sm:text-xl md:text-2xl font-semibold">
          NEW ARRIVALS ONLY
        </h2>

        <div>
          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
            <p className="text-[#171717] dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold">
              new
            </p>
            <img
              src={hand_icon}
              alt=""
              className="w-12 sm:w-16 md:w-20 lg:w-[105px]"
            />
          </div>
          <p className="text-[#171717] dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold">
            collection
          </p>
          <p className="text-[#171717] dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold">
            for everyone
          </p>
        </div>

        <Link
          to="/latest-collection"
          className="flex items-center justify-center gap-3 sm:ml-12 sm:gap-4
            w-full sm:w-[250px] md:w-[280px] lg:w-[310px]
            h-14 md:h-[65px] lg:h-[70px]
            rounded-full mt-6 sm:mt-8
            bg-[#ff4141] hover:bg-red-500 text-white
            text-base sm:text-lg md:text-xl lg:text-[22px]
            font-medium cursor-pointer"
        >
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-0">
        <img
          src={hero_image}
          alt=""
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full max-h-[70vh] lg:max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
