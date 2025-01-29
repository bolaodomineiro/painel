import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import CryptoJS from "crypto-js";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const secretKey = "sua-chave-secreta"; // Guarde isso em um .env

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlUid = urlParams.get("uid");

        let encryptedUid = urlUid ? decodeURIComponent(urlUid) : localStorage.getItem("userId");

        if (!encryptedUid) {
          console.log("Nenhum UID encontrado.");
          navigate("/login");
          return;
        }

        // 🛠️ Descriptografar UID
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedUid, secretKey);
        const decryptedUid = decryptedBytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedUid) {
          console.log("Erro: UID descriptografado é inválido.");
          navigate("/login");
          return;
        }

        // ✅ Salva o UID descriptografado no localStorage
        localStorage.setItem("userId", encryptedUid);

        // 🔍 Busca o usuário no Firestore
        const userDocRef = doc(db, "users", decryptedUid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          console.log("Usuário não encontrado.");
          navigate("/login");
          return;
        }

        const userData = userDocSnap.data();
        const storedToken = userData.token;

        if (!storedToken) {
          console.log("Nenhum token encontrado no Firestore.");
          navigate("/login");
          return;
        }

        console.log("Token encontrado, validando...");

        // Verifica se o token ainda é válido
        const user = auth.currentUser;
        if (!user) {
          console.log("Usuário não autenticado.");
          navigate("/login");
          return;
        }

        const tokenResult = await user.getIdTokenResult(true);
        const now = Date.now() / 1000;

        if (tokenResult.expirationTime < now) {
          console.log("Token expirado.");
          navigate("/login");
          return;
        }

        console.log("Token válido. Acesso autorizado.");
        setAuthenticated(true);
        localStorage.setItem("authenticated", "true");
      } catch (error) {
        console.error("Erro ao autenticar usuário:", error.message);
        navigate("/login");
      }
    };

    verifyUser();
  }, [navigate]);

  return <AuthContext.Provider value={{ authenticated }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

