import React, { useState, useEffect } from "react";
import { Container_table } from "./TableStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import Perfil from "../../assets/perfil.jpg";
import InputMask from "react-input-mask";
import EditUserModal from "./EditUserModal";

const Table = ({ useSelect }) => {
  const [userFilter, setUserFilter] = useState("");
  const [userData, setUserData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const getUsers = async () => {
    const userCollection = collection(db, "users");
    const userSnapshot = await getDocs(userCollection);
    const userList = userSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUserData(userList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (useSelect === "Apostadores") {
      setUserFilter("apostador");
    } else if (useSelect === "Revendedores") {
      setUserFilter("revendedor");
    } else {
      setUserFilter("");
    }
  }, [useSelect]);

  const handleEditClick = (user) => {
    setEditingUser(user); // Define o usuário sendo editado
  };

  const handleSave = async (userId, updatedData) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, updatedData); // Atualiza os dados no Firebase
      getUsers(); // Recarrega os dados da tabela
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  return (
    <Container_table>
      <div className="header_table">
        <ul>
          <li>Foto</li>
          <li>Nome</li>
          <li>Telefone</li>
          <li>Cidade</li>
          <li>Saldo</li>
          <li>Editar</li>
          <li>Excluir</li>
        </ul>
      </div>
      <div className="body_table">
        {userData
          .filter((user) => user.userRole === userFilter || userFilter === "")
          .map((user) => (
            <ul key={user.id}>
              <li>
                <img
                  className="image_user"
                  src={user.image || Perfil}
                  alt={user.name}
                />
              </li>
              <li>{user.name.split(" ").slice(0, 2).join(" ")}</li>
              <li>
                <InputMask
                  mask="(99) 9 9999-9999"
                  value={user.phone}
                  disabled
                  style={{ border: "none", background: "transparent" }}
                />
              </li>
              <li>{user.city}</li>
              <li>
                {user.balance
                  ? `R$ ${user.balance.toFixed(2).replace(".", ",")}`
                  : "R$ 0,00"}
              </li>
              <li>
                <FontAwesomeIcon
                  className="icon"
                  icon={faPenToSquare}
                  onClick={() => handleEditClick(user)}
                />
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faTrash} />
              </li>
            </ul>
          ))}
      </div>

      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}
    </Container_table>
  );
};

export default Table;
