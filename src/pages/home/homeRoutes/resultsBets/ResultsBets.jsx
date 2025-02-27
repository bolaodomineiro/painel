import { useState, useEffect } from "react";
import { Container_resultsBets } from "./ResultsStyles"
// context
import { useResults } from "../../../../context/ResultsContext";
import { useBetPool } from "../../../../context/BetPoolContext";

const ResultsBets = () => {

    const { sorteios } = useResults();
    const { jogos, jogoId } = useBetPool();

    const jogo = jogos.find((jogo) => jogo?.id === jogoId);

    return (
        <Container_resultsBets>
            <div className="results_area">
                {sorteios.length > 0 ? (
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
                        <h3>O Bolão ainda não começou...</h3>
                        <p>Começa: {new Date(jogo.drawDate.seconds * 1000).toLocaleString()} Horas</p>
                    </div>
                )}
            </div>
        </Container_resultsBets>
    )
}

export default ResultsBets
