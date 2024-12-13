import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import AllCategories from "./pages/AllCategories";
import WiddingPlanners from "./pages/WiddingPlanners";
import Cart from "./pages/Cart";
import CartPage from "./pages/user/CartPage";
import DetailsCompany from "./pages/CompanyDetails";
import WeddingPlannerCard from "./components/Planners/WeddingPlannerCard";
import UserLayout from "./layouts/UserLayout";
import AdminUsersTable from "./pages/admin/AdminUsersTable";
import AdminUsersNew from "./pages/admin/AdminUsersNew";
import AdminLayout from "./layouts/AdminLayout";
import AdminUsersEdit from "./pages/admin/AdminUsersEdit";
import AdminUsersEditPassword from "./pages/admin/AdminUsersEditPassword";
import AdminBusinessesTable from "./pages/admin/AdminBusinessesTable";
import AdminCollectionsNew from "./pages/admin/AdminCollectionsNew";
import AdminCollections from "./pages/admin/AdminCollections";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminCategoriesNew from "./pages/admin/AdminCategoriesNew";
import AdminCategoryEdit from "./pages/admin/AdminCategoryEdit";
import AdminBusinessesEdit from "./pages/admin/AdminBusinessesEdit";
import AdminBusinessesNew from "./pages/admin/AdminBusinessesNew";
import CategoriesBusinesses from "./pages/user/CategoriesBusinesses";
import BusinessDetails from "./pages/user/BusinessDetails";
import CategoryBusinesses from "./pages/user/CategoryBusinesses";
import { useAtomValue } from "jotai";
import { cartItemsAtom } from "./atoms";
import { useEffect } from "react";
import AdminBusinessHours from "./pages/admin/AdminBusinessHours";
import AdminBusinessDishes from "./pages/admin/AdminBusinessDishes";

function App() {
  const cartItems = useAtomValue(cartItemsAtom);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        event.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/category/:categoryName" element={<AllCategories />} />
        <Route path="/planners" element={<WiddingPlanners />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="page01" element={<CategoriesBusinesses />} />
        <Route path="page01/:id" element={<BusinessDetails />} />
        <Route path="page02/:id" element={<CategoryBusinesses />} />
        <Route path="page03" element={<CartPage />} />
      </Route>
      <Route
        path="/category/:categoryName/:companyId"
        element={<DetailsCompany />}
      />
      <Route path="/planner/:id" element={<WeddingPlannerCard />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="users" element={<AdminUsersTable />} />
        <Route path="users/new" element={<AdminUsersNew />} />
        <Route path="users/:id" element={<AdminUsersEdit />} />
        <Route path="users/password/:id" element={<AdminUsersEditPassword />} />
        <Route path="businesses" element={<AdminBusinessesTable />} />
        <Route path="businesses/new" element={<AdminBusinessesNew />} />
        <Route path="businesses/:id" element={<AdminBusinessesEdit />} />
        <Route path="businesses/:id/hours" element={<AdminBusinessHours />} />
        <Route path="businesses/:id/dishes" element={<AdminBusinessDishes />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="categories/new" element={<AdminCategoriesNew />} />
        <Route path="categories/:id" element={<AdminCategoryEdit />} />
        <Route path="collections" element={<AdminCollections />} />
        <Route path="collections/new" element={<AdminCollectionsNew />} />
      </Route>
    </Routes>
  );
}

export default App;
