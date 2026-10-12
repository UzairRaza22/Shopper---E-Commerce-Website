import React from "react";
import arrow_icon from "./assets/breadcrum_arrow.png";

const Breadcrum = ({ product }) => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-6 bg-white dark:bg-black">
      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[#5e5e5e] dark:text-gray-300 text-xs sm:text-sm md:text-base font-semibold capitalize justify-start">
        <span>HOME</span>
        <img src={arrow_icon} alt="arrow" className="w-2 sm:w-3" />

        <span>SHOP</span>
        <img src={arrow_icon} alt="arrow" className="w-2 sm:w-3" />

        <span>{product.category}</span>
        <img src={arrow_icon} alt="arrow" className="w-2 sm:w-3" />

        <span>{product.name}</span>
      </div>
    </div>
  );
};

export default Breadcrum;
