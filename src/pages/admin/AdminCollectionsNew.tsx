import { useEffect, useState } from "react";
import BusinessCard from "../../components/Admin/BusinessCard";
import useGetData from "../../hooks/useGetData";
import { Business } from "../../models/Business";
import Pagination from "../../components/Admin/Pagination";
import SubmitFAB from "../../components/Admin/SubmitFAB";
import usePostData from "../../hooks/usePostData";
import { toast, ToastContainer } from "react-toastify";
import LabeledTextInput from "../../components/Admin/LabeledTextInput";
import { useCookies } from "react-cookie";
const AdminCollectionsNew = () => {
  const [currPage, setCurrPage] = useState(1);
  const [cookie] = useCookies(["token"]);
  const token = cookie.token;

  const {
    isLoading,
    error,
    data: businesses,
  } = useGetData<{
    data: Business[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  }>(`businesses?page=${currPage}`,token);

  const [selectedBusinesses, setSelectedBusinesses] = useState<string[]>([]);

  const handleBusinessSelect = (businessId: string) => {
    setSelectedBusinesses((prev) => {
      const newSelected = prev.includes(businessId)
        ? prev.filter((id) => id !== businessId)
        : [...prev, businessId];

      // Now that newSelected is updated, set formData correctly
      setFormData((prevData) => ({
        ...prevData,
        businessIds: newSelected, // Use the latest selected businesses here
      }));

      return newSelected;
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    businessIds: selectedBusinesses,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const {
    postData,
    isLoading: isLoadingPost,
    error: errorPost,
    data: dataPost,
  } = usePostData({
    endpoint: "collections",
    body: formData,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postData();
  };

  useEffect(() => {
    if (dataPost) {
      toast.success("Collection added successfully!");
      setSelectedBusinesses([]);
    }
    if (errorPost) {
      toast.error(`Something went wrong!\n ${errorPost}`);
    }
  }, [dataPost, errorPost]);

  return (
    <>
      <ToastContainer />

      <main className="p-page">
        <div className="text-4xl font-bold">New Collection</div>
        <div className="my-8" />

        <form onSubmit={handleSubmit}>
          {selectedBusinesses.length !== 0 && (
            <div className="flex justify-between items-end">
              <div>
                <LabeledTextInput
                  label="Name"
                  placeholder=""
                  handleChange={handleChange}
                  name="name"
                  value={formData.name}
                />
              </div>
              <button
                className="min-w-32 rounded px-3 py-1 bg-accent text-white"
                onClick={() => {
                  setFormData({
                    name: "",
                    businessIds: [],
                  });
                  setSelectedBusinesses([]);
                }}
              >
                unselect all
              </button>
            </div>
          )}
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
            currentPage={businesses?.page || 1}
            itemsPerPage={businesses?.pageSize || 1}
            setCurrentPage={setCurrPage}
            totalItems={businesses?.total || 1}
          />

          <SubmitFAB isLoading={isLoadingPost}>Create Collection</SubmitFAB>
        </form>
      </main>
    </>
  );
};

export default AdminCollectionsNew;
