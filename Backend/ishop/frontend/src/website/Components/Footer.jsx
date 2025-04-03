import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 py-10 text-gray-700">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold">SWOO - 1ST NYC TECH ONLINE MARKET</h2>
            <p className="mt-3">HOTLINE 24/7</p>
            <p className="text-red-500 text-xl font-bold">(025) 3686 25 16</p>
            <p className="mt-2">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
            <p className="mt-1">contact@Swootechmart.com</p>
            <div className="flex space-x-4 mt-4 text-xl">
              <FaTwitter className="hover:text-blue-500 cursor-pointer" />
              <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
              <FaInstagram className="hover:text-pink-600 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
              <FaPinterest className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg">TOP CATEGORIES</h3>
            <ul className="mt-3 space-y-2">
              {["Laptops", "PC & Computers", "Cell Phones", "Tablets", "Gaming & VR", "Networks", "Cameras", "Sounds", "Office"].map((item, index) => (
                <li key={index} className="hover:text-blue-500 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg">COMPANY</h3>
            <ul className="mt-3 space-y-2">
              {["About Swoo", "Contact", "Career", "Blog", "Sitemap", "Store Locations"].map((item, index) => (
                <li key={index} className="hover:text-blue-500 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="font-semibold text-lg">HELP CENTER</h3>
            <ul className="mt-3 space-y-2">
              {["Customer Service", "Policy", "Terms & Conditions", "Track Order", "FAQs", "My Account", "Product Support"].map((item, index) => (
                <li key={index} className="hover:text-blue-500 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-10 text-center border-t pt-6">
          <h3 className="text-lg font-semibold">SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER</h3>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 w-72 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-md">SUBSCRIBE</button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between text-center text-gray-600">
          <p>&copy; 2024 <span className="font-bold">Shawonetc3</span>. All Rights Reserved</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <span>USD</span>
            <span>Eng</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
