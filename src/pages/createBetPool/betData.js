import { db } from "../../firebase/firebase"; // Certifique-se de importar a configuração do Firebase
import { collection, addDoc, Timestamp, doc, updateDoc, arrayUnion} from "firebase/firestore";

export const saveJogo = async (gameData) => {
    try {
        const gamesCollection = collection(db, "jogos");
        
        const formattedData = {
            ...gameData,
            drawDate: gameData.drawDate ? Timestamp.fromDate(new Date(gameData.drawDate)) : new Date(),
            created: Timestamp.fromDate(new Date()),
            award: Number(gameData.award),
            price: Number(gameData.price),
            ticket: Number(gameData.ticket),
            prizeQuantity: Number(gameData.prizeQuantity),
            isAcumuled: Boolean(gameData.isAcumuled),
        };
        
        const docRef = await addDoc(gamesCollection, formattedData);
        console.log("Jogo salvo com ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Erro ao salvar jogo:", error);
        throw error;
    }
};


export const saveRules = async (rules) => {
    console.log(rules);
    try {
        const regrasRef = collection(db, "regras");
        await addDoc(regrasRef,  rules ); // Cria um novo documento automaticamente
        console.log("Regras salvas com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar regras:", error);
        throw error;
    }
};


export const updateRules = async (id, newRules) => {
    try {
        const regrasRef = doc(db, "regras", id); // Referência ao documento

        // Verifique se a estrutura de newRules está correta
        console.log("Novas regras antes de adicionar:", newRules);

        // Adiciona as novas regras sem sobrescrever as antigas
        await updateDoc(regrasRef, {
            "rules": arrayUnion(...newRules)
        });

        console.log("Novas regras adicionadas com sucesso!");
    } catch (error) {
        console.error("Erro ao adicionar novas regras:", error);
        throw error;
    }
};

export const saveResults = async (resultados) => {
    try {
        const resultadosRef = collection(db, "resultados");
        await addDoc(resultadosRef, resultados );
        console.log("Resultados adicionados com sucesso!");

    } catch (error) {
        console.error("Erro ao salvar os resultados:", error);
    }
}
