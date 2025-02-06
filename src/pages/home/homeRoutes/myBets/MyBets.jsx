import { useEffect, useState } from "react";
import { Container_bets } from "./MyBetsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useBetPool } from "../../../../context/BetPoolContext";
import { getApostas } from "./MyBetsData";
import CryptoJS from "crypto-js";
import html2canvas from 'html2canvas';
import Bilhete from "../../../../components/bilhete/Bilhete";


const MyBets = () => {

    const secretKey = "sua-chave-secreta";

    const [images, setImages] = useState();

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

    const captureModal = () => {
    // Seleciona o modal pelo ID (alterar o ID 'online' conforme necessário)
        const modal = document.getElementById('online');
        
        // Captura a imagem do modal com html2canvas
        html2canvas(modal).then((canvas) => {
            // Converte o canvas para um Blob (arquivo real de imagem)
            canvas.toBlob(async (blob) => {
            const file = new File([blob], "screenshot.png", { type: "image/png" });

            //  Criar link para download
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'screenshot.png';
            link.click();
        
            // Verifica se o navegador suporta o compartilhamento de arquivos
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                try {
                // Tenta compartilhar o arquivo de imagem
                await navigator.share({
                    files: [file],
                    title: "Minha Captura",
                    text: "Veja esse print!",
                });
                } catch (error) {
                // Em caso de erro no compartilhamento, exibe no console
                console.error("Erro ao compartilhar:", error);
                }
            } else {
                // Caso o navegador não suporte o compartilhamento de arquivos diretamente
                console.log("Navegador não suporta compartilhamento de arquivos.");
            }
            }, "image/png");
        }).catch((error) => {
            // Captura qualquer erro que possa ocorrer ao gerar o canvas
            console.error("Erro ao capturar o modal:", error);
        });
    };

    return (
        <Container_bets>
            <div className="container-bets">
                <h2>Apostas</h2>
                {apostas.length > 0 ? (
                    <div className="bets">
                        {apostas.map((aposta) => (
                            <div className="aposta" key={aposta.id}  style={{ backgroundColor: aposta.paymentStatus === "Pago" ? "rgb(0, 128, 0, 0.2)" : "rgb(255, 145, 0, 0.1)", borderLeft: aposta.paymentStatus === "Pago" ? "solid 5px green" : " solid 5px #FFA83A" }}>
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
                                    <p className="date">{`Data do Sorteio: ${aposta.drawDate.toDate().toLocaleString()}`}</p>
                                </div>
                                <div className="action-status">
                                    { aposta.paymentStatus === "Pago" &&
                                        <p 
                                            className="whatsapp"
                                            onClick={() => {
                                                captureModal();
                                            }}
                                        >
                                            <FontAwesomeIcon className="icon" icon={faWhatsapp} />
                                            Enviar por WhatsApp
                                        </p>
                                    }

                                    { aposta.paymentStatus === "Pago"  ? null :
                                        <p 
                                            className="status" 
                                            style={{ backgroundColor: aposta.paymentStatus === "pendente" ? "#ff9100" : aposta.paymentStatus === "Cancelado"  && "red" }}
                                        >
                                            {aposta.paymentStatus === "pendente" ? "pendente" : aposta.paymentStatus === "Cancelado" && "Cancelado"}
                                        </p>
                                    }

                                    { aposta.paymentStatus === "Cancelado"  ? null :
                                        <button 
                                            style={{ backgroundColor: aposta.paymentStatus === "Pago" && "green" }}
                                        >{aposta.paymentStatus === "Pago" ? "Pago" : "Fazer pagamento"}</button>
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
            <Bilhete id="online"  />
            <img src={images} alt="" />
        </Container_bets>
    );
};

export default MyBets;
