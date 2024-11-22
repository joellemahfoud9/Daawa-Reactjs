import { useState } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../../../constant/index";
import Navbar from "../../home/Navbar";
import { GiShoppingBag } from "react-icons/gi";
import {
  CharOption,
  Company,
  Dish,
  hasCharOptions,
  hasDishes,
  hasPrice,
} from "../../../models/Company";
import { Review } from "../../../models/Review";

const CompanyDetails = () => {
  const { categoryName, companyId } = useParams();

  const category = servicesData.find(
    (service) => service.serviceName === categoryName
  );
  const company = category?.companies.find(
    (comp) => comp.id === parseInt(companyId!)
  );

  // react hooks should not be called conditionally
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({
    text: "",
    userName: "",
    rating: "",
    location: "",
  });

  if (!company) {
    return <p>Company not found.</p>;
  }

  // removed unused function (handleAddToCart)

  const handleReviewSubmit = () => {
    if (
      newReview.text.trim() &&
      newReview.userName.trim() &&
      newReview.rating.trim() &&
      newReview.location.trim()
    ) {
      setReviews([...reviews, newReview]);
      setNewReview({ text: "", userName: "", rating: "", location: "" });
    }
  };

  return (
    <div>
      <Navbar simpleLogo={true} />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg min-h-screen flex space-x-6">
        {/* Left Section: Image, Name, and Rating */}
        <div className="flex flex-col items-center text-center w-1/3 bg-gray-50 p-4 rounded-lg shadow-md">
          <img
            src={company.imageUrl}
            alt={company.name}
            className="w-58 h-48 object-cover mb-4 border-4 border-gray-200"
          />
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            {company.name}
          </h1>
          <p className="text-yellow-500 font-semibold mb-4">
            Rating: {company.rating} ⭐️
          </p>
          <p className="text-gray-600 font-semibold mb-4">{company.location}</p>
          <p className="text-gray-500 mb-4">{company.description}</p>
        </div>

        {/* Right Section: Details, Dishes/Charter Options, Reviews */}
        <div className="flex-1">
          <div className="p-4 bg-gray-50 rounded-lg shadow-inner mb-4">
            {/* Service Description */}
            <p className="text-sm text-gray-500 mb-4">{company.description}</p>

            {/* Conditional Content Based on Category */}
            {categoryName === "Catering" && hasDishes(company) ? (
              <div>
                <h3 className="text-xl font-semibold mb-4">Dishes Offered</h3>
                <ul className="space-y-2">
                  {company.dishes.map((dish, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700">{dish.name}</span>
                      <span className="text-gray-800 font-bold">
                        ${dish.price.toFixed(2)}
                      </span>
                      <button className="bg-slate-200 px-4 py-3 ml-2">
                        <GiShoppingBag size={24} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : categoryName === "Venous" && hasCharOptions(company) ? (
              <div>
                <h3 className="text-xl font-semibold mb-4">Charter Options</h3>
                <ul className="space-y-2">
                  {company.charOptions.map((char, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700">{char.type}</span>
                      <span className="text-gray-800 font-bold">
                        ${char.price.toFixed(2)}
                      </span>
                      <button className="bg-slate-200 px-4 py-3 ml-2">
                        <GiShoppingBag size={24} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : hasPrice(company) ? (
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Price:</span>
                <span className="text-gray-800 font-bold">
                  ${company.price?.toFixed(2) || "N/A"}
                </span>
                <button className="bg-slate-200 px-4 py-3 ml-2">
                  <GiShoppingBag size={24} />
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Price:</span>
                <span className="text-gray-800 font-bold">N/A</span>
              </div>
            )}
          </div>

          {/* Review Section */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer Reviews
            </h3>

            {/* Review Form */}
            <div className="flex flex-col mb-4 space-y-2">
              <input
                type="text"
                value={newReview.userName}
                onChange={(e) =>
                  setNewReview({ ...newReview, userName: e.target.value })
                }
                placeholder="Your name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newReview.location}
                onChange={(e) =>
                  setNewReview({ ...newReview, location: e.target.value })
                }
                placeholder="Your location"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newReview.rating}
                onChange={(e) =>
                  setNewReview({ ...newReview, rating: e.target.value })
                }
                placeholder="Rating (out of 5)"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={newReview.text}
                onChange={(e) =>
                  setNewReview({ ...newReview, text: e.target.value })
                }
                placeholder="Write your review here..."
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleReviewSubmit}
                className="px-4 py-2 text-white bg-black rounded border border-black"
              >
                Submit
              </button>
            </div>

            {/* Display Reviews */}
            {reviews.length > 0 ? (
              <ul className="space-y-2">
                {reviews.map((review, index) => (
                  <li key={index} className="p-2 bg-gray-100 rounded-lg shadow">
                    <p>
                      <strong>{review.userName}</strong> from {review.location}
                    </p>
                    <p>Rating: {review.rating} ⭐️</p>
                    <p>{review.text}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                No reviews yet. Be the first to review!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
