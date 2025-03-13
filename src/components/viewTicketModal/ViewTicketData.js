import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const getMyBets = async (userId, jogoId) => {
    console.log(userId, jogoId);
        
    if (!jogoId, !userId) {
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
            return [];
        }

        const fetchedApostas = apostasSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("Apostas encontradas: em MyBetsContext", fetchedApostas);
        return fetchedApostas;

    } catch (error) {
        console.error("Erro ao buscar apostas:", error);
        return [];
    }
};