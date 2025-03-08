import React, { useEffect, useRef, useState } from "react";
import { Container_jogo } from "./JogoStyles";
// components
import Balls from "./dataBalls";
import Cart from "../../../../components/cart/Cart";
// context
import { useAuthContext } from "../../../../context/AuthContext";
import { useBetPool } from "../../../../context/BetPoolContext";
// firebase
import  {Timestamp} from "firebase/firestore";
// hooks
import {EnviarApostas} from "../../../../components/cart/CartData";

const Jogo = () => {
    const timeoutRef = useRef(null);
    const [jogoMessage, setJogoMessage] = useState(null);
    const { jogoId, jogos, balls, setBalls, setApostas, apostas } = useBetPool();
    const { message, setMessage, userId } = useAuthContext();
    
    const jogo = jogos.find((jogo) => jogo.id === jogoId);
    
    const handleBalls = (ball) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Cancela o timeout anterior antes de iniciar um novo
        }
        
        const count = balls.filter((b) => b === ball).length;

        if(balls.length === 10) {
            return;
        }

        if (count < 3 ) {
            setBalls((prevBalls) => [...prevBalls, ball]);
        } else {
            setMessage(ball);
            timeoutRef.current =setTimeout(() => {
                setMessage(null);
            }, 4000);
        }
    };

    useEffect(() => {
        const handleJogo = async () => {
             // Armazena jogos finalizados (quando 10 números são selecionados)
            if (balls.length === 10) {
                setJogoMessage(true);
                setMessage(null);
                // Obtém a data do sorteio como objeto Date
                const drawDate = jogo.drawDate instanceof Date ? jogo.drawDate : jogo.drawDate.toDate(); 
                // Subtrai 2 horas para definir a expiração antes do sorteio
                const expirationDate = new Date(drawDate.getTime() - 2 * 60 * 60 * 1000); 
                // Converte a data para Timestamp do Firebase
                const expirationTimestamp = Timestamp.fromDate(expirationDate);

                const newAposta = {
                    title: jogo.title,
                    user_id: userId,
                    jogo_id: jogoId, 
                    numbers: [...balls],
                    price: jogo.price,
                    ticket: Math.floor(1e9 + Math.random() * 9e9).toString(),
                    paymentStatus: "Pago",
                    created: Timestamp.now(),
                    expirationDate: expirationTimestamp,
                    drawDate: jogo.drawDate,
                };
                // Se newAposta não for um array, transforme em array
                await EnviarApostas([newAposta]); // Envia como um array de apostas

                const newDataAposta = [...apostas, newAposta]; // Cria um novo array com a aposta adicionada
                setApostas(newDataAposta); // Atualiza o estado com o novo array
                localStorage.setItem("apostas", JSON.stringify(newDataAposta))
                
                setTimeout(() => {
                    setBalls([]);
                    localStorage.removeItem("balls");
                }, 1000);
                
            } else if (balls.length > 0) { 
                // Armazena bolas selecionadas APENAS se houver números escolhidos
                localStorage.setItem("balls", JSON.stringify(balls));
            }
        }
        handleJogo();
    }, [balls]);

    return (
        <Container_jogo >
            { jogo?.status === "Aberto" &&
                <section className="jogo-balls">
                <div className="balls-header">
                    <h3>Clique em 10 dezenas - </h3>
                    <p>Escolha como quiser! 😎</p>
                </div>
                <div className="balls-container">
                    {Balls.map((ball, index) => (
                        <div
                            style={{ backgroundColor: balls.includes(ball) ? "#ab0519" : jogo.color}}
                            className="balls"
                            key={index}
                            onClick={() => handleBalls(ball)}
                        >
                            {ball}
                        </div>
                    ))}
                </div>
            </section>
            }

            { jogo?.status === "Pausado"  &&
                <section className="info">
                    <div>
                        <h3>{jogo?.title}</h3>
                        <p>Apostas <b>Encerradas,</b> em breve teremos mais prêmios para voce! 😎</p>
                        <h5>Finalizado!</h5>
                    </div>
                </section>
            }
            <Cart />
            { message &&  (
                <div className="ball-message"><p>Bola</p><span>{message}</span><p>já foi escolhido 3 vezes!</p></div>
            )}
            
            { jogoMessage &&
                <section className="jogo-message">
                    <div className="container-message">
                        <h3 style={{backgroundColor: jogo.color}}>{jogo.title}</h3>
                        <p>Aposta realizada com sucesso! 😎</p>
                        <span>Confira sua aposta no carrinho ou na sessão Meus jogos.</span>
                        <button 
                            onClick={() => {setJogoMessage(null), setBalls([])}}
                        >
                            OK
                        </button>
                    </div>
                </section>
            }
        </Container_jogo>
    );
};

export default Jogo;
