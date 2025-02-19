import  { useState, useEffect } from "react"
import { Container_betPool } from "./createBetPoolStyles"
import UtilityBar from "../../components/utilityBar/UtilityBar";
import {useBetPool} from "../../context/BetPoolContext"
import { useResults } from "../../context/ResultsContext";
import FormBetPool from "./formBetPool";
import RuleForm from "./ruleForm";
import ResultForm from "./resultForm";
import Loading from "../../assets/loading.webp"

const data = ["Todos", "Finalizados", "Andamento", "Cancelados"]


const BetPool = () => {

    const { results } = useResults();
    const { jogos, loading, setJogoId, jogoId } = useBetPool();

    const [useSelect, setUseSelect] = useState("Todos")
    const  [showForm, setShowForm] = useState(null);


    if (loading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontSize: "24px",
                fontWeight: "bold"
            }}>
                <img  style={{ width: "60px", height: "60px" }} src={Loading} alt="loading" />
            </div>
        );
    }


    return (
        <Container_betPool>
            <UtilityBar 
                data={data} 
                useSelect={useSelect} 
                setUseSelect={setUseSelect}
                setShowForm={setShowForm}
            />
            <section className="content">
                { jogos.map((jogo) => ( 
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
                                <span>{new Date(jogo.created?.seconds * 1000).toLocaleString()}</span>
                            </div>
                            <div className="card-info">
                                <strong>Data do Sorteio</strong>
                                <span>{new Date(jogo.drawDate?.seconds * 1000).toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="card-rules">
                            <h4> Regras de Pontuação:</h4>
                            <ul>
                                {jogo.rules?.length > 0 ? (
                                    jogo.rules.map((regra, index) => (
                                        <li key={index}>
                                            <span>{regra.pts <= 9 ? `0${regra.pts}` : regra.pts} Pontos ----------------------→ </span>
                                            {regra.isValue && regra.isValue > 0 
                                                ? regra.isValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
                                                : "Não Definido"}
                                        </li>
                                    ))
                                ) : (
                                    <button onClick={() =>{ 
                                        setShowForm("rules"), 
                                        setJogoId(jogo.id), 
                                        localStorage.setItem("jogoId", jogo.id)}}
                                    >
                                        Adicionar Regra
                                    </button>
                                )}
                            </ul>
                        </div>
                        <div className="card-result">
                            <h4> Resultado:</h4>
                            <ul>
                                {results?.some(result => result.jogo_id === jogo.id && result.results?.length > 0) ? (
                                    results
                                        .filter((result) => result.jogo_id === jogo.id) // Filtra pelo jogo_id
                                        .flatMap((result) => result.results) // Acessa o array de "results" dentro do objeto filtrado
                                        .map((result, index) => ( // Agora mapeia os resultados
                                            <li key={index}>
                                                <span>{result.award <= 9 ? `0${result.award}` : result.award} Sorteio -------------------------------→ </span>
                                                {result.number && result.number > 0 ? result.number : "Não Definido"}
                                            </li>
                                        ))
                                ) : (
                                    <button 
                                        onClick={() => { 
                                            setShowForm("result"), 
                                            setJogoId(jogo.id),
                                            localStorage.setItem("jogoId", jogo.id)
                                        }}>
                                        Adicionar Resultado
                                    </button>
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
            <RuleForm jogoId={jogoId} $showForm={showForm} $setShowForm={setShowForm} />
            <ResultForm jogoId={jogoId} $showForm={showForm} $setShowForm={setShowForm} />
        </Container_betPool>
    )
}

export default BetPool;

