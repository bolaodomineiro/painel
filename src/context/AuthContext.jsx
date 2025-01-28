import { createContext, useContext, useEffect, useState } from "react";
import { signInWithCustomToken } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const getAuthenticated = localStorage.getItem("Authenticated");
  const [authenticated, setAuthenticated] = useState(getAuthenticated || false);
    
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token") || localStorage.getItem("token");
  localStorage.setItem("token", token);


  if (token) {
    console.log("Token encontrado, tentando autenticar...");

    // logica para validar o token 

  } else {
    console.log("Nenhum token encontrado");
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

