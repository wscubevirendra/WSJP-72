import { FaShoppingCart, FaUser, FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <FaFacebook className="text-xl cursor-pointer hover:text-blue-500" />
                    <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
                    <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
                </div>
            </div>
        </footer>
    );
};

export default Footer