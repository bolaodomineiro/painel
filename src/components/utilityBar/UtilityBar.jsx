import { Container_utility } from "./UtilityBarStyles"
import Select from "../select/Select"
import Search from "../search/Search"
import Btn from "../btn/Btn"

const UtilityBar = ({ $menuToggle, data, setUseSelect, useSelect, setShowForm, valueSearch, setValueSearch }) => {
    return (
        <Container_utility $menuToggle={$menuToggle}>
            <Select data={data} setUseSelect={setUseSelect} useSelect={useSelect} />
            <Search valueSearch={valueSearch} setValueSearch={setValueSearch} />
            <Btn 
                text="Cadastrar"  
                onClick={() => setShowForm( "create" )} 
            />
        </Container_utility>
    )
}

export default UtilityBar