import React from "react";
import { useNavigate } from "react-router-dom";
import exclusive_image from "./assets/exclusive_image.png";

const Offers = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#fde1ff] dark:bg-[#080808] py-12 px-4 md:px-16 lg:px-32 mb-24 flex flex-col lg:flex-row items-center gap-8">
      
      <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-[#171717] dark:text-white text-4xl sm:text-5xl md:text-6xl font-semibold">
          Exclusive
        </h1>
        <h1 className="text-[#171717] dark:text-white text-4xl sm:text-5xl md:text-6xl font-semibold">
          Offers For You
        </h1>
        <p className="text-[#171717] dark:text-white text-base sm:text-lg md:text-xl font-semibold mt-4">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button 
          onClick={() => navigate("/offers-details")}
          className="mt-6 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#ff4141] text-white text-base sm:text-lg md:text-xl font-medium hover:bg-red-500 transition"
        >
          Check Now
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center lg:justify-end -mb-12">
        <img 
          src={exclusive_image} 
          alt="exclusive offers" 
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Offers;
