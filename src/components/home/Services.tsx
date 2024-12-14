import { useState } from "react";
import useGetData from "../../hooks/useGetData";
import { Business } from "../../models/Business";


const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, error, data } = useGetData<{
    total: number;
    pageSize: number;
    data: Business[];
  }>(`businesses?page=${currentPage}`);

  return (
    <div className="flex flex-col items-center bg-white w-full">
      <div className="w-full max-w-7xl mb-5 px-4">
        <div className="flex flex-col items-start max-sm:items-center">
          <img
            src="src/assets/Logo/logo.jpg"
            alt="Company Logo"
            className="h-32 "
          />

          <h2 className="text-4xl font-bold text-gray-800 relative after:block after:absolute after:right-0 after:top-0 after:h-full after:w-1/3 max-sm:text-base">
            OUR SERVICES
          </h2>
        </div>
      </div>
        {isLoading ?(
          <span>Loading...</span>
        ): error ? (
          <span>{error}</span>
        ) : data ? (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full px-4">
        {data.data.map((service) => (
          <div
            key={service.id}
            className="relative bg-cover bg-center h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center text-gray-100 text-2xl font-light">
              {service.name}
            </div>
          </div>
        ))}
      </div>
      ) : null}
    </div>
  );
};
export default Services;
