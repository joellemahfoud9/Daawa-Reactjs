
import useGetData from "../../hooks/useGetData";
import { Collection } from "../../models/Collection";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Collections = () => {
  const [cookie] = useCookies(["token"]);
  const token = cookie.token;

  const { isLoading, error, data } = useGetData<{
    total: number;
    pageSize: number;
    data: Collection[];
  }>(`collections`, token);

  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-8">
      {isLoading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>{error}</span>
      ) : data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {data.data.map((collection) => (
            <div
              key={collection.id}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              {collection.image && (
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full aspect-[4/3] object-cover"
                />
              )}

              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-3">
                  {collection.name}
                </h3>
              </div>

              <Link to={collection.id}>
                <button
                  className="w-full py-2 md:py-3 bg-gray-100 border-t border-gray-200 text-gray-800 font-semibold hover:bg-gray-200 transition"
                >
                  View Collection Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Collections;
