import { useState, useEffect } from "react";
import { Container_table } from "./TableStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Perfil from "../../assets/perfil.jpg";
import InputMask from "react-input-mask";

const Table = ({ useSelect }) => {

  const [userFilter, setuserFilter] = useState("");
  const [userData, setUserData] = useState([]);

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

  useEffect(() => {
    if (useSelect === "Apostadores") {
      setuserFilter("apostador");
    } else if (useSelect === "Revendedores") {
      setuserFilter("revendedor");
    } else {
      setuserFilter("");
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


              <li>
                <InputMask
                  mask="(99) 9 9999-9999"
                  value={user.phone}
                  disabled
                  style={{ border: "none", background: "transparent" }}
                />
              </li>



              {/* <li>{user.phone}</li> */}


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
