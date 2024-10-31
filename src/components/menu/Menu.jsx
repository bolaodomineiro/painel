import { Aside } from "./MenuStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faUser, faClover, faFileLines, faLayerGroup, faGear } from "@fortawesome/free-solid-svg-icons"; // exemplo de ícone
// components
import Logo from "../../components/logo/Logo";

const Menu = () => {

    return (
        <Aside>
            <div className="logo_area">
                <Logo style="80px" />
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