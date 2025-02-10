import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Verifica a autenticação ao carregar a página
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        localStorage.setItem("userId", currentUser.uid);
        try {
          await currentUser.getIdToken(true); // Garante que o token está atualizado
          setUser(currentUser);
          setAuthenticated(true);
        } catch (error) {
          console.error("Erro ao obter token:", error);
          setUser(null);
          setAuthenticated(false);
        }
      } else {
        setUser(null);
        setAuthenticated(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Função de login
  const signInUser = async (email, password) => {
    try {
      await setPersistence(auth, browserLocalPersistence); // Garante a persistência
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem("userId", user.uid);

      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        setUser(user);
        setAuthenticated(true);
        navigate("/dashboard/jogo"); // Redireciona após login
        return { success: true, user, userData: userDoc.data() };
      } else {
        setMessage("Usuário não encontrado.");
        return { success: false, message: "Usuário não encontrado." };
      }
    } catch (error) {
      setMessage(error.message);
      return { success: false, message: error.message };
    }
  };

  // Função de logout
  const logoutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setAuthenticated(false);
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated, loading, setLoading, message, setMessage, signInUser, logoutUser }}>
      {children} {/* Garante que os filhos só renderizam quando o estado de loading terminar */}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext deve ser usado dentro de um AuthProvider");
  }
  return context;
};
