import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Aside } from "./MenuStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faUser, faGear, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/Logo";
import { useBetPool } from "../../context/BetPoolContext";

const Menu = ({ $menuToggle, $setTitle }) => {

    const {setBalls, setApostas } = useBetPool();

    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState("/dashboard/jogo");

    // Atualizar o estado de menu ativo com base no caminho
    useEffect(() => {
        const pathSegments = location.pathname.split('/dashboard/jogo', ).filter(Boolean);
        const lastSegment = pathSegments[pathSegments.length - 1] || "/dashboard/jogo";
        setActive(lastSegment);
        console.log();

        switch (lastSegment) {
            case "/dashboard/jogo":
                $setTitle("Dashboard");
                setActive("/dashboard/jogo");
                break;
            case "/dashboard/myBets":
                setActive("/dashboard/jogo");
                break;
            case "/users":
                $setTitle("Usuários");
                setActive("/users");
                break;
            // case "contests":
            //     $setTitle("Concursos");
            //     break;
            // case "pages":
            //     $setTitle("Paginas");
            //     break;
            // case "components":
            //     $setTitle("Componentes");
            //     break;
            default:
                $setTitle("");
                break;
        }

    }, [location.pathname, $setTitle]);

    // Função para logout
    const handleLogout = () => {
        localStorage.clear();
        setBalls([])
        setApostas([])
        window.location.href = "https://www.bolaodomineiro.com.br/";
    };


    return (
        <Aside $menuToggle={$menuToggle}>
            <div className="logo_area">
                <Logo />
                <FontAwesomeIcon className="icon config" icon={faGear} />
            </div>
            <ul>
                <Link className="link" to="/dashboard/jogo">
                    <li className={active === "/dashboard/jogo" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faGauge} />
                        Dashboard
                    </li>
                </Link>
                <Link className="link" to="/users">
                    <li className={active === "/users" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faUser} />
                        Usuários
                    </li>
                </Link>
                {/* <Link className="link" to="/contests">
                    <li className={active === "contests" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faClover} />
                        Concursos
                    </li>
                </Link> */}
                {/* <Link className="link" to="/pages">
                    <li className={active === "pages" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faFileLines} />
                        Paginas
                    </li>
                </Link> */}
                {/* <Link className="link" to="/components">
                    <li className={active === "components" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faLayerGroup} />
                        Componentes
                    </li>
                </Link> */}
                <li className="logout-button" onClick={handleLogout}>
                    <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                    Sair
                </li>
            </ul>
        </Aside>
    );
};

export default Menu;
