import React from "react";
import { Route, Navigate, useLocation, RouteProps } from "react-router-dom";
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
  const { role: userRole } = useAuth();
  const location = useLocation();

  if (!role && userRole) {
    return <>{element}</>;
  }

  if (role && userRole === role) {
    return <>{element}</>;
  }
  return (
    <Navigate
      to="/login"
      state={{ from: location }} 
      replace
    />
  );
};