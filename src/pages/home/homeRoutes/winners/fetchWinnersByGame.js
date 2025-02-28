import {db} from "../../../../firebase/firebase"; // Certifique-se de importar a instância correta do Firebase
import { collection, query, where, getDocs } from "firebase/firestore";

export const fetchWinnersByGame = async (jogoId) => {

    try {
        const ganhadoresRef = collection(db, "ganhadores"); // Referência à coleção
        const q = query(ganhadoresRef, where("aposta.jogo_id", "==", jogoId)); // Filtra pelo jogoId

        const querySnapshot = await getDocs(q);
        const ganhadores = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log("Ganhadores encontrados:", ganhadores);

        return ganhadores;
    } catch (error) {
        console.error("Erro ao buscar ganhadores:", error);
        return [];
    }
};


