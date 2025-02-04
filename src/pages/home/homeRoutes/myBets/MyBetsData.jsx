import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";

export const useApostas = (id) => {
    const [apostas, setApostas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getApostasById = async () => {
            try {
                const apostasCollection = collection(db, "apostas");
                const apostasQuery = query(apostasCollection, where("user_id", "==", id));
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

        if (id) {
            getApostasById();
        }
    }, [id]);

    return { apostas, loading };
};
