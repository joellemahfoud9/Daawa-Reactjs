
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import usePatchdata from "../../hooks/usePatchData";
import useGetData from "../../hooks/useGetData";
// import { Business } from "../../models/Business";
import { useCookies } from "react-cookie";
// import BusinessCard from "../../components/Admin/BusinessCard";

const AdminCollectionsEdit = () => {
  const { state } = useLocation();
  const [cookie] = useCookies(["token"]);
  const token = cookie.token;

  // const {
  //   isLoading: businessesLoading,
  //   error: businessesError,
  //   data: businesses,
  // } = useGetData<{ data: Business[] }>(`businesses`, token);

  const [selectedBusinesses, setSelectedBusinesses] = useState<string[]>(state.business || []);
  const [image, setImage] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    id: state.id || "",
    name: state.name || "",
    businessIds: selectedBusinesses,
  });

  const { patchData, isLoading, error, data } = usePatchdata({
    endpoint: `collections/${state.id}`,
    body: (() => {
      const formDataToSend = new FormData();
      formDataToSend.append("id", formData.id);
      formDataToSend.append("name", formData.name);

      // formData.businessIds.forEach((id) => {
      //   formDataToSend.append("businessIds[]", id);
      // });

      if (image) {
        formDataToSend.append("image", image);
      }

      return formDataToSend;
    })(),
    token,
  });

  useEffect(() => {
    if (data) {
      toast.success("Updated successfully!");
    }
    if (error) {
      toast.error(`Failed. Please try again. \n${error}`);
    }
  }, [data, error]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleBusinessSelect = (businessId: string) => {
  //   setSelectedBusinesses((prev) => {
  //     const newSelected = prev.includes(businessId)
  //       ? prev.filter((id) => id !== businessId)
  //       : [...prev, businessId];

  //     setFormData((prevData) => ({
  //       ...prevData,
  //       businessIds: newSelected,
  //     }));

  //     return newSelected;
  //   });
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await patchData();
  };
  
  return (
    <>
      <ToastContainer />
      <main className="p-page">
        <h1 className="text-4xl font-bold">Edit Collection</h1>
        <div className="py-2" />
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td className="flex justify-end pe-4 py-4 font-bold">ID:</td>
                <td>{formData.id}</td>
              </tr>
              <tr>
                <td className="flex justify-end pe-4 py-4 font-bold">Name:</td>
                <td>
                  <input
                    name="name"
                    value={formData.name || ""}
                    onChange={handleInputChange}
                    className="border"
                  />
                </td>
              </tr>
              <tr>
                <td className="flex justify-end pe-4 py-4 font-bold">Image:</td>
                <td>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
{/* 
          <div className="my-8">
            <h2 className="text-2xl font-bold">Select Businesses</h2>
            {businessesLoading ? (
              <span>Loading businesses...</span>
            ) : businessesError ? (
              <span>{businessesError}</span>
            ) : (
              <div className="flex flex-wrap gap-8">
                {businesses?.data.map((business) => (
                  <BusinessCard
                    key={business.id}
                    business={business}
                    selected={selectedBusinesses.includes(business.id)}
                    onClick={() => handleBusinessSelect(business.id)}
                  />
                ))}
              </div>
            )}
          </div> */}

          <div className="my-8" />
          <div className="flex gap-4 fixed bottom-12 right-12">
            <button
              type="submit"
              className="w-36 bg-accent text-white px-4 py-2 rounded focus:outline-amber-400"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default AdminCollectionsEdit;
