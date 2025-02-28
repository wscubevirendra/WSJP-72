import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">ShopEase</h1>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 pl-10 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          <FaUser className="text-xl text-gray-700 cursor-pointer hover:text-blue-500" />
          <div className="relative">
            <FaShoppingCart className="text-xl text-gray-700 cursor-pointer hover:text-blue-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">3</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
