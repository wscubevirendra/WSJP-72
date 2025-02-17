import { useContext, useState } from "react";
import { MainContext } from "./Context";

const Cart = () => {
  const { cart, qtyHandler } = useContext(MainContext)


  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-md">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div>
                <img src={item.thumbnail} className="w-[80px] h-[50px]" alt="" />
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => qtyHandler(item.id,0)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                <span className="text-lg">{item.qty}</span>
                <button onClick={() => qtyHandler(item.id,1)} className="px-2 py-1 bg-gray-300 rounded">+</button>
              </div>
              <button className="text-red-500">Remove</button>
            </div>
          ))}
          <div className="mt-4 text-right">
            <h3 className="text-xl font-bold">Total:</h3>
            <button className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;