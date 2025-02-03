import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const BetPoolContext = createContext();

export const BetPoolProvider = ({ children }) => {


    const [balls, setBalls] = useState([]); // Corrigido: setBalls
    const [apostas, setApostas] = useState([]);
    const [jogoPrice, setJogoPrice] = useState();
    const [jogos, setJogos] = useState([]);
    const [jogoId, setJogoId] = useState("");
    const [loading, setLoading] = useState(true); 



    useEffect(() => {
        const getJogoPrice = localStorage.getItem("JogoPrice");
        const getJogoId = localStorage.getItem("jogoId");
        const getBalls = JSON.parse(localStorage.getItem("balls"));
        const getApostas = JSON.parse(localStorage.getItem("apostas"));
        const getJogos = JSON.parse(localStorage.getItem("jogos"));
    
        setBalls(getBalls || []);
        setApostas(getApostas || []);
        setJogoPrice(getJogoPrice);
        setJogoId(getJogoId);
        setJogos(getJogos || []);
    }, []); // Esse efeito roda uma vez, após a montagem do componente

    useEffect(() => {

        const getJogos = async () => {
            try {

                const jogosCollection = collection(db, "jogos");
                const jogosSnapshot = await getDocs(jogosCollection);
                const jogosList = jogosSnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                
                if (jogosList.length > 0) {
                    setJogos(jogosList);
                    setJogoId(localStorage.getItem("jogoId") || jogosList[0].id);
                    localStorage.setItem("jogoId", localStorage.getItem("jogoId") || jogosList[0].id);
                }
                
            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            } finally {
                setLoading(false);
            }
        };

        getJogos();
    }, []);
    

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
            setApostas
        }}>

        {children}
        </BetPoolContext.Provider>
    );
};

export const useBetPool = () => {
    return useContext(BetPoolContext);
};
