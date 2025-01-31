import React, { useState } from "react";
import { Container_header } from "./HeaderStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useAuthContext } from "../../context/AuthContext";

const Header = ({setMenuToggle, menuToggle, title}) => {

    const {balls, setBalls} = useAuthContext();  
    const [message, setMessage] = useState(null);

    const hendleBallsUpdate = (baall, index) => {
        const newBalls = [...balls];
        newBalls.splice(index, 1);
        setBalls(newBalls);

        setMessage(`Dezena ${baall} removida com sucesso!`);
        console.log(message);

        setTimeout(() => {
            setMessage(null);
        }, 2000);
        
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
                            onClick={() =>  hendleBallsUpdate(ball, index)}
                        >
                            {ball}
                        </div>
                    ))}
                </div>
            }
            {  message &&
                <p className="message">{message}</p>
            }
        </Container_header>
    )
}

export default Header;