import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const fetchAllApostas = async (jogoId, setApostas) => {

        try {
            const q = query(collection(db, "apostas"), 
                where("jogo_id", "==", jogoId),
                where("paymentStatus", "==", "Pago")
            )
            
            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                console.warn("Nenhum aposta encontrada para:", jogoId);
                setApostas(null);
                return;
            }
            
            const fetchedApostas = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            setApostas(fetchedApostas);
            console.log("Apostas encontradas: em fetchAllApostas", fetchedApostas);
            
        } catch (err) {
            console.error("Erro ao buscar apostas:", err);
        } 
    };
    


