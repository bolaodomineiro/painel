import { useEffect, useState } from "react";
import { Container_bets } from "./MyBetsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useBetPool } from "../../../../context/BetPoolContext";
import { getApostas } from "./MyBetsData";
import CryptoJS from "crypto-js";


const MyBets = () => {
    const secretKey = "sua-chave-secreta";

    const [apostas, setApostas] = useState([]);
    const { jogoId, setJogoId } = useBetPool();
    const [userId, setUserId] = useState();

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        const storedJogoId = localStorage.getItem("jogoId");

        if (storedUserId && storedJogoId ) {
            setUserId(storedUserId);
            setJogoId(storedJogoId);
        }
    }, []); // Apenas na montagem do componente

    useEffect(() => {
        const fetchApostas = async () => {
            if (userId && jogoId) {

                const decryptedBytes = CryptoJS.AES.decrypt(userId, secretKey);
                const decryptedUid = decryptedBytes.toString(CryptoJS.enc.Utf8);

                const listaApostas = await getApostas(decryptedUid, jogoId);
                setApostas(listaApostas);
            }
        };

        fetchApostas();
    }, [userId, jogoId]); // Recarrega as apostas quando `userId` ou `jogoId`

    return (
        <Container_bets>
            <div className="container-bets">
                <h2>Apostas</h2>
                {apostas.length > 0 ? (
                    <div className="bets">
                        {apostas.map((aposta) => (
                            <div className="aposta" key={aposta.id} style={{ backgroundColor: aposta.paymentStatus === "Pago" ? "rgb(0, 128, 0, 0.2)" : "rgb(255, 145, 0, 0.1)", borderLeft: aposta.paymentStatus === "Pago" ? "solid 5px green" : " solid 5px #FFA83A" }}>
                                <div>
                                    <div className="title-price">
                                        <h4 className="title">{aposta.title}</h4>
                                        <p  className="price">{aposta.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                                    </div>
                                    <div className="balls-container">
                                        <div className="balls">
                                            {aposta.numbers
                                                .slice()
                                                .sort((a, b) => a - b)
                                                .map((ball, i) => (
                                                    <span key={i} className="ball">{ball}</span>
                                                ))}
                                        </div>
                                    </div>
                                    <p className="date">{`Data do Sorteio: ${aposta.created.toDate().toLocaleString()}`}</p>
                                </div>
                                <div className="action-status">
                                    <p className="whatsapp">
                                        <FontAwesomeIcon className="icon" icon={faWhatsapp} />
                                        Enviar por WhatsApp
                                    </p>

                                    { aposta.paymentStatus === "Pago"  ? null :
                                        <p 
                                            className="status" 
                                            style={{ backgroundColor: aposta.paymentStatus === "Pendente" ? "#ff9100" : aposta.paymentStatus === "Cancelado"  && "red" }}
                                        >
                                            {aposta.paymentStatus === "Pendente" ? "Pendente" : aposta.paymentStatus === "Cancelado" && "Cancelado"}
                                        </p>
                                    }

                                    { aposta.paymentStatus === "Cancelado"  ? null :
                                        <button>{aposta.paymentStatus === "Pago" ? "Pago" : "Fazer pagamento"}</button>
                                    }
                                    <p className="bilhete">Bilhete: {aposta.ticket}</p>
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
