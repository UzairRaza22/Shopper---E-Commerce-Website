import React, { createContext, useState, useEffect } from 'react'
import all_product from '../assets/all_product.js'
import { toast } from 'react-toastify'

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cartItems")
      const parsed = savedCart ? JSON.parse(savedCart) : []
      return Array.isArray(parsed) ? parsed : [] 
    } catch (e) {
      return [] 
    }
  })

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

const addToCart = (itemId, size, quantity = 1) => {
  if (!size) return;

  setCartItems((prev) => {
    const existingIndex = prev.findIndex(
      (item) => item.id === itemId && item.size === size
    );

    if (existingIndex !== -1) {
      return prev.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      return [...prev, { id: itemId, size, quantity }];
    }
  });
};


  const removeFromCart = (itemId, size) => {
    setCartItems((prev) => {
      return prev
        .map((item) =>
          item.id === itemId && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    })
    toast.error("Removed From Cart")
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem("cartItems")
  }

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      const product = all_product.find((p) => p.id === item.id)
      return product ? total + product.new_price * item.quantity : total
    }, 0)
  }

  const getTotalCartItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }

  const contextValue = {
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCartItems,
    getTotalCartAmount,
    cartItems,
    all_product,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
