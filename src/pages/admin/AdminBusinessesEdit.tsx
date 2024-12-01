import {useEffect, useState } from "react";
import {Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import usePatchdata from "../../hooks/usePatchData";

const AdminBusinessesEdit = () => {
    const { state } = useLocation();
    const attributes = ["id", "name", "email", "phone", "address","description","category","image"];
    const [formData, setFormData] = useState({
      id: state.id || "",
      name: state.name || "",
      email: state.email || "",
      phone: state.phone || "",
      address: state.address || "",
      description:state.description || "",
      category: state.category.name || "",
       //image: state.image ||"",
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
        endpoint: `businesses/${state.id}`,
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
      <h1 className="font-bold text-4xl">Business Details</h1>
      <form onSubmit={handleSubmit}>
        <table>
            <tbody>
                {attributes.map((attr)=>(
                    <tr key={attr}>
                    <td className="flex justify-end pe-4 py-4 font-bold">
                    {attr}:
                  </td>
                  <td>
                  {attr === "id" ? (
                      state[attr]
                    ) :attr === "name" ||
                    attr === "email" ||
                    attr === "phone" ||
                    attr==="address" || 
                    attr==="description" ||
                    attr==="category" ?( 
                    <input
                      name={attr}
                       value={formData[attr]}
                       onChange={handleInputChange}
                      className="border"
                    />
                  ) : attr==="image" ?(
                    <div className="flex">
                        <img className="w-20 h-20" src={state.image}/>
                        <input 
                        type="file"
                        onChange={handleInputChange}/>
                    </div>
                  ) : null}
                  </td>
                 </tr>
                ))
                }
            </tbody>
        </table>
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
  )
}

export default AdminBusinessesEdit
