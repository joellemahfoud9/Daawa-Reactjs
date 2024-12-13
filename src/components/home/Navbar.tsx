import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { useAtom, useAtomValue } from "jotai";
import { cartItemsAtom } from "../../atoms";

interface Props {
  simpleLogo: boolean;
}

const Navbar = ({ simpleLogo }: Props) => {
  const cartItems = useAtomValue(cartItemsAtom);
  return (
    <nav className="shadow-sm relative">
      <div className="flex justify-between px-8">
        {/* Left side */}
        <div className="w-1/2 flex items-center justify-start space-x-4 text-2xl">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            HOME
          </Link>
          <span className="text-gray-500">|</span>
          <Link to="/services" className="text-gray-700 hover:text-gray-900">
            OUR SERVICES
          </Link>
        </div>

        {/* Centered logo section */}
        {!simpleLogo ? (
          <div className="flex flex-col items-center absolute inset-x-0 mx-auto border px-8 py-10 mt-20 mb-3 bg-white border-black shadow-lg">
            <img
              src="src/assets/Logo/photo_2024-11-05_11-46-48.jpg"
              alt="Company Logo"
              className="h-32"
            />
            <p className="text-gray-500 text-xs border-t border-black pt-5 text-center">
              Wedding Planning & Design
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/Logo/logo.jpg"
              alt="Company Logo"
              className="h-24"
            />
          </div>
        )}

        {/* Right side */}
        <div className="w-1/2 flex items-center justify-end space-x-4 text-2xl">
          <Link to="/planners" className="text-gray-700 hover:text-gray-900">
            WEDDING PLANNERS
          </Link>
          <span className="text-gray-500">|</span>
          {/* <a href="#" className="text-gray-700 hover:text-gray-900">ABOUT US</a> */}

          <div className="flex items-center gap-4">
            {/* Profile Icon */}
            <Link
              to="/profile"
              className="text-gray-700 hover:text-gray-900 px-2"
            >
              <FaUser size={24} />
            </Link>

            {/* Shopping Cart */}
            <Link
              to="/page03"
              className="relative text-gray-700 hover:text-gray-900"
            >
              {cartItems.length !== 0 ? (
                <div className="absolute -top-2 -right-2 bg-amber-600 w-5 h-5 rounded-full text-xs text-white flex items-center justify-center">
                  {cartItems.length}
                </div>
              ) : null}
              <GiShoppingBag size={24} />
              {/* Badge for cart item count */}
              {/* {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartItemCount}
              </span>
              )} */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
