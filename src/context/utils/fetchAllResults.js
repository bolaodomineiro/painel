import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const fetchAllResults = async (jogoId, setResultados, setLoad) => {
        setLoad(true);
        try {
            const q = query(collection(db, "resultados"), where("jogo_id", "==", jogoId || localStorage.getItem("jogoId")));
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

        } catch (err) {
            console.error("Erro ao buscar resultados:", err);
        } finally {
            setLoad(false);
        }
    };
    


