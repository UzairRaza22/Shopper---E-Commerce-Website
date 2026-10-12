import React from 'react'
import data_product from './assets/data.js'
import Item from './Item.jsx'

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-16 px-4 md:px-16 bg-white dark:bg-black">
      <h1 className="text-[#171717] dark:text-white text-3xl md:text-5xl font-semibold text-center">
        POPULAR
      </h1>
      <hr className="w-32 md:w-48 h-1 md:h-2 rounded-[10px] bg-[#252525] dark:bg-white" />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-12 dark:text-white">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
