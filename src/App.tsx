import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import AllCategories from "./pages/AllCategories";
import WiddingPlanners from "./pages/WiddingPlanners";
import Cart from "./pages/Cart";
import DetailsCompany from "./pages/CompanyDetails";
import WeddingPlannerCard from "./components/Planners/WeddingPlannerCard";
import UserLayout from "./layouts/UserLayout";
import AdminUsersTable from "./pages/admin/AdminUsersTable";
import AdminUsersNew from "./pages/admin/AdminUsersNew";

function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/category/:categoryName" element={<AllCategories />} />
        <Route path="/planners" element={<WiddingPlanners />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route
        path="/category/:categoryName/:companyId"
        element={<DetailsCompany />}
      />
      <Route path="/planner/:id" element={<WeddingPlannerCard />} />

      <Route path="/admin">
        <Route path="users" element={<AdminUsersTable />} />
        <Route path="users/new" element={<AdminUsersNew />} />
      </Route>
    </Routes>
  );
}

export default App;
