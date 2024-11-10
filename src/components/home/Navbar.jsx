import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser  } from 'react-icons/fa';
import { GiShoppingBag } from "react-icons/gi";

const Navbar = ({ simpleLogo }) => {
  return (
    <nav className=" py-4 shadow-sm relative">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left side */}
        <div className="flex items-center space-x-4 text-2xl">
          <Link to='/' className="text-gray-700 hover:text-gray-900">HOME</Link>
          <span className="text-gray-500">|</span>
          <Link to='/services' className="text-gray-700 hover:text-gray-900">OUR SERVICES</Link>
        </div>

        {/* Centered logo section */}
        {!simpleLogo ? (
          <div className="flex flex-col items-center absolute inset-x-0 mx-auto w-[50%] lg:w-[30%] border px-8 py-10 mt-20 mb-3 bg-white border-black shadow-lg">
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
          <div className="flex flex-col items-center w-[50%] lg:w-[30%] ">
         
            <img 
              src="src/assets/Logo/logo.jpg"
              alt="Company Logo"
              className="h-24"
            />
          </div>
        )}

        {/* Right side */}
        <div className="flex items-center space-x-4 text-2xl">
          <Link to="/planners" className="text-gray-700 hover:text-gray-900">WEDDING PLANNERS</Link>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-gray-700 hover:text-gray-900">ABOUT US</a>
        </div>

          {/* Profile Icon */}
        <Link to="/profile" className="text-gray-700 hover:text-gray-900">
            <FaUser size={24} />
          </Link>

        {/* Shopping Cart */}
        <Link to="/cart" className="relative text-gray-700 hover:text-gray-900">
            <GiShoppingBag size={24} />
            {/* Badge for cart item count */}
            {/* {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )} */}
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
