import { Container_utility } from "./UtilityBarStyles"
import Select from "../select/Select"
import Search from "../search/Search"
import Btn from "../btn/Btn"

const UtilityBar = ({ $menuToggle, data, setUseSelect, useSelect, setShowForm }) => {
    return (
        <Container_utility $menuToggle={$menuToggle}>
            <Select data={data} setUseSelect={setUseSelect} useSelect={useSelect} />
            <Search />
            <Btn 
                text="Cadastrar"  
                onClick={() => setShowForm( "create" )} 
            />
        </Container_utility>
    )
}

export default UtilityBar