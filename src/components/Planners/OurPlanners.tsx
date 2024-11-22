import { useNavigate } from "react-router-dom";
import { planners } from "../../constant/index";
import { Planner } from "../../models - temp/Planner";

const Planners = () => {
  const navigate = useNavigate();

  const handleShowDetails = (planner: Planner) => {
    navigate(`/planner/${planner.id}`, { state: { plannerData: planner } });
  };

  return (
    <div className="py-12 px-4">
      <h2 className="text-center text-4xl font-bold mb-12 max-sm:text-base">
        Unforgettable Moments Crafted by Our Expert Wedding Planners
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {planners.map((planner, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={planner.photo}
                alt={planner.name}
                className="w-32 h-32 rounded-full mb-6 object-cover shadow-md"
              />
              <h3 className="text-2xl font-semibold mb-2">{planner.name}</h3>
              <p className="text-lg text-gray-500 mb-2">{planner.phone}</p>
              <p className="text-lg text-gray-700 font-bold mb-6">
                {planner.price}
              </p>
              <button
                onClick={() => handleShowDetails(planner)}
                className="text-white font-semibold py-3 px-6 rounded-full bg-black transition-colors"
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
