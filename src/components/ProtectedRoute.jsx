import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useAuthContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!authenticated) {
      console.log("Usuário não autenticado, redirecionando para login");
      navigate("/login");
    }
  }, [authenticated, navigate]);  // Passamos o dependency array para o useEffect

  if (!authenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
