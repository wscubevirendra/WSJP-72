
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MainContext } from "../Context";


const Header = () => {
    const { cart } = useContext(MainContext)
    return (
        <header className="bg-gray-900 text-white shadow-md py-4 px-6 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold ">MyShop</div>
            <Link to="/">
                Listing
            </Link>

            {/* Cart Icon */}
            <Link to="cart">
                <div className="relative">


                    <FaCartShopping className="w-6 h-6 cursor-pointer" />

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                        {cart.length}
                    </span>
                </div>
            </Link>
        </header>
    );
};

export default Header;
