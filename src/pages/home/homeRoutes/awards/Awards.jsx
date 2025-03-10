import { Container_awards } from "./AwardStyles";
import { useState, useEffect } from "react";
import Loading from "../../../../components/loading/Loading";
// context
import {useRules} from "../../../../context/RulesContext";
import {useBetPool} from "../../../../context/BetPoolContext";
import { useWinners } from "../../../../context/WinnerContex";
import { useResults } from "../../../../context/ResultsContext";


const Awards = () => {

    const { rules } = useRules();
    const {jogos,  jogoId } = useBetPool();
    const { winners } = useWinners();
    const { resultados } = useResults();

    const [jogo, setJogo] = useState([]);
    const [status, setStatus] = useState(true);
    
    useEffect(() => {
        setStatus(true);

        setTimeout(() => {
            setStatus(false);
        },5000)
    }, [jogoId]);

    useEffect(() => {
        const getJogo = jogos.find((jogo) => jogo?.id === jogoId);
        setJogo(getJogo);
    }, [jogos, jogoId]);

    return (
        <Container_awards>
            <section className="awards_area">
                { rules?.length > 0 && !status ? (
                    <>
                        <div className="awards_area_header"> 
                            <p>
                                Estimativa... <span>{ jogo?.award?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>  MIL REAIS em <span>{rules?.filter((rule) => rule?.jogo_id === jogoId).map((r) => r.rules.length)}</span>  PRÊMIOS 😎
                            </p>
                            <p>
                                ➡️ Os valores dos prêmios serão distribuídos ao iniciar o bolão
                            </p>
                        </div>
                        <section className="awards_area_main">
                            { rules?.filter((rule) => rule?.jogo_id === jogoId).map((rule, index) => (
                                <>
                                    {rule?.rules?.map((r, index) => (
                                        <div key={index} className="award_box">
                                            <div>
                                                <span>{index + 1}</span>
                                            </div>
                                            <div className="pts">
                                                <h4>{r.pts} Pontos </h4>
                                                <p>Ganha ao completar {r.pts} Pontos até o {r?.prizeDraw === null ? 4 : r?.prizeDraw}º Sorteio</p>
                                            </div>
                                            <div>
                                                <h4>Prêmio</h4>
                                                { r?.money ? <p>{r?.money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p> : <p>A Definir..</p>}
                                            </div>
                                            <div>
                                                { winners.length > 0 ? <p>{ winners?.filter((winner) => winner.rule === r?.pts).length } Ganhador </p> :  resultados.length === 0 ? <p>Bolão ainda não começou....</p> : <p>Nenhum ganhador</p>}
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ))}
                        </section>
                    </>
                ) : (
                    <div className="not_sorteio">
                        {status && <div className="loading"> <p>Buscando os prêmios.</p> <Loading /> </div>}
                    </div>
                )}
            </section>
        </Container_awards>
    )
};

export default Awards
