

// const Dashboard = () => {
//   return (
//     <div className="p-6 w-full">
//       <h1 className="text-4xl font-bold">Dashboard</h1>
//       <p className="p-4 text-2xl">Welcome to the dashboard. Have a look at any recent change </p>
    
//     </div>
//   );
// };

// export default Dashboard;

// import { useState } from 'react';

// // Define the type for each card object
// interface Card {
//   title: string;
//   value: number | string;
//   icon: string;
//   color: string;
// }

// const Dashboard = () => {
//   // Type the state as an array of `Card` objects
//   const [cardData, setCardData] = useState<Card[]>([
//     { title: "Total Users", value: 250, icon: "👥", color: "bg-blue-500" },
//     { title: "Sales Today", value: 120, icon: "💵", color: "bg-green-500" },
//     { title: "New Orders", value: 45, icon: "📦", color: "bg-yellow-500" },
//     { title: "System Status", value: "All Good", icon: "⚙️", color: "bg-gray-500" },
//   ]);

//   // Explicitly define the type of the `cardTitle` parameter as `string`
//   const handleCardClick = (cardTitle: string): void => {
//     alert(`You clicked on the "${cardTitle}" card!`);
//   };

//   return (
//     <div className="p-6 w-full">
//       <h1 className="text-4xl font-bold">Dashboard</h1>
//       <p className="p-4 text-2xl">Welcome to the dashboard. Have a look at the interactive widgets below:</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className={`p-6 rounded-lg shadow-lg cursor-pointer ${card.color} text-white flex flex-col justify-between`}
//             onClick={() => handleCardClick(card.title)} // Passing the `card.title`
//           >
//             <div className="text-4xl">{card.icon}</div>
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold">{card.title}</h3>
//               <p className="text-2xl">{card.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import { useState, useEffect } from "react";
// import { FaUser, FaBuilding, FaFilter, FaClock } from "react-icons/fa";
// import { MdCollectionsBookmark, MdFastfood } from "react-icons/md";
// import StatsCard from "../../components/Admin/StatsCard";  // Assuming you already have a StatsCard component
// import useGetData from "../../hooks/useGetData";  // Assuming this hook fetches data from the API
// import { Statistics } from "../../models/Statistics";  // Adjust this according to your models
// import { useCookies } from "react-cookie";

// const Dashboard = () => {
//   const [cookie] = useCookies(["token"]);
//   const token = cookie.token;
  
//   const { isLoading, error, data } = useGetData<{ data: Statistics }>("statistics", token);

//   // Stats data structure
//   const stats = [
//     { title: "Users", count: data?.data.count.users, icon: <FaUser /> },
//     { title: "Businesses", count: data?.data.count.businesses, icon: <FaBuilding /> },
//     { title: "Categories", count: data?.data.count.categories, icon: <FaFilter /> },
//     { title: "Collections", count: data?.data.count.collections, icon: <MdCollectionsBookmark /> },
//   ];

//   const extraStats = [
//     { title: "Dishes", count: data?.data.count.dishes, icon: <MdFastfood /> },
//     { title: "Hours", count: data?.data.count.hours, icon: <FaClock /> },
//   ];

//   return (
//     <main className="p-6 w-full">
//       <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

//       {isLoading ? (
//         <span>Loading...</span>
//       ) : error ? (
//         <span>{error}</span>
//       ) : data ? (
//         <>
//           <div className="flex gap-8 flex-wrap">
//             {stats.map((stat) => (
//               <StatsCard
//                 key={stat.title}
//                 title={stat.title}
//                 count={stat.count || 0}
//                 icon={stat.icon}
//               />
//             ))}
//           </div>

//           <div className="my-8" />

//           <div className="flex gap-8 flex-wrap">
//             {extraStats.map((stat) => (
//               <StatsCard
//                 key={stat.title}
//                 title={stat.title}
//                 count={stat.count || 0}
//                 icon={stat.icon}
//               />
//             ))}
//           </div>
//         </>
//       ) : null}
//     </main>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from "react";
import { FaUser, FaBuilding, FaFilter, FaClock } from "react-icons/fa";
import { MdCollectionsBookmark, MdFastfood } from "react-icons/md";
import StatsCard from "../../components/Admin/StatsCard"; // Assuming you already have a StatsCard component
import useGetData from "../../hooks/useGetData"; // Assuming this hook fetches data from the API
import { Statistics } from "../../models/Statistics"; // Adjust this according to your models
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [cookie] = useCookies(["token"]);
  const token = cookie.token;

  const { isLoading, error, data } = useGetData<{ data: Statistics }>("statistics", token);

  // Stats data structure for 6 elements
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
          {/* Stats Cards in 2 rows with 3 cards per row */}
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
