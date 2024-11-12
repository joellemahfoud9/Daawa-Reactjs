import React from 'react';
import { useLocation } from 'react-router-dom';

const WeddingPlannerCard = () => {
  const location = useLocation();
  const plannerData = location.state?.plannerData;

  if (!plannerData) {
    return <div>No planner data found.</div>;
  }

  return (
    <div className="flex justify-center items-start min-h-screen p-8">
      <div className="flex flex-wrap max-w-screen-xl mx-auto  p-4 gap-8">
        
        {/* Left Side - Planner Details */}
        <div className="flex-1 max-w-sm bg-white shadow-lg rounded-lg p-6">
          {/* Header */}
          <div className="flex items-center space-x-4">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={plannerData.photo}
              alt="Wedding Planner"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{plannerData.name}</h2>
              <p className="text-gray-600">{plannerData.price}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-6 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
            <p className="text-sm text-gray-600">
              Phone: <a href={`tel:${plannerData.phone}`} className="text-blue-600">{plannerData.phone}</a>
            </p>
          </div>

          {/* Previous Work Section */}
          <div className="mt-6 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Previous Work</h3>
            <div className="grid grid-cols-3 gap-4">
              {plannerData.previousWorks.map((work) => (
                <div key={work.id} className="flex flex-col items-center">
                  <img
                    className="w-28 h-28 object-cover rounded-md"
                    src={work.image}
                    alt={work.title}
                  />
                  <p className="text-sm text-gray-600 mt-2">{work.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Calendar Schedule */}
        <div className="flex-1 max-w-lg bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Schedule</h3>
          <div className="grid grid-cols-7 gap-3">
            {Object.keys(plannerData.schedule).map((day, index) => (
              <div
                key={index}
                className={`p-4 h-24 flex flex-col justify-between items-center text-sm border ${
                  plannerData.schedule[day] === "Closed" ? "bg-gray-200" : "bg-white"
                }`}
              >
                <div className="font-semibold">{day}</div>
                <div className="text-xs text-center text-gray-600">
                  {plannerData.schedule[day] || "Closed"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingPlannerCard;
