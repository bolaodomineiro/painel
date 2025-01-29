import { useState, useEffect } from "react";
import { Container_table } from "./TableStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Perfil from "../../assets/perfil.jpg";

const Table = ({ useSelect }) => {

    const [userFilter, setuserFilter] = useState("");

    const [userData, setUserData] = useState([]);

    // Busca usuários apenas uma vez ao montar o componente
    const getUsers = async () => {
        const userCollection = collection(db, "users");
        const userSnapshot = await getDocs(userCollection);
        const userList = userSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        setUserData(userList);
    };

    useEffect(() => {

        getUsers();
    }, []);

    // Atualiza o filtro com base no select
    useEffect(() => {
        if (useSelect === "Apostadores") {
            setuserFilter("apostador");
        } else if (useSelect === "Revendedores") {
            setuserFilter("revendedor");
        } else {
            setuserFilter(""); // Exibe todos os usuários
        }
    }, [useSelect]);

    return (
        <Container_table>
            <div className="header_table">
                <ul>
                    <li>Foto</li>
                    <li>Nome</li>
                    <li>Telefone</li>
                    <li>Cidade</li>
                    <li>Saldo</li>
                    <li>+ Detalhes</li>
                    <li>Editar</li>
                    <li>Excluir</li>
                </ul>
            </div>
            <div className="body_table">
                {userData
                    .filter(user => user.userRole === userFilter || userFilter === "")
                    .map(user => (
                        <ul key={user.id}>
                            <li>
                                <img className="image_user" src={user.image || Perfil} alt={user.name} />
                            </li>
                            <li>{user.name.split(" ").slice(0, 2).join(" ")}</li>
                            <li>{user.phone}</li>
                            <li>{user.city}</li>
                            <li>
                                {user.balance ? `R$ ${user.balance.toFixed(2).replace(".", ",")}` : "R$ 0,00"}
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faCircleInfo} />
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faPenToSquare} />
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faTrash} />
                            </li>
                        </ul>
                    ))}
            </div>
        </Container_table>
    );
};

export default Table;
