import { useEffect, useState } from "react";
import DropDownMenu from "../../components/Admin/DropDownMenu";
import LabeledTextInput from "../../components/Admin/LabeledTextInput";
import { useLocation, useParams } from "react-router-dom";
import usePostData from "../../hooks/usePostData";
import { toast, ToastContainer } from "react-toastify";
import SubmitFAB from "../../components/Admin/SubmitFAB";
import { Hour } from "../../models/Business";
import { FaTimesCircle } from "react-icons/fa";
import useDeleteData from "../../hooks/useDeleteData";
import DeleteConfirmDialog from "../../components/Admin/DeleteConfirmDialog";
import useGetData from "../../hooks/useGetData";
import { useCookies } from "react-cookie";
const AdminBusinessHours = () => {
  const { id } = useParams();
    const [cookie] = useCookies(["token"]);
     const token = cookie.token;
  const { data: hours } = useGetData<{ data: Hour[] }>(
    `businesses/${id}/hours`,token
  );

  const [formData, setFormData] = useState({
    businessId: id || "",
    day: "",
    start: "",
    end: "",
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
    endpoint: "hours",
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
        businessId: id || "",
        day: "",
        start: "",
        end: "",
      });
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
  } = useDeleteData("hours");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Hour | null>(null);
  const handleDeleteClick = (item: Hour) => {
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
      await deleteData(itemToDelete!.id);
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
        details={`${itemToDelete?.day}: ${itemToDelete?.start} - ${itemToDelete?.end}`}
        isLoading={isLoadingDelete}
      />

      <main className="p-page">
        <h1 className="text-4xl font-bold">Business Hours</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <DropDownMenu
            label="Day"
            name="day"
            value={formData.day}
            onChange={handleChange}
            options={[
              { value: "MON", name: "Monday" },
              { value: "TUE", name: "Tuesday" },
              { value: "WED", name: "Wednesday" },
              { value: "THU", name: "Thursday" },
              { value: "FRI", name: "Friday" },
              { value: "SAT", name: "Saturday" },
              { value: "SUN", name: "Sunday" },
            ]}
          />
          <LabeledTextInput
            label="Start Time"
            placeholder="08:00AM"
            handleChange={handleChange}
            name="start"
            value={formData.start}
          />
          <LabeledTextInput
            label="End Time"
            placeholder="05:00PM"
            handleChange={handleChange}
            name="end"
            value={formData.end}
          />

          <table>
            {hours &&
              hours.data.length !== 0 &&
              hours.data
                .sort((a, b) => {
                  const daysOfWeek = [
                    "MON",
                    "TUE",
                    "WED",
                    "THU",
                    "FRI",
                    "SAT",
                    "SUN",
                  ];
                  return daysOfWeek.indexOf(a.day) - daysOfWeek.indexOf(b.day);
                })
                .map((hour) => (
                  <tr key={hour.day + hour.start + hour.end}>
                    <td className="px-2">
                      <FaTimesCircle onClick={() => handleDeleteClick(hour)} />
                    </td>
                    <td className="px-2 flex justify-end">{hour.day}:</td>
                    <td className="px-2">{hour.start}</td>
                    <td>-</td>
                    <td className="px-2">{hour.end}</td>
                  </tr>
                ))}
          </table>

          <SubmitFAB isLoading={isLoading}>Add Hours</SubmitFAB>
        </form>
      </main>
    </>
  );
};

export default AdminBusinessHours;
