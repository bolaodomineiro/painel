import  { useState } from "react"
import { Container_betPool } from "./createBetPoolStyles"
import UtilityBar from "../../components/utilityBar/UtilityBar";
import {useBetPool} from "../../context/BetPoolContext"
import { Button } from "../../components/btn/BtnStyles";

const data = ["Todos", "Finalizados", "Andamento", "Cancelados"]

const regras = [
    { pontos: "10", premio: 1600 },
    { pontos: "09", premio: 700 },
    { pontos: "08", premio: 500 },
    { pontos: "07", premio: 400 },
    { pontos: "06", premio: 300 },
    { pontos: "05", premio: 100 },
]

const result = [
    { premio: "01", result: 23456 },
    { premio: "02", result: 35476 },
    { premio: "03", result: 19675 },
    { premio: "04", result: 23589 },
    { premio: "05", result: 12300 },
]



const BetPool = () => {

    const { jogos } = useBetPool();
    const [useSelect, setUseSelect] = useState("Todos")

    return (
        <Container_betPool>
            <UtilityBar data={data} useSelect={useSelect} setUseSelect={setUseSelect} />
            <section className="content">
                { jogos.map((jogo, index) => ( 
                    <div className="card-content" key={jogo.id}>
                        <div className="card-header" style={{ backgroundColor: jogo.color }} >
                            <h3 className="title">{ jogo.title }</h3>
                            <p className="subtitle"> Prêmio: { jogo.award?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</p>
                        </div>
                        <p className="conc">Conc: { jogo.ticket }</p>
                        <div className="card-description">
                            <h4>Descrição</h4>
                            <p>{ jogo.description }</p>
                        </div>
                        <div className="card-info-area">
                            <div className="card-info">
                                <strong>Data de criação</strong>
                                <span>{new Date(jogo.created.seconds * 1000).toLocaleString()}</span>
                            </div>
                            <div className="card-info">
                                <strong>Data do Sorteio</strong>
                                <span>{new Date(jogo.drawDate.seconds * 1000).toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="card-rules">
                            <h4> Regras de Pontuação:</h4>
                            <ul>
                                {jogo.rules.length > 0 ? (
                                    jogo.rules.map((regra, index) => (
                                        <li key={index}>
                                            <span>{regra.pts} Pontos -------------------------→ </span>
                                            {regra.isValue && regra.isValue > 0 
                                                ? regra.isValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
                                                : "Não Definido"}
                                        </li>
                                    ))
                                ) : (
                                    <button>Adicionar Regra</button>
                                )}
                            </ul>
                        </div>
                        <div className="card-result">
                            <h4> Resultado:</h4>
                                <ul>
                                    {jogo.result.length > 0 ? (
                                        jogo.result.map((regra, index) => (
                                            <li key={index}>
                                                <span>Prêmio {regra.premio} -------------------------------→ </span>
                                                {regra.number && regra.number > 0 ? regra.number : "Não Definido"}
                                            </li>
                                        ))
                                    ) : (
                                        <button>Adicionar Resultado</button>
                                    )}
                                </ul>
                        </div>
                        <div className="card-status">
                            <p style={{ backgroundColor: jogo.color }}>{ jogo.isAcumuled ? "Acumulado" : " Não Acumulado " }</p>
                        </div>
                        <p className="status" style={{ color: jogo.status ? "green" : "red" }}>
                            { jogo.status ? "Aberto" : "Fechado" }
                        </p>
                    </div>

                ))}
            </section>
        </Container_betPool>
    )
}

export default BetPool;

