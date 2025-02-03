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
        const  getUid = localStorage.getItem("userId")

        let encryptedUid =  decodeURIComponent(getUid || urlUid); 

        if (!encryptedUid) throw new Error("Nenhum UID encontrado.");

        // Descriptografa o UID
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedUid, secretKey);
        const decryptedUid = decryptedBytes.toString(CryptoJS.enc.Utf8);
        if (!decryptedUid) throw new Error("UID descriptografado é inválido.");

        // Busca o documento do usuário no Firestore
        const userDocRef = doc(db, "users", decryptedUid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) throw new Error("Usuário não encontrado.");

        localStorage.setItem("userId",getUid || urlUid);
        setAuthenticated(true);
        localStorage.setItem("authenticated", "true"); // Opcional, dependendo do seu fluxo
        navigate("dashboard/jogo");

      } catch (error) {
        console.error("Erro ao autenticar usuário:", error.message);
        setMessage(error.message); // Armazenando a mensagem de erro
        alert(error.message: "Ocorreu um erro ao autenticar o usuário.");
        window.location.href = "https://www.bolaodomineiro.com.br/";
        // navigate("/error"); // Redireciona para uma página de erro (se necessário)
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
