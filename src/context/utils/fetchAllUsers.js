import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export  const getUsers = async () => {
    const userCollection = collection(db, "users");
    const userSnapshot = await getDocs(userCollection);
    const userList = userSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        balance: doc.data().balance || 0,
    }));
    return userList
};


