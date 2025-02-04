import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";

export const useApostas = (userId, jogoId) => {
    const [apostas, setApostas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getApostasById = async () => {
            if (!userId || !jogoId) return; // Evita erros caso os valores sejam undefined

            setLoading(true);
            try {
                const apostasCollection = collection(db, "apostas");
                const apostasQuery = query(
                    apostasCollection,
                    where("user_id", "==", userId),
                    where("jogo_id", "==", jogoId)
                );

                const apostasSnapshot = await getDocs(apostasQuery);

                const apostasList = apostasSnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));

                setApostas(apostasList);
            } catch (error) {
                console.error("Erro ao buscar apostas:", error);
            } finally {
                setLoading(false);
            }
        };

        getApostasById(); // Chama a função assim que os valores estiverem disponíveis
    }, [userId, jogoId]);

    return { apostas, loading };
};
