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
        if (resultados?.length > 0) {
            extractLottoBalls(resultados, jogoId, setSorteios);
            fetchAllRules( jogoId, setRules, setLoad);
            fetchAllApostas(jogoId, setApostas, setLoad);
        }
    }, [resultados, jogoId]); // Roda somente quando `resultados` ou `jogoId` mudar.

    const verificarAcertosApostas = async (apostas, sorteios, rules) => {
        for (const aposta of apostas) {
            let acertos = 0;
            let numerosAcertados = [];
    
            // Juntar todas as bolas de todos os sorteios em um único array
            const numerosSorteados = sorteios
                .map(item => item.balls)  // Extrai o array de bolas de cada sorteio
                .flat();  // Junta todos os arrays de bolas em um único array
            console.log(numerosSorteados);
    
            aposta.numbers.forEach(num => {
                if (numerosSorteados.includes(num)) {
                    acertos++;
                    numerosAcertados.push(num);
                }
            });
            
            let regraAtendida = false;
    
            for (const sorteio of sorteios) {
                for (const regra of rules) {
                    for (const regras of regra.rules) {
                        if (acertos === regras.pts && !regras.winner) {
                            await updateWinnerByPts(regra.id, regras.pts);
    
                            console.log(` ✅ Regra de ${acertos} pontos foi atendida com sucesso!`);
                            const ganhadores = []
    
                            const newGanhador = {
                                acertos,
                                numerosAcertados,
                                aposta
                            }
                            ganhadores.push(newGanhador);
                            
                            console.log(ganhadores);
                            break;
                        }
                    }
                    if (regraAtendida) break;
                }
                if (regraAtendida) break;
            }
    
            if (!regraAtendida) {
                const regraMaisProxima = rules
                    .flatMap(regra => regra.rules)
                    .filter(regras => regras.pts < acertos && !regras.winner)
                    .sort((a, b) => b.pts - a.pts);

                console.log(regraMaisProxima); // Imprime as regras com pontos menores que o acertos
                console.log(sorteios.length); // Imprime o total de sorteios
    
                for (const item of rules) {
                    if (regraMaisProxima.length) {
                        for (const regra of regraMaisProxima) {
                            if ((sorteios.length - 1) === regra.prizeDraw && !regra.winner) {
                                await updateWinnerByPts(item.id, regra.pts);
                                console.log(`🔍 Regra mais próxima: ${regra.pts} pontos`);
                                console.log(regra);
                                
                                const ganhadores = [];
                                
                                const newGanhador = {
                                    acertos,
                                    numerosAcertados,
                                    aposta
                                };
                                
                                ganhadores.push(newGanhador);
                                console.log(ganhadores);
                                console.log(item.id);
                            }
                        }
                    } else {
                        console.log("⚠️ Nenhuma regra aplicável encontrada.");
                    }
                }
            }
        }
    };
    

    useEffect(() => {
        verificarAcertosApostas(apostas, sorteios, rules);
    }, [apostas]);

    // Para ver o estado atualizado corretamente:
    useEffect(() => {
        console.log(sorteios);
    }, [sorteios]);

    return (
        <ResultsContext.Provider value={{ fetchAllResults, load, setLoad, sorteios }}>
            {children}
        </ResultsContext.Provider >
    );
};

// Hook personalizado para acessar o contexto
export const useResults = () => {
    return useContext(ResultsContext);
};
