import { toast, ToastContainer } from "react-toastify";
import LabeledTextInput from "../../components/Admin/LabeledTextInput";
import { useEffect, useRef, useState } from "react";
import usePostData from "../../hooks/usePostData";
import SubmitFAB from "../../components/Admin/SubmitFAB";
import useGetData from "../../hooks/useGetData";
import { Category } from "../../models/Business";
import DropDownMenu from "../../components/Admin/DropDownMenu";
import { FaTimesCircle } from "react-icons/fa";

const AdminBusinessesNew = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    category: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formDataWithImage = new FormData();
  const {
    postData,
    isLoading: isLoadingPost,
    error: errorPost,
    data: dataPost,
  } = usePostData({
    endpoint: "businesses",
    body: formDataWithImage,
  });

  const {
    isLoading,
    error,
    data: categories,
  } = useGetData<{ data: Category[] }>("categories");

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
      setImage(null);
    }
    if (errorPost) {
      toast.error(`Something went wrong!\n ${errorPost}`);
    }
  }, [dataPost, errorPost]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClearImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    formDataWithImage.append("name", formData.name);
    formDataWithImage.append("email", formData.email);
    formDataWithImage.append("phone", formData.phone);
    formDataWithImage.append("address", formData.address);
    formDataWithImage.append("description", formData.description);
    formDataWithImage.append("categoryId", formData.category);

    if (image) {
      formDataWithImage.append("image", image);
    }

    await postData();
  };

  return (
    <>
      <ToastContainer />
      <main className="p-page">
        <div className="text-4xl font-bold">New Businesses</div>
        <div className="my-4" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4 border rounded w-max p-4">
            {image ? (
              <img
                className="w-32 h-32 object-cover"
                src={URL.createObjectURL(image)}
              />
            ) : null}
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => setImage(e.target.files![0])}
            />
            {image ? <FaTimesCircle onClick={handleClearImage} /> : null}
          </div>
          <div className="w-full flex gap-5">
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

          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : categories ? (
            <DropDownMenu
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={categories.data.map((category) => ({
                name: category.name,
                value: category.id,
              }))}
            />
          ) : null}
        </form>

        <div onClick={handleSubmit}>
          <SubmitFAB isLoading={isLoadingPost}>Add Businesses</SubmitFAB>
        </div>
      </main>
    </>
  );
};

export default AdminBusinessesNew;
