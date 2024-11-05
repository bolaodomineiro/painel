import { Container_users } from "./UserStyles"
// components
import UtilityBar from "../../components/utilityBar/UtilityBar"
import Table from "../../components/table/Table"

const Users = ({ $menuToggle}) => {
    return (
        <Container_users>
            <UtilityBar  $menuToggle={$menuToggle} />
            <Table />
        </Container_users>
    )
}

export default Users