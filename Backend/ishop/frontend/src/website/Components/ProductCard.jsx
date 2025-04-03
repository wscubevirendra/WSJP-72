import { useContext } from "react";
import { MainContext } from "../../Context";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import axios from "axios";

export default function ProductCard({ product }) {
  const { API_BASE_URL, USER_URL } = useContext(MainContext);
  const user = useSelector((state) => state.user.data);
  const dispatcher = useDispatch();

  function addtoCart(data) {
    if (user != null) {
      axios.post(API_BASE_URL + USER_URL + "/add-to-cart", {
        userId: user._id,
        productId: data.productId
      })

    }

    dispatcher(addToCart(data))

  }


  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden p-4">
      <img src={API_BASE_URL + "/images/product/" + product?.thumbnail} alt={product?.name} className="w-full h-48 object-cover rounded-xl" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{product?.name}</h3>
        <div className="flex items-center justify-around gap-2 mt-2">
          <span className="text-gray-400 line-through">₹{product?.originalPrice}</span>
          <span className="text-gray-400 font-bold">{product?.discountPercentage}%</span>
          <p className="text-green-500 font-bold">₹{product?.finalPrice}</p>
          <div className="flex gap-2">
            {
              product?.colors.map((color, index) => {
                return (
                  <span key={index} style={{ background: color.colorCode }} className="w-2 h-2 rounded-full"></span>
                )
              })
            }

          </div>
        </div>

        <button onClick={() => {
          addtoCart(
            {
              productId: product._id,
              finalPrice: product.finalPrice,
              originalPrice: product.originalPrice

            }
          )
        }} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
