import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import usePatchdata from "../../hooks/usePatchData";

const AdminUsersEditPassword = () => {
  const { state } = useLocation();
  // const attributes = ["id", "name", "email", "phone", "role"];
  const attributes = ["id"];
  const [formData, setFormData] = useState({
    password: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const { patchData, isLoading, error, data } = usePatchdata({
    endpoint: `users/${state.id}`,
    body: formData,
  });
  useEffect(() => {
    if (data) {
      toast.success("updated successfully!");
    }
    if (error) {
      toast.error(`Failed. Please try again. \n${error}`);
    }
  }, [data, error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        <h1 className="text-4xl font-bold">User Password</h1>
        <div className="py-2" />
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              {attributes.map((attr) => (
                <tr key={attr}>
                  <td className="flex justify-end pe-4 py-4 font-bold">
                    {attr}:
                  </td>
                  <td>
                    {attr === "id" ||
                    attr === "role" ||
                    attr === "name" ||
                    attr === "email" ||
                    attr === "phone"
                      ? state[attr]
                      : null}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="flex justify-end pe-4 py-4 font-bold">
                  password:
                </td>
                <td>
                  <input
                    name="password"
                    value={formData["password"]}
                    onChange={handleInputChange}
                    className="border"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button
            type="submit"
            className="fixed bottom-12 right-12 w-36 bg-accent text-white px-4 py-2 rounded focus:outline-amber-400"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </main>
    </>
  );
};

export default AdminUsersEditPassword;
