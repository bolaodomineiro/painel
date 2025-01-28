import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Aside } from "./MenuStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faUser, faClover, faFileLines, faLayerGroup, faGear, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/Logo";
// import Cookies from 'js-cookie';

const Menu = ({ $menuToggle, $setTitle }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState("dashboard");



    // const validateToken = (token) => {
    //     if (!token) return false;
    //     try {
    //         const tokenDecoded = JSON.parse(atob(token.split('.')[1]));
    //         return tokenDecoded.exp * 1000 > Date.now();
    //     } catch (e) {
    //         return false;
    //     }
    // };

    // Atualizar o estado de menu ativo com base no caminho
    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const lastSegment = pathSegments[pathSegments.length - 1] || "dashboard";
        setActive(lastSegment);

        switch (lastSegment) {
            case "dashboard":
                $setTitle("Dashboard");
                break;
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
                $setTitle("");
                break;
        }
    }, [location.pathname, $setTitle]);


    // Validação do token na montagem
    // useEffect(() => {
    //     const token = Cookies.get('token') || localStorage.getItem('token');
    //     if (!token || !validateToken(token)) {
    //         console.log("Token inválido ou expirado, redirecionando para login");
    //         navigate("/login");
    //     }
    // }, [navigate,validateToken]);

     // Função para logout
    const handleLogout = useCallback(() => {
        Cookies.remove("token");
        localStorage.clear();
        navigate("/login");
    }, [navigate]);


    return (
        <Aside $menuToggle={$menuToggle}>
            <div className="logo_area">
                <Logo />
                <FontAwesomeIcon className="icon config" icon={faGear} />
            </div>
            <ul>
                <Link className="link" to="dashboard">
                    <li className={active === "dashboard" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faGauge} />
                        Dashboard
                    </li>
                </Link>
                <Link className="link" to="users">
                    <li className={active === "users" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faUser} />
                        Usuários
                    </li>
                </Link>
                <Link className="link" to="contests">
                    <li className={active === "contests" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faClover} />
                        Concursos
                    </li>
                </Link>
                <Link className="link" to="pages">
                    <li className={active === "pages" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faFileLines} />
                        Paginas
                    </li>
                </Link>
                <Link className="link" to="components">
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
