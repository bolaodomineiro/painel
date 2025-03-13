import { useEffect, useState } from "react"
import {Container_View} from "./ViewTicketStyles"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSquareXmark} from "@fortawesome/free-solid-svg-icons"
// context
import { useWinners } from "../../context/WinnerContex"
import { useBetPool } from "../../context/BetPoolContext"
import { useResults } from "../../context/ResultsContext"
import { getMyBets } from "./ViewTicketData"



const ViewTicketModal = ({setViewBilhete, viewBilhete, winner_id }) => {

    const { sorteios } = useResults();
    const { jogos, jogoId } = useBetPool();
    const { winners } = useWinners();
    
    const [winnerItem, setWinnerItem] = useState([]);
    const [jogo, setJogo] = useState([]);
    const [myBets, setMyBets] = useState([]);
    
    useEffect(() => {
        const hendleMybets = async () => {
            const getJogo = await jogos.find((jogo) => jogo?.id === jogoId);
            const getWinner = await winners.find((winner) => winner?.id === winner_id);

            setWinnerItem(getWinner);
            setJogo(getJogo);

            const getAllMyBets = await getMyBets(getWinner?.ganhador?.id, jogoId);
            setMyBets(getAllMyBets);
        }

        hendleMybets();
    }, [winner_id, viewBilhete])

    return (
        <Container_View style={{display: viewBilhete ? "flex" : "none"}}>
            <section className="box"> 
                <div className="close">
                    <FontAwesomeIcon 
                        icon={faSquareXmark} 
                        className="close-icone" 
                        onClick={() => setViewBilhete(!viewBilhete)}
                    />
                </div>
                <div className="box_header">
                    <div className="box_header_title">
                        <h2 className="title" style={{backgroundColor: jogo?.color}}>{jogo?.title}</h2>
                        <p> Concurso: {jogo?.ticket}</p>
                    </div>
                    <div className="box_header_details">
                        <p>{new Date(jogo?.drawDate?.seconds * 1000).toLocaleString()}</p>
                        <span>Finalizado</span>
                    </div>
                    <div className="details_user">
                        <div>
                            <h3>Ganhador</h3>
                            <p>{winnerItem?.ganhador?.name.split(" ").slice(0, 2).join(" ")} ...</p>
                        </div>
                        <div>
                            <h3>Cidade</h3>
                            <p>{winnerItem?.ganhador?.city}- PE</p>
                        </div>
                    </div>
                </div>
                <div className="box_main">
                    <h4>Detalhes do Bilhete</h4>
                    <div className="box_details_content">
                        <div className="bilhete">
                            <div className="bilhete_header">
                                <h3>Bilhete Premiado!</h3>
                                <p> Nº {winnerItem?.aposta?.ticket} <span>Pago</span></p> 
                            </div>
                            <div className="bilhete_date">
                                <h3>Data da Compra</h3>
                                <p>{new Date(winnerItem?.aposta?.created.seconds * 1000).toLocaleString()}</p>
                            </div>
                            <div className="bilhete_main">
                                <div className="pontos">
                                    <h3>{winnerItem?.rule} Pontos</h3>
                                </div>
                                <div className="balls">
                                    {winnerItem?.aposta?.numbers.map((ball, index) => (
                                        <span 
                                            key={index}
                                            className="ball"
                                            style={{
                                                backgroundColor: sorteios?.some((sorteio) => sorteio.balls.includes(ball)) ? jogo?.color : "#ddd", 
                                                color: sorteios?.some((sorteio) => sorteio.balls.includes(ball)) ? "#fff" : "#000"
                                            }}
                                        >
                                            {ball}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bilhete_footer">
                                <h3>Prêmio</h3>
                                <p>{(winnerItem?.money / winners.filter((rule) => rule.rule === winnerItem?.rule).length).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box_footer">
                    <h3>Confira todos os bilhetes</h3>
                    <div>
                        {myBets.map((myBet, index) => (
                            <div key={index} className="bilhete">
                                <div className="bilhete_header">
                                    <h4>Bilhete:</h4>
                                    <p> Nº {myBet?.ticket}</p> 
                                </div>
                                <div className="bilhete_date">
                                    <h4>Data da Compra:</h4>
                                    <p>{new Date(myBet.created.seconds * 1000).toLocaleString()}</p>
                                </div>
                                <div className="bilhete_main">
                                    <div className="balls">
                                        {myBet?.numbers.map((ball, index) => (
                                            <span 
                                                key={index}
                                                className="ball"
                                                style={{
                                                    backgroundColor: sorteios?.some((sorteio) => sorteio.balls.includes(ball)) ? jogo?.color : "#ddd", 
                                                    color: sorteios?.some((sorteio) => sorteio.balls.includes(ball)) ? "#fff" : "#000"
                                                }}
                                            >
                                                {ball}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Container_View>
    )
}

export default ViewTicketModal

