import React from 'react'
import Item from '../Item.jsx'
import latest_collections from '../assets/latest_collections.js'

const LatestCollection = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-12">
      <h1 className="text-[#171717] dark:text-white text-5xl font-semibold">NEW COLLECTIONS</h1>
      <hr className="w-52 h-1.5 rounded-xl bg-[#252525] dark:bg-white" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {latest_collections.map((item, i) => (
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
export default LatestCollection
