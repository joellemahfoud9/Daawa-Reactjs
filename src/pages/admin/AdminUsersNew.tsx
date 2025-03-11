import { useEffect, useState } from "react";
import LabeledTextInput from "../../components/Admin/LabeledTextInput";
import usePostData from "../../hooks/usePostData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitFAB from "../../components/Admin/SubmitFAB";
import DropDownMenu from "../../components/Admin/DropDownMenu";
import { useCookies } from "react-cookie";

const AdminUsersNew = () => {
  const [cookie] = useCookies(["token"]);
  const token = cookie.token;
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
    token,
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

          <DropDownMenu
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            options={[
              { value: "USER", name: "1 - User" },
              { value: "ADMIN", name: "2 - Admin" },
              { value: "MODERATOR", name: "3 - Moderator" },
            ]}
          />

          <SubmitFAB isLoading={isLoading}>Add User</SubmitFAB>
        </form>
      </main>
    </>
  );
};

export default AdminUsersNew;
