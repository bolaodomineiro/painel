import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const fetchAllResults = async (jogoId, setResultados) => {

        try {
            const q = query(collection(db, "resultados"), where("jogo_id", "==",jogoId));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                console.warn("Nenhum resultado encontrado para:", jogoId);
                setResultados(null);
                return;
            }
            
            const fetchedResults = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setResultados(fetchedResults);
            console.log("Resultados encontrados: em fetchAllResults", fetchedResults);

        } catch (err) {
            console.error("Erro ao buscar resultados:", err);
        }
    };
    


