import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { useAtom, useAtomValue } from "jotai";
import { cartItemsAtom } from "../../atoms";

const Navbar = () => {
  const cartItems = useAtomValue(cartItemsAtom);
  return (
    <nav className="shadow-sm relative">
      <div className="flex px-10">
        {/* Left side */}
        <div className="w-1/2 flex items-center justify-start space-x-4 text-2xl">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            HOME
          </Link>
          <span className="text-gray-500">|</span>
          <Link to="/page01" className="text-gray-700 hover:text-gray-900">
            OUR SERVICES
          </Link>
        </div>

          <div className="flex flex-col items-center">
            <img
              src="/src/assets/Logo/logo.jpg"
              alt="Company Logo"
              className="h-24"
            />
          </div>
       

        {/* Right side */}
        <div className="w-1/2 flex items-center justify-end space-x-4 text-2xl">
          <Link to="/collection" className="text-gray-700 hover:text-gray-900">
          OUR COLLECTION
          </Link>
          <span className="text-gray-500">|</span>
           
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
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
