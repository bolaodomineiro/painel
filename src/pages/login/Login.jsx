import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from '../../firebase/firebase';  // Corrigido
import { ContainerLogin } from "./loginStyles";
import Logo from "../../components/logo/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [visibile, setVisibile] = useState(false);
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
      localStorage.setItem("Authenticated", true);

      console.log(user.accessToken)
      navigate("/painel");
    } catch (error) {
      console.error(error.message);
      alert("Credenciais inválidas");
    }
  };


  return (
    <ContainerLogin>
      <form onSubmit={handleLogin}>
        <div className="logo-container">
          <Logo $width="150px" />
        </div>
        <h3>Login</h3>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </div>
        <div>
          <label>Senha:</label>
          <div className="password-container">
            <input
              type={visibile ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
            { visibile ? 
              <FontAwesomeIcon icon={faEye}
                className="eye-icon" 
                onClick={() => setVisibile(!visibile)}
              /> :
              < FontAwesomeIcon icon={faEyeSlash}
                className="eye-icon" 
                onClick={() => setVisibile(!visibile)}
              />
            }
          </div>
        </div>
        <div>
            <p className="recovery-password"> Esqueceu sua senha ?</p>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </ContainerLogin>
  );
};

export default Login;
