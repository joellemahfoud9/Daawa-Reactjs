// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import usePostData from "../../hooks/usePostData";
// import { toast, ToastContainer } from "react-toastify";
// import DropDownMenu from "../../components/Admin/DropDownMenu";
// import LabeledTextInput from "../../components/Admin/LabeledTextInput";
// import SubmitFAB from "../../components/Admin/SubmitFAB";
// import useGetData from "../../hooks/useGetData";
// import { Attribute } from "../../models/Business";
// import useDeleteData from "../../hooks/useDeleteData";
// import { FaTimesCircle } from "react-icons/fa";
// import DeleteConfirmDialog from "../../components/Admin/DeleteConfirmDialog";
// import { useCookies } from "react-cookie";
// const AdminBusinessAttributes = () => {
//   const { id } = useParams();
//     const [cookie] = useCookies(["token"]);
//      const token = cookie.token;
//   const { data: attributes } = useGetData<{ data: Attribute[] }>(
//     `businesses/${id}/attributes` ,token
//   );

//   const options = [
//     { name: "Capacity", value: "capacity" },
//     { name: "Price (per hour)", value: "pricePerHour" },
//   ];

//   const [formData, setFormData] = useState({
//     businessId: id || "",
//     name: "",
//     value: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const { postData, isLoading, error, data } = usePostData({
//     endpoint: `attributes`,
//     body: formData,
//   });

//   useEffect(() => {
//     if (data) {
//       toast.success("added successfully!");
//     }
//     if (error) {
//       toast.error(`Failed. Please try again. \n${error}`);
//     }
//   }, [data, error]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await postData();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   /* DELETE */
//   const {
//     deleteData,
//     isLoading: isLoadingDelete,
//     error: errorDelete,
//     data: dataDelete,
//   } = useDeleteData("attributes");
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [itemToDelete, setItemToDelete] = useState<Attribute | null>(null);
//   const handleDeleteClick = (item: Attribute) => {
//     setItemToDelete(item);
//     setIsDeleteModalOpen(true);
//   };
//   const handleCancel = () => {
//     setIsDeleteModalOpen(false);
//     setItemToDelete(null);
//   };
//   const handleConfirmDelete = async () => {
//     try {
//       setIsDeleteModalOpen(false);
//       await deleteData(itemToDelete!.id,token);
//       setItemToDelete(null);
//     } catch (error) {
//       setIsDeleteModalOpen(false);
//       setItemToDelete(null);
//     }
//   };
//   useEffect(() => {
//     if (dataDelete) {
//       toast.success(`deleted successfully!`);
//     }
//     if (errorDelete) {
//       toast.error(`Failed to delete. Please try again.`);
//     }
//   }, [dataDelete, errorDelete]);

//   return (
//     <>
//       <ToastContainer />

//       <DeleteConfirmDialog
//         isOpen={isDeleteModalOpen}
//         onCancel={handleCancel}
//         onConfirm={handleConfirmDelete}
//         details={itemToDelete?.name}
//         isLoading={isLoadingDelete}
//       />

//       <main className="p-page">
//         <h1 className="text-4xl font-bold">Business Attributes</h1>
//         <div className="my-4" />
//         <form onSubmit={handleSubmit}>
//           <div className="flex gap-4">
//             <div className="w-1/3">
//               <DropDownMenu
//                 label="Name"
//                 name="name"
//                 value={formData.name}
//                 options={options}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="w-1/3">
//               <LabeledTextInput
//                 label="Value"
//                 name="value"
//                 value={formData.value}
//                 placeholder=""
//                 handleChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="my-4" />

//           <table>
//             {/* {attributes && attributes.data.length !== 0 && (
//               <thead>
//                 <th></th>
//                 <th>Name</th>
//                 <th>Value</th>
//               </thead>
//             )} */}
//             <tbody>
//               {attributes &&
//                 attributes.data.map((attribute) => (
//                   <tr key={attribute.id}>
//                     <td className="px-2">
//                       <FaTimesCircle
//                         onClick={() => handleDeleteClick(attribute)}
//                       />
//                     </td>
//                     <td className="px-2">{attribute.name}</td>
//                     <td className="px-2">{attribute.value}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>

//           <SubmitFAB isLoading={isLoading}>Add Attribute</SubmitFAB>
//         </form>
//       </main>
//     </>
//   );
// };

// export default AdminBusinessAttributes;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePostData from "../../hooks/usePostData";
import { toast, ToastContainer } from "react-toastify";
import DropDownMenu from "../../components/Admin/DropDownMenu";
import LabeledTextInput from "../../components/Admin/LabeledTextInput";
import SubmitFAB from "../../components/Admin/SubmitFAB";
import useGetData from "../../hooks/useGetData";
import { Attribute } from "../../models/Business";
import useDeleteData from "../../hooks/useDeleteData";
import { FaTimesCircle } from "react-icons/fa";
import DeleteConfirmDialog from "../../components/Admin/DeleteConfirmDialog";
import { useCookies } from "react-cookie";

const AdminBusinessAttributes = () => {
    const { id } = useParams();
    const [cookie] = useCookies(["token"]);
    const token = cookie.token;

    const { data: attributes } = useGetData<{ data: Attribute[] }>(
        `businesses/${id}/attributes`, token
    );

    const options = [
        { name: "Capacity", value: "capacity" },
        { name: "Price (per hour)", value: "pricePerHour" },
    ];

    const [formData, setFormData] = useState({
        businessId: id || "",
        name: "",
        value: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const { postData, isLoading, error, data } = usePostData({
        endpoint: `attributes`,
        body: formData,
        token,
    });

    useEffect(() => {
        if (data) toast.success("Added successfully!");
        if (error) toast.error(`Failed. Please try again. \n${error}`);
    }, [data, error]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await postData();
        } catch (err) {
            console.log(err);
        }
    };

    /* DELETE */
    const { deleteData, isLoading: isLoadingDelete, error: errorDelete, data: dataDelete } = useDeleteData("attributes");

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<Attribute | null>(null);

    const handleDeleteClick = (item: Attribute) => {
        setItemToDelete(item);
        setIsDeleteModalOpen(true);
    };

    const handleCancel = () => {
        setIsDeleteModalOpen(false);
        setItemToDelete(null);
    };

    const handleConfirmDelete = async () => {
        if (!token) {
            toast.error("Token is missing. Cannot delete.");
            return;
        }

        try {
            setIsDeleteModalOpen(false);
            await deleteData(itemToDelete!.id, token);  
            setItemToDelete(null);
        } catch (error) {
            setIsDeleteModalOpen(false);
            setItemToDelete(null);
        }
    };

    useEffect(() => {
        if (dataDelete) toast.success(`Deleted successfully!`);
        if (errorDelete) toast.error(`Failed to delete. Please try again.`);
    }, [dataDelete, errorDelete]);

    return (
        <>
            <ToastContainer />

            <DeleteConfirmDialog
                isOpen={isDeleteModalOpen}
                onCancel={handleCancel}
                onConfirm={handleConfirmDelete}
                details={itemToDelete?.name}
                isLoading={isLoadingDelete}
            />

            <main className="p-page">
                <h1 className="text-4xl font-bold">Business Attributes</h1>
                <div className="my-4" />
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-4">
                        <div className="w-1/3">
                            <DropDownMenu
                                label="Name"
                                name="name"
                                value={formData.name}
                                options={options}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="w-1/3">
                            <LabeledTextInput
                                label="Value"
                                name="value"
                                value={formData.value}
                                placeholder=""
                                handleChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="my-4" />

                    <table>
                        <tbody>
                            {attributes &&
                                attributes.data.map((attribute) => (
                                    <tr key={attribute.id}>
                                        <td className="px-2">
                                            <FaTimesCircle
                                                onClick={() => handleDeleteClick(attribute)}
                                            />
                                        </td>
                                        <td className="px-2">{attribute.name}</td>
                                        <td className="px-2">{attribute.value}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <SubmitFAB isLoading={isLoading}>Add Attribute</SubmitFAB>
                </form>
            </main>
        </>
    );
};

export default AdminBusinessAttributes;
