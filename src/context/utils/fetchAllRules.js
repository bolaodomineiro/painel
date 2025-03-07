import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where, doc, updateDoc, getDoc } from "firebase/firestore";

// Função para buscar todas as regras de um jogo
export const fetchAllRules = async (jogoId, setRules) => {

    try {
        
        const q = query(collection(db, "regras"), where("jogo_id", "==", jogoId));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.warn("Nenhum regra encontrado para:", jogoId);
            setResultados(null);
            return;
        }
        
        const fetchedRules = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        setRules(fetchedRules);
        console.log("Regras encontradas: em fetchAllRules", fetchedRules);
        
    } catch (err) {
        console.error("Erro ao buscar regras do jogo:", err);
    }
};

// Função para atualizar o campo 'winner' de uma regra
export const updateWinnerByPts = async (regraId, regraPts) => {
    
    try {
        const regraRef = doc(db, "regras", regraId);
        const regraSnap = await getDoc(regraRef);

        if (!regraSnap.exists()) {
            console.log("Regra não encontrada!");
            return;
        }

        const regraData = regraSnap.data();
        const novasRules = regraData.rules.map(rule => 
            rule.pts === regraPts ? { ...rule, winner: true } : rule
        );

        await updateDoc(regraRef, { rules: novasRules });

        console.log(`Campo 'winner' atualizado com sucesso para as regras com ${regraPts}  pontos!`);
    } catch (error) {
        console.error("Erro ao atualizar a regra:", error);
    }
};
