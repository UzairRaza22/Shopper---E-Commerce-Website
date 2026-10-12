import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import Item from '../Item.jsx'

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext)
  const [visibleCount, setVisibleCount] = useState(8)

  const filteredProducts = all_product.filter(item => item.category === category)

  useEffect(() => {
    setVisibleCount(8)
  }, [category])

  const handleExploreMore = () => {
    setVisibleCount(filteredProducts.length)
  }

  return (
    <div className="shop-category bg-white dark:bg-black min-h-[100vh] pb-20">
      <div className="w-full overflow-hidden">
        <img
          className="w-full h-auto max-h-[60vh] md:max-h-[60vh] lg:max-h-[50vh] xl:max-h-[60vh] object-contain"
          src={banner}
          alt={`${category} banner`}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 lg:px-32 mt-6 gap-4">
        <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
          <span className="font-semibold">
            Showing 1-{Math.min(visibleCount, filteredProducts.length)}
          </span>{" "}
          out of {filteredProducts.length} products
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {filteredProducts.slice(0, visibleCount).map((item, i) => (
          <div key={i} className="p-4">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center my-12">
          <button
            onClick={handleExploreMore}
            className="w-56 h-16 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-100 text-lg font-medium hover:bg-gray-300 transition"
          >
            Explore More
          </button>
        </div>
      )}
    </div>
  )
}

export default ShopCategory
