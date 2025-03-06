import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useBetPool } from "./BetPoolContext";
import {useResults} from "./ResultsContext"

const WinnersContext = createContext();// Criando o contexto

export const WinnersProvider = ({ children }) => {
    const {load} = useResults();
    const { jogoId } = useBetPool();

    const [winners, setWinners] = useState([]);

    useEffect(() => {
        const fetchWinnersByGame = async (jogoId ) => {
             // Verificar se o jogoId não é vazio ou undefined antes de executar a consulta
            if (!jogoId) {
                console.log("jogoId está vazio ou indefinido, não fazendo consulta.");
                return; // Não faz a consulta se o jogoId não for válido
            }
    
            try {
                const ganhadoresRef = collection(db, "ganhadores");
                const q =  query(ganhadoresRef, where("aposta.jogo_id", "==", jogoId ));
                const querySnapshot = await getDocs(q);
                
                const ganhadores = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
    
                setWinners(ganhadores);
                console.log("Ganhadores encontrados: em WinnersContext", ganhadores );
            } catch (error) {
                console.error("Erro ao buscar ganhadores:", error);
            } 
        };

        fetchWinnersByGame( jogoId );
    }, [jogoId, load]);

    return (
        <WinnersContext.Provider value={{ winners}}>
            {children}
        </WinnersContext.Provider>
    );
};

// Hook personalizado para acessar o contexto
export const useWinners = () => {
    return useContext(WinnersContext);
};

