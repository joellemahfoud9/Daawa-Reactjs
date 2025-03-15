import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/Admin/AdminSideBar";
const AdminLayout = () => {
  return (
    <>
      <main className="flex">
        <div className="fixed w-52 h-screen">
          <AdminSideBar />
        </div>
        <div className="w-full ms-52">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
