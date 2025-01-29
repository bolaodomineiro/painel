import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import CryptoJS from "crypto-js";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const secretKey = "sua-chave-secreta";

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlUid = urlParams.get("uid");

        let encryptedUid = urlUid ? decodeURIComponent(urlUid) : localStorage.getItem("userId");

        if (!encryptedUid) {
          alert("Nenhum UID encontrado.");
          navigate("/login");
          return;
        }

        const decryptedBytes = CryptoJS.AES.decrypt(encryptedUid, secretKey);
        const decryptedUid = decryptedBytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedUid) {
          alert("Erro: UID descriptografado é inválido.");
          navigate("/login");
          return;
        }

        localStorage.setItem("userId", encryptedUid);

        const userDocRef = doc(db, "users", decryptedUid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          alert("Usuário não encontrado.");
          navigate("/login");
          return;
        }

        const userData = userDocSnap.data();
        const storedToken = userData.token;

        if (!storedToken) {
          alert("Nenhum token encontrado no Banco de Dados.");
          navigate("/login");
          return;
        }

        // console.log("Token encontrado, validando...");

        const user = auth.currentUser;
        if (!user) {
          alert("Usuário não autenticado.");
          navigate("/login");
          return;
        }

        const tokenResult = await user.getIdTokenResult(true);
        const now = Date.now() / 1000;

        if (tokenResult.expirationTime < now) {
          alert("Token expirado. Entre com seus dados novamente.");
          navigate("/login");
          return;
        }

        alert("Acesso autorizado. Bem vindo!");
        setAuthenticated(true);
        localStorage.setItem("authenticated", "true");
      } catch (error) {
        alert("Erro ao autenticar usuário:", error.message);
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

