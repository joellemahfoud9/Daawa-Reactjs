import { FaBuilding, FaClock, FaFilter, FaUser } from "react-icons/fa";
import StatsCard from "../../components/Admin/StatsCard";
import useGetData from "../../hooks/useGetData";
import { Statistics } from "../../models/Statistics";
import { MdCollectionsBookmark, MdFastfood } from "react-icons/md";
import { useCookies } from "react-cookie";
const AdminStats = () => {
  const [cookie] = useCookies(["token"]);
       const token = cookie.token;
  const { isLoading, error, data } = useGetData<{ data: Statistics }>(
    "statistics" ,token
  );

  const stats = [
    { title: "users", count: data?.data.count.users, icon: <FaUser /> },
    {
      title: "businesses",
      count: data?.data.count.businesses,
      icon: <FaBuilding />,
    },
    {
      title: "categories",
      count: data?.data.count.categories,
      icon: <FaFilter />,
    },
    {
      title: "collections",
      count: data?.data.count.collections,
      icon: <MdCollectionsBookmark />,
    },
  ];

  const extraStats = [
    {
      title: "dishes",
      count: data?.data.count.dishes,
      icon: <MdFastfood />,
    },
    { title: "hours", count: data?.data.count.hours, icon: <FaClock /> },
  ];
  return (
    <main className="p-page">
      <h1 className="text-4xl font-bold mb-8">Statistics</h1>

      {isLoading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>{error}</span>
      ) : data ? (
        <>
          <div className="flex gap-8 flex-wrap">
            {stats.map((stat) => (
              <StatsCard
                key={stat.title + stat.count + stat.icon}
                title={stat.title}
                count={stat.count || 0}
                icon={stat.icon}
              />
            ))}
          </div>

          <div className="my-8" />

          <div className="flex gap-8 flex-wrap">
            {extraStats.map((stat) => (
              <StatsCard
                key={stat.title + stat.count + stat.icon}
                title={stat.title}
                count={stat.count || 0}
                icon={stat.icon}
              />
            ))}
          </div>
        </>
      ) : null}
    </main>
  );
};

export default AdminStats;
