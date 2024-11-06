import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4 shadow-sm relative">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left side */}
        <div className="flex items-center space-x-4 text-2xl">
          <Link to='/' className="text-gray-700 hover:text-gray-900">HOME</Link>
          <span className="text-gray-500">|</span>
          <Link to='/services' className="text-gray-700 hover:text-gray-900">OUR SERVICES</Link>
        </div>

        {/* Centered logo section */}
        <div className="flex flex-col items-center absolute inset-x-0 mx-auto w-[50%] lg:w-[30%] border px-8 py-10 mt-20 mb-3 bg-white border-black shadow-lg">
          <img 
            src="src/assets/Logo/photo_2024-11-05_11-46-48.jpg"
            alt="Company Logo"
            className="h-32"
          />
          <p className="text-gray-500 text-xs border-t border-black pt-5 text-center">Wedding Planning & Design</p>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4 text-2xl">
          <a href="#" className="text-gray-700 hover:text-gray-900">CONNECT</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-gray-700 hover:text-gray-900">DASHBOARD</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
