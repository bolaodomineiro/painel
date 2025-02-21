import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useBetPool } from "./BetPoolContext";

const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
    const { jogoId } = useBetPool();
    const [sorteios, setSorteios] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [load, setLoad] = useState(false);

    // Buscar todos os resultados da coleção "resultados"
    const fetchAllResults = async () => {
        setLoad(true);
        try {
            const resultadosRef = collection(db, "resultados");
            const querySnapshot = await getDocs(resultadosRef);
            
            const fetchedResults = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setResultados(fetchedResults);
        } catch (err) {
            console.error("Erro ao buscar resultados:", err);
        } finally {
            setLoad(false);
        }
    };

    // Extrair dígitos do resultado da loteria
    const extractLottoBalls = (resultados, jogoId) => {
        const getResults = resultados.find(result => result.jogo_id === jogoId);
    
        if (!getResults || !getResults.results) {
            console.error("Nenhum resultado encontrado para o jogoId:", jogoId);
            return;
        }
    
        // console.log("Resultados encontrados:", getResults);
    
        // Processa cada sorteio dentro de `results`
        const novosSorteios = getResults.results.map(result => {
            const extractedNumbers = result.awards.map(award => {
                const digits = String(award.num).split('');
                const dezenaLeft = digits.slice(0, 2).join('');
                const dezenaRight = digits.slice(-2).join('');
                return [dezenaLeft, dezenaRight];
            });
            return {
                balls: extractedNumbers.flat(), // Une todas as dezenas
                prizeDraw: result.prizeDraw
            };
        });
        // Adiciona ao estado sem sobrescrever o anterior
        setSorteios(prevState => [...prevState, ...novosSorteios]);
    };
    
    // Para ver o estado atualizado corretamente:
    useEffect(() => {
        console.log(sorteios);
    }, [sorteios]);
    

    // Buscar resultados quando o contexto for carregado
    useEffect(() => {
        fetchAllResults();
    }, []);

    // Chamar extractLottoDigits apenas quando `resultados` mudar
    useEffect(() => {
        if (resultados.length > 0) {
            extractLottoBalls(resultados, jogoId);
        }
    }, [resultados, jogoId]); // Roda somente quando `resultados` ou `jogoId` mudar

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
