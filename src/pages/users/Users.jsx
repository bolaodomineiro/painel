import { useState } from "react"
import { Container_users } from "./UserStyles"
// components
import UtilityBar from "../../components/utilityBar/UtilityBar"
import Table from "../../components/table/Table"

const data = ["Usuários","Revendedores","Apostadores"]

const Users = ({ $menuToggle}) => {

    const [useSelect, setUseSelect] = useState("Usuários")

    return (
        <Container_users>
            <UtilityBar data={data}  $menuToggle={$menuToggle} useSelect={useSelect} setUseSelect={setUseSelect} />
            <Table useSelect={useSelect} setUseSelect={setUseSelect} />
        </Container_users>
    )
}

export default Users