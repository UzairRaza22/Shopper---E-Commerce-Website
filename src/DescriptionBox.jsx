import React from "react";

const DescriptionBox = ({ product }) => {
  return (
    <div className="mx-4 sm:mx-12 md:mx-20 lg:mx-44 my-16 dark:text-white">
      <div className="flex flex-wrap">
        <div className="flex items-center justify-center text-sm sm:text-base font-semibold w-32 sm:w-44 h-12 sm:h-16 border border-gray-300 dark:border-gray-800 ">
          Description
        </div>
      </div>

<div className="flex flex-col gap-8">

  <div className="flex flex-col gap-6 border border-gray-300 dark:border-gray-800 p-6 sm:p-10 text-base sm:text-lg leading-relaxed">
    <p>{product.description}</p>
  </div>
  <div className="flex items-center justify-center text-sm sm:text-base font-semibold w-32 sm:w-44 h-12 sm:h-16 border border-gray-300 dark:border-gray-800 ">
    Reviews
  </div>
</div>

      <div className="border border-gray-300 dark:border-gray-800  p-6 sm:p-10">
        {product.reviews.map((review, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{review.user}</p>
            <p className="text-yellow-500">⭐ {review.rating}/5</p>
            <p className="text-gray-700 dark:text-gray-400">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionBox;
