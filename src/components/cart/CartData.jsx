import { db } from "../../firebase/firebase"; // Certifique-se de importar a configuração do Firebase
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const enviarApostas = async (apostas) => {
    try {
        const apostasRef = collection(db, "apostas");

        for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i];

        await addDoc(apostasRef, {
            created: serverTimestamp(), // Timestamp automático do Firebase
            expirationDate: aposta.expirationDate, 
            jogo_id: aposta.jogo_id,
            numbers: aposta.numbers,
            paymentStatus: aposta.paymentStatus,
            price: aposta.price,
            ticket: aposta.ticket, 
            title: aposta.title,
            user_id: aposta.user_id,
            drawDate: aposta.drawDate
        });

        console.log(`Aposta ${i + 1} enviada com sucesso!`);
        }
    } catch (error) {
        console.error("Erro ao enviar apostas:", error);
    }
};





