import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Aside } from "./MenuStyles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faUser, faClover, faFileLines, faLayerGroup, faGear, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import Logo from "../logo/Logo";
import Cookies from 'js-cookie';  // Biblioteca para cookies

const Menu = ({ $menuToggle, $setTitle }) => {
    const navigate = useNavigate();  // Usando corretamente o useNavigate
    const location = useLocation();  // Mantendo o useLocation para o caminho atual
    const [active, setActive] = useState("/");  // Inicializando corretamente o estado

    useEffect(() => {
        const token = Cookies.get('token') || localStorage.getItem('token');

        if (!token || !validateToken(token)) {
            console.log("Token inválido ou expirado, redirecionando para login");
            navigate("/login");
            return;
        }

        // Verifica o caminho atual para identificar a seção ativa
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const lastSegment = pathSegments[pathSegments.length - 1];
        setActive(lastSegment === undefined ? "/" : lastSegment);  // Aqui definimos o valor para o 'active'

        switch (lastSegment) {
            case "users":
                $setTitle("Usuários");
                break;
            case "contests":
                $setTitle("Concursos");
                break;
            case "pages":
                $setTitle("Paginas");
                break;
            case "components":
                $setTitle("Componentes");
                break;
            default:
                $setTitle("Dashboard");
                break;
        }
    }, [navigate, location]);  // Dependências corretas para os hooks

    const validateToken = (token) => {
        if (!token) return false;
        try {
            const tokenDecoded = JSON.parse(atob(token.split('.')[1]));  // Decodificar JWT
            const exp = tokenDecoded.exp * 1000;  // Timestamp expiração
            return exp > Date.now();
        } catch (e) {
            return false;
        }
    };

    const handleLogout = () => {
        Cookies.remove('token');  // Remove o token do cookie
        localStorage.removeItem('token');  // Remove também de localStorage
        navigate("/login");
    };

    return (
        <Aside $menuToggle={$menuToggle}>
            <div className="logo_area">
                <Logo />
                <FontAwesomeIcon className="icon config" icon={faGear} />
            </div>
            <ul>
                <Link className="link" to="/">
                    <li className={active === "/" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faGauge} />
                        Dashboard
                    </li>
                </Link>
                <Link className="link" to="/users">
                    <li className={active === "users" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faUser} />
                        Usuários
                    </li>
                </Link>
                <Link className="link" to="/contests">
                    <li className={active === "contests" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faClover} />
                        Concursos
                    </li>
                </Link>
                <Link className="link" to="/pages">
                    <li className={active === "pages" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faFileLines} />
                        Paginas
                    </li>
                </Link>
                <Link className="link" to="/components">
                    <li className={active === "components" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faLayerGroup} />
                        Componentes
                    </li>
                </Link>
                <li className="logout-button" onClick={handleLogout}>
                    <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                    Sair
                </li>
            </ul>
        </Aside>
    );
};

export default Menu;