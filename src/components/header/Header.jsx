import { Container_header } from "./HeaderStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useAuthContext } from "../../context/AuthContext";

const Header = ({setMenuToggle, menuToggle, title}) => {

    const {balls, setBalls} = useAuthContext();       

    const hendleBallsUpdate = (index) => {
        const newBalls = [...balls];
        newBalls.splice(index, 1);
        setBalls(newBalls);
        return newBalls;
    }

    return (
        <Container_header>
            <FontAwesomeIcon 
                className="icon" 
                icon={faBars} 
                onClick={() => setMenuToggle(!menuToggle)}
            />
            {menuToggle && <h3>{title}</h3>}
            { balls.length > 0 &&  
                <div className="select-boalls">
                    {balls.map((ball, index) => (
                        <div 
                            key={index} 
                            className="ball"
                            onClick={() =>  hendleBallsUpdate(index)}
                        >
                            {ball}
                        </div>
                    ))}
                </div>
            }
        </Container_header>
    )
}

export default Header;