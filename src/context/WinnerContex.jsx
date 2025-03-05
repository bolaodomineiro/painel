import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useBetPool } from "./BetPoolContext";

const WinnersContext = createContext();// Criando o contexto

export const WinnersProvider = ({ children }) => {
    const { jogoId } = useBetPool();

    const [winners, setWinners] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWinnersByGame = async (jogoId ) => {

             // Verificar se o jogoId não é vazio ou undefined antes de executar a consulta
            if (!jogoId) {
                console.log("jogoId está vazio ou indefinido, não fazendo consulta.");
                return; // Não faz a consulta se o jogoId não for válido
            }

            setLoading(true);
    
            try {
                const ganhadoresRef = collection(db, "ganhadores");
                const q =  query(ganhadoresRef, where("aposta.jogo_id", "==", jogoId ));
                const querySnapshot = await getDocs(q);
                
                const ganhadores = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
    
                setWinners(ganhadores);
                console.log("Ganhadores encontrados:", ganhadores);
            } catch (error) {
                console.error("Erro ao buscar ganhadores:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWinnersByGame( jogoId );
        console.log("jogoId:", jogoId);
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

