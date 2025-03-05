import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
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

    useEffect(() => {// precisarar muda para trazer somente os boloes que estao em andamento ou pausados
        const getJogos = async () => {
            try {
                const jogosCollection = collection(db, "jogos");
                const jogosSnapshot = await getDocs(jogosCollection);
                const jogosList = jogosSnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                
                if (jogosList.length > 0 ) {
                    setJogos(jogosList);
                    setJogoId(localStorage.getItem("jogoId") || jogosList[0].id);
                }
                
            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            } finally {
                setLoading(false);
            }
        };
        getJogos();

    }, [authenticated]);
    

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
        }}>

        {children}
        </BetPoolContext.Provider>
    );
};

export const useBetPool = () => {
    return useContext(BetPoolContext);
};
