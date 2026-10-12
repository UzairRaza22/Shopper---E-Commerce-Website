import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext.jsx';
import { toast } from 'react-toastify';

const OrderConfirmation = () => {
  const { all_product, cartItems, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const orderData = JSON.parse(localStorage.getItem('orderData'));

  const discount = Number(orderData?.discount) || 0;
  const subTotal = Number(orderData?.subTotal) || 0;
  const shippingFee = orderData?.shippingMethod === "Home Delivery" ? 250 : 0;
  const totalAmount = Math.max(subTotal - discount, 0) + shippingFee;

  const handlePlaceOrder = () => {
    let lastOrderNumber = parseInt(localStorage.getItem('lastOrderNumber') || "0", 10);

    const newOrderNumber = lastOrderNumber + 1;

    localStorage.setItem('lastOrderNumber', newOrderNumber.toString());

    localStorage.setItem('currentOrderNumber', newOrderNumber.toString());

    clearCart();
    localStorage.removeItem('orderData');
    localStorage.removeItem('discount');

    navigate('/thank-you');
    toast.success("Order Placed Successfully");
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-32 my-12 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Order Summary</h1>

      <div className="border dark:border-gray-800 p-4 rounded mb-6">
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
        <hr className="my-2 border dark:border-gray-800"/>
        <p className="flex justify-between"><span>Subtotal:</span><span>Rs.{subTotal}</span></p>
        <p className="flex justify-between"><span>Discount:</span><span>- Rs.{discount}</span></p>
        <p className="flex justify-between"><span>Shipping:</span><span>Rs.{shippingFee}</span></p>
        <p className="flex justify-between font-bold"><span>Total:</span><span>Rs.{totalAmount}</span></p>
      </div>

      <div className="border dark:border-gray-800 p-4 rounded mb-6">
        <h2 className="font-semibold mb-2">Shipping & Payment</h2>
        <p><strong>Phone Number:</strong> {orderData?.phoneNumber}</p>
        <p><strong>Address:</strong> {orderData?.address}</p>
        <p><strong>Payment Method:</strong> {orderData?.paymentMethod}</p>
        <p><strong>Shipping Method:</strong> {orderData?.shippingMethod}</p>
      </div>

      <button
        className="w-full md:w-64 h-14 bg-[#ff5a5a] text-white font-semibold rounded hover:bg-red-500 transition"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderConfirmation;
