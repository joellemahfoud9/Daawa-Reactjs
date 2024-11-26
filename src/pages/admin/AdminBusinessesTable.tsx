import { useEffect, useState } from "react";
import { Business } from "../../models/Business";
import useGetData from "../../hooks/useGetData";

const AdminBusinessesTable = () => {
  const {
    isLoading,
    error,
    data: businesses,
  } = useGetData<{ data: Business[] }>("businesses");
  // const [businesses, setBusinesses] = useState<{ data: Business[] } | null>(
  //   null
  // );

  // const getBusinesses = async () => {
  //   const response = await fetch("https://daawa-api.vercel.app/businesses");
  //   setBusinesses(await response.json());
  // };

  // useEffect(() => {
  //   getBusinesses();
  // }, []);

  return (
      <div>
    {isLoading?(
      <span>Loading</span>
    ):error ?(
      <span>{error}</span>
    ):businesses ?(
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Description</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {businesses.data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>{item.description}</td>
            <td>{item.category.name}</td>
            <td>
              {" "}
              <img src={item.image} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    ):null}
    </div>
  );
};

export default AdminBusinessesTable;
