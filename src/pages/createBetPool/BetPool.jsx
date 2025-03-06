import  { useState, useEffect } from "react"
import { Container_betPool } from "./createBetPoolStyles"

//context
import UtilityBar from "../../components/utilityBar/UtilityBar";
import {useBetPool} from "../../context/BetPoolContext"
import {useRules} from "../../context/RulesContext"
import {getResults} from "./betData"
//components
import FormBetPool from "./formBetPool";
import RuleForm from "./ruleForm";
import ResultForm from "./resultForm";
import Loading from "../../assets/loading.webp"


const data = ["Todos", "Finalizados", "Andamento", "Cancelados"]


const BetPool = () => {

    const { rules } = useRules();
    const { jogos, loading, setJogoId, jogoId } = useBetPool();

    const [useSelect, setUseSelect] = useState("Todos")
    const  [showForm, setShowForm] = useState(null);
    const [results, setResults] = useState([]);


    useEffect(() => {
        const getResultados = async () => {
            const newResults = await getResults();
            setResults(newResults);
        };
        getResultados();
    }, [loading, jogoId]);

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
                                {rules?.length > 0 &&
                                    <>
                                        {
                                            rules
                                                .filter((rules) => rules.jogo_id === jogo.id) // Filtra apenas os que correspondem ao jogo.id
                                                .map((item, index) => {
                                                // Ordena o array 'rules' dentro de cada item
                                                const sortedRules = item.rules.sort((x, y) => y.pts - x.pts);
                                                return (
                                                    <div key={index}>
                                                        {sortedRules.map((rule, index) => (
                                                        <li key={index}>
                                                            <span>{rule.pts <= 9 ? `0${rule.pts}` : rule.pts} Pontos</span>
                                                            {rule.money && rule.money > 0 
                                                            ? rule.money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
                                                            : "Não Definido"
                                                            }
                                                        </li>
                                                        ))}
                                                    </div>
                                                );
                                                })
                                            }
                                    </>
                                }
                            </ul>
                            <button onClick={() =>{ 
                                    setShowForm("rules"), 
                                    setJogoId(jogo.id)
                                }}
                            >
                                Adicionar Regra
                            </button>
                        </div>
                        
                        <div className="card-result">
                            <h4> Resultados:</h4> 
                            <ul>
                                {results?.length > 0 &&
                                    <>
                                        {
                                            results
                                                .filter((r) => r.jogo_id === jogo.id) // Filtra apenas os que correspondem ao jogo.id
                                                .map((item, index) => {
                                                    // Ordena pelo campo prizeDraw dentro do array results
                                                    const sortedResults = item.results.sort((a, b) => a.prizeDraw - b.prizeDraw);
                                                    return (
                                                        <div key={index}>
                                                            {sortedResults.map((result, index) => (
                                                                <div key={index}>
                                                                    <li style={{ flexDirection: "column" }}>
                                                                        <h3>{result.prizeDraw}º Sorteio</h3>
                                                                        <div className="results" >
                                                                            {result.awards.map((award, index) => (
                                                                                <div key={index} className="premios">
                                                                                    <p>{award.isAward}º</p>
                                                                                    <span> {award.num}</span>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    );
                                                })
                                        }
                                    </>
                                }
                            </ul>
                            <button onClick={() =>{ 
                                    setShowForm("result"), 
                                    setJogoId(jogo.id)
                                }}
                            >
                                Adicionar Resultado
                            </button>
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

