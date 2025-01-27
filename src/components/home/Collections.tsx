import useGetData from "../../hooks/useGetData";
import { Collection } from "../../models/Collection";

const Collections = () => {
  const { isLoading, error, data } = useGetData<{
    total: number;
    pageSize: number;
    data: Collection[];
  }>(`collections`);

  return (
    <div className="flex flex-col items-center py-12 bg-white">
    
    {isLoading ?(
          <span>Loading...</span>
        ): error ? (
          <span>{error}</span>
        ) : data ? (
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {data.data.map((collection) => (
          <div
            key={collection.id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                {collection.name}
              </h3>
              
            </div>
            <button className="w-full py-3 bg-gray-100 border-t border-gray-200 text-gray-800 font-semibold hover:bg-gray-200 transition">
              View Package Details
            </button>
          </div>
        ))}
      </div>
         ) : null}
    </div>
  );
};

export default Collections;
