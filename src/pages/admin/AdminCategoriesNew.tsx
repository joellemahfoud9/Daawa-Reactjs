import { useEffect, useState } from "react";
import usePostData from "../../hooks/usePostData";
import { toast, ToastContainer } from "react-toastify";
import LabeledTextInput from "../../components/Admin/LabeledTextInput";
import SubmitFAB from "../../components/Admin/SubmitFAB";

const AdminCategoriesNew = () => {
  const [formData, setFormData] = useState({
    name: "",
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

  const { postData, isLoading, error, data } = usePostData({
    endpoint: "categories",
    body: formData,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postData();
  };

  useEffect(() => {
    if (data) {
      toast.success("Category added successfully!");
      setFormData({
        name: "",
      });
    }
    if (error) {
      toast.error(`Something went wrong!\n ${error}`);
    }
  }, [data, error]);

  return (
    <>
      <ToastContainer />

      <main className="p-page">
        <h1 className="text-4xl font-bold">New Category</h1>

        <div className="my-4" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <LabeledTextInput
            label="Name"
            placeholder=""
            handleChange={handleChange}
            name="name"
            value={formData.name}
          />

          <SubmitFAB isLoading={isLoading}>Add Category</SubmitFAB>
        </form>
      </main>
    </>
  );
};

export default AdminCategoriesNew;
