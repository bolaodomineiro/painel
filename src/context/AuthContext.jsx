import { createContext, useContext, useState} from "react";
import { signInWithCustomToken } from "firebase/auth"
import { useNavigate } from "react-router-dom";;
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const navigate = useNavigate();

  const getAuthenticated = localStorage.getItem("Authenticated");
  const [authenticated, setAuthenticated] = useState(getAuthenticated || null);
  // const [currentUser, setCurrentUser] = useState(null);

  if (authenticated === null) {
    navigate("/login");
  }

  
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token") || localStorage.getItem("token");
  
  if (token) {
      signInWithCustomToken(auth, token)
      .then((userCredential) => {
          setAuthenticated(true);
          // Usuário autenticado, pode acessar o painel
          const user = userCredential.user;
          localStorage.setItem("Authenticated", true);
          localStorage.setItem("token", token);
          localStorage.setItem("userUid", JSON.stringify(user.uid));
          console.log("Usuário autenticado: ", user);
      })
      .catch((error) => {
          // Token inválido ou expirado, redireciona para login
          console.error(error);
          navigate("/login");
      });
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
