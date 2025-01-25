import { createContext, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const getAuthenticated = localStorage.getItem("Authenticated");
  const [authenticated, setAuthenticated] = useState(getAuthenticated || false);

  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Usuário autenticado, você pode exibir o painel ou outros dados
      console.log("Usuário autenticado no site 2:", user);
      setAuthenticated(true);
    } else {
        navigate("/login");
    }
  });

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
