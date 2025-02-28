import { FaShoppingCart, FaUser, FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const ProductCard = () => {

  const productData = [
    {
      image: "https://via.placeholder.com/150",
      title: "Product 1",
      price: 29.99
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 2",
      price: 39.99
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 3",
      price: 49.99
    }
  ];
  return (
    <div className="container mx-auto grid grid-cols-3">
      {
        productData.map((d, i) => {
          return (
            <div className="border rounded-lg shadow-md p-4 text-center">
              <img src={d.image} alt={d.title} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h2 className="text-lg font-bold">{d.title}</h2>
              <p className="text-gray-700 font-semibold">${d.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          )
        })
      }
    </div>
  );

};







export default ProductCard
