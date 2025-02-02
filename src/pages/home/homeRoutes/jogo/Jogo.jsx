import React, { useEffect } from "react";
import { Container_jogo } from "./JogoStyles";
import Balls from "./dataBalls";
import { useAuthContext } from "../../../../context/AuthContext";
import { useBetPool } from "../../../../context/BetPoolContext";
import  {Timestamp} from "firebase/firestore";
import Cart from "../../../../components/cart/Cart";


const Jogo = () => {

    const { jogoId, jogos, balls, setBalls } = useBetPool();
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

    // Atualiza o localStorage sempre que `balls` mudar
    useEffect(() => {
        // 1️⃣ Armazena jogos finalizados (quando 10 números são selecionados)
        if (balls.length === 10) {
            const getJogos = JSON.parse(localStorage.getItem("Jogos")) || [];
            const getUserId = localStorage.getItem("userId");

            // Obtém a data do sorteio como objeto Date
            const drawDate = jogo.drawDate instanceof Date ? jogo.drawDate : jogo.drawDate.toDate(); 
            // Subtrai 2 horas para definir a expiração antes do sorteio
            const expirationDate = new Date(drawDate.getTime() - 2 * 60 * 60 * 1000); 
            // Converte a data para Timestamp do Firebase
            const expirationTimestamp = Timestamp.fromDate(expirationDate);

            const newJogos = {
                title: jogo.title,
                user_id: getUserId,
                jogo_id: jogoId, 
                numbers: [...balls],
                price: jogo.price,
                status: true,
                ticket: "aposta.length + 1" , //pega o total de apostas ja feita ex: apostas.length + 1, para  incrementar o numero do bilhete.
                paymentStatus: false, //valor inicial como false,  se o usuario pagar ele muda para true.
                created: Timestamp.now(),
                expirationDate: expirationTimestamp,
            };

            getJogos.push(newJogos);
            localStorage.setItem("Jogos", JSON.stringify(getJogos));

            setTimeout(() => {
                setBalls([]);
                localStorage.removeItem("balls");
            }, 4000);
        } else if (balls.length > 0) { 
            // 2️⃣ Armazena bolas selecionadas APENAS se houver números escolhidos
            localStorage.setItem("balls", JSON.stringify(balls));
        }

    }, [balls]);

    return (
        <Container_jogo>
            { jogo.status ?
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
            :
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
