
import { FaUser, FaBuilding, FaFilter, FaClock } from "react-icons/fa";
import { MdCollectionsBookmark, MdFastfood } from "react-icons/md";
import useGetData from "../../hooks/useGetData";
import { Statistics } from "../../models/Statistics";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [cookie] = useCookies(["token"]);
  const token = cookie.token;

  const { isLoading, error, data } = useGetData<{ data: Statistics }>("statistics", token);

  
  const stats = [
    { title: "Users", count: data?.data.count.users, icon: <FaUser /> },
    { title: "Businesses", count: data?.data.count.businesses, icon: <FaBuilding /> },
    { title: "Categories", count: data?.data.count.categories, icon: <FaFilter /> },
    { title: "Collections", count: data?.data.count.collections, icon: <MdCollectionsBookmark /> },
    { title: "Dishes", count: data?.data.count.dishes, icon: <MdFastfood /> },
    { title: "Hours", count: data?.data.count.hours, icon: <FaClock /> },
  ];

  return (
    <main className="p-6 w-full">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="p-4 text-2xl">Welcome to the dashboard. Have a look at the interactive widgets below:</p>

      {isLoading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>{error}</span>
      ) : data ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="p-6 rounded-lg shadow-lg cursor-pointer bg-white text-black flex flex-col justify-between"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-xl font-semibold">{stat.title}</h3>
                <p className="text-2xl mt-2">{stat.count || 0}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </main>
  );
};

export default Dashboard;
