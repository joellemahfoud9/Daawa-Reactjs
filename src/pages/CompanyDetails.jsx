import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../constant/index';
import { FaCartPlus } from 'react-icons/fa';

const CompanyDetails = () => {
  const { categoryName, companyId } = useParams();

  // Find the specific category and company
  const category = servicesData.find(service => service.serviceName === categoryName);
  const company = category?.companies.find(comp => comp.id === parseInt(companyId));

  if (!company) {
    return <p>Company not found.</p>;
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", company);
    // Implement cart addition logic
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{company.name} - Details</h1>
      <img src={company.imageUrl} alt={company.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-700 mb-4">Rating: {company.rating} ⭐</p>

      {categoryName === 'Catering' && company.dishes ? (
        <div>
          <h3 className="text-lg font-bold mb-2">Dishes Offered:</h3>
          <ul className="list-disc ml-5">
            {company.dishes.map((dish, index) => (
              <li key={index} className="flex items-center">
                {dish.name} - ${dish.price.toFixed(2)}
                <button
                  onClick={() => handleAddToCart(dish)}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  <FaCartPlus />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : categoryName === 'Venous' && company.charOptions ? (
        <div>
          <h3 className="text-lg font-bold mb-2">Charter Options:</h3>
          <ul className="list-disc ml-5">
            {company.charOptions.map((char, index) => (
              <li key={index} className="flex items-center">
                {char.type} - ${char.price.toFixed(2)}
                <button
                  onClick={() => handleAddToCart(char)}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  <FaCartPlus />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex items-center">
          <p className="text-gray-700 mb-4">Price: ${company.price?.toFixed(2) || 'N/A'}</p>
          <button
            onClick={() => handleAddToCart(company)}
            className="ml-2 text-blue-500 hover:text-blue-700"
          >
            <FaCartPlus />
          </button>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;
