import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  FaPlus,
  FaPlusCircle,
  FaPlusSquare,
  FaTimesCircle,
} from "react-icons/fa";
import usePatchData from "../../hooks/usePatchData";
import useGetData from "../../hooks/useGetData"; // Assuming this hook is already created for fetching data
import { Link, useLocation } from "react-router-dom";
import DropDownMenu from "../../components/Admin/DropDownMenu";
import { Category } from "../../models/Business";

const AdminBusinessesEdit = () => {
  const { state } = useLocation();

  const attributes = [
    "id",
    "name",
    "email",
    "phone",
    "address",
    "description",
    "category",
    "image",
  ];

  const [formData, setFormData] = useState({
    id: state.id || "",
    name: state.name || "",
    email: state.email || "",
    phone: state.phone || "",
    address: state.address || "",
    description: state.description || "",
    category: state.category.id || "", // Set initial category value
  });

  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Fetch categories
  const {
    isLoading: isCategoriesLoading,
    error: categoriesError,
    data: categories,
  } = useGetData<{ data: Category[] }>("categories");

  const formDataWithImg = new FormData();

  const { patchData, isLoading, error, data } = usePatchData({
    endpoint: `businesses/${state.id}`,
    body: formDataWithImg,
  });

  useEffect(() => {
    if (data) {
      toast.success("Updated successfully!");
    }
    if (error) {
      toast.error(`Failed. Please try again. \n${error}`);
    }
  }, [data, error]);

  // Handle form field changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image input change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  // Clear image and reset file input
  const clearImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
  };

  // Append form data and image if exists before submitting
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Append all form fields to FormData
    for (const [key, value] of Object.entries(formData)) {
      // Append 'categoryId' instead of 'category'
      formDataWithImg.append(key === "category" ? "categoryId" : key, value);
    }

    // If there's an image, append it to FormData
    if (image) {
      formDataWithImg.append("image", image);
    }

    try {
      await patchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer />
      <main className="p-page">
        <h1 className="font-bold text-4xl">Business Details</h1>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              {attributes.map((attr) => (
                <tr key={attr}>
                  <td className="flex justify-end pe-4 py-4 font-bold">
                    {attr}:
                  </td>
                  <td>
                    {attr === "id" ? (
                      state[attr]
                    ) : attr === "name" ||
                      attr === "email" ||
                      attr === "phone" ||
                      attr === "address" ||
                      attr === "description" ? (
                      <input
                        name={attr}
                        value={formData[attr]}
                        onChange={handleInputChange}
                        className="border"
                      />
                    ) : attr === "category" ? (
                      isCategoriesLoading ? (
                        <div>Loading categories...</div>
                      ) : categoriesError ? (
                        <div>{categoriesError}</div>
                      ) : categories ? (
                        <DropDownMenu
                          label="Category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          options={categories.data.map((category) => ({
                            name: category.name,
                            value: category.id,
                          }))}
                        />
                      ) : null
                    ) : attr === "image" ? (
                      <div className="flex gap-4 border p-4 rounded">
                        <img
                          className="w-20 h-20 object-cover"
                          src={state.image}
                          alt="Current"
                        />
                        <input
                          ref={fileInputRef}
                          type="file"
                          onChange={handleImageChange}
                        />
                        {image ? (
                          <img
                            className="w-20 h-20 object-cover"
                            src={URL.createObjectURL(image)}
                            alt="New upload"
                          />
                        ) : null}
                        {image ? <FaTimesCircle onClick={clearImage} /> : null}
                      </div>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex gap-4 fixed bottom-12 right-12">
            <Link to={"hours"} state={state}>
              <div className="flex items-center gap-2 bg-green-900 rounded text-white px-4 py-2 focus:outline-amber-400">
                <FaPlusSquare />
                <span>Hours</span>
              </div>
            </Link>
            <Link to={"dishes"} state={state}>
              <div className="flex items-center gap-2 bg-amber-900 rounded text-white px-4 py-2 focus:outline-amber-400">
                <FaPlusSquare />
                <span>Dishes</span>
              </div>
            </Link>
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

export default AdminBusinessesEdit;
