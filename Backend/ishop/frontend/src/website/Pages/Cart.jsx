import { useContext, useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { MainContext } from "../../Context";
import { emptyCart } from "../../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { formatPriceINR } from "../../helper";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.data);
  const { getProduct, product, API_BASE_URL } = useContext(MainContext)
  const dispatcher = useDispatch()
  const navigator = useNavigate()

  const isLogin = () => {
    if (user) {
      navigator("/checkout")
    } else {
      navigator("/login?ref=checkout")
    }

  }

  useEffect(
    () => {
      getProduct(null)
    },
    []
  )


  return (
    <div className="max-w-[1300px] mx-auto grid grid-cols-8 gap-6 p-4">

      <div className="bg-white  col-span-6 p-4 rounded-lg shadow-md space-y-4">
        {
          (product.length != 0 && cart.data.length != 0)
          &&
          cart?.data.map(
            (d, i) => {
              const productCart = product.find((item) => item._id === d.productId);
              return (
                <div key={productCart._id} className="flex justify-around items-center border-b pb-4">
                  <img src={API_BASE_URL + "/images/product/" + productCart?.thumbnail} alt={productCart.name} className="w-24 h-24 object-cover rounded" />

                  <h2 className="font-semibold">{productCart.name}</h2>
                  <p className="text-red-500 font-bold"> {formatPriceINR((productCart.finalPrice) * d.qty)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="p-2 border rounded-md hover:bg-gray-200"

                    >
                      <FiMinus />
                    </button>
                    <span className="mx-4">{d.qty}</span>
                    <button
                      className="p-2 border rounded-md hover:bg-gray-200"

                    >
                      <FiPlus />
                    </button>
                  </div>
                  {/* <p className="text-green-600 text-sm mt-2">{item.shipping}</p> */}
                </div>

              )

            }
          )
        }

      </div>

      <div className="mt-6 h-[300px] bg-white col-span-2 p-4 rounded-lg shadow-md border border-green-500">
        <h3 className="font-bold text-lg">Order Summary</h3>
        <div className="flex justify-between mt-2">
          <span>Sub Total:</span>
          <span className="font-semibold">{formatPriceINR(cart?.originalTotal)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Discount</span>
          <span className="font-semibold">{formatPriceINR(cart?.originalTotal - cart?.total)}</span>
        </div>

        <div className="flex justify-between mt-4 border-t pt-2 font-bold">
          <span>ORDER TOTAL:</span>
          <span>{formatPriceINR(cart.total)}</span>
        </div>
        <button onClick={isLogin} className="mt-4 cursor-pointer w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          CHECKOUT
        </button>
      </div>
      <button onClick={() => {
        dispatcher(emptyCart())
      }} className="mt-4 cursor-pointer w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        Emty Cart
      </button>
    </div>

  );
};

export default Cart;
