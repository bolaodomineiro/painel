import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useAuthContext();

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
