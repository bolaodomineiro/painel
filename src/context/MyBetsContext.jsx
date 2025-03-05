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
        console.log(userId, jogoId);
        if (!jogoId) {
            // console.warn("getApostas: userId ou jogoId inválidos", { userId, jogoId });
            // localStorage.removeItem("jogoId");
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
        const getUserid = localStorage.getItem("userId");
        if (!jogoId) return console.warn("Nenhum  jogoId encontrado, MyBetsContext");
        if (!userId || !getUserid) return console.log("userid nao encontrado, MyBetsContext");
        getMyBets(getUserid || userId, jogoId)
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

