import React, { useState, useEffect } from "react";
import { Container_jogo } from "./JogoStyles";
import Balls from "./dataBalls";
import { useAuthContext } from "../../../../context/AuthContext";

const Jogo = () => {

    const { balls, setBalls, message, setMessage } = useAuthContext();

    const handleBalls = (ball) => {
        const count = balls.filter((b) => b === ball).length;

        if (count < 3 ) {
            
            setBalls((prevBalls) => [...prevBalls, ball]);

            if (balls.length === 9) {
                setMessage({ ball, text: "Seu Jogo foi adicionado ao Carrinho!" });
                setTimeout(() => {
                    setMessage(null);
                    return
                }, 4000);
            }

        } else {
            setMessage({ ball, text: `O número ${ball} já foi escolhido 3 vezes!` });

            setTimeout(() => {
                setMessage(null);
            }, 2000); // Esconde a mensagem após 1,5 segundos
        }
    };

    // Atualiza o localStorage sempre que `balls` mudar
    useEffect(() => {

        if (balls.length === 10){
            const getBalls = JSON.parse(localStorage.getItem("balls")) || [];
            getBalls.push(balls);
            localStorage.setItem("balls", JSON.stringify(getBalls));

            setTimeout(() => {
                setBalls([]);
            }, 2000);
        }
    }, [balls]);

    return (
        <Container_jogo>
            <section className="jogo-balls">
                <div className="balls-header">
                    <h3>Clique em 10 dezenas - </h3>
                    <p>Escolha como quiser! 😎</p>
                </div>
                <div className="balls-container">
                    {Balls.map((ball, index) => (
                        <div
                            className="balls"
                            key={index}
                            onClick={() => handleBalls(ball)}
                        >
                            {ball}
                            {message && message.ball === ball && (
                                <div className="ball-message">{message.text}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </Container_jogo>
    );
};

export default Jogo;
