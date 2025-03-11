import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Dish } from "../../models/Business";
import LabeledTextInput from "../../components/Admin/LabeledTextInput";
import DropDownMenu from "../../components/Admin/DropDownMenu";
import { FaTimesCircle } from "react-icons/fa";
import SubmitFAB from "../../components/Admin/SubmitFAB";
import usePostData from "../../hooks/usePostData";
import { toast, ToastContainer } from "react-toastify";
import DeleteConfirmDialog from "../../components/Admin/DeleteConfirmDialog";
import useDeleteData from "../../hooks/useDeleteData";
import useGetData from "../../hooks/useGetData";
import { useCookies } from "react-cookie";
const AdminBusinessDishes = () => {
  const { id } = useParams();
    const [cookie] = useCookies(["token"]);
     const token = cookie.token;
  const { data: dishes } = useGetData<{ data: Dish[] }>(
    `businesses/${id}/dishes` ,token
  );

  const [formData, setFormData] = useState({
    businessId: id || "",
    name: "",
    description: "",
    type: "", // MAIN, SIDE, DESSERT, APPETIZER
    price: "",
  });

  const [image, setImage] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClearImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
  const { postData, isLoading, error, data } = usePostData({
    endpoint: "dishes",
    body: formDataWithImage,
    token,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    formDataWithImage.append("businessId", formData.businessId);
    formDataWithImage.append("name", formData.name);
    formDataWithImage.append("description", formData.description);
    formDataWithImage.append("type", formData.type);
    formDataWithImage.append("price", formData.price);

    if (image) {
      formDataWithImage.append("image", image);
    }

    await postData();
  };

  useEffect(() => {
    if (data) {
      toast.success("User added successfully!");
      setFormData({
        businessId: id || "",
        name: "",
        description: "",
        type: "",
        price: "",
      });
      setImage(null);
    }
    if (error) {
      toast.error(`Something went wrong!\n ${error}`);
    }
  }, [data, error]);

  /* DELETE */
  const {
    deleteData,
    isLoading: isLoadingDelete,
    error: errorDelete,
    data: dataDelete,
  } = useDeleteData("dishes");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Dish | null>(null);
  const handleDeleteClick = (item: Dish) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };
  const handleCancel = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };
  const handleConfirmDelete = async () => {
    try {
      setIsDeleteModalOpen(false);
      await deleteData(itemToDelete!.id,token);
      setItemToDelete(null);
    } catch (error) {
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    }
  };
  useEffect(() => {
    if (dataDelete) {
      toast.success(`deleted successfully!`);
    }
    if (errorDelete) {
      toast.error(`Failed to delete. Please try again.`);
    }
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

      <main className="p-page pb-32">
        <h1 className="text-4xl font-bold mb-4">Business Dishes</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4 p-4 border rounded w-max">
            {image && (
              <img
                className="w-24 h-24 object-cover"
                src={URL.createObjectURL(image)}
              />
            )}
            <input
              ref={fileInputRef}
              type="file"
              onChange={(e) => setImage(e.target.files![0])}
            />
            {image && <FaTimesCircle onClick={handleClearImage} />}
          </div>
          <div className="flex gap-4">
            <LabeledTextInput
              label="Name"
              placeholder=""
              handleChange={handleChange}
              name="name"
              value={formData.name}
            />
            <LabeledTextInput
              label="Price"
              placeholder="99.99"
              handleChange={handleChange}
              name="price"
              value={formData.price}
            />
          </div>
          <LabeledTextInput
            label="Description"
            placeholder=""
            handleChange={handleChange}
            name="description"
            value={formData.description}
          />
          <DropDownMenu
            label="Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            options={[
              { value: "MAIN", name: "Main" },
              { value: "SIDE", name: "Side Dish" },
              { value: "DESSERT", name: "Dessert" },
              { value: "APPETIZER", name: "Appetizer" },
            ]}
          />

          <table>
            {dishes && dishes.data.length !== 0 && (
              <thead>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Price</th>
              </thead>
            )}
            <tbody>
              {dishes &&
                dishes.data.map((dish) => (
                  <tr className="border-t-4" key={dish.id}>
                    <td className="px-2">
                      <FaTimesCircle onClick={() => handleDeleteClick(dish)} />
                    </td>
                    <td className="px-2">
                      <img
                        className="w-16 h-16 p-1 object-cover"
                        src={dish.image}
                      />
                    </td>
                    <td className="px-2">{dish.name}</td>
                    <td className="px-2">{dish.description}</td>
                    <td className="px-2">{dish.type}</td>
                    <td className="px-2">{`${dish.price}`}</td>
                  </tr>
                  // <div className="flex gap-2 items-center">

                  //   {`${hour.day}: ${hour.start} - ${hour.end}`}
                  // </div>
                ))}
            </tbody>
          </table>

          <SubmitFAB isLoading={isLoading}>Add Dish</SubmitFAB>
        </form>
      </main>
    </>
  );
};

export default AdminBusinessDishes;
