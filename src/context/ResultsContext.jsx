import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [load, setLoad] = useState(false);

    // Função para buscar todos os resultados da coleção "resultados"
    const fetchAllResults = async () => {
        setLoad(true);
        try {
            const resultadosRef = collection(db, "resultados");
            const querySnapshot = await getDocs(resultadosRef);
            
            const fetchedResults = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setResults(fetchedResults);
        } catch (err) {
            console.error("Erro ao buscar resultados:", err);
        } finally {
            setLoad(false);
        }
    };

    // Buscar os resultados automaticamente quando o contexto for carregado
    useEffect(() => {
        fetchAllResults();
    }, [load]);

    return (
        <ResultsContext.Provider value={{ results, fetchAllResults, load, setLoad }}>
            {children}
        </ResultsContext.Provider>
    );
};

// Hook personalizado para acessar o contexto
export const useResults = () => {
    return useContext(ResultsContext);
};
