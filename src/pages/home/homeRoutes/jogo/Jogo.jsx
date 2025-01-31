import React, { useState } from "react";
import { Container_jogo } from "./JogoStyles";
import Balls from "./dataBalls";
import { useAuthContext } from "../../../../context/AuthContext";

const Jogo = () => {

    const { balls, setBalls } = useAuthContext();


    const [message, setMessage] = useState(null);

    const handleBalls = (ball) => {
        const count = balls.filter((b) => b === ball).length;

        if (balls.length === 10) {
            setMessage({ ball, text: "Limite de 10 dezenas atingido!" });
            setTimeout(() => {
                setMessage(null);
            }, 2000); // Esconde a mensagem após 1,5 segundos
            return;
        }

        if (count < 3 ) {
            setBalls((prevBalls) => [...prevBalls, ball]);
        } else {
            setMessage({ ball, text: `O número ${ball} já foi escolhido 3 vezes!` });

            setTimeout(() => {
                setMessage(null);
            }, 2000); // Esconde a mensagem após 1,5 segundos
        }
    };

    console.log(balls);

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
