import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { cartItemsAtom } from "../../atoms";

const CartPage = () => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  console.log(cartItems);

  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className="w-full max-w-2xl p-6  shadow-lg">
          <h1 className="text-2xl font-semibold  text-center">
            Shopping Cart
          </h1>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4 max-sm:flex-col"
              >
                <div className="min-w-72 flex items-center sm:space-x-4 max-sm:flex-col">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded"
                  />
                  <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                    <h2 className="font-medium">{item.name}</h2>
                  </div>
                </div>
                <div className="flex items-center text-primary gap-4 text-center max-sm:flex-col max-sm:gap-0">
                  {/* <p>${item.price}.00</p> */}
                  <input
                    type="number"
                    className="border  dark:text-black w-12 text-center rounded mx-2"
                    min="1"
                  />
                </div>
                <button
                  onClick={() =>
                    setCartItems(
                      cartItems.filter((prev) => prev.id !== item.id)
                    )
                  }
                  className="text-red-500 font-semibold hover:underline sm:ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-gray-700">Total</span>
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 mt-6 font-semibold rounded">
            Proceed To Checkout
          </button>

          <div className="flex justify-center space-x-4 mt-6 text-sm text-gray-600 flex-wrap">
            <a href="#policy">Policy</a>
            <a href="#terms">Terms</a>
            <a href="#faq">FAQ</a>
            <a href="#support">Support</a>
          </div>

          <div className="flex justify-center space-x-4 mt-4 text-sm text-gray-600 flex-wrap">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
            <a href="#youtube">YouTube</a>
          </div>
        </div>
      </div>
      </div>
  );
};

export default CartPage;
