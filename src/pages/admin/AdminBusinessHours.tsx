import { useEffect, useState } from "react";
import DropDownMenu from "../../components/Admin/DropDownMenu";
import LabeledTextInput from "../../components/Admin/LabeledTextInput";
import { useLocation } from "react-router-dom";
import usePostData from "../../hooks/usePostData";
import { toast, ToastContainer } from "react-toastify";
import SubmitFAB from "../../components/Admin/SubmitFAB";

const AdminBusinessHours = () => {
  const { state } = useLocation();

  const [formData, setFormData] = useState({
    businessId: state.id || "",
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
        businessId: state.id || "",
        day: "",
        start: "",
        end: "",
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
            placeholder="08:00am"
            handleChange={handleChange}
            name="start"
            value={formData.start}
          />
          <LabeledTextInput
            label="End Time"
            placeholder="05:00pm"
            handleChange={handleChange}
            name="end"
            value={formData.end}
          />

          <SubmitFAB isLoading={isLoading}>Add Hours</SubmitFAB>
        </form>
      </main>
    </>
  );
};

export default AdminBusinessHours;
