import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";


const UserLayout = () => {
  return (
    <>
      <div >
        <Navbar  />
      </div>
      
      <Outlet />
    </>
  );
};

export default UserLayout;
