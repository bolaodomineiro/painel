import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from '../../firebase/firebase';  // Corrigido

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);  // Chamando corretamente
      const user = userCredential.user;
      setAuthenticated(true);
      localStorage.setItem("token", user.accessToken);
      navigate("/painel");
    } catch (error) {
      console.error(error.message);
      alert("Credenciais inválidas");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
