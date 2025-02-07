import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import CryptoJS from "crypto-js";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Estado para armazenar o usuário
  const navigate = useNavigate();
  const secretKey = "sua-chave-secreta";

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlUid = urlParams.get("uid");
        const getUid = localStorage.getItem("userId");

        let encryptedUid = decodeURIComponent(getUid || urlUid);
        if (!encryptedUid) throw new Error("Nenhum UID encontrado.");

        const decryptedBytes = CryptoJS.AES.decrypt(encryptedUid, secretKey);
        const decryptedUid = decryptedBytes.toString(CryptoJS.enc.Utf8);
        if (!decryptedUid) throw new Error("UID descriptografado é inválido.");

        const userDocRef = doc(db, "users", decryptedUid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) throw new Error("Usuário não encontrado.");

        const userData = userDocSnap.data();
        setUser({ id: decryptedUid, ...userData }); // Salvando o usuário no state

        localStorage.setItem("userId", getUid || urlUid);
        setAuthenticated(true);
        localStorage.setItem("authenticated", "true");
      } catch (error) {
        console.error("Erro ao autenticar usuário:", error.message);
        setMessage(error.message);
        navigate("/error");
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ authenticated, loading, message, setMessage, user }}>
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
