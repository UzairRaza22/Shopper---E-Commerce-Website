import React, { useContext, useState } from "react";
import star_icon from "./assets/star_icon.png";
import { ShopContext } from "./Context/ShopContext";
import { toast } from "react-toastify";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart!");
      return;
    }
    if (quantity < 1) {
      toast.error("Quantity must be at least 1!");
      return;
    }
    addToCart(product.id, selectedSize, quantity);
    toast.success(`${quantity} item(s) Added to Cart`);
    setQuantity(1); // reset after adding
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case "women":
        return "Women";
      case "men":
        return "Men";
      case "kid":
        return "Kids";
      default:
        return "Uncategorized";
    }
  };

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-16 py-8 gap-8">
      {/* Left Section (Images) */}
      <div className="flex gap-4 w-full md:w-auto">
        <div className="flex flex-row md:flex-col gap-2 md:gap-4 overflow-x-auto md:overflow-visible">
          {[0, 1, 2, 3].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt={`small-${i}`}
              className="h-24 md:h-[163px] w-24 md:w-auto object-cover rounded-md flex-shrink-0"
            />
          ))}
        </div>

        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md md:w-[586px] h-auto md:h-[700px] object-cover rounded-md"
          />
        </div>
      </div>

      {/* Right Section (Details) */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-[#3d3d3d] dark:text-gray-300 text-2xl sm:text-3xl md:text-4xl font-bold">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center mt-3 gap-1 text-[#1c1c1c] dark:text-gray-300 text-sm sm:text-base">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={star_icon} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
          ))}
          <p className="ml-2 text-sm sm:text-base">(2)</p>
        </div>

        {/* Price */}
        <div className="flex gap-4 sm:gap-8 my-6 text-xl sm:text-2xl font-bold">
          <div className="text-gray-400 dark:text-gray-700 line-through">Rs.{product.old_price}</div>
          <div className="text-[#f14141]">Rs.{product.new_price}</div>
        </div>

        {/* Description */}
        <p className="text-[#444] dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          Made with premium quality fabric, this stylish and comfortable piece
          is perfect for everyday wear. Designed with a modern fit and durable
          stitching, it combines comfort, quality, and timeless style.
        </p>

       {/* Size + Quantity */}
<div className="mt-8">
  <div className="flex gap-72 items-center">
    <h2 className="text-[#656565] dark:text-gray-400 text-base sm:text-lg font-semibold">
      Select Size
    </h2>
    <h2 className="text-[#656565] dark:text-gray-400 text-base sm:text-lg font-semibold">
      Quantity
    </h2>
  </div>

  <div className="flex items-start mt-4 gap-6">
    {/* Sizes */}
    <div className="flex flex-wrap gap-3">
      {["XS", "S", "M", "L", "XL"].map((size) => (
        <div
          key={size}
          className={`px-4 py-2 border rounded cursor-pointer text-sm sm:text-base
            ${
              selectedSize === size
                ? "bg-[#ff4141] text-white border-[#ff4141]"
                : "text-black dark:text-white bg-[#fbfbfb] border-[#ebebeb] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-900"
            }`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </div>
      ))}
    </div>

    {/* Quantity input */}
    <div className="ml-12">
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-20 px-2 py-2 border rounded text-center text-sm sm:text-base dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      />
    </div>
  </div>
</div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-6 px-8 py-3 w-full sm:w-56 text-white font-semibold text-base bg-[#ff4141] rounded-md hover:bg-red-500 transition"
        >
          ADD TO CART
        </button>

        {/* Category + Tags */}
        <div className="mt-4 text-sm sm:text-base dark:text-white">
          <p className="mt-1">
            <span className="font-semibold">Category: </span>
            {getCategoryLabel(product.category)}, T-Shirt, Crop Top
          </p>
          <p className="mt-1">
            <span className="font-semibold">Tags: </span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
