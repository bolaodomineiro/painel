import { Container_utility } from "./UtilityBarStyles"
// components
import Select from "../select/Select"
import Search from "../search/Search"
import Btn from "../btn/Btn"

const UtilityBar = ({ $menuToggle }) => {
    return (
        <Container_utility  $menuToggle={$menuToggle}>
            <Select />
            <Search />
            <Btn text="Cadastrar" />
        </Container_utility>
    )
}

export default UtilityBar