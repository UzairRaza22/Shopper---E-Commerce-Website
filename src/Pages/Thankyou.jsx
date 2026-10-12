import React, { useEffect, useState } from "react";

const ThankYou = () => {
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    const currentOrder = localStorage.getItem("currentOrderNumber");
    if (currentOrder) {
      setOrderNumber(`#${String(currentOrder).padStart(6, "0")}`);
    }
  }, []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold dark:text-white text-black mb-4">
        Thank You for Shopping! 🎉
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
        Your order has been successfully placed.
      </p>
      {orderNumber && (
        <p className="text-lg font-semibold text-black dark:text-white mt-2">
          Order Number: <span className="text-[#ff5a5a]">{orderNumber}</span>
        </p>
      )}
    </div>
  );
};

export default ThankYou;
