import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import CryptoJS from "crypto-js";
import { doc, getDoc } from "firebase/firestore";
// Loading gif
import Loading from "../assets/loading.webp";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [balls, setBalls] = useState([]); // Corrigido: setBalls
  const [message, setMessage] = useState(null); //balls setMessage

  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const secretKey = "sua-chave-secreta";

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlUid = urlParams.get("uid");
        
        let encryptedUid = urlUid ? decodeURIComponent(urlUid) : localStorage.getItem("userId");

        if (!encryptedUid) throw new Error("Nenhum UID encontrado.");

        const decryptedBytes = CryptoJS.AES.decrypt(encryptedUid, secretKey);
        const decryptedUid = decryptedBytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedUid) throw new Error("UID descriptografado é inválido.");

        localStorage.setItem("userId", encryptedUid);

        const userDocRef = doc(db, "users", decryptedUid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) throw new Error("Usuário não encontrado.");

        const userData = userDocSnap.data();
        const storedToken = userData.token;

        if (!storedToken) throw new Error("Nenhum token encontrado no Banco de Dados.");

        const user = auth.currentUser;
        if (!user) throw new Error("Usuário não autenticado.");

        const tokenResult = await user.getIdTokenResult(true);
        const now = Date.now() / 1000;

        if (tokenResult.expirationTime < now) throw new Error("Token expirado. Entre com seus dados novamente.");

        setAuthenticated(true);
        localStorage.setItem("authenticated", "true");
      } catch (error) {
        console.error("Erro ao autenticar usuário:", error.message);
        alert(error.message);
        window.location.href = "https://www.bolaodomineiro.com.br/";
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ authenticated, loading, balls, setBalls, message, setMessage }}>
      { children}
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

