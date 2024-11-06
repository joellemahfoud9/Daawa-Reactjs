import React from 'react';
import { packages } from '../../constant';

const Packages = () => {
    return (
      <div className="flex flex-col items-center py-12 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">SELECT YOUR COLLECTION</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-4">{pkg.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
              </div>
              <button className="w-full py-3 bg-gray-100 border-t border-gray-200 text-gray-800 font-semibold hover:bg-gray-200 transition">
                View Package Details
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Packages;