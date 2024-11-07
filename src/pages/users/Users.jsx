import { Container_users } from "./UserStyles"
// components
import UtilityBar from "../../components/utilityBar/UtilityBar"
import Table from "../../components/table/Table"

const data = ["Usuários","Revendedores","Apostadores"]

const Users = ({ $menuToggle}) => {
    return (
        <Container_users>
            <UtilityBar data={data}  $menuToggle={$menuToggle} />
            <Table />
        </Container_users>
    )
}

export default Users