import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import CryptoJS from "crypto-js";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const secretKey = "sua-chave-secreta";

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Obtém o UID da URL ou localStorage
        const urlParams = new URLSearchParams(window.location.search);
        const urlUid = urlParams.get("uid");
        let encryptedUid = urlUid ? decodeURIComponent(urlUid) : localStorage.getItem("userId");

        if (!encryptedUid) throw new Error("Nenhum UID encontrado.");

        // Descriptografa o UID
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedUid, secretKey);
        const decryptedUid = decryptedBytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedUid) throw new Error("UID descriptografado é inválido.");

        // Armazena o UID descriptografado no localStorage
        localStorage.setItem("userId", decryptedUid);

        // Busca o documento do usuário no Firestore
        const userDocRef = doc(db, "users", decryptedUid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) throw new Error("Usuário não encontrado.");

        const userData = userDocSnap.data();
        const storedToken = userData.token;

        if (!storedToken) throw new Error("Nenhum token encontrado no Banco de Dados.");

        const user = auth.currentUser;
        console.log(user);
        if (!user) throw new Error("Usuário não autenticado.");

        const tokenResult = await user.getIdTokenResult(true);
        const now = Date.now() / 1000;

        if (tokenResult.expirationTime < now) throw new Error("Token expirado. Entre com seus dados novamente.");

        // Usuário autenticado com sucesso
        setAuthenticated(true);
        localStorage.setItem("authenticated", "true"); // opcional, dependendo do seu fluxo

      } catch (error) {
        console.error("Erro ao autenticar usuário:", error.message);
        setMessage(error.message); // Armazenando a mensagem de erro
        navigate("/error"); // Redireciona para uma página de erro
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ authenticated, loading, message, setMessage }}>
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
