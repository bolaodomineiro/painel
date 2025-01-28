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

  
  
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token") || localStorage.getItem("token");
  console.log(token)

  if (token) {
      console.log("Token recebido:", token); // Verifique o token recebido
      signInWithCustomToken(auth, token)
          .then((userCredential) => {
              const user = userCredential.user;
              console.log("Usuário autenticado com sucesso:", user);

              setAuthenticated(true);
              localStorage.setItem("Authenticated", true);
              localStorage.setItem("token", token);
              localStorage.setItem("userUid", JSON.stringify(user.uid));
          })
          .catch((error) => {
              console.error("Erro ao autenticar:", error.message, error.code);
              localStorage.removeItem("token"); // Limpa o token inválido
              navigate("/login"); // Redireciona para a página de login
          });
  } else {
      console.warn("Nenhum token encontrado. Redirecionando para login.");
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
