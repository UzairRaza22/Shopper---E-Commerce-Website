import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext.jsx';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cartItems, all_product, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');

  const discount = Number(localStorage.getItem('discount')) || 0;
  const subTotal = getTotalCartAmount();
  const finalTotal = Math.max(subTotal - discount, 0);

  const handleConfirmOrder = () => {
    if (!phoneNumber || !address || !paymentMethod || !shippingMethod) {
      toast.error("Please Fill Required Fields to Confirm Order");
      return;
    }

    const orderData = { 
      phoneNumber, 
      address, 
      paymentMethod, 
      shippingMethod, 
      cartItems,
      discount, 
      subTotal,
      total: finalTotal
    };

    localStorage.setItem('orderData', JSON.stringify(orderData));
    navigate('/order-confirmation');
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-32 my-12 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="border dark:border-gray-800 p-4 rounded mb-6">
        <h2 className="font-semibold mb-2">Order Summary</h2>
        {all_product.map(product => {
          const item = cartItems[product.id];
          if (item?.quantity > 0) {
            return (
              <div key={product.id} className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                  </div>
                </div>
                <p>{item.quantity} x Rs.{product.new_price} = Rs.{item.quantity * product.new_price}</p>
              </div>
            );
          }
          return null;
        })}
        <hr className="my-2 border dark:border-gray-800" />
        <p className="flex justify-between"><span>Subtotal:</span><span>Rs.{subTotal}</span></p>
        <p className="flex justify-between"><span>Discount:</span><span>- Rs.{discount}</span></p>
        <p className="flex justify-between font-bold"><span>Total:</span><span>Rs.{finalTotal}</span></p>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <label className="font-semibold">Phone Number</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            className="w-full border dark:border-gray-800 p-2 mt-2 rounded dark:bg-black dark:text-white"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="font-semibold">Address</label>
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            className="w-full border dark:border-gray-800  p-2 mt-2 rounded dark:bg-black dark:text-white"
            placeholder="Enter your address"
          />
        </div>

        <div>
          <label className="font-semibold">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={e => setPaymentMethod(e.target.value)}
            className="w-full border dark:border-gray-800 p-2 mt-2 rounded dark:bg-black dark:text-white"
          >
            <option value="">Select Payment</option>
            <option value="Card">Credit/Debit Card</option>
            <option value="COD">Cash on Delivery</option>
            <option value="EasyPaisa/JazzCash">EasyPaisa/JazzCash</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Shipping Method</label>
          <select
            value={shippingMethod}
            onChange={e => setShippingMethod(e.target.value)}
            className="w-full border dark:border-gray-800 p-2 mt-2 rounded dark:bg-black dark:text-white"
          >
            <option value="">Select Shipping</option>
            <option value="Home Delivery">Home Delivery</option>
            <option value="Pick Up">Pick Up</option>
          </select>
        </div>

        <button
          className="w-full md:w-64 h-14 bg-[#ff5a5a] text-white font-semibold rounded hover:bg-red-500 transition"
          onClick={handleConfirmOrder}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
