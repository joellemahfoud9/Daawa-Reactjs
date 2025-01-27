import { Link } from "react-router-dom";
import BusinessCard from "../../components/Admin/BusinessCard";
import useGetData from "../../hooks/useGetData";
import { Category } from "../../models/Business";


const CategoriesBusinesses = () => {
  const { isLoading, error, data } = useGetData<{ data: Category[] }>(
    "categories/businesses"
  );
  return (
    <main className="p-page">
       <input
          type="text"
          placeholder="Search for services or companies..."
          className="w-full md:w-1/3 my-8 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      {isLoading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>{error}</span>
      ) : data ? (
        data.data.map(
          (category) =>
            category.businesses.length !== 0 && (
              <div key={category.id}>
                <Link to={`/page02/${category.id}`} state={category}>
                  <div className="flex justify-between">
                    <h2 className="text-4xl font-semibold text-gray-800">{category.name}</h2>
                    <button className="px-6 py-2 text-bold border-black border transition">
                  SHOW MORE
                   </button>
                  </div>
                </Link>
                <div className="scroll-hr gap-8 hide-scrollbar my-4">
                  {category.businesses.map((business) => (
                    <Link to={business.id}>
                      <BusinessCard
                        key={business.id}
                        business={business}
                        onClick={() => {}}
                        selected={false}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )
        )
      ) : null}
    </main>
  );
};

export default CategoriesBusinesses;
