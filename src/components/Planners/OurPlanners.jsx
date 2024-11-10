import React from 'react';
import {planners} from "../../constant/index";

const Planners = () => {
  return (
    <div className=" py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">Unforgettable Moments Crafted by Our Expert Wedding Planners</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {planners.map((planner, index) => (
          <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex flex-col items-center">
              <img
                src={planner.image}
                alt={planner.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{planner.name}</h3>
              <p className="text-gray-500">{planner.role}</p>
              <div className="flex my-2">
                {[...Array(planner.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-center text-gray-600 mb-4">{planner.text}</p>
              <button
                onClick={() => handleShowDetails(planner.name)}
                className="text-black font-semibold py-2 px-4 rounded border border-black"
              >
                Show Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planners;
