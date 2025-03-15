// import { Link } from "react-router-dom";
// import { GiShoppingBag } from "react-icons/gi";
// import { useAtom, useAtomValue } from "jotai";
// import { cartItemsAtom } from "../../atoms";

// const Navbar = () => {
//   const cartItems = useAtomValue(cartItemsAtom);
//   return (
//     <nav className="shadow-sm relative">
//       <div className="flex px-10">
//         {/* Left side */}
//         <div className="w-1/2 flex items-center justify-start space-x-4 text-2xl">
//           <Link to="/" className="text-gray-700 hover:text-gray-900">
//             HOME
//           </Link>
//           <span className="text-gray-500">|</span>
//           <Link to="/page01" className="text-gray-700 hover:text-gray-900">
//             OUR SERVICES
//           </Link>
//         </div>

//           <div className="flex flex-col items-center">
//             <img
//               src="/src/assets/Logo/logo.jpg"
//               alt="Company Logo"
//               className="h-24"
//             />
//           </div>
       

//         {/* Right side */}
//         <div className="w-1/2 flex items-center justify-end space-x-4 text-2xl">
//           <Link to="/collection" className="text-gray-700 hover:text-gray-900">
//           OUR COLLECTION
//           </Link>
//           <span className="text-gray-500">|</span>
           
//             {/* Shopping Cart */}
//             <Link
//               to="/page03"
//               className="relative text-gray-700 hover:text-gray-900"
//             >
//               {cartItems.length !== 0 ? (
//                 <div className="absolute -top-2 -right-2 bg-amber-600 w-5 h-5 rounded-full text-xs text-white flex items-center justify-center">
//                   {cartItems.length}
//                 </div>
//               ) : null}
//               <GiShoppingBag size={24} />
//             </Link>
//           </div>
//         </div>
//     </nav>
//   );
// };

// export default Navbar;

//sidebar

// import { Link, useNavigate } from "react-router-dom";
// import { GiShoppingBag } from "react-icons/gi";
// import { FiMenu } from "react-icons/fi";
// import { FaGlobe, FaLock, FaHome, FaSignOutAlt, FaSun, FaMoon } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import { useAtomValue } from "jotai";
// import { cartItemsAtom } from "../../atoms";
// import { useCookies } from "react-cookie";
// import { useAuth } from "../../context/AuthContext";
// import { useTranslation } from 'react-i18next';

// const Navbar = () => {
//   const { i18n } = useTranslation();

//   const handleLanguageChange = () => {
//     const newLang = i18n.language === 'ar' ? 'en' : 'ar'; // Toggle between Arabic & English
//     i18n.changeLanguage(newLang);
//   };
//   const cartItems = useAtomValue(cartItemsAtom);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const navigate = useNavigate();
//   const {logout} = useAuth();

  
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
//   const [cookies, setCookie, removeCookie] = useCookies(["token"]);
 
//     const handleLogout = () => {
//       removeCookie("token");
//       // removeCookie("role", { path: "/" });
//       setIsSidebarOpen(false);
//       navigate("/login");
//   };

  
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === "dark");
//     } else {
//       const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       setIsDarkMode(prefersDark);
//     }
//   }, []);

//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add("dark-mode");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.body.classList.remove("dark-mode");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDarkMode]);

//   return (
//     <nav className="shadow-sm relative">
//       <div className="flex px-10">
//         <div className="w-1/2 flex items-center justify-start space-x-4 text-2xl">
//           <Link to="/" className="text-primary hover:text-gray-600">
//             HOME
//           </Link>
//           <span className="text-primary">|</span>
//           <Link to="/page01" className="text-primary hover:text-gray-600">
//             OUR SERVICES
//           </Link>
//         </div>

//         <div className="flex flex-col items-center">
//           {isDarkMode ? (
//           <>
//             <img className="invert h-32 " src="/daawa-text.png" />
//           </>
//         ) : (
//           <>
//             <img className=" h-32 " src="/daawa-text.png" />
//           </>
//         )}
//         </div>

//         <div className="w-1/2 flex items-center justify-end space-x-4 text-2xl">
//           <Link to="/collection" className="text-primary hover:text-gray-600">
//             OUR COLLECTION
//           </Link>
//           <span className="text-primary">|</span>

//           <Link
//             to="/page03"
//             className="relative text-primary hover:text-gray-600"
//           >
//             {cartItems.length !== 0 && (
//               <div className="absolute -top-2 -right-2 bg-amber-600 w-5 h-5 rounded-full text-xs text-white flex items-center justify-center">
//                 {cartItems.length}
//               </div>
//             )}
//             <GiShoppingBag size={24} />
//           </Link>

//           <button onClick={toggleSidebar} className="text-primary hover:text-gray-900">
//             <FiMenu size={24} />
//           </button>
//         </div>
//       </div>
//       {isSidebarOpen && (
//   <div className={`fixed top-0 right-0 w-64 h-full sidebar shadow-lg z-50 p-5`}>
//     <button 
//       onClick={toggleSidebar} 
//       className="absolute top-4 right-4 text-2xl sidebar-close-btn"
//     >
//       ✖
//     </button>

//     <ul className="space-y-4 mt-10">
     
//       <li className="flex items-center space-x-2 sidebar-link cursor-pointer">
    
//       </li>
      
    

//       {/* <li className="flex items-center space-x-2 sidebar-link cursor-pointer">
//         <FaGlobe /> <span>Change Language</span>
//       </li> */}

// <li
//       className="flex items-center space-x-2 sidebar-link cursor-pointer"
//       onClick={handleLanguageChange}
//     >
//       <FaGlobe />
//       <span>{i18n.language === 'ar' ? 'تغيير اللغة' : 'Change Language'}</span>
//     </li>

//       <li className="sidebar-divider"></li>

//       <li
//         onClick={toggleTheme}
//         className="flex items-center space-x-2 sidebar-link cursor-pointer"
//       >
//         {isDarkMode ? (
//           <>
//             <FaSun /> <span>Light Mode</span>
//           </>
//         ) : (
//           <>
//             <FaMoon /> <span>Dark Mode</span>
//           </>
//         )}
//       </li>

//       <li className="sidebar-divider"></li>
//       <li
//         onClick={handleLogout}
//         className="flex items-center space-x-2 text-red-600 hover:text-red-800 cursor-pointer"
//       >
//         <FaSignOutAlt /> <span>Logout</span>
//       </li>
//     </ul>
//   </div>
// )}

//     </nav>
//   );
// };

// export default Navbar;


// responsive 


import { Link, useNavigate } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { FaGlobe, FaSignOutAlt, FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useAtomValue } from "jotai";
import { cartItemsAtom } from "../../atoms";
import { useAuth } from "../../context/AuthContext";
// import { useTranslation } from 'react-i18next';

const Navbar = () => {
  // const { i18n } = useTranslation();

  // const handleLanguageChange = () => {
  //   const newLang = i18n.language === 'ar' ? 'en' : 'ar'; 
  //   i18n.changeLanguage(newLang);
  // };

  const cartItems = useAtomValue(cartItemsAtom);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();  

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    logout();
    setIsSidebarOpen(false);
    navigate("/login");
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <nav className="shadow-sm relative">
      <div className="flex px-4 md:px-10 py-4 items-center justify-between">
        {/* Left Side Links */}
        <div className="flex items-center space-x-4 text-xs md:text-xl">
          <Link to="/" className="text-primary  hover:text-gray-600">
            HOME
          </Link>
          <span className="text-primary">|</span>
          <Link to="/page01" className="text-primary hover:text-gray-600 hidden md:inline">
            OUR SERVICES
          </Link>
        </div>

        {/* Logo - Hidden on Small Screens */}
        <div className="hidden md:block">
          {isDarkMode ? (
            <img className="invert h-32" src="/daawa-text.png" alt="Daawa Logo" />
          ) : (
            <img className="h-32" src="/daawa-text.png" alt="Daawa Logo" />
          )}
        </div>

        {/* Right Side Links */}
        <div className="flex items-center space-x-4 text-xs md:text-xl">
          <Link to="/page01" className="text-primary hover:text-gray-600 md:hidden">
            OUR SERVICES
          </Link>
          <span className="text-primary md:hidden">|</span>
          <Link to="/collection" className="text-primary hover:text-gray-600">
            OUR COLLECTION
          </Link>
          <span className="text-primary">|</span>

          <Link
            to="/page03"
            className="relative text-primary hover:text-gray-600"
          >
            {cartItems.length !== 0 && (
              <div className="absolute -top-2 -right-2 bg-amber-600 w-5 h-5 rounded-full text-xs text-white flex items-center justify-center">
                {cartItems.length}
              </div>
            )}
            <GiShoppingBag size={24} />
          </Link>

          <button onClick={toggleSidebar} className="text-primary hover:text-gray-900">
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full sidebar shadow-lg z-50 p-5">
          <button 
            onClick={toggleSidebar} 
            className="absolute top-4 right-4 text-2xl text-primary hover:text-gray-900"
          >
            ✖️
           </button><ul className="space-y-4 mt-10">
           {/* <li
              className="flex items-center space-x-2 text-primary hover:text-gray-600 cursor-pointer"
              onClick={handleLanguageChange}
            >
              <FaGlobe />
              <span>{i18n.language === 'ar' ? 'تغيير اللغة' : 'Change Language'}</span>
            </li>

            <li className="border-t border-gray-200 my-4"></li> */}

            <li
              onClick={toggleTheme}
              className="flex items-center space-x-2 text-primary hover:text-gray-600 cursor-pointer"
            >
              {isDarkMode ? (
                <>
                  <FaSun /> <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FaMoon /> <span>Dark Mode</span>
                </>
              )}
            </li>

            <li className="border-t border-gray-200 my-4"></li>
            <li
              onClick={handleLogout}
              className="flex items-center space-x-2 text-red-600 hover:text-red-800 cursor-pointer"
            >
              <FaSignOutAlt /> <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;