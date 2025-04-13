import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

type UserRole = "ADMIN" | "USER" | null;

type AuthContextType = {
  role: UserRole;
  login: (role: UserRole) => void;
  logout: () => void;
  isLoading: boolean; 
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  const [cookies, setCookie, removeCookie] = useCookies(["token", "role"]);

  
  useEffect(() => {
    const storedRole = cookies.role;
    if (storedRole) {
      setRole(storedRole as UserRole);
    }
    setIsLoading(false); 
  }, [cookies.role]);

  const login = (role: UserRole) => {
    setRole(role);
    setCookie("role", role, { path: "/" });
  };

  const logout = () => {
    setRole(null);
    removeCookie("token", { path: "/" });
    removeCookie("role", { path: "/" });
  };

  return (
    <AuthContext.Provider value={{ role, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};