import React from "react";
import data_product from "./assets/data.js";
import Item from "./Item.jsx";

const RelatedProducts = ({ category, currentId }) => {
  const related = data_product.filter(
    (item) => item.category === category && item.id !== currentId
  );

  return (
    <div className="flex flex-col items-center gap-6 py-10 px-4 md:px-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] dark:text-white text-center">
        Related Products
      </h1>
      <hr className="w-32 md:w-48 h-1 md:h-2 rounded-lg bg-[#252525] dark:bg-white border-0" />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {related.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
