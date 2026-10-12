import React, { useContext, useState } from 'react'
import { ShopContext } from './Context/ShopContext.jsx'
import remove_icon from './assets/cart_cross_icon.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, clearCart } = useContext(ShopContext)
  const navigate = useNavigate()

  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const promoCodes = {
    SAVE200: 200,
    SAVE350: 350,
    SAVE500: 500,
    SAVE1000: 1000,
    SAVE1300: 1300,
  }

  const handleApplyPromo = () => {
    const enteredCode = promoCode.trim().toUpperCase()
    if (promoCodes[enteredCode]) {
      setDiscount(promoCodes[enteredCode])
      localStorage.setItem('discount', promoCodes[enteredCode])   
      toast.success(`Promo Code Applied! Discount Rs.${promoCodes[enteredCode]}`)
    } else {
      setDiscount(0)
      localStorage.removeItem('discount') 
      toast.error("Invalid Promo Code!")
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">Your Cart is Empty 🛒</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Looks like you haven’t added anything yet.</p>
      </div>
    )
  }

  const subTotal = getTotalCartAmount()
  const finalTotal = Math.max(subTotal - discount, 0)

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-32 my-12 bg-white dark:bg-black min-h-[100vh] pb-20">
      {/* Title & Clear Cart Button */}
      <div className="flex justify-between items-center py-6">
        <h1 className="text-black dark:text-white text-3xl md:text-4xl font-bold">Your Cart</h1>
        <button
          onClick={() => {
            clearCart()
          }}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
        >
          Clear Cart
        </button>
      </div>

      {/* Table Headers */}
      <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 py-4 text-[#454545] dark:text-gray-400 text-lg font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="hidden md:block h-[2px] bg-[#e2e2e2] dark:bg-gray-800 border-0" />

      {/* Cart Items */}
      {cartItems.map((item, index) => {
        const product = all_product.find((p) => p.id === item.id)
        if (!product) return null
        return (
          <div key={index} className="py-4">
            <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 text-[#454545] dark:text-gray-400 text-base font-medium">
              <img className="h-16" src={product.image} alt="" />
              <div>
                <p>{product.name}</p>
                <p className="text-gray-500 dark:text-gray-700 text-sm">Size: {item.size}</p>
              </div>
              <p>Rs.{product.new_price}</p>
              <button className="w-16 h-12 border-2 border-[#ebebeb] dark:border-gray-900 bg-white dark:bg-black">
                {item.quantity}
              </button>
              <p>Rs.{product.new_price * item.quantity}</p>
              <img
                className="w-5 cursor-pointer"
                src={remove_icon}
                onClick={() => removeFromCart(item.id, item.size)}
                alt="Remove"
              />
            </div>

            {/* Mobile View */}
            <div className="flex flex-col md:hidden gap-3 text-[#454545] text-sm sm:text-base font-medium border-b border-[#e2e2e2] dark:border-gray-800 pb-4">
              <div className="flex justify-between items-center">
                <img className="h-16 w-16 object-cover rounded" src={product.image} alt="" />
                <img
                  className="w-5 cursor-pointer"
                  src={remove_icon}
                  onClick={() => removeFromCart(item.id, item.size)}
                  alt="Remove"
                />
              </div>
              <p className="font-semibold dark:text-gray-400">{product.name}</p>
              <p className="text-gray-500 text-sm">Size: {item.size}</p>
              <div className="flex justify-between">
                <p className="text-gray-500">Price</p>
                <p>Rs.{product.new_price}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-500">Quantity</p>
                <button className="w-14 h-10 border-2 border-[#ebebeb] dark:border-gray-800 dark:bg-black bg-white">
                  {item.quantity}
                </button>
              </div>
              <div className="flex justify-between font-semibold dark:text-gray-400">
                <p>Total</p>
                <p>Rs.{product.new_price * item.quantity}</p>
              </div>
            </div>
          </div>
        )
      })}

      {/* Cart Totals */}
      <div className="flex flex-col lg:flex-row gap-10 mt-12 dark:text-white">
        <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
          <h1 className="text-2xl font-bold">Cart Totals</h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between py-2">
              <p>SubTotal</p>
              <p>Rs.{subTotal}</p>
            </div>
            <hr className="h-[1px] bg-[#e2e2e2] dark:bg-gray-800 border-0" />
            <div className="flex justify-between py-2">
              <p>Discount</p>
              <p>- Rs.{discount}</p>
            </div>
            <hr className="h-[1px] bg-[#e2e2e2] dark:bg-gray-800 border-0" />
            <div className="flex justify-between py-2 font-semibold text-lg">
              <h3>Total</h3>
              <h3>Rs.{finalTotal}</h3>
            </div>
          </div>

          <button
            className="w-full md:w-64 h-14 bg-[#ff5a5a] text-white font-semibold text-base cursor-pointer rounded hover:bg-red-500 transition"
            onClick={() => navigate('/checkout')}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code Section */}
        <div className="flex-1 flex flex-col gap-4 order-1 lg:order-2 lg:mt-16">
          <p className="text-[#555] dark:text-gray-300">If you have a promo code, enter it here</p>
          <div className="flex flex-col sm:flex-row items-center w-full sm:max-w-md bg-[#eaeaea] rounded overflow-hidden">
            <input
              type="text"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 px-4 py-3 text-base outline-none border border-gray-300 dark:border-gray-800 dark:bg-black dark:text-white"
            />
            <button
              onClick={handleApplyPromo}
              className="w-full sm:w-40 h-12 border-none bg-black dark:bg-white text-white dark:text-black cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-300 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
