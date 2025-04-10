
import React, { useState, useEffect, useRef } from "react";
import { Container_table } from "./TableStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase/firebase";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import Perfil from "../../assets/perfil.jpg";
import EditUserModal from "./EditUserModal";

function formatBalance(balance) {
  const value = Number(balance || 0);
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

const Table = ({ useSelect, valueSearch }) => {

  const inputRef = useRef(null);

  const [userFilter, setUserFilter] = useState("");
  const [userData, setUserData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const getUsers = async () => {
    const userCollection = collection(db, "users");
    const userSnapshot = await getDocs(userCollection);
    const userList = userSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      balance: doc.data().balance || 0,
    }));
    setUserData(userList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (useSelect === "Apostadores") {
      setUserFilter(false);
    } else if (useSelect === "Administradores") {
      setUserFilter(true);
    } else {
      setUserFilter("");
    }
  }, [useSelect]);

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleSave = async (userId, updatedData) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, updatedData);
      getUsers();
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este usuário?");
    if (confirmDelete) {
      try {
        const userRef = doc(db, "users", userId);
        await deleteDoc(userRef);
        getUsers();
        console.log("Usuário excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
      }
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
            .filter((user) => {
              const matchesAdmin = userFilter === "" || user.isAdmin === userFilter;
              const matchesSearch = valueSearch === "" || user.name.toLowerCase().includes(valueSearch.toLowerCase());

              return matchesAdmin && matchesSearch; // Ambos os filtros devem ser atendidos
            })
            .map((user) => (
              <ul key={user.id}>
                <li>
                  <img
                    className="image_user"
                    src={user.image || Perfil}
                    alt={user.name}
                  />
                </li>
                <li>{user.name?.split(" ").slice(0, 2).join(" ")}</li>
                <li> {user.phone} </li>
                <li>{user.city} - {user.state}</li>
                <li>{formatBalance(user.balance)}</li>
                <li>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faPenToSquare}
                    onClick={() => handleEditClick(user)}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faTrash}
                    onClick={() => handleDelete(user.id)}
                  />
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

