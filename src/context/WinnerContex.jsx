
import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
//context
import { useBetPool } from "./BetPoolContext";

const WinnersContext = createContext();// Criando o contexto

export const WinnersProvider = ({ children }) => {
    
    const {jogoId} = useBetPool(); // Usando o jogoId do BetPoolContext
    console.log(jogoId)
    const [winners, setWinners] = useState([]);
    const [loading, setLoading] = useState(false);

    // Função para buscar os ganhadores
    const fetchWinnersByGame = async (jogoId) => {
        setLoading(true);

        try {
            const ganhadoresRef = collection(db, "ganhadores");
            const q = query(ganhadoresRef, where("aposta.jogo_id", "==", jogoId));
            const querySnapshot = await getDocs(q);
            
            const ganhadores = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setWinners(ganhadores);
            console.log("Ganhadores encontrados:", ganhadores);
        } catch (error) {
            console.error("Erro ao buscar ganhadores:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWinnersByGame(jogoId);
    }, [jogoId]);

    return (
        <WinnersContext.Provider value={{ winners, loading }}>
            {children}
        </WinnersContext.Provider>
    );
};

// Hook personalizado para acessar o contexto
export const useWinners = () => {
    return useContext(WinnersContext);
};

