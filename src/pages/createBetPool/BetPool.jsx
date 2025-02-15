import  { useState } from "react"
import { Container_betPool } from "./createBetPoolStyles"
import UtilityBar from "../../components/utilityBar/UtilityBar";
import {useBetPool} from "../../context/BetPoolContext"
import FormBetPool from "./formBetPool";

const data = ["Todos", "Finalizados", "Andamento", "Cancelados"]


const BetPool = () => {

    const { jogos } = useBetPool();
    const [useSelect, setUseSelect] = useState("Todos")
    const  [showForm, setShowForm] = useState(false);

    return (
        <Container_betPool>
            <UtilityBar 
                data={data} 
                useSelect={useSelect} 
                setUseSelect={setUseSelect}
                onClick={() => setShowForm(!showForm)} 
            />
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
            <FormBetPool $showForm={showForm} $setShowForm={setShowForm} />
        </Container_betPool>
    )
}

export default BetPool;

