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
        console.log("Buscando resultados...");
    }, [jogoId]);

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

    // Verificar acertos das apostas
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
        let regrasParaAtualizar = []; // Array para armazenar { id, pts }
        
        for (const ganhador of ganhadores) {
            for (const regra of rules) {
                for (const condicao of regra.rules) {
                    if (ganhador.acertos >=  condicao.pts && (sorteios.length - 1  === condicao.prizeDraw || condicao.prizeDraw == null) && !condicao.winner) {
                        if (updatesApostasGanhadoras.length > 0) console.log(" Ganhadores", updatesApostasGanhadoras)  
                        setupdatesApostasGanhadoras(prevState => [...prevState,{...ganhador, rule: condicao.pts}]); 
                          // Salva a regra apenas se ainda não estiver na lista
                        if (!regrasParaAtualizar.some(item => item.id === regra.id && item.pts === condicao.pts)) {
                            regrasParaAtualizar.push({ id: regra.id, pts: condicao.pts });
                        }
                        break;
                    } 
                }
            }
        }
        
         // Atualizar todas as regras no final
        for (const { id, pts } of regrasParaAtualizar) {
            await updateWinnerByPts(id, pts);
        }
    };

    // chama a funcao verificaApostaPremiada quando todos os dados estiverem carregados
    useEffect(() => {
        if (apostas.length > 0 && sorteios.length > 0 && rules.length > 0) {
            console.log(sorteios);
            console.log(ganhadores);
            for (const gregras of rules) {
                for (const regra of gregras.rules) {
                    if (regra.pts === 10 && !regra.winner) {
                        console.log("bolão Aberto");
                        verificaApostaPremiada();
                        break
                    }
                    console.log("bolão Fechado");
                }
            }
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
