import { FaBuilding, FaFilter } from "react-icons/fa";
import {
  MdAccountCircle,
  MdArchitecture,
  MdBuild,
  MdCollections,
  MdCollectionsBookmark,
  MdEngineering,
  MdFilter,
  MdFilter1,
  MdFilter5,
} from "react-icons/md";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <nav className="h-full bg-accent text-white">
      <img className="invert w-4/5" src="/daawa-text.png" />
      <div className="ps-4 flex flex-col gap-8">
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
      </div>
    </nav>
  );
};

export default AdminSideBar;
