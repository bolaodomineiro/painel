import { Container_header } from "./HeaderStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = ({setMenuToggle, menuToggle}) => {
    return (
        <Container_header>
            <FontAwesomeIcon 
                className="icon" 
                icon={faBars} 
                onClick={() => setMenuToggle(!menuToggle)}
            />
        </Container_header>
    )
}

export default Header;