import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const BetPoolContext = createContext();

export const BetPoolProvider = ({ children }) => {

    const getJogoPrice = localStorage.getItem("JogoPrice")
    const getJogoId = localStorage.getItem("jogoId");
    const getBalls = localStorage.getItem("balls");

    const [balls, setBalls] = useState([...getBalls || []]); // Corrigido: setBalls
    const [jogoPrice, setJogoPrice] = useState(getJogoPrice);
    const [jogos, setJogos] = useState([]);
    const [jogoId, setJogoId] = useState( getJogoId );
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
                
                if (jogosList.length > 0) {
                    setJogos(jogosList);
                    setJogoId( getJogoId || jogosList[0].id);
                    setJogoPrice( getJogoPrice || jogosList[0].price);
                    console.log(jogosList);
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
            setJogoPrice
        }}>

        {children}
        </BetPoolContext.Provider>
    );
};

export const useBetPool = () => {
    return useContext(BetPoolContext);
};
