import { Container_utility } from "./UtilityBarStyles"
// components
import Select from "../select/Select"
import Search from "../search/Search"
import Btn from "../btn/Btn"

const UtilityBar = ({ $menuToggle, data }) => {
    return (
        <Container_utility  $menuToggle={$menuToggle}>
            <Select data={data} />
            <Search />
            <Btn text="Cadastrar" />
        </Container_utility>
    )
}

export default UtilityBar