import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const fetchAllRules = async (jogoId, setRules, setLoad  ) => {
    setLoad(true);
    try {
        
        const q = query(collection(db, "regras"), where("jogo_id", "==", jogoId || localStorage.getItem("jogoId")));
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
        console.log(fetchedRules);
    } catch (err) {
        console.error("Erro ao buscar regras do jogo:", err);
    } finally {
        setLoad(false);
    }
};
