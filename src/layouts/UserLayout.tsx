import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import MobileNavBar from "../components/home/MobileNavBar";

const UserLayout = () => {
  return (
    <>
      <div className="max-lg:hidden">
        <Navbar simpleLogo />
      </div>
      <div className="lg:hidden">
        <MobileNavBar />
      </div>
      <Outlet />
    </>
  );
};

export default UserLayout;
