import React from 'react';

function ProductCard({ name, image, rating, price}) {
  return (
    <div className="border border-gray-200 rounded-md p-4 text-center">
      <div className="h-48 flex items-center justify-center mb-4">
        {/* Product Image */}
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>

      <h4 className="font-semibold text-gray-800 mb-2">{name}</h4>

      {/* Rating Stars */}
      <div className="text-yellow-500 text-sm mb-2">
        {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
      </div>

      <p className="text-gray-600 font-medium mb-4">${price?.toFixed(2)}</p>

      {/* Show Details Button */}
      <button className="bg-white text-black border border-black px-4 py-2 mt-2">
        Show Details
      </button>
    </div>
  );
}

export default ProductCard;
