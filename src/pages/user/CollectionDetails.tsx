import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { Collection } from "../../models/Collection";
import { useCookies } from "react-cookie";

const CollectionDetails = () => {
  const { id } = useParams();
  const [cookie] = useCookies(["token"]);
  const token = cookie.token;

  const { isLoading, error, data } = useGetData<{ data: Collection[] }>(
    `collections/${id}`,
    token
  );

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>{error}</span>
      ) : data?.data && data.data.length > 0 ? (
        <div className="p-6">
          <div className=" rounded-xl p-6 text-center">
            <h2 className="text-3xl font-bold mb-6">{data.data[0].name}</h2>
            <h3 className="text-xl font-semibold mb-6">
              Businesses in this Collection
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.isArray(data.data[0].collectionBusinesses) &&
              data.data[0].collectionBusinesses.length > 0 ? (
                data.data[0].collectionBusinesses.map((businessItem) => (
                  <div
                    key={businessItem.business.id}
                    className="border p-4 rounded-lg shadow-md"
                  >
                    <img
                      className="w-full h-40 object-cover rounded-lg mb-4"
                      src={businessItem.business.image}
                      alt={businessItem.business.name}
                    />
                    <h4 className="text-lg font-bold">
                      {businessItem.business.name}
                    </h4>
                    <p className="text-gray-600">{businessItem.business.description}</p>
                  </div>
                ))
              ) : (
                <p className="col-span-full">No businesses found in this collection.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <span className="text-gray-500">No data found</span>
      )}
    </>
  );
};

export default CollectionDetails;
