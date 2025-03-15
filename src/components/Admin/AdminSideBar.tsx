import { FaBuilding, FaFilter } from "react-icons/fa";
import {
  MdAccountCircle,
  MdCollectionsBookmark,
  MdOutlineEqualizer,
  MdLogout,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminSideBar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); 

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <nav className="h-full bg-accent text-white flex flex-col justify-between p-4">
      <div>
        <img className="invert w-4/5" src="/daawa-text.png" />
        <div className="ps-4 flex flex-col gap-8 mt-8">
          <Link to={"/admin/users"}>
            <div className="flex items-center gap-4 text-xl">
              <MdAccountCircle />
              <span>Users</span>
            </div>
          </Link>
          <Link to={"/admin/businesses"}>
            <div className="flex items-center gap-4 text-xl">
              <FaBuilding />
              <span>Businesses</span>
            </div>
          </Link>
          <Link to={"/admin/categories"}>
            <div className="flex items-center gap-4 text-xl">
              <FaFilter />
              <span>Categories</span>
            </div>
          </Link>
          <Link to={"/admin/collections"}>
            <div className="flex items-center gap-4 text-xl">
              <MdCollectionsBookmark />
              <span>Collections</span>
            </div>
          </Link>
          <Link to={"/admin/statistics"}>
            <div className="flex items-center gap-4 text-xl">
              <MdOutlineEqualizer />
              <span>Statistics</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-4 text-xl text-red-500 hover:text-red-400 p-4"
      >
        <MdLogout />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default AdminSideBar;
