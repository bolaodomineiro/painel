import { useState } from "react"
import { Container_users } from "./UserStyles"
import UtilityBar from "../../components/utilityBar/UtilityBar"
import Table from "../../components/table/Table"

const data = ["Usuários", "Administradores", "Apostadores"]

const Users = ({ $menuToggle }) => {

    const [useSelect, setUseSelect] = useState("Usuários")
    const [valueSearch, setValueSearch] = useState("")

    return (
        <Container_users>
            <UtilityBar 
                data={data} 
                $menuToggle={$menuToggle} 
                useSelect={useSelect} 
                setUseSelect={setUseSelect} 
                valueSearch={valueSearch}
                setValueSearch={setValueSearch}
            />
            <Table 
                useSelect={useSelect} 
                setUseSelect={setUseSelect} 
                valueSearch={valueSearch}
                setValueSearch={setValueSearch}
            />
        </Container_users>
    )
}

export default Users