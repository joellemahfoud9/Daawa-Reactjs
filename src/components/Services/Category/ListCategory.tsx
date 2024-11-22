import { useParams } from "react-router-dom";
import { servicesData } from "../../../constant/index";
import { Link } from "react-router-dom";
import { hasCharOptions, hasDishes, hasPrice } from "../../../models/Company";

function ListCategory() {
  const { categoryName } = useParams();

  const category = servicesData.find(
    (service) => service.serviceName === categoryName
  );

  if (!category) {
    return <div className="text-center p-6">Category not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-8">
        {category.serviceName}
      </h2>

      {/* Company Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {category.companies.map((company) => (
          <div
            key={company.id}
            className="border border-gray-200 rounded-md p-4 text-center"
          >
            <div className="h-48 flex items-center justify-center mb-4">
              <img
                src={company.imageUrl}
                alt={company.name}
                className="h-full w-full object-contain"
              />
            </div>

            <h4 className="font-semibold text-gray-800 mb-2">{company.name}</h4>

            {/* Rating */}
            <div className="text-yellow-500 text-sm mb-2">
              {"★".repeat(company.rating) + "☆".repeat(5 - company.rating)}
            </div>

            {/* Render different details based on category type */}
            {category.serviceName === "Catering" && hasDishes(company) ? (
              <div className="text-left">
                <h5 className="font-semibold mb-2">Dishes Offered:</h5>
                {company.dishes.map((dish, index) => (
                  <p key={index} className="text-gray-600 mb-1">
                    {dish.name}: ${dish.price.toFixed(2)}
                  </p>
                ))}
              </div>
            ) : category.serviceName === "Venous" && hasCharOptions(company) ? (
              <div className="text-left">
                <h5 className="font-semibold mb-2">Charter Options:</h5>
                {company.charOptions.map((option, index) => (
                  <p key={index} className="text-gray-600 mb-1">
                    {option.type}: ${option.price.toFixed(2)}
                  </p>
                ))}
              </div>
            ) : hasPrice(company) ? (
              <p className="text-gray-600 font-medium mb-4">
                ${company.price?.toFixed(2)}
              </p>
            ) : (
              <p className="text-gray-600 font-medium mb-4">$N/A</p>
            )}

            {/* show details Button */}
            <Link to={`/category/${category.serviceName}/${company.id}`}>
              <button className=" px-4 py-2 mt-4 border border-black">
                Show Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListCategory;
