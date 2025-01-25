import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const getAuthenticated = localStorage.getItem("Authenticated");
  const [authenticated, setAuthenticated] = useState(getAuthenticated);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuário autenticado:", user);
        // Evitar redirecionamento contínuo se já estiver no painel
        if (window.location.pathname !== "/painel") {
          window.location.href = "/painel";
        }
      } else {
        console.log("Nenhum usuário autenticado.");
        // Evitar redirecionamento contínuo se já estiver na tela de login
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }
    });
  
    return () => unsubscribe();
  }, []);


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
