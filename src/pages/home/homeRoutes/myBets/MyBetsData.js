import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";

export const getApostas = async (userId, jogoId) => {

    if (!userId || !jogoId) {
        console.warn("getApostas: userId ou jogoId inválidos", { userId, jogoId });
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
            console.info("Nenhuma aposta encontrada para");
            return [];
        }

        return apostasSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

    } catch (error) {
        console.error("Erro ao buscar apostas:", error);
        return [];
    }
};
