import { createContext, useContext, useState, useEffect } from "react";
import { useBetPool } from "./BetPoolContext";
//utils
import { extractLottoBalls } from "./utils/extractLottoBalls";
import { fetchAllResults } from "./utils/fetchAllResults";
import { fetchAllRules } from "./utils/fetchAllRules";

const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
    const { jogoId } = useBetPool();

    const [sorteios, setSorteios] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [rules, setRules] = useState([]);
    const [load, setLoad] = useState(false);

     // Buscar resultados quando o contexto for carregado
    useEffect(() => {
        fetchAllResults(jogoId, setResultados, setLoad);
        fetchAllRules( jogoId, setRules, setLoad);
    }, []);
    
    useEffect(() => {
        if (resultados?.length > 0) {
            extractLottoBalls(resultados, jogoId, setSorteios);
        }
    }, [resultados, jogoId]); // Roda somente quando `resultados` ou `jogoId` mudar

    // Para ver o estado atualizado corretamente:
    useEffect(() => {
        console.log(sorteios);
    }, [sorteios]);

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
