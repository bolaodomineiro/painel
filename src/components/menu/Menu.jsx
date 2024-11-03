import React, { useState, useEffect } from "react";
import { Aside } from "./MenuStyles"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faUser, faClover, faFileLines, faLayerGroup, faGear } from "@fortawesome/free-solid-svg-icons"; // exemplo de ícone
import { useLocation } from "react-router-dom";
// components
import Logo from "../logo/Logo";

const Menu = ({ $menuToggle }) => {

    const location = useLocation(); // Chame useLocation fora do useEffect
    const [active, setActive] = useState("");

    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const lastSegment = pathSegments[pathSegments.length - 1]; // Pega sempre o último
        setActive(lastSegment === undefined ? "/" : lastSegment);
        console.log(lastSegment);
    }, [location]); 

    return (
        <Aside $menuToggle={$menuToggle}>
            <div className="logo_area">
                <Logo />
                <FontAwesomeIcon className="icon config" icon={faGear} />
            </div>
            <ul>
                <Link className="link" to="/">
                    <li className={active === "/" ? "active" : ""} >
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
                        Pages
                    </li>
                </Link>
                <Link className="link" to="/components">
                    <li className={active === "components" ? "active" : ""}>
                        <FontAwesomeIcon className="icon" icon={faLayerGroup} />
                        Components
                    </li>
                </Link>
            </ul>
        </Aside>
    )   
}

export default Menu