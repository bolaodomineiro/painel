import { useState, useRef } from "react";
import { Container_header } from "./HeaderStyles"
// components
import Btn from "../button/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faBars} from "@fortawesome/free-solid-svg-icons"
// contexts
import { useBetPool } from "../../context/BetPoolContext";
import { useAuthContext } from "../../context/AuthContext";

const Header = ({$setMenuToggle, $menuToggle, title}) => {
    const { user } = useAuthContext();
    const { balls, setBalls } = useBetPool();
    const [message, setMessage] = useState(null);

    const timeoutRef = useRef(null);

    const hendleBallsUpdate = (ball, index) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Cancela o timeout anterior antes de iniciar um novo
        }
    
        const newBalls = [...balls];
        newBalls.splice(index, 1);
        setBalls(newBalls);
        setMessage(ball);
    
        timeoutRef.current = setTimeout(() => {
            setMessage(null);
            timeoutRef.current = null; // Reseta a referência após a execução
        }, 2000);
    
        return newBalls;
    };

    return (
        <Container_header $menuToggle={$menuToggle} >
            <div className="left-container">
                <FontAwesomeIcon 
                    className="icon" 
                    icon={faBars} 
                    onClick={() => $setMenuToggle(!$menuToggle)}
                />
                {$menuToggle && <h3>{title}</h3>}
                { balls.length > 0 &&  
                    <div className="select-boalls">
                        {balls.map((ball, index) => (
                            <div
                                key={index}
                                className="ball"
                                onClick={() => hendleBallsUpdate(ball, index)}
                            >
                                {ball}
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div className="right-container">
                <div className="welcome">
                    Bem vindo
                    <span>{user?.name.split(" ")[0] || "Usuário"} </span>
                </div>
                <div className="saldo-container" >
                    <p><span style={{ color: user?.balance > 0 ? "green" : "red" }}>
                        {(Number(user?.balance) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </p>
                    <Btn text={"Adicionar saldo"} />
                </div>
            </div>
            {message &&
                <div className="message">
                    <p>Há Bola</p>
                    <span className="ball">{message}</span>
                    <p>removida com sucesso!</p>
                </div>
            }
        </Container_header>
    )
}

export default Header;
