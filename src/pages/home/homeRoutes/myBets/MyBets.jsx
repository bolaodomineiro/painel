import { useEffect, useState } from "react";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
//components
import { Container_bets } from "./MyBetsStyles";
import Bilhete from "../../../../components/bilhete/Bilhete";
// context
import { useBetPool } from "../../../../context/BetPoolContext";
import { useMyBets } from "../../../../context/MyBetsContext";
import { useAuthContext } from "../../../../context/AuthContext";
//utils
import html2canvas from 'html2canvas';


const MyBets = () => {

    const { authenticated, userId,} = useAuthContext();
    const {jogoId} = useBetPool();
    const { apostas, getMyBets } = useMyBets();
    const [apostaItem, setApostaItem] = useState([]);

    useEffect(() => {
        const storedJogoId = localStorage.getItem("jogoId");
        getMyBets(userId, storedJogoId);
    }, [authenticated]);

    useEffect(() => {
        const getApostaItem = apostas.find((aposta) => aposta.jogo_id === jogoId && aposta.paymentStatus  === "Pago" );
        setApostaItem(getApostaItem);
    }, []);
    
    const captureModal = async (aposta_id) => {
        const getApostaItem = await apostas.find((aposta) => aposta.id === aposta_id);
        setApostaItem(getApostaItem);
    // Seleciona o modal pelo ID (alterar o ID 'online' conforme necessário)
        const modal = document.getElementById('online');
        // Captura a imagem do modal com html2canvas
        setTimeout (() => {
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
        }, 300)

    };

    return (
        <Container_bets>
            <div className="container-bets">
                {apostas.length > 0 ? (
                    <>
                        <h2>Apostas</h2>
                        <div className="bets">
                            {apostas.map((aposta) => (
                                <div className="aposta" key={aposta.id}  style={{ backgroundColor: aposta.paymentStatus === "Pago" ? "rgb(0, 128, 0, 0.2)" : aposta.paymentStatus === "pendente"  ?  " rgb(255, 168, 58, 0.2)" : "rgb(255, 0, 0, 0.2)", borderLeft: aposta.paymentStatus === "Pago" ? "solid 5px green" : aposta.paymentStatus === "pendente"  ?  " solid 5px #FFA83A": aposta.paymentStatus === "Cancelado" && " solid 5px red"}}>
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
                                        <div className="date">
                                            <h4>Data do Sorteio</h4>
                                            <p>{`${aposta.drawDate?.toDate ? aposta.drawDate.toDate().toLocaleString() : new Date(aposta.drawDate).toLocaleString()}`}</p>
                                            <h4>Data da Aposta</h4>
                                            <p>{new Date(aposta.created.seconds * 1000).toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="action-status">
                                        { aposta.paymentStatus === "Pago" &&
                                            <p 
                                                className="whatsapp"
                                                onClick={() => {
                                                    captureModal(aposta.id);
                                                    localStorage.setItem("apostaId", aposta.id);
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
                                                className="btn-pagamento"
                                                style={{pointerEvents: aposta.paymentStatus === "Pago" ? "none"  : "auto"}}
                                            >{aposta.paymentStatus === "Pago" ? "Pago" : "Fazer pagamento"}</button>
                                        }
                                        <p className="bilhete">Bilhete: {aposta.ticket}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="not_sorteio">
                        <h3>Nenhuma aposta encontrada</h3>
                    </div>
                )}
            </div>
            <Bilhete id="online" apostaItem={apostaItem} />
        </Container_bets>
    );
};

export default MyBets;
