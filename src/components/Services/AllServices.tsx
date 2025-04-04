// import { useState } from "react";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import { servicesData } from "../../constant/index";
// import { Link } from "react-router-dom";

// interface Props {
//   rating: number;
// }

// const StarRating = ({ rating }: Props) => {
//   const totalStars = 5;

//   return (
//     <div className="flex items-center mb-2">
//       {/* Render filled stars based on the rating */}
//       {[...Array(totalStars)].map((_, index) =>
//         index < rating ? (
//           <FaStar key={index} className="text-yellow-500 text-lg" />
//         ) : (
//           <FaRegStar key={index} className="text-gray-400 text-lg" />
//         )
//       )}
//     </div>
//   );
// };

// const AllServices = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const filteredServices = servicesData.filter(
//     (service) =>
//       (selectedCategory === "" || service.serviceName === selectedCategory) &&
//       (service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         service.companies.some((company) =>
//           company.name.toLowerCase().includes(searchTerm.toLowerCase())
//         ))
//   );

//   return (
//     <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
//       <div className="mb-8 mt-9 flex flex-col md:flex-row items-center justify-between gap-4">
//         <input
//           type="text"
//           placeholder="Search for services or companies..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Category Dropdown */}
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
//         >
//           <option value="">All Categories</option>
//           {servicesData.map((service, index) => (
//             <option key={index} value={service.serviceName}>
//               {service.serviceName}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Services List */}
//       <div className="space-y-12">
//         {filteredServices.map((service, index) => (
//           <div key={index}>
//             <div className="flex justify-between items-center mb-4 max-sm:flex-col max-sm:gap-4">
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 {service.serviceName}
//               </h2>
//               <Link to={`/category/${service.serviceName}`}>
//                 <button className="px-6 py-2 text-bold border-black border transition">
//                   SHOW MORE
//                 </button>
//               </Link>
//             </div>

//             {/* Company List */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {service.companies.map((company) => (
//                 <div
//                   key={company.id}
//                   className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center relative"
//                   style={{
//                     backgroundImage: `url(${company.imageUrl})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     height: "300px",
//                   }}
//                 >
//                   {/* Content inside the card */}
//                   <div className="absolute bottom-4 left-4 right-4 p-4 bg-black bg-opacity-50 rounded-lg max-sm:flex max-sm:flex-col max-sm:items-center">
//                     {/* Star Rating */}
//                     <StarRating rating={company.rating} />

//                     {/* Company Name and Show Details Button */}
//                     <div className="flex justify-between items-center w-full max-sm:flex-col">
//                       <p className="text-lg font-medium text-white mb-2">
//                         {company.name}
//                       </p>
//                       <Link
//                         to={`/category/${service.serviceName}/${company.id}`}
//                       >
//                         <button className="px-4 py-2 bg-amber-400 text-white rounded-lg  transition">
//                           Show Details
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllServices;
