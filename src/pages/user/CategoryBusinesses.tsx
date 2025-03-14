import { Link, useLocation, useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { Category } from "../../models/Business";
import BusinessDetailsCard from "../../components/Business/BusinessDetailsCard";
import Pagination from "../../components/Admin/Pagination";
import { useState } from "react";
import { useCookies } from "react-cookie";

const CategoryBusinesses = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [cookie] = useCookies(["token"]);
  const token = cookie.token;
  const { isLoading, error, data } = useGetData<{
    data: Category;
    totalBusinessesInCategory: number;
    pageSize: number;
  }>(`categories/${id}?page=${currentPage}`, token);

  return (
    <>
      <Pagination
        totalItems={data?.totalBusinessesInCategory || 1}
        currentPage={currentPage}
        itemsPerPage={data?.pageSize || 1}
        setCurrentPage={setCurrentPage}
      />

      <main className="p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold">{data?.data.name || state.name}</h1>

        <div className="my-8" />

        <div className="flex flex-wrap gap-8 justify-center mb-24">
          {data?.data.businesses.map((business) => (
            <Link
              key={business.id}
              to={`/page01/${business.id}`}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <BusinessDetailsCard business={business} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default CategoryBusinesses;
