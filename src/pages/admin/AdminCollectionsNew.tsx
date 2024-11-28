import { useState } from "react";
import BusinessCard from "../../components/Admin/BusinessCard";
import useGetData from "../../hooks/useGetData";
import { Business } from "../../models/Business";
import Pagination from "../../components/Admin/Pagination";
import SubmitFAB from "../../components/Admin/SubmitFAB";

const AdminCollectionsNew = () => {
  const {
    isLoading,
    error,
    data: businesses,
  } = useGetData<{ data: Business[] }>("businesses");

  const [selectedBusinesses, setSelectedBusinesses] = useState<string[]>([]);

  const handleBusinessSelect = (businessId: string) => {
    setSelectedBusinesses((prev) => {
      if (prev.includes(businessId)) {
        return prev.filter((id) => id !== businessId);
      } else {
        return [...prev, businessId];
      }
    });
  };

  return (
    <main className="p-page">
      <div className="text-4xl font-bold">New Collection</div>
      <div className="my-8" />
      <div className="flex justify-end">
        {selectedBusinesses.length !== 0 && (
          <button
            className="min-w-32 rounded px-3 py-1 bg-accent text-white"
            onClick={() => setSelectedBusinesses([])}
          >
            unselect all
          </button>
        )}
      </div>
      <div className="my-8" />
      <section className="mb-24">
        {isLoading ? (
          <span>Loading...</span>
        ) : error ? (
          <span>{error}</span>
        ) : businesses ? (
          <div className="flex flex-wrap gap-8">
            {businesses.data.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                selected={selectedBusinesses.includes(business.id)}
                onClick={() => handleBusinessSelect(business.id)}
              />
            ))}
          </div>
        ) : null}
      </section>

      <Pagination
        currentPage={1}
        itemsPerPage={10}
        setCurrentPage={() => {}}
        totalItems={20}
      />

      <SubmitFAB isLoading={isLoading}>Create Collection</SubmitFAB>
    </main>
  );
};

export default AdminCollectionsNew;
