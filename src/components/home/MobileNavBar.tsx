import { useAtomValue } from "jotai";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { cartItemsAtom } from "../../atoms";

const MobileNavBar = () => {
  const [isShown, setIsShown] = useState(false);
  const cartItems = useAtomValue(cartItemsAtom);
  return (
    <>
      <div className="w-full h-24 flex justify-between items-center px-4 shadow">
        <img className="h-full" src="src/assets/Logo/logo.jpg" />
        <MdMenu className="scale-150" onClick={() => setIsShown(!isShown)} />
      </div>

      <nav className={`shadow-sm p-4 ${isShown ? "" : "hidden"}`}>
        <div className="flex flex-col gap-4 items-center">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            HOME
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-gray-900">
            OUR SERVICES
          </Link>

          <Link to="/planners" className="text-gray-700 hover:text-gray-900">
            WEDDING PLANNERS
          </Link>

          <div className="flex items-center gap-4">
            {/* Profile Icon */}
            <Link to="/profile" className="text-gray-700 hover:text-gray-900">
              <FaUser size={24} />
            </Link>

            {/* Shopping Cart */}
            <Link
              to="/cart"
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
    </>
  );
};

export default MobileNavBar;
