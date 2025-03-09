import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
// context
import { useAuthContext } from "./AuthContext";

const BetPoolContext = createContext();

export const BetPoolProvider = ({ children }) => {
    const { authenticated } = useAuthContext();

    const [balls, setBalls] = useState([]);
    const [apostas, setApostas] = useState([]);
    const [jogos, setJogos] = useState([]);
    const [jogoId, setJogoId] = useState(localStorage.getItem("jogoId"));
    const [loading, setLoading] = useState(true); 

    useEffect(() => {// mantem  a pesistencia das apostas no carrinho
        const getApostas = JSON.parse(localStorage.getItem("apostas"));
        if (getApostas) {
            setApostas(getApostas || []);
        }
    }, []);

    
    const getJogos = async () => {
        try {
            // Filtra os jogos com status "Aberto" ou "Pausado"
            const jogosCollection = collection(db, "jogos");
            const jogosQuery = query(
                jogosCollection,
                where("status", "in", ["Aberto", "Pausado"]) // Filtro para trazer apenas status "Aberto" ou "Pausado"
            );

            const jogosSnapshot = await getDocs(jogosQuery);
            const jogosList = jogosSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            if(jogosList.length === 1) {
                setJogoId(jogosList[0].id);
                localStorage.setItem("jogoId", jogosList[0].id);
            }

            if (jogosList.length > 0) {
                setJogos(jogosList);
                setJogoId(localStorage.getItem("jogoId") || jogosList[0].id);
            }

        } catch (error) {
            console.error("Erro ao buscar jogos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {// precisarar muda para trazer somente os boloes que estao em andamento ou pausados
        getJogos();
        console.log("rodou", jogoId);
    }, [authenticated, jogoId, loading]);
    

    return (
        <BetPoolContext.Provider value=
        {{
            loading,
            setLoading,
            jogos,
            setJogos,
            jogoId,
            setJogoId,
            balls,
            setBalls,
            apostas,
            setApostas,
            getJogos
        }}>

        {children}
        </BetPoolContext.Provider>
    );
};

export const useBetPool = () => {
    return useContext(BetPoolContext);
};
