import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Certifique-se de importar sua configuração do Firebase
import { useBetPool } from "./BetPoolContext";
// Criando o Contexto
const RulesContext = createContext();

// Criando o Provider
export const RulesProvider = ({ children }) => {
    const { loading } = useBetPool();
    const [rules, setRules] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const fetchRules = async () => {
            setLoad(true);
            try {
                const regrasRef = collection(db, "regras"); // Referência à coleção "regras"
                const querySnapshot = await getDocs(regrasRef);
                
                const regrasList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setRules(regrasList);
                console.log("Regras encontradas: em RulesContext", regrasList);
            } catch (error) {
                console.error("Erro ao buscar regras:", error);
            } finally {
                setLoad(false);
            }
        };

        fetchRules();
    }, [loading]);

    return (
        <RulesContext.Provider value={{ rules, load, setLoad }}>
            {children}
        </RulesContext.Provider>
    );
};

// Criando um Hook personalizado para facilitar o uso do contexto
export const useRules = () => {
    return useContext(RulesContext);
};
