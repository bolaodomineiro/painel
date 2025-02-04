import { useEffect, useState } from "react";
import { Container_bets } from "./MyBetsStyles";
import { useApostas } from "./MyBetsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useBetPool } from "../../../../context/BetPoolContext";



const MyBets = () => {

    const { jogoId, setJogoId } = useBetPool();
    const [userId, setUserId] = useState(() => localStorage.getItem("userId"));


    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const jogoId = localStorage.getItem("jogoId");

        if (userId && jogoId) {
            setUserId(userId);
            setJogoId(jogoId);
        }
    }, [jogoId]);

    const { apostas } = useApostas(userId, jogoId);

    return (
        <Container_bets>
            <div className="container-bets">
                <h2>Apostas</h2>
                {apostas.length > 0 ? (
                    <div className="bets">
                        {apostas.map((aposta) => (
                            <div className="aposta" key={aposta.id}>
                                <div>
                                    <h4 className="title">{aposta.title}</h4>
                                    <div className="balls-container">
                                        {aposta.numbers
                                            .slice()
                                            .sort((a, b) => a - b)
                                            .map((ball, i) => (
                                                <span key={i} className="ball">{ball}</span>
                                            ))}
                                    </div>
                                </div>
                                <div className="action-status">
                                    <p className="whatsapp">
                                        <FontAwesomeIcon className="icon" icon={faWhatsapp} />
                                        Enviar por WhatsApp
                                    </p>
                                    <p className="status">
                                        Pendente
                                    </p>
                                    <button>Fazer pagamento</button>
                                    <p className="bilhete">
                                        Bilhete: {aposta.ticket}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-bets">Nenhuma aposta encontrada.</p>
                )}
            </div>
        </Container_bets>
    );
};

export default MyBets;
