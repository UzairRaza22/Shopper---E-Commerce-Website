import React from "react";

const OffersDetails = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-pink-100 dark:bg-[#080808] px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-[#171717] dark:text-white text-center">
        Invite Friends & Get 70% OFF 🎉
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-400 text-center max-w-2xl">
        Share the love! Invite your friends to shop with us, and enjoy a huge 
        <span className="font-bold text-[#ff4141]"> 70% discount</span> on your next order.
      </p>
      <button className="mt-8 px-8 py-3 rounded-full bg-[#ff4141] text-white text-lg font-medium hover:bg-red-500 transition">
        Invite Friends
      </button>
    </div>
  );
};

export default OffersDetails;
