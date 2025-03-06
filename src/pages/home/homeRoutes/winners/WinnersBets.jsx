import { useEffect, useState } from "react";
import { Container_winners } from "./WinnersStyles";
// context
import { useBetPool } from "../../../../context/BetPoolContext";
import { useWinners } from "../../../../context/WinnerContex";
import { useResults } from "../../../../context/ResultsContext";



const WinnersBets = () => {

    const { load, setLoad } = useResults();
    const { winners } = useWinners();
    const {jogos,  jogoId } = useBetPool();

    const [jogo, setJogo] = useState([]);

    useEffect(() => {
        setLoad(!load);
        const getJogo = jogos.find((jogo) => jogo?.id === jogoId);
        setJogo(getJogo);
    }, [jogos, jogoId]);

    return (
        <Container_winners>
            <section className="winners_area">
                { winners?.length > 0 ? (
                    <>
                        <div className="winners_area_header">
                            <h3>{winners.length} Ganhadores - </h3>
                            <p>Bolão {winners.map((winner) => winner.aposta.title)[0]} </p>
                            <p>- Concurso: {jogo?.ticket}</p>
                        </div>
                        <section className="winners_area_main">
                                { winners.sort((a, b) => b.acertos - a.acertos).map((winner, index) => (
                                    <div className="winners_box" key={index}>
                                        <div className="indicator" style={{ backgroundColor: jogo?.color }}>
                                            <span>{index + 1}</span>
                                        </div>
                                        <div className="userInfo">
                                            <h4>Nome</h4>
                                            <p>{winner.ganhador?.name.split(" ").slice(0, 2).join(" ")} ...</p>
                                            <p>{ winner.ganhador?.city.split(" ")[0]} - PE</p>
                                        </div>
                                        <div className="prize" >
                                            <h4>Prêmio</h4>
                                            {/* map para dividindo o prêmio entre os ganhadores */}
                                            <p>{ (winner.money / winners.filter((rule) => rule.rule === winner.rule).length).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                        </div>
                                        <div>
                                            <h4>Data da Compra</h4>
                                            <p>{new Date(winner.aposta.created.seconds * 1000).toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <h4>Numero do Bilhete</h4>
                                            <p>123456789</p>
                                        </div>
                                        <div className="acertos">
                                            <h4>Pontuação</h4>
                                            <p>{winner.rule} Pontos</p>
                                        </div>
                                        <div>
                                            <button style={{ backgroundColor: jogo?.color }}>Ver Bilhete</button>
                                        </div>
                                    </div>
                                ))}
                        </section>
                    </>
                ) : (
                    <div className="not_sorteio">
                        <h3>O Bolão ainda não teve ganhadores</h3>
                    </div>
                )}
            </section>
        </Container_winners>
    );
};

export default WinnersBets;
