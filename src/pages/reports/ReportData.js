import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const getBets = async (jogoId) => {   
    console.log(jogoId);

    if (!jogoId) {
        console.warn("getApostas: userId ou jogoId inválidos", { jogoId });
        return [];
    }

    try {
        const apostasCollection = collection(db, "apostas");
        const apostasQuery = query(
            apostasCollection,
            where("jogo_id", "==", jogoId),
            where("paymentStatus", "==", "Pago")
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

export  const getUsers = async () => {
    const userCollection = collection(db, "users");
    const userSnapshot = await getDocs(userCollection);
    const userList = userSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        balance: doc.data().balance || 0,
    }));
    console.log("Users encontrados: em fetchAllUsers", userList);
    return userList
};