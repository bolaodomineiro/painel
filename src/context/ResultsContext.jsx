import { createContext, useContext, useState, useEffect } from "react";
import { useBetPool } from "./BetPoolContext";
//utils
import { extractLottoBalls } from "./utils/extractLottoBalls";
import { fetchAllResults } from "./utils/fetchAllResults";
import { fetchAllRules, updateWinnerByPts } from "./utils/fetchAllRules";
import { fetchAllApostas } from "./utils/fetchAllApostas";

const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
    const { jogoId } = useBetPool();

    const [updatesApostasGanhadoras, setupdatesApostasGanhadoras] = useState([]);
    const [ganhadores, setGanhadores] = useState([]);
    const [sorteios, setSorteios] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [rules, setRules] = useState([]);
    const [apostas, setApostas] = useState([]);
    const [load, setLoad] = useState(false);

    // Buscar resultados quando o contexto for carregado
    useEffect(() => {
        fetchAllResults(jogoId, setResultados, setLoad);
    }, []);

    useEffect(() => {
        setSorteios([]);
        const getGrupos = async () => {
            if (resultados?.length > 0) {
                await extractLottoBalls(resultados, jogoId, setSorteios);
                await fetchAllRules(jogoId, setRules, setLoad);
                await fetchAllApostas(jogoId, setApostas, setLoad);
            }
        };
        getGrupos();
    }, [resultados]);


    const verificarAcertosApostas = async (apostas, sorteios) => {
        for (const aposta of apostas) {

            let acertos = 0;
            let numerosAcertados = [];
            // Juntar todas as bolas de todos os sorteios em um único array
            const numerosSorteados = sorteios
                .map(item => item.balls) // Extrai o array de bolas de cada sorteio
                .flat(); // Junta todos os arrays de bolas em um único array
                
            aposta.numbers.forEach(num => {
                if (numerosSorteados.includes(num)) {
                    acertos++;
                    numerosAcertados.push(num);
                }
            });
            
            const newGanhador = {
                acertos,
                numerosAcertados,
                aposta
            };
            
            setGanhadores(prev => {
                const existe = prev.some(g => g.aposta.id === newGanhador.aposta.id);
                return existe ? prev : [...prev, newGanhador];
            });
        }
        
    };

    useEffect(() => {
        if (apostas.length > 0 && sorteios.length > 0) {
            verificarAcertosApostas(apostas, sorteios);
        }

    }, [apostas, sorteios]);


    const verificaApostaPremiada = async () => {
        
        for (const ganhador of ganhadores) {
            for (const regra of rules) {
                for (const condicao of regra.rules) {

                    if (ganhador.acertos >=  condicao.pts && (sorteios.length  === condicao.prizeDraw || condicao.prizeDraw == null) && !condicao.winner) {
                        if (updatesApostasGanhadoras.length > 0) console.log(" Ganhadores", updatesApostasGanhadoras)
                            setupdatesApostasGanhadoras(prevState => [...prevState, ganhador]);
                        // Atualizar o campo 'winner' da regra
                        await updateWinnerByPts(regra.id, condicao.pts);
                        break
                    } 
                }
            }
        }
    };

    useEffect(() => {
        if (apostas.length > 0 && sorteios.length > 0 && rules.length > 0) {
            console.log(ganhadores);
            console.log("Sorteios", sorteios);
            console.log("Regras", rules);
            verificaApostaPremiada();
        }

    }, [ganhadores, sorteios, rules]);

    useEffect(() => {
        if (updatesApostasGanhadoras.length > 0) {
            console.log("Ganhadores", updatesApostasGanhadoras);
        }
    }, [updatesApostasGanhadoras]);

    return (
        <ResultsContext.Provider value={{ fetchAllResults, load, setLoad, sorteios }}>
            {children}
        </ResultsContext.Provider>
    );
};

// Hook personalizado para acessar o contexto
export const useResults = () => {
    return useContext(ResultsContext);
};
