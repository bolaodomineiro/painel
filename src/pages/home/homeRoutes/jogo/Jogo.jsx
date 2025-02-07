import React, { useEffect } from "react";
import { Container_jogo } from "./JogoStyles";
import Balls from "./dataBalls";
import { useAuthContext } from "../../../../context/AuthContext";
import { useBetPool } from "../../../../context/BetPoolContext";
import  {Timestamp} from "firebase/firestore";
import Cart from "../../../../components/cart/Cart";
import CryptoJS from "crypto-js";

const Jogo = () => {

    const secretKey = "sua-chave-secreta";

    const { jogoId, jogos, balls, setBalls, setApostas, apostas } = useBetPool();
    const { message, setMessage } = useAuthContext();
    
    const jogo = jogos.find((jogo) => jogo.id === jogoId);

    const handleBalls = (ball) => {

        const count = balls.filter((b) => b === ball).length;
        
        if (balls.length === 10) {
            return;
        }
        
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
            }, 4000);
        }
    };


    useEffect(() => {
        // Armazena jogos finalizados (quando 10 números são selecionados)
        if (balls.length === 10) {
            const getUserId = localStorage.getItem("userId");
            const decryptedBytes = CryptoJS.AES.decrypt(getUserId , secretKey);
            const decryptedUid = decryptedBytes.toString(CryptoJS.enc.Utf8);
            // Obtém a data do sorteio como objeto Date
            const drawDate = jogo.drawDate instanceof Date ? jogo.drawDate : jogo.drawDate.toDate(); 
            // Subtrai 2 horas para definir a expiração antes do sorteio
            const expirationDate = new Date(drawDate.getTime() - 2 * 60 * 60 * 1000); 
            // Converte a data para Timestamp do Firebase
            const expirationTimestamp = Timestamp.fromDate(expirationDate);

            const newAposta = {
                title: jogo.title,
                user_id: decryptedUid,
                jogo_id: jogoId, 
                numbers: [...balls],
                price: jogo.price,
                ticket: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1000 , //gera numbers
                paymentStatus: "pendente",
                created: Timestamp.now(),
                expirationDate: expirationTimestamp,
                drawDate: jogo.drawDate,
            };

            apostas.push(newAposta);
            setApostas(apostas);
            localStorage.setItem("apostas", JSON.stringify(apostas));
            
            setTimeout(() => {
                setBalls([]);
                localStorage.removeItem("balls");
            }, 100);
            
        } else if (balls.length > 0) { 
            // Armazena bolas selecionadas APENAS se houver números escolhidos
            localStorage.setItem("balls", JSON.stringify(balls));
        }

    }, [balls]);

    return (
        <Container_jogo>
            { jogo.status &&
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
            }

            { !jogo.status  &&
                <section className="info">
                    <div>
                        <h3>{jogo.title}</h3>
                        <p>Apostas <b>Encerradas,</b> em breve teremos mais prêmios para voce! 😎</p>
                        <h5>Finalizado!</h5>
                    </div>
                </section>
            }
            <Cart />
        </Container_jogo>
    );
};

export default Jogo;
