import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import usePatchdata from "../../hooks/usePatchData";
import { useCookies } from "react-cookie";

const AdminUsersEdit = () => {
  const { state } = useLocation();
  const attributes = ["id", "name", "email", "phone", "role"];
  const [cookie] = useCookies(["token"]);
  const token = cookie.token;
  const [formData, setFormData] = useState({
    id: state.id || "",
    name: state.name || "",
    email: state.email || "",
    phone: state.phone || "",
    role: state.role || "",
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
    token,
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
        <h1 className="text-4xl font-bold">User Details</h1>
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
                    {attr === "id" ? (
                      state[attr]
                    ) : attr === "role" ? (
                      <select
                        name="role"
                        value={formData[attr]}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="USER">1 - User</option>
                        <option value="ADMIN">2 - Admin</option>
                        <option value="MODERATOR">3 - Moderator</option>
                      </select>
                    ) : attr === "name" ||
                      attr === "email" ||
                      attr === "phone" ? (
                      <input
                        name={attr}
                        value={formData[attr]}
                        onChange={handleInputChange}
                        className="border"
                      />
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex gap-4 fixed bottom-12 right-12">
            <Link
              className="w-36 bg-gray-200 text-accent px-4 py-2 rounded text-center"
              to={`/admin/users/password/${state.id}`}
              state={state}
            >
              Password
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

export default AdminUsersEdit;
