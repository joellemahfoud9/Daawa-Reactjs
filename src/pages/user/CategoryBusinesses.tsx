import { Link, useLocation, useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { Category } from "../../models/Business";
import BusinessDetailsCard from "../../components/Business/BusinessDetailsCard";
import Pagination from "../../components/Admin/Pagination";
import { useState } from "react";

const CategoryBusinesses = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, error, data } = useGetData<{
    data: Category;
    totalBusinessesInCategory: number;
    pageSize: number;
  }>(`categories/${id}?page=${currentPage}`);
  return (
    <>
      <Pagination
        totalItems={data?.totalBusinessesInCategory || 1}
        currentPage={currentPage}
        itemsPerPage={data?.pageSize || 1}
        setCurrentPage={setCurrentPage}
      />

      <main className="p-page">
        <h1 className="text-4xl font-bold">{data?.data.name || state.name}</h1>

        <div className="my-8" />

        <div className="flex flex-wrap gap-8 mb-24">
          {data?.data.businesses.map((business) => (
            <Link key={business.id} to={`/page01/${business.id}`}>
              <BusinessDetailsCard business={business} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default CategoryBusinesses;
