import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export const  enviarGanhadores = async (ganhadores) => {

    if (!Array.isArray(ganhadores) || ganhadores.length === 0) {
        console.error("Lista de ganhadores vazia ou inválida.");
        return;
    }

    const ganhadoresRef = collection(db, "ganhadores");

    try {
        const promessas = ganhadores.map(async (ganhador) => {
            await addDoc(ganhadoresRef, ganhador);
        });

        await Promise.all(promessas);
        console.log("Todos os ganhadores foram cadastrados com sucesso!");
    } catch (error) {
        console.error("Erro ao cadastrar ganhadores:", error);
    }
}


