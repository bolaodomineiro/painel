import { useState, useEffect } from "react";
import { Container_resultsBets } from "./ResultsStyles"
// context
import { useResults } from "../../../../context/ResultsContext";
import { useBetPool } from "../../../../context/BetPoolContext";
// components
import Loading from "../../../../components/loading/Loading";
// icones 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";


const ResultsBets = () => {

    const { sorteios } = useResults();
    const { jogos, jogoId } = useBetPool();

    const [status, setStatus] = useState(true);

    const jogo = jogos.find((jogo) => jogo?.id === jogoId);

    useEffect(() => {
        setStatus(true);
        
        setTimeout(() => {
            setStatus(false);
        },5000)
    }, [jogoId]);

    return (
        <Container_resultsBets>
            <div className="results_area">
                {sorteios.length > 0 && !status ? (
                    <>
                        <div className="results_header">
                            <p><span>{sorteios.length}</span> Sorteio Apurado</p> |
                            <p><span>{sorteios.length * 10}</span> Dezenas Sorteadas</p>
                        </div>
                        <section className="results_main">
                            { 
                                sorteios.map((sorteio, index) => (
                                    <div className="result_box" key={index}>
                                        <div className="result_box_header">
                                            <h3>{sorteio.prizeDraw}º Sorteio</h3>
                                            <p>{new Date(sorteio.drawDate.seconds * 1000).toLocaleString()} - RIO</p>
                                        </div>
                                        <div className="container_balls">
                                            {
                                                sorteio.balls.map((ball, index) => (
                                                    <span 
                                                        key={index}
                                                        className="ball"
                                                    >
                                                        {ball}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </section>
                        <section className="results_footer">
                            <div className="results_footer_header">
                                <h3>{sorteios.length * 10} Dezenas Sorteadas</h3>
                                <p>Todas as {sorteios.length * 10} Dezenas em Ordem Crescente</p>
                            </div>
                            {
                                sorteios.map((sorteio, index) => (
                                    <div className="footer_balls" key={index}> 
                                        { sorteio.balls.sort((a, b) => a - b).map((ball, index) => (
                                            <span 
                                                key={index}
                                                className="ball"
                                            >
                                                {ball}
                                            </span>
                                        ))}
                                    </div>
                                ))
                            }
                        </section>
                    </>
                ) : (
                    <div className="not_sorteio">
                        {status && <div className="loading"> <p>Buscando os Resultados</p> <Loading /> </div>}
                        {!status && sorteios.length === 0 && <p>O Bolão ainda não iniciou, aguarde a apuração do sorteio. <FontAwesomeIcon className="icon" icon={faClock} /></p>}
                    </div>
                )}
            </div>
        </Container_resultsBets>
    )
}

export default ResultsBets
