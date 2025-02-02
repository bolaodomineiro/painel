import React, { useState, useEffect } from "react";
import { Container_header } from "./HeaderStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useBetPool } from "../../context/BetPoolContext";


const Header = ({setMenuToggle, menuToggle, title}) => {

    const { balls, setBalls } = useBetPool();

    const [message, setMessage] = useState(null);
    const [jogosCount, setJogosCount] = useState([0]);
    const [priceJogo, setPriceJogo] = useState(localStorage.getItem("price"));

    const hendleBallsUpdate = (baall, index) => {
        const newBalls = [...balls];
        newBalls.splice(index, 1);
        setBalls(newBalls);
        setMessage(`Dezena ${baall} removida com sucesso!`);

        setTimeout(() => {
            setMessage(null);
        }, 2000);
        
        return newBalls;
    }

    useEffect(() => {
        const priceJogo = localStorage.getItem("price");
        setPriceJogo(priceJogo);
        const getJogos = JSON.parse(localStorage.getItem("Jogos")) || [];
        setJogosCount(getJogos);
        console.log(getJogos);
    }, [balls]);

    return (
        <Container_header>
            <FontAwesomeIcon 
                className="icon" 
                icon={faBars} 
                onClick={() => setMenuToggle(!menuToggle)}
            />
            {menuToggle && <h3>{title}</h3>}
            <div className="cart">
                <span className="balls-count">{jogosCount.length}</span>
                <FontAwesomeIcon className="icon-cart" icon={faCartShopping} />
                <span className="price">{(jogosCount.length * priceJogo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
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
                <div className="message">{message}</div>
            }
        </Container_header>
    )
}

export default Header;