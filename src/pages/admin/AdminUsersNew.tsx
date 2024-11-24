import { useEffect, useState } from "react";
import LabeledTextInput from "../../components/Admin/LabeledTextInput";
import usePostData from "../../hooks/usePostData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUsersNew = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
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
    endpoint: "users",
    body: formData,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postData();
  };

  useEffect(() => {
    if (data) {
      toast.success("User added successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
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
        <div className="text-4xl font-bold">New User</div>

        <div className="my-4" />

        <form onSubmit={handleSubmit} className="space-y-6">
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
          <LabeledTextInput
            label="Password"
            placeholder=""
            handleChange={handleChange}
            name="password"
            value={formData.password}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Role</option>
              <option value="USER">1 - User</option>
              <option value="ADMIN">2 - Admin</option>
              <option value="MODERATOR">3 - Moderator</option>
            </select>
            {/* {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>} */}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="fixed bottom-12 right-12 px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90"
          >
            {isLoading ? "Loading..." : "Add User"}
          </button>
        </form>
      </main>
    </>
  );
};

export default AdminUsersNew;
