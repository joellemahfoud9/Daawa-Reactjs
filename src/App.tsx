import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import AllCategories from "./pages/AllCategories";
import Collection from "./pages/CollectionBusinesses";
import Cart from "./pages/Cart";
import CartPage from "./pages/user/CartPage";
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
import AdminStats from "./pages/admin/AdminStats";
import AdminBusinessAttributes from "./pages/admin/AdminBusinessAttributes";
import OrderDetailsCartPage from "./pages/user/OrderDetailsCartPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminCollectionsEdit from "./pages/admin/AdminCollectionEdit";
import CollectionDetails from "./pages/user/CollectionDetails";
import { AuthProvider } from "./context/AuthContext"; 
import { ProtectedRoute } from "../src/components/ProtectedRouteProps"; 
import Dashboard from "../src/components/Admin/Dashboard";
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
    <AuthProvider> 
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route
          element={
            <ProtectedRoute role="USER" element={<UserLayout />} /> 
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/category/:categoryName" element={<AllCategories />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:id" element={<CollectionDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="page01" element={<CategoriesBusinesses />} />
          <Route path="page01/:id" element={<BusinessDetails />} />
          <Route path="page02/:id" element={<CategoryBusinesses />} />
          <Route path="page04" element={<OrderDetailsCartPage />} />
          <Route path="page03" element={<CartPage />} />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN" element={<AdminLayout />} /> 
          }
        >
          <Route index element={<Dashboard/>} />
          <Route path="users" element={<AdminUsersTable />} />
          <Route path="users/new" element={<AdminUsersNew />} />
          <Route path="users/:id" element={<AdminUsersEdit />} />
          <Route path="users/password/:id" element={<AdminUsersEditPassword />} />
          <Route path="businesses" element={<AdminBusinessesTable />} />
          <Route path="businesses/new" element={<AdminBusinessesNew />} />
          <Route path="businesses/:id" element={<AdminBusinessesEdit />} />
          <Route path="businesses/:id/hours" element={<AdminBusinessHours />} />
          <Route path="businesses/:id/dishes" element={<AdminBusinessDishes />} />
          <Route
            path="businesses/:id/attributes"
            element={<AdminBusinessAttributes />}
          />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="categories/new" element={<AdminCategoriesNew />} />
          <Route path="categories/:id" element={<AdminCategoryEdit />} />
          <Route path="collections" element={<AdminCollections />} />
          <Route path="collections/new" element={<AdminCollectionsNew />} />
          <Route path="collections/:id" element={<AdminCollectionsEdit />} />
          <Route path="statistics" element={<AdminStats />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;