import { toast, ToastContainer } from "react-toastify"
import LabeledTextInput from "../../components/Admin/LabeledTextInput"
import { useEffect, useState } from "react";
import usePostData from "../../hooks/usePostData";
import SubmitFAB from "../../components/Admin/SubmitFAB";
import useGetData from "../../hooks/useGetData";
import { Category } from "../../models/Business";

const AdminBusinessesNew = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        description: "",
        category:"",
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

  const { postData,   
    isLoading: isLoadingPost,
    error: errorPost,
    data: dataPost, } = usePostData({
    endpoint: "users",
    body: formData,
  });

  const { isLoading, error, data:categories } = useGetData<{ data: Category[] }>(
    "categories"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postData();
  };

  useEffect(() => {
    if (dataPost) {
      toast.success("User added successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        description: "",
        category: "",
      });
    }
    if (errorPost) {
      toast.error(`Something went wrong!\n ${errorPost}`);
    }
  }, [dataPost, errorPost]);

  return (
    <>
    <ToastContainer/>
    <main className="p-page">
        <div className="text-4xl font-bold">New Businesses</div>
        <div className="my-4" />
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-5">
        <LabeledTextInput
            label="Name"
            placeholder=""
            handleChange={handleChange}
            name="name"
            value={formData.name}
          />
          <LabeledTextInput
            label="Email"
            placeholder=""
            handleChange={handleChange}
            name="email"
            value={formData.email}
          />
            <LabeledTextInput
            label="Phone"
            placeholder=""
            handleChange={handleChange}
            name="phone"
            value={formData.phone}
            />
            </div>
           <LabeledTextInput
            label="Address"
            placeholder=""
            handleChange={handleChange}
            name="address"
            value={formData.address}
          />
          <LabeledTextInput
            label="Description"
            placeholder=""
            handleChange={handleChange}
            name="description"
            value={formData.description}
          />
        </form >
        <div>
  <label className="block text-sm font-medium text-gray-700">
    Category
  </label>
  {isLoading ? (
    <span>Loading...</span>
  ) : error ? (
    <span>{error}</span>
  ) : categories ? (
    <select
      name="category"
      value={formData.category}
      onChange={(e) => {
        const selectedCategory = categories.data.find(
          (cat) => cat.id === e.target.value
        );
        setFormData({
          ...formData,
          category: e.target.value,
        });
        const placeholderOption = document.getElementById("placeholder-option");
        if (placeholderOption) {
          placeholderOption.textContent = selectedCategory
            ? selectedCategory.name
            : "Select category";
        }
      }}
      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option id="placeholder-option" value="">
        Select category
      </option>
      {categories.data.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  ) : null}
</div>

{/*    
        <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            {isLoading ?(
                <span>Loading...</span>
              ):error ?(
                <span>{error}</span>
          ):categories ?(
            <select
              name="catrgory"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
             { categories.data.map((category) => (
                 <option key={category.id} value={category.id}>
                   {category.name}
          </option>
        ))}
          </select>
        ):null}
          </div> */}
          <SubmitFAB isLoading={isLoadingPost}>Add Businesses</SubmitFAB>
    </main>
    </>
  )
}

export default AdminBusinessesNew
