import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Aside } from "./MenuStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faUser, faGear, faSignOutAlt, faClover, faSheetPlastic } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/Logo";
import { useAuthContext } from "../../context/AuthContext";

const Menu = ({ $menuToggle, $setTitle }) => {

    const { logoutUser, user, isAdmin  } = useAuthContext();
 
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState("/dashboard/jogo");

    // Atualizar o estado de menu ativo com base no caminho
    useEffect(() => {
        const pathSegments = location.pathname.split('/dashboard/jogo', );
        const lastSegment = pathSegments[pathSegments.length - 1] || "/dashboard/jogo";
        setActive(lastSegment);
        console.log();

        switch (lastSegment) {
            case "/":
                navigate("/dashboard/jogo");
                break;
            case "/dashboard/jogo":
                $setTitle("Dashboard");
                setActive("/dashboard/jogo");
                break;
            case "/dashboard/myBets":
                setActive("/dashboard/jogo");
                break;
            case "/dashboard/resultsBets":
            setActive("/dashboard/jogo");
                break;
            case "/dashboard/winnersBets":
                setActive("/dashboard/jogo");
                break;
            case "/dashboard/awards":
                setActive("/dashboard/jogo");
                break;
            case "/users":
                $setTitle("Usuários");
                setActive("/users");
                break;
            case "/createBetPool":
                $setTitle("Bolões");
                setActive("/createBetPool");
                break;
            case "/reports":
                $setTitle("Relatórios");
                setActive("/reports");
                break;
            default:
                $setTitle("");
                break;
        }

    }, [location.pathname, $setTitle]);

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
                {isAdmin === true  &&
                    <>
                        <Link className="link" to="/users">
                            <li className={active === "/users" ? "active" : ""}>
                                <FontAwesomeIcon className="icon" icon={faUser} />
                                Usuários
                            </li>
                        </Link>
                        <Link className="link" to="/createBetPool">
                            <li className={active === "/createBetPool" ? "active" : ""}>
                                <FontAwesomeIcon className="icon" icon={faClover} />
                                Bolões
                            </li>
                        </Link>
                        <Link className="link" to="/reports">
                            <li className={active === "/reports" ? "active" : ""}>
                                <FontAwesomeIcon icon={faSheetPlastic} className="icon" />
                                Relatórios
                            </li>
                        </Link>
                    </>
                }
                <li className="logout-button" onClick={logoutUser}>
                    <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                    Sair
                </li>
            </ul>
        </Aside>
    );
};

export default Menu;
