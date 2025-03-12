// const AdminCategoryEdit = () => {
//   return (
//     <main className="p-page">
//       <div>AdminCategoryEdit</div>
//     </main>
//   );
// };

// export default AdminCategoryEdit;

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import usePutdata from "../../hooks/usePutData";
import { useCookies } from "react-cookie";

const AdminCategoriesEdit = () => {
  const { state } = useLocation();
  const attributes = ["id", "name"];
  const [cookie] = useCookies(["token"]);
  const token = cookie.token;
  const [formData, setFormData] = useState({
    id: state.id || "",
    name: state.name || "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { putData, isLoading, error, data } = usePutdata({
    endpoint: `categories/${state.id}`,
    body: formData,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await putData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer />

      <main className="p-page">
        <h1 className="text-4xl font-bold">Category Details</h1>
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
                    ) : attr === "name" ? (
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
              to={`/admin/categories/details/${state.id}`}
              state={state}
            >
              Details
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

export default AdminCategoriesEdit;
