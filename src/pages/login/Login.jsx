import { useState } from "react";
import { ContainerLogin } from "./loginStyles";
import Btn from "../../components/button/Btn";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {

    const { signInUser } = useAuthContext();

    const [visibilePassword, setVisibilePassword] = useState(false);
    const { setAuthenticated, Authenticated } = useAuthContext();
    
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const result = await signInUser(email, password);// await signInUser(email, password);

        if (result.success) {
            // alert("Login realizado com sucesso!");
            setAuthenticated(!Authenticated);
            localStorage.setItem("authenticated", "true");
            navigate("/dashboard/jogo");
        } else {
            alert(`Erro ao realizar login: ${result.message}`);
        }
    };

    return (
        <ContainerLogin>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" name="email" type="text" placeholder="Exemplo@gmail.com" required />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <div className="password-container">
                        <input id="password" name="password" type={visibilePassword ? "text" : "password"} placeholder="Insira sua senha" required />
                        { visibilePassword ?
                            <FontAwesomeIcon 
                                icon={faEye} 
                                className="eye-icon"
                                onClick={() => setVisibilePassword(!visibilePassword)} 
                            />
                            :
                            <FontAwesomeIcon 
                                icon={faEyeSlash} 
                                className="eye-icon" 
                                onClick={() => setVisibilePassword(!visibilePassword)}
                            /> 
                        }
                    </div>
                </div>
                <Btn text="Entrar" type="submit" />
                <div className="forgot">
                    <Link className="forgot_link" to="/passwordRecovery">Esqueceu sua senha?</Link>
                </div>
                <Link className="register_link" to="/register">
                    Criar conta
                </Link>
            </form>
        </ContainerLogin>
    );
};

export default Login;
