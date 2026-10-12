import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-full transform transition-transform duration-300 hover:scale-105 flex flex-col items-center p-4 shadow-md">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          onClick={() => window.scrollTo(0, 0)}
          className="w-full h-60 object-cover rounded-md"
        />
      </Link>

      <p className="my-2 dark:text-white text-center text-sm md:text-base lg:text-lg font-medium break-words">
        {props.name}
      </p>

      <div className="flex gap-3 mt-1">
        <div className="text-gray-800 dark:text-gray-300 text-sm md:text-lg font-semibold">
          Rs.{props.new_price}
        </div>
        <div className="text-gray-500 dark:text-gray-600 text-sm md:text-lg font-medium line-through">
          Rs.{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
