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
    const [jogoPrice, setJogoPrice] = useState();
    const [jogos, setJogos] = useState([]);
    const [jogoId, setJogoId] = useState("");
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
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
                    authenticated && localStorage.setItem("jogoId", localStorage.getItem("jogoId") || jogosList[0].id);
                }
                
            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            } finally {
                setLoading(false);
            }
        };
        getJogos();

    }, [authenticated, jogoId, loading ]);
    

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
            jogoPrice,
            setJogoPrice,
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
