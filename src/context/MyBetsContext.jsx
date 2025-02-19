import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
//context
import { useBetPool } from "./BetPoolContext";
import { useAuthContext } from "./AuthContext";

const MyBetsContext = createContext();

export const MyBetsProvider = ({ children }) => {

    const { authenticated, userId, message } = useAuthContext();
    const { jogoId } = useBetPool();
    const [apostas, setApostas] = useState([]);
    const [apostaNotpayment, setApostaNotpayment] = useState([]);

    const getMyBets = async (userId, jogoId) => {
        if (!userId || !jogoId) {
            console.warn("getApostas: userId ou jogoId inválidos", { userId, jogoId });
            localStorage.removeItem("jogoId");
            return [];
        }

        try {
            const apostasCollection = collection(db, "apostas");
            const apostasQuery = query(
                apostasCollection,
                where("user_id", "==", userId),
                where("jogo_id", "==", jogoId)
            );
            const apostasSnapshot = await getDocs(apostasQuery);

            if (apostasSnapshot.empty) {
                console.info("Nenhuma aposta encontrada");
                setApostas([]);
                return [];
            }

            const fetchedApostas = apostasSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setApostas(fetchedApostas);
            return fetchedApostas;

        } catch (error) {
            console.error("Erro ao buscar apostas:", error);
            setApostas([]);
            return [];
        }
    };
    
    useEffect(() => {
        const storedJogoId = localStorage.getItem("jogoId");
        if (!storedJogoId) {
            console.warn("Nenhum userId ou jogoId encontrado no localStorage");
            return;
        }

        const fetchApostas = async () => {
            const getApostas = await getMyBets(userId, storedJogoId );
        };
        fetchApostas();
        
    }, [userId, message, jogoId, authenticated]);

    return (
        <MyBetsContext.Provider value={{ apostas, setApostas, getMyBets, apostaNotpayment, setApostaNotpayment }}>
            {children}
        </MyBetsContext.Provider>
    );
};

export const useMyBets = () => {
    return useContext(MyBetsContext);
};

