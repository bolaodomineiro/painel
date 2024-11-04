import { Container_utility } from "./UtilityBarStyles"
// components
import Select from "../select/Select"
import Search from "../search/Search"
import Btn from "../btn/Btn"

const UtilityBar = () => {
    return (
        <Container_utility>
            <Select />
            <Search />
            <Btn text="Cadastrar" />
        </Container_utility>
    )
}

export default UtilityBar