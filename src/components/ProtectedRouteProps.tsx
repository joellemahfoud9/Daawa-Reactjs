// import React from "react";
// import { Route, Navigate, useLocation, RouteProps } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// type UserRole = "ADMIN" | "USER" | null;

// type ProtectedRouteProps = {
//   role?: UserRole; 
//   element: React.ReactNode; 
// };

// export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
//   role,
//   element,
  
// }) => {
//   const { role: userRole } = useAuth();
//   const location = useLocation();

//   if (!role && userRole) {
//     return <>{element}</>;
//   }

//   if (role && userRole === role) {
//     return <>{element}</>;
//   }
//   return (
//     <Navigate
//       to="/login"
//       state={{ from: location }} 
//       replace
//     />
//   );
// };

import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type UserRole = "ADMIN" | "USER" | null;

type ProtectedRouteProps = {
  role?: UserRole; 
  element: React.ReactNode; 
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  role,
  element,
}) => {
  const { role: userRole, isLoading } = useAuth(); // Added `isLoading`
  const location = useLocation();

  // Show loading state while verifying role
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If no specific role is required, and the user has a role, allow access
  if (!role && userRole) {
    return <>{element}</>;
  }

  // If the required role matches the user's role, allow access
  if (role && userRole === role) {
    return <>{element}</>;
  }

  // Redirect to login if not authorized
  return (
    <Navigate
      to="/login"
      state={{ from: location }} 
      replace
    />
  );
};
