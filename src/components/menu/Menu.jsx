import { Aside } from "./MenuStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faUser, faClover, faFileLines, faLayerGroup, faGear } from "@fortawesome/free-solid-svg-icons"; // exemplo de ícone
// components
import Logo from "../logo/Logo";

const Menu = ({ menuToggle}) => {

    return (
        <Aside menuToggle={menuToggle}>
            <div className="logo_area">
                <Logo style="70px" />
                <FontAwesomeIcon className="icon config" icon={faGear} />
            </div>
            <ul>
                <li className="active">
                    <FontAwesomeIcon className="icon" icon={faGauge} />
                    Dashboard
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    Usuários
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faClover} />
                    Concursos
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faFileLines} />
                    Pages
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faLayerGroup} />
                    Components
                </li>
            </ul>
        </Aside>
    )   
}

export default Menu